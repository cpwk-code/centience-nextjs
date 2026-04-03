'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

export type UserRole = 'admin' | 'editor';

interface AdminUser {
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: AdminUser | null;
  isAdmin: boolean;
  isEditor: boolean;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/session')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.email) {
          setUser({ email: data.email, role: data.role ?? 'editor' });
        }
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, []);

  const signOut = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    setUser(null);
    router.push('/admin/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: user?.role === 'admin',
        isEditor: !!user, // both admin and editor have CMS access
        isLoading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
