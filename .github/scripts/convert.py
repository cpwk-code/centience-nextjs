#!/usr/bin/env python3
"""
centience-nextjs conversion script
====================================
Converts all Lovable/Vite/React Router DOM syntax to Next.js App Router
compatibility after every sync from document-to-web-97.

Run: python3 .github/scripts/convert.py
"""

import os, re, sys

BASE = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CHANGED = []

# ─────────────────────────────────────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────────────────────────────────────

def read(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()

def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    rel = path.replace(BASE + "/", "")
    CHANGED.append(rel)
    print(f"  fixed: {rel}")

def patch(path, content, original):
    """Write only if changed."""
    if content != original:
        write(path, content)

def walk_tsx(directory):
    """Yield all .tsx/.ts file paths under directory."""
    if not os.path.exists(directory):
        return
    for root, dirs, files in os.walk(directory):
        # Skip node_modules
        dirs[:] = [d for d in dirs if d != "node_modules"]
        for fname in files:
            if fname.endswith((".tsx", ".ts")):
                yield os.path.join(root, fname)

# ─────────────────────────────────────────────────────────────────────────────
# Fix 1: react-router-dom → next/link + next/navigation
# ─────────────────────────────────────────────────────────────────────────────

def fix_router_dom(content):
    """Convert all react-router-dom imports and usage to Next.js equivalents."""
    original = content

    # ── Import rewrites ──────────────────────────────────────────────────────

    # { Link } from react-router-dom → next/link default import
    content = re.sub(
        r'import\s*\{\s*Link\s*\}\s*from\s*["\']react-router-dom["\'];?',
        'import Link from "next/link";',
        content,
    )

    # { Link, useLocation } or other combos containing Link
    content = re.sub(
        r'import\s*\{([^}]*)Link([^}]*)\}\s*from\s*["\']react-router-dom["\'];?',
        lambda m: _rewrite_link_import(m.group(1), m.group(2)),
        content,
    )

    # useNavigate alone
    content = re.sub(
        r'import\s*\{\s*useNavigate\s*\}\s*from\s*["\']react-router-dom["\'];?',
        'import { useRouter } from "next/navigation";',
        content,
    )

    # useLocation alone
    content = re.sub(
        r'import\s*\{\s*useLocation\s*\}\s*from\s*["\']react-router-dom["\'];?',
        'import { usePathname } from "next/navigation";',
        content,
    )

    # useParams alone
    content = re.sub(
        r'import\s*\{\s*useParams\s*\}\s*from\s*["\']react-router-dom["\'];?',
        'import { useParams } from "next/navigation";',
        content,
    )

    # Any remaining react-router-dom import → useRouter from next/navigation
    content = re.sub(
        r'import\s*\{[^}]+\}\s*from\s*["\']react-router-dom["\'];?\n?',
        'import { useRouter } from "next/navigation";\n',
        content,
    )

    # ── Hook rewrites ────────────────────────────────────────────────────────
    content = content.replace("const navigate = useNavigate();", "const router = useRouter();")
    content = content.replace("const navigate = useNavigate()", "const router = useRouter()")
    content = content.replace("const location = useLocation();", "const pathname = usePathname();")
    content = content.replace("const location = useLocation()", "const pathname = usePathname()")
    content = content.replace("location.pathname", "pathname")
    content = re.sub(r'\bnavigate\(', 'router.push(', content)
    content = re.sub(
        r'router\.push\(([^,)]+),\s*\{\s*replace:\s*true\s*\}\)',
        r'router.replace(\1)',
        content,
    )
    content = content.replace("}, [navigate]);", "}, [router]);")

    # ── JSX prop rewrite: <Link to= → <Link href= ────────────────────────────
    content = re.sub(r'<Link\s+to=', '<Link href=', content)
    content = re.sub(r'<Link\n(\s+)to=', r'<Link\n\1href=', content)

    # ── window.pathname ──────────────────────────────────────────────────────
    content = content.replace("window.pathname", "window.location.pathname")

    return content

def _rewrite_link_import(before, after):
    """
    When Link is part of a multi-import like { Link, useLocation },
    split it: emit next/link default import + next/navigation for the rest.
    """
    others = [x.strip() for x in (before + after).split(",") if x.strip()]
    lines = ['import Link from "next/link";']
    nav_hooks = []
    nav_map = {
        "useNavigate": "useRouter",
        "useLocation": "usePathname",
        "useParams": "useParams",
        "useHistory": "useRouter",
    }
    for token in others:
        if token in nav_map:
            nav_hooks.append(nav_map[token])
        elif token:
            nav_hooks.append(token)
    if nav_hooks:
        lines.append(f'import {{ {", ".join(nav_hooks)} }} from "next/navigation";')
    return "\n".join(lines)


# ─────────────────────────────────────────────────────────────────────────────
# Fix 2: "use client" directives
# ─────────────────────────────────────────────────────────────────────────────

CLIENT_HOOKS = (
    "useState", "useEffect", "useRef", "useCallback", "useMemo",
    "useReducer", "useContext", "useLayoutEffect", "useImperativeHandle",
    "useRouter", "usePathname", "useSearchParams", "useParams",
)

def needs_use_client(content):
    """Return True if file uses any client-side hooks or browser APIs."""
    return any(hook in content for hook in CLIENT_HOOKS) or "framer-motion" in content

def ensure_use_client(path):
    content = read(path)
    has_directive = content.lstrip().startswith('"use client"') or content.lstrip().startswith("'use client'")
    if not has_directive and needs_use_client(content):
        write(path, '"use client";\n' + content)

# ─────────────────────────────────────────────────────────────────────────────
# Fix 3: app/page.tsx files — metadata + use client conflict
# ─────────────────────────────────────────────────────────────────────────────

def fix_metadata_conflict(path):
    """
    In Next.js App Router, a file cannot export both `metadata` and
    be a Client Component. If both exist, strip "use client".
    """
    content = read(path)
    original = content
    has_use_client = content.lstrip().startswith('"use client"') or content.lstrip().startswith("'use client'")
    has_metadata = "export const metadata" in content
    if has_use_client and has_metadata:
        content = re.sub(r'["\']use client["\'];\n', "", content, count=1)
        patch(path, content, original)

# ─────────────────────────────────────────────────────────────────────────────
# Fix 4: layout.tsx — never hardcode dark class
# ─────────────────────────────────────────────────────────────────────────────

def fix_layout(path):
    if not os.path.exists(path):
        return
    content = read(path)
    original = content
    # Remove hardcoded dark class — the design uses section-specific navy classes
    content = re.sub(
        r'(\$\{[^}]+\}\s*)dark',
        r'\1',
        content,
    )
    # Also handle: className="... dark"
    content = re.sub(r'(className=["\'][^"\']*) dark(["\'])', r'\1\2', content)
    patch(path, content, original)

# ─────────────────────────────────────────────────────────────────────────────
# Fix 5: StaticImageData src unwrap
# ─────────────────────────────────────────────────────────────────────────────

def fix_static_image(path):
    content = read(path)
    original = content
    # img src={someImport} where someImport could be StaticImageData
    content = re.sub(
        r'<img(\s[^>]*)\ssrc=\{([a-zA-Z_][a-zA-Z0-9_]*)\}',
        lambda m: (
            f'<img{m.group(1)} src={{typeof {m.group(2)} === "string" ? {m.group(2)} : ({m.group(2)} as any).src}}' 
            if "typeof" not in m.group(0) else m.group(0)
        ),
        content,
    )
    patch(path, content, original)

# ─────────────────────────────────────────────────────────────────────────────
# Fix 6: blogPosts.ts — ensure getSrc helper exists
# ─────────────────────────────────────────────────────────────────────────────

GET_SRC = '''
export function getSrc(image: any): string {
  if (typeof image === "string") return image;
  return image.src;
}
'''

def fix_blog_posts(path):
    if not os.path.exists(path):
        return
    content = read(path)
    if "export function getSrc" not in content and "export const getSrc" not in content:
        write(path, content.rstrip() + "\n" + GET_SRC)

# ─────────────────────────────────────────────────────────────────────────────
# Fix 7: globals.css — ensure overflow-x hidden on body
# ─────────────────────────────────────────────────────────────────────────────

def fix_globals_css(path):
    if not os.path.exists(path):
        return
    content = read(path)
    original = content
    if "overflow-x: hidden" not in content:
        # Add to body rule
        content = re.sub(
            r'(body\s*\{)',
            r'\1\n  overflow-x: hidden;',
            content,
        )
        patch(path, content, original)

# ─────────────────────────────────────────────────────────────────────────────
# SEO.tsx stub (next/head not used — metadata API handles SEO)
# ─────────────────────────────────────────────────────────────────────────────

SEO_STUB = '''"use client";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  entityName?: string;
  entityType?: string;
  website?: string;
  phone?: string;
  address?: object;
  sameAs?: string[];
  services?: string[];
  areaServed?: string[];
  faqItems?: Array<{ question: string; answer: string }>;
  faq?: Array<{ question: string; answer: string }>;
  noindex?: boolean;
  service?: {
    serviceType?: string;
    provider?: string;
    areaServed?: string[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

/**
 * SEO component — no-op stub for Next.js.
 * Metadata is handled via generateMetadata() in app/layout.tsx and page files.
 */
const SEO: React.FC<SEOProps> = () => null;

export default SEO;
'''

# ─────────────────────────────────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("Centience Next.js Conversion Script")
    print("=" * 60)

    # ── Step 1: Fix react-router-dom in components + page-components ─────────
    print("\n[1] Fixing react-router-dom imports and usage...")
    for directory in ["components", "page-components"]:
        for fpath in walk_tsx(f"{BASE}/{directory}"):
            content = read(fpath)
            if "react-router-dom" in content or "useNavigate" in content or "<Link to=" in content or " to={" in content:
                fixed = fix_router_dom(content)
                patch(fpath, fixed, content)

    # ── Step 2: Add "use client" wherever needed ──────────────────────────────
    print("\n[2] Ensuring use client directives...")
    for directory in ["components", "page-components"]:
        for fpath in walk_tsx(f"{BASE}/{directory}"):
            ensure_use_client(fpath)

    # ── Step 3: Fix metadata + use client conflicts in app/ pages ────────────
    print("\n[3] Fixing metadata/use client conflicts in app/ pages...")
    for fpath in walk_tsx(f"{BASE}/app"):
        if fpath.endswith("page.tsx"):
            fix_metadata_conflict(fpath)

    # ── Step 4: Fix layout.tsx dark mode ─────────────────────────────────────
    print("\n[4] Ensuring layout.tsx does not hardcode dark mode...")
    fix_layout(f"{BASE}/app/layout.tsx")

    # ── Step 5: Restore SEO.tsx stub ─────────────────────────────────────────
    print("\n[5] Restoring SEO.tsx stub...")
    seo_path = f"{BASE}/components/SEO.tsx"
    current_seo = read(seo_path) if os.path.exists(seo_path) else ""
    if "no-op stub" not in current_seo:
        write(seo_path, SEO_STUB)

    # ── Step 6: Fix StaticImageData in specific files ─────────────────────────
    print("\n[6] Fixing StaticImageData src unwrapping...")
    image_files = [
        "components/BlogAuthorCard.tsx", "components/LocationsSection.tsx",
        "page-components/AboutPage.tsx",
    ]
    for rel in image_files:
        fp = f"{BASE}/{rel}"
        if os.path.exists(fp):
            fix_static_image(fp)

    # ── Step 7: blogPosts getSrc helper ──────────────────────────────────────
    print("\n[7] Ensuring blogPosts.ts has getSrc helper...")
    fix_blog_posts(f"{BASE}/data/blogPosts.ts")

    # ── Step 8: globals.css overflow-x ───────────────────────────────────────
    print("\n[8] Ensuring globals.css has overflow-x hidden...")
    fix_globals_css(f"{BASE}/app/globals.css")

    # ── Step 9: window.pathname sweep ────────────────────────────────────────
    print("\n[9] Fixing window.pathname references...")
    for directory in ["components", "page-components"]:
        for fpath in walk_tsx(f"{BASE}/{directory}"):
            content = read(fpath)
            if "window.pathname" in content:
                patch(fpath, content.replace("window.pathname", "window.location.pathname"), content)

    # ── Step 10: CMS editor null guards ──────────────────────────────────────
    print("\n[10] Applying CMS editor null guards...")
    cms_guards = [
        ("components/admin/cms/CMSBlogEditor.tsx",     "fetchPost",    "postId"),
        ("components/admin/cms/CMSIndustryEditor.tsx", "fetchIndustry","industryId"),
        ("components/admin/cms/CMSServiceEditor.tsx",  "fetchService", "serviceId"),
    ]
    for rel, fn, id_var in cms_guards:
        fp = f"{BASE}/{rel}"
        if not os.path.exists(fp):
            continue
        content = read(fp)
        original = content
        guard = f"if (!{id_var}) return;\n    "
        marker = f"const {fn} = async () => {{\n    setIsLoading(true);"
        if guard not in content and marker in content:
            patch(fp, content.replace(marker, f"const {fn} = async () => {{\n    {guard}setIsLoading(true);"), original)

    # ── Summary ───────────────────────────────────────────────────────────────
    print(f"\n{'=' * 60}")
    print(f"Done. {len(CHANGED)} file(s) modified.")
    if CHANGED:
        print("Changed files:")
        for f in CHANGED:
            print(f"  - {f}")
    print("=" * 60)
    return len(CHANGED)

if __name__ == "__main__":
    count = main()
    sys.exit(0)
