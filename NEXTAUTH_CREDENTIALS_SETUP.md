'''
# NextAuth.js Setup Guide: Google & Microsoft SSO

All the code for NextAuth.js has been deployed. The final step is to create OAuth credentials in Google Cloud and Microsoft Azure, then add them as environment variables in your Vercel project. This guide provides the exact steps.

---

## Vercel Callback URL

You will need this URL for both Google and Microsoft setup. This is the URL that they will redirect back to after a user signs in.

```
https://www.compuwork.ai/api/auth/callback/google
https://www.compuwork.ai/api/auth/callback/microsoft-entra-id
```

---

## Step 1: Create Google OAuth Credentials

1.  **Go to the Google Cloud Console Credentials page:**
    [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)

2.  **Create a new project** if you don't have one already (e.g., "Compuwork AI").

3.  Click **+ CREATE CREDENTIALS** at the top and select **OAuth client ID**.

4.  If prompted, click **CONFIGURE CONSENT SCREEN**.
    *   **User Type:** Select **External**.
    *   **App name:** `Compuwork Admin`
    *   **User support email:** Your email address
    *   **Developer contact information:** Your email address
    *   Click **SAVE AND CONTINUE** through the rest of the steps (Scopes, Test users). You can leave them blank.
    *   Finally, click **Back to Dashboard**.

5.  Go back to **Credentials** in the left sidebar, click **+ CREATE CREDENTIALS** > **OAuth client ID** again.

6.  Configure the client ID:
    *   **Application type:** Select **Web application**.
    *   **Name:** `Compuwork Admin SSO`
    *   Under **Authorized redirect URIs**, click **+ ADD URI** and paste the Google callback URL:
        ```
        https://www.compuwork.ai/api/auth/callback/google
        ```

7.  Click **CREATE**. A modal will appear with your **Client ID** and **Client Secret**. Copy these.

8.  **Add to Vercel:**
    Go to your Vercel project settings > **Environment Variables** and add:

| Name | Value |
|---|---|
| `GOOGLE_CLIENT_ID` | (Your Client ID from Google) |
| `GOOGLE_CLIENT_SECRET` | (Your Client Secret from Google) |

---

## Step 2: Create Microsoft Azure AD Credentials

1.  **Go to the Azure Portal App registrations page:**
    [https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade](https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)

2.  Click **+ New registration**.

3.  Configure the application:
    *   **Name:** `Compuwork Admin SSO`
    *   **Supported account types:** Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)**.
    *   **Redirect URI:**
        *   Select **Web** as the platform.
        *   Paste the Microsoft callback URL:
            ```
            https://www.compuwork.ai/api/auth/callback/microsoft-entra-id
            ```

4.  Click **Register**.

5.  **Copy the Application (client) ID** from the overview page.

6.  **Create a client secret:**
    *   Go to **Certificates & secrets** in the left sidebar.
    *   Click **+ New client secret**.
    *   **Description:** `NextAuth Secret`
    *   **Expires:** Select **24 months** (recommended).
    *   Click **Add**. Copy the **Value** of the secret immediately (it will be hidden later).

7.  **Add to Vercel:**
    Go to your Vercel project settings > **Environment Variables** and add:

| Name | Value |
|---|---|
| `AZURE_AD_CLIENT_ID` | (Your Application (client) ID from Azure) |
| `AZURE_AD_CLIENT_SECRET` | (Your client secret Value from Azure) |

---

## Step 3: Add Admin User & Run SQL

Finally, you need to create the `admin_users` table in your Supabase database and add yourself as the first admin.

1.  **Go to the Supabase SQL Editor:**
    [https://supabase.com/dashboard/project/wyxixoqqlyspidvyldht/sql/new](https://supabase.com/dashboard/project/wyxixoqqlyspidvyldht/sql/new)

2.  **Paste the following SQL code** into the editor and click **RUN**:

```sql
-- Create the admin_users table for NextAuth-based admin panel access
CREATE TABLE IF NOT EXISTS public.admin_users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       TEXT NOT NULL UNIQUE,
  role        TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  invited_by  TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow service role full access (used by NextAuth server-side)
CREATE POLICY "Service role has full access"
  ON public.admin_users
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Insert your primary admin email
INSERT INTO public.admin_users (email, role, invited_by)
VALUES ('orvillem@cpwk.io', 'admin', 'system')
ON CONFLICT (email) DO UPDATE SET role = 'admin';
```

Once these three steps are complete, the new authentication system will be fully operational. You can then log in at `compuwork.ai/admin/login` and manage other users from the CMS.
'''
