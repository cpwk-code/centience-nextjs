#!/usr/bin/env python3
"""
lovable_to_nextjs.py — Lovable (Vite/React Router) → Next.js 15 App Router conversion script.

Run from the centience-nextjs repo root:
    python3 .github/scripts/lovable_to_nextjs.py

What it fixes:
  1. react-router-dom  →  next/link + next/navigation
  2. <Link to=         →  <Link href=
  3. useNavigate       →  useRouter
  4. useLocation       →  usePathname
  5. "use client" directives — smart detection via hook/event patterns
  6. export metadata + "use client" conflict in page.tsx files
  7. window.pathname   →  window.location.pathname
  8. globals.css overflow-x hidden
  9. blogPosts getSrc() helper
 10. StaticImageData .src unwrap
 11. CMS editor null guards
 12. AboutPage image extension
"""

import os
import re

BASE = os.getcwd()

def read(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()

def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  fixed: {path.replace(BASE+'/', '')}")

def has_use_client(content):
    first_non_empty = next((l for l in content.split("\n") if l.strip()), "")
    return "use client" in first_non_empty

def needs_use_client(content):
    """Detect if a component file needs 'use client'."""
    patterns = [
        "useState", "useEffect", "useRef", "useCallback", "useMemo",
        "useReducer", "useContext", "useRouter", "usePathname",
        "useSearchParams", "framer-motion", "motion.",
        "onClick", "onChange", "onSubmit", "onKeyDown", "onMouseEnter",
        "addEventListener", "window.", "document.",
    ]
    return any(p in content for p in patterns)

def fix_router_dom(content):
    """Replace all react-router-dom imports and usage with Next.js equivalents."""
    # Specific single-import patterns first
    content = re.sub(
        r'import\s*\{\s*Link\s*\}\s*from\s*["\']react-router-dom["\'];?\n?',
        'import Link from "next/link";\n',
        content
    )
    content = re.sub(
        r'import\s*\{\s*useNavigate\s*\}\s*from\s*["\']react-router-dom["\'];?\n?',
        'import { useRouter } from "next/navigation";\n',
        content
    )
    content = re.sub(
        r'import\s*\{\s*useLocation\s*\}\s*from\s*["\']react-router-dom["\'];?\n?',
        'import { usePathname } from "next/navigation";\n',
        content
    )
    content = re.sub(
        r'import\s*\{\s*useParams\s*\}\s*from\s*["\']react-router-dom["\'];?\n?',
        'import { useParams } from "next/navigation";\n',
        content
    )
    # Catch-all for remaining react-router-dom imports
    content = re.sub(
        r'import\s*\{[^}]+\}\s*from\s*["\']react-router-dom["\'];?\n?',
        'import { useRouter, usePathname } from "next/navigation";\n',
        content
    )
    # Hook usage
    content = content.replace("const navigate = useNavigate();", "const router = useRouter();")
    content = content.replace("const navigate = useNavigate()", "const router = useRouter()")
    content = content.replace("const location = useLocation();", "const pathname = usePathname();")
    content = content.replace("const location = useLocation()", "const pathname = usePathname()")
    content = content.replace("location.pathname", "pathname")
    # navigate() → router.push()
    content = re.sub(r'\bnavigate\(', 'router.push(', content)
    # router.push(x, { replace: true }) → router.replace(x)
    content = re.sub(
        r'router\.push\(([^,)]+),\s*\{\s*replace:\s*true\s*\}\)',
        r'router.replace(\1)',
        content
    )
    # Link prop
    content = re.sub(r'<Link\s+to=', '<Link href=', content)
    content = re.sub(r'<Link\n(\s+)to=', r'<Link\n\1href=', content)
    # Dep array
    content = content.replace("}, [navigate]);", "}, [router]);")
    # window.pathname
    content = content.replace("window.pathname", "window.location.pathname")
    return content


def run():
    print("\n=== Lovable → Next.js Conversion ===\n")

    # ── 1. Fix react-router-dom ──────────────────────────────────────────────
    print("[1] Fixing react-router-dom imports and usage...")
    for d in ["components", "page-components"]:
        fp = os.path.join(BASE, d)
        if not os.path.exists(fp): continue
        for root, _, files in os.walk(fp):
            for fname in files:
                if not fname.endswith((".tsx", ".ts")): continue
                fpath = os.path.join(root, fname)
                content = read(fpath)
                if "react-router-dom" in content:
                    fixed = fix_router_dom(content)
                    if fixed != content:
                        write(fpath, fixed)

    # ── 2. Add "use client" where needed ────────────────────────────────────
    print("\n[2] Adding 'use client' directives...")
    for d in ["components", "page-components"]:
        fp = os.path.join(BASE, d)
        if not os.path.exists(fp): continue
        for root, _, files in os.walk(fp):
            for fname in files:
                if not fname.endswith(".tsx"): continue
                fpath = os.path.join(root, fname)
                content = read(fpath)
                if not has_use_client(content) and needs_use_client(content):
                    write(fpath, '"use client";\n' + content)

    # ── 3. Fix metadata + "use client" conflict in page.tsx ─────────────────
    print("\n[3] Fixing metadata conflicts in page.tsx files...")
    app_dir = os.path.join(BASE, "app")
    if os.path.exists(app_dir):
        for root, _, files in os.walk(app_dir):
            for fname in files:
                if fname != "page.tsx": continue
                fpath = os.path.join(root, fname)
                content = read(fpath)
                if has_use_client(content) and "export const metadata" in content:
                    fixed = content.replace('"use client";\n', '').replace("'use client';\n", '')
                    write(fpath, fixed)

    # ── 4. globals.css overflow-x hidden ────────────────────────────────────
    print("\n[4] Checking globals.css...")
    gp = os.path.join(BASE, "app/globals.css")
    if os.path.exists(gp):
        content = read(gp)
        if "overflow-x: hidden" not in content:
            content = re.sub(r'(body\s*\{)', r'\1\n  overflow-x: hidden;', content)
            write(gp, content)

    # ── 5. blogPosts getSrc() helper ─────────────────────────────────────────
    print("\n[5] Checking blogPosts getSrc helper...")
    bpts = os.path.join(BASE, "data/blogPosts.ts")
    if os.path.exists(bpts):
        content = read(bpts)
        if "export function getSrc" not in content and "export const getSrc" not in content:
            content += '\nexport function getSrc(image: any): string {\n  if (typeof image === "string") return image;\n  return image.src;\n}\n'
            write(bpts, content)

    # ── 6. StaticImageData .src unwrap ───────────────────────────────────────
    print("\n[6] Fixing StaticImageData usage...")
    for rel in ["components/BlogAuthorCard.tsx", "page-components/AboutPage.tsx"]:
        fp = os.path.join(BASE, rel)
        if not os.path.exists(fp): continue
        content = read(fp)
        original = content
        content = re.sub(
            r'<img\s+src={([a-zA-Z_][a-zA-Z0-9_]*)}',
            lambda m: f'<img src={{typeof {m.group(1)} === "string" ? {m.group(1)} : ({m.group(1)} as any).src}}',
            content
        )
        if content != original: write(fp, content)

    # ── 7. CMS editor null guards ────────────────────────────────────────────
    print("\n[7] Checking CMS null guards...")
    for rel, id_var in [
        ("components/admin/cms/CMSBlogEditor.tsx", "postId"),
        ("components/admin/cms/CMSIndustryEditor.tsx", "industryId"),
        ("components/admin/cms/CMSServiceEditor.tsx", "serviceId"),
    ]:
        fp = os.path.join(BASE, rel)
        if not os.path.exists(fp): continue
        content = read(fp)
        original = content
        guard = f"if (!{id_var}) return;\n    "
        if guard not in content and "setIsLoading(true);" in content:
            content = content.replace("setIsLoading(true);", f"{guard}setIsLoading(true);", 1)
            if content != original: write(fp, content)

    # ── 8. AboutPage image extension ─────────────────────────────────────────
    ap = os.path.join(BASE, "page-components/AboutPage.tsx")
    if os.path.exists(ap):
        content = read(ap)
        if "orville-matias-about.png" in content:
            write(ap, content.replace(
                'import orvillePhoto from "@/assets/orville-matias-about.png"',
                'import orvillePhoto from "@/assets/orville-matias-about.jpeg"'
            ))

    print("\n=== Conversion complete ===")


if __name__ == "__main__":
    run()
