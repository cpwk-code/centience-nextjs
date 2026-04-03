#!/usr/bin/env python3
"""
seo-enrich.py
─────────────────────────────────────────────────────────────────────────────
AI-powered SEO enrichment script for compuwork.ai (Next.js).

For every page.tsx in the app/ directory, this script:
  1. Reads the page file and its corresponding page-component file (if any)
  2. Sends the content to an LLM to generate a complete SEO package
  3. Rewrites the page.tsx with a fully optimised metadata export, JSON-LD
     structured data script tag, and KeyFacts component injection

SEO elements generated per page:
  - title (60 chars max, keyword-rich)
  - description (155 chars max, compelling)
  - keywords array (8-12 targeted terms)
  - canonical URL
  - robots directives
  - openGraph (title, description, url, type, image)
  - twitter card (summary_large_image)
  - JSON-LD structured data (WebPage + Service/FAQPage/BreadcrumbList)
  - KeyFacts component props (for AI/SGE search engines)

Usage:
  python3 seo-enrich.py [--page <app/route/page.tsx>] [--all] [--dry-run]
─────────────────────────────────────────────────────────────────────────────
"""

import os
import re
import sys
import json
import argparse
import textwrap
from pathlib import Path
from openai import OpenAI

# ── Configuration ─────────────────────────────────────────────────────────────
REPO_ROOT    = Path(__file__).parent.parent.parent  # cpwk-nextjs/
APP_DIR      = REPO_ROOT / "app"
COMPONENTS_DIR = REPO_ROOT / "page-components"
SITE_URL     = "https://compuwork.ai"
COMPANY_NAME = "Compuwork"
COMPANY_DESC = "Compuwork provides compliance-first managed IT services and cybersecurity for financial services, legal, healthcare, and professional services organizations. Founded in 2005, specializing in SEC, FINRA, HIPAA, SOC 2, and CMMC compliance. Offices in New York and Florida."
OG_IMAGE     = "/og-image.png"

# Pages to skip (admin, legal boilerplate, dynamic routes)
SKIP_PATTERNS = [
    "admin/",
    "privacy-policy",
    "terms-of-service",
    "referral",
    "blog/[slug]",
]

client = OpenAI()  # Uses OPENAI_API_KEY env var automatically

# ── Helper: derive route from page path ───────────────────────────────────────
def get_route(page_path: Path) -> str:
    """Convert app/services/cybersecurity/page.tsx → /services/cybersecurity"""
    rel = page_path.relative_to(APP_DIR)
    parts = list(rel.parts[:-1])  # Remove 'page.tsx'
    if not parts:
        return "/"
    return "/" + "/".join(parts)

# ── Helper: find the page-component file for a given page ─────────────────────
def find_component_file(page_path: Path) -> Path | None:
    """Find the corresponding page-component TSX file."""
    content = page_path.read_text()
    # Look for import XxxPage from '@/page-components/XxxPage' or '@/page-components/subdir/XxxPage'
    match = re.search(r"from '@/page-components/([^']+)'", content)
    if match:
        component_name = match.group(1)  # May include subdir, e.g. 'locations/NewYorkPage'
        component_path = COMPONENTS_DIR / f"{component_name}.tsx"
        if component_path.exists():
            return component_path
    return None

# ── Helper: extract readable text from TSX ────────────────────────────────────
def extract_text_from_tsx(content: str) -> str:
    """Extract human-readable text content from a TSX file for LLM analysis."""
    # Remove imports
    content = re.sub(r"^import\s+.*?;?\s*$", "", content, flags=re.MULTILINE)
    # Remove TypeScript type annotations
    content = re.sub(r":\s*\w+(\[\])?(\s*\|[^=;{]+)?", "", content)
    # Remove JSX attributes (className, style, etc.)
    content = re.sub(r'\s+className="[^"]*"', "", content)
    content = re.sub(r'\s+style=\{[^}]*\}', "", content)
    # Extract string literals (page content)
    strings = re.findall(r'"([^"]{10,})"', content)
    # Extract JSX text content
    jsx_text = re.findall(r'>([^<>{}\n]{15,})<', content)
    combined = " ".join(strings + jsx_text)
    # Collapse whitespace
    combined = re.sub(r'\s+', ' ', combined).strip()
    return combined[:4000]  # Limit to 4000 chars for LLM

# ── Core: generate SEO package via LLM ────────────────────────────────────────
def generate_seo_package(route: str, page_content: str, component_content: str) -> dict:
    """Call the LLM to generate a complete SEO package for a page."""

    combined_content = f"PAGE ROUTE: {route}\n\nPAGE FILE CONTENT:\n{page_content[:1500]}\n\nCOMPONENT CONTENT (extracted text):\n{component_content[:3000]}"

    prompt = f"""You are an expert SEO specialist for a B2B managed IT services company.

COMPANY: {COMPANY_NAME}
COMPANY DESCRIPTION: {COMPANY_DESC}
SITE URL: {SITE_URL}

Analyze the following page content and generate a complete, fully-optimized SEO package.
Return ONLY a valid JSON object with no markdown formatting.

PAGE CONTENT:
{combined_content}

Generate the following JSON structure:
{{
  "title": "Page title (max 60 chars, include primary keyword + brand)",
  "description": "Meta description (max 155 chars, compelling, includes CTA)",
  "keywords": ["keyword1", "keyword2", ...],  // 8-12 targeted keywords
  "og_title": "Open Graph title (can be slightly longer than meta title)",
  "og_description": "OG description (max 200 chars)",
  "og_type": "website",
  "schema_type": "Service | WebPage | FAQPage | AboutPage | ContactPage | CollectionPage",
  "schema_name": "Name of the service/page for schema",
  "schema_description": "Schema description (2-3 sentences)",
  "schema_service_type": "Type of service (if applicable, else null)",
  "schema_area_served": ["New York", "Florida", "USA"],
  "breadcrumbs": [
    {{"name": "Home", "url": "{SITE_URL}"}},
    {{"name": "Parent Section", "url": "{SITE_URL}/parent"}},
    {{"name": "Current Page", "url": "{SITE_URL}{route}"}}
  ],
  "faq_items": [  // 3-5 FAQs if this is a service/industry page, else empty array
    {{"question": "Q?", "answer": "A."}}
  ],
  "keyfacts_entity_name": "Entity name for schema microdata",
  "keyfacts_entity_type": "ProfessionalService | Service | WebPage",
  "keyfacts_description": "2-sentence description for microdata",
  "keyfacts_facts": [
    {{"label": "Fact Label", "value": "Fact Value"}}
  ],
  "keyfacts_services": ["Service 1", "Service 2"],
  "robots": "index, follow"
}}

Rules:
- Title must be unique, keyword-rich, and under 60 characters
- Description must be compelling, include a benefit, and be under 155 characters  
- Keywords must be specific to this page's topic (not generic)
- Breadcrumbs must accurately reflect the URL structure
- FAQs should answer real questions prospects would ask about this specific service/industry
- KeyFacts must be specific and factual for this page's topic
- For location pages, include the city name prominently
- For service pages, schema_type should be "Service"
- For industry pages, schema_type should be "WebPage"
"""

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        max_tokens=2000,
    )

    raw = response.choices[0].message.content.strip()
    # Strip markdown code blocks if present
    raw = re.sub(r'^```(?:json)?\s*', '', raw)
    raw = re.sub(r'\s*```$', '', raw)

    return json.loads(raw)

# ── Core: build the new page.tsx content ──────────────────────────────────────
def build_page_tsx(route: str, component_import: str | None, seo: dict) -> str:
    """Construct the fully-optimized page.tsx content."""

    canonical_url = SITE_URL + route if route != "/" else SITE_URL
    component_name = component_import or "Page"

    # ── JSON-LD structured data ──────────────────────────────────────────────
    schema_base = {
        "@context": "https://schema.org",
        "@type": seo.get("schema_type", "WebPage"),
        "name": seo.get("schema_name", seo["title"]),
        "description": seo.get("schema_description", seo["description"]),
        "url": canonical_url,
        "provider": {
            "@type": "Organization",
            "name": COMPANY_NAME,
            "url": SITE_URL,
            "logo": f"{SITE_URL}/favicon.png",
            "telephone": "+1-800-COMPUWORK",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "addressCountry": "US"
            }
        }
    }

    if seo.get("schema_service_type"):
        schema_base["serviceType"] = seo["schema_service_type"]

    if seo.get("schema_area_served"):
        schema_base["areaServed"] = seo["schema_area_served"]

    # Breadcrumb schema
    breadcrumb_schema = None
    if seo.get("breadcrumbs") and len(seo["breadcrumbs"]) > 1:
        breadcrumb_schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": crumb["name"],
                    "item": crumb["url"]
                }
                for i, crumb in enumerate(seo["breadcrumbs"])
            ]
        }

    # FAQ schema
    faq_schema = None
    if seo.get("faq_items") and len(seo["faq_items"]) > 0:
        faq_schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": item["question"],
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item["answer"]
                    }
                }
                for item in seo["faq_items"]
            ]
        }

    # ── Build JSON-LD script tags ────────────────────────────────────────────
    jsonld_scripts = []
    jsonld_scripts.append(f"      <script\n        type=\"application/ld+json\"\n        dangerouslySetInnerHTML={{{{ __html: JSON.stringify({json.dumps(schema_base, indent=2)}) }}}}\n      />")

    if breadcrumb_schema:
        jsonld_scripts.append(f"      <script\n        type=\"application/ld+json\"\n        dangerouslySetInnerHTML={{{{ __html: JSON.stringify({json.dumps(breadcrumb_schema, indent=2)}) }}}}\n      />")

    if faq_schema:
        jsonld_scripts.append(f"      <script\n        type=\"application/ld+json\"\n        dangerouslySetInnerHTML={{{{ __html: JSON.stringify({json.dumps(faq_schema, indent=2)}) }}}}\n      />")

    jsonld_block = "\n".join(jsonld_scripts)

    # ── Build KeyFacts props ─────────────────────────────────────────────────
    keyfacts_facts_str = json.dumps(seo.get("keyfacts_facts", []), indent=6)
    keyfacts_services = seo.get("keyfacts_services", [])
    keyfacts_services_str = json.dumps(keyfacts_services, indent=6)

    keyfacts_services_prop = ""
    if keyfacts_services:
        keyfacts_services_prop = f'\n        services={{{keyfacts_services_str}}}'

    # ── Build keywords string ────────────────────────────────────────────────
    keywords_str = json.dumps(seo.get("keywords", []))

    # ── Determine component import line ─────────────────────────────────────
    if component_import:
        import_line = f"import {component_import} from '@/page-components/{component_import}';"
        component_jsx = f"    <{component_import} />"
    else:
        # Inline page (like homepage) — preserve existing JSX
        import_line = "// Page content is inline below"
        component_jsx = "    {/* Page content */}"

    # ── Assemble the full page.tsx ───────────────────────────────────────────
    tsx = f"""import type {{ Metadata }} from 'next';
import KeyFacts from '@/components/KeyFacts';
{import_line}

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {{
  title: {json.dumps(seo["title"])},
  description: {json.dumps(seo["description"])},
  keywords: {keywords_str},
  robots: {json.dumps(seo.get("robots", "index, follow"))},
  alternates: {{
    canonical: {json.dumps(canonical_url)},
  }},
  openGraph: {{
    title: {json.dumps(seo.get("og_title", seo["title"]))},
    description: {json.dumps(seo.get("og_description", seo["description"]))},
    url: {json.dumps(canonical_url)},
    type: {json.dumps(seo.get("og_type", "website"))},
    siteName: 'Compuwork',
    images: [
      {{
        url: '{OG_IMAGE}',
        width: 1200,
        height: 630,
        alt: {json.dumps(seo.get("og_title", seo["title"]))},
      }},
    ],
  }},
  twitter: {{
    card: 'summary_large_image',
    title: {json.dumps(seo.get("og_title", seo["title"]))},
    description: {json.dumps(seo.get("og_description", seo["description"]))},
    images: ['{OG_IMAGE}'],
  }},
}};

export default function Page() {{
  return (
    <>
      {{/* ── Structured Data (JSON-LD) ─────────────────────────────────── */}}
{jsonld_block}

      {{/* ── Semantic KeyFacts for AI Search Engines ──────────────────── */}}
      <KeyFacts
        entityName={json.dumps(seo.get("keyfacts_entity_name", COMPANY_NAME))}
        entityType={json.dumps(seo.get("keyfacts_entity_type", "ProfessionalService"))}
        description={json.dumps(seo.get("keyfacts_description", seo["description"]))}
        facts={{{keyfacts_facts_str}}}{keyfacts_services_prop}
        contactInfo={{{{
          phone: '+1-800-COMPUWORK',
          website: '{SITE_URL}',
        }}}}
      />

      {{/* ── Page Content ───────────────────────────────────────────────── */}}
      {component_jsx}
    </>
  );
}}
"""
    return tsx

# ── Core: enrich a single page ────────────────────────────────────────────────
def enrich_page(page_path: Path, dry_run: bool = False) -> bool:
    """Enrich a single page with full SEO. Returns True if page was updated."""
    route = get_route(page_path)

    # Skip admin and boilerplate pages
    for pattern in SKIP_PATTERNS:
        if pattern in str(page_path):
            print(f"  ⏭️  Skipping: {route}")
            return False

    print(f"\n🔍 Enriching: {route}")

    # Read current page content
    page_content = page_path.read_text()

    # Find and read the component file
    component_path = find_component_file(page_path)
    component_content = ""
    component_import = None

    if component_path:
        raw_component = component_path.read_text()
        component_content = extract_text_from_tsx(raw_component)
        component_import = component_path.stem  # e.g., "ManagedITPage"
        print(f"   📄 Component: {component_import}")
    else:
        # For inline pages (like homepage), extract from the page itself
        component_content = extract_text_from_tsx(page_content)
        print(f"   📄 Inline page (no separate component)")

    # Generate SEO package via LLM
    print(f"   🤖 Generating SEO package...")
    try:
        seo = generate_seo_package(route, page_content, component_content)
    except Exception as e:
        print(f"   ❌ LLM error: {e}")
        return False

    print(f"   ✅ Title: {seo.get('title', 'N/A')[:60]}")
    print(f"   ✅ Description: {seo.get('description', 'N/A')[:80]}...")
    print(f"   ✅ Keywords: {len(seo.get('keywords', []))} terms")
    print(f"   ✅ FAQs: {len(seo.get('faq_items', []))} items")
    print(f"   ✅ Schema type: {seo.get('schema_type', 'N/A')}")

    if dry_run:
        print(f"   🔵 DRY RUN — not writing file")
        return True

    # For inline pages (homepage, etc.), we need special handling
    # to preserve the existing JSX content
    if not component_import:
        new_content = enrich_inline_page(page_path, page_content, seo, route)
    else:
        new_content = build_page_tsx(route, component_import, seo)

    # Write the enriched page
    page_path.write_text(new_content)
    print(f"   💾 Written: {page_path.relative_to(REPO_ROOT)}")
    return True

# ── Special handler for inline pages (homepage, etc.) ─────────────────────────
def enrich_inline_page(page_path: Path, original_content: str, seo: dict, route: str) -> str:
    """Enrich an inline page (one that doesn't use a separate component file)."""
    canonical_url = SITE_URL + route if route != "/" else SITE_URL

    # Build JSON-LD schemas
    schema_base = {
        "@context": "https://schema.org",
        "@type": seo.get("schema_type", "WebPage"),
        "name": seo.get("schema_name", seo["title"]),
        "description": seo.get("schema_description", seo["description"]),
        "url": canonical_url,
        "provider": {
            "@type": "Organization",
            "name": COMPANY_NAME,
            "url": SITE_URL,
            "logo": f"{SITE_URL}/favicon.png",
            "telephone": "+1-800-COMPUWORK",
        }
    }
    if seo.get("schema_area_served"):
        schema_base["areaServed"] = seo["schema_area_served"]

    breadcrumb_schema = None
    if seo.get("breadcrumbs") and len(seo["breadcrumbs"]) > 1:
        breadcrumb_schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": i+1, "name": c["name"], "item": c["url"]}
                for i, c in enumerate(seo["breadcrumbs"])
            ]
        }

    faq_schema = None
    if seo.get("faq_items") and len(seo["faq_items"]) > 0:
        faq_schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": item["question"],
                 "acceptedAnswer": {"@type": "Answer", "text": item["answer"]}}
                for item in seo["faq_items"]
            ]
        }

    keywords_str = json.dumps(seo.get("keywords", []))
    keyfacts_facts_str = json.dumps(seo.get("keyfacts_facts", []), indent=6)
    keyfacts_services = seo.get("keyfacts_services", [])

    # Build new metadata block
    new_metadata = f"""export const metadata: Metadata = {{
  title: {json.dumps(seo["title"])},
  description: {json.dumps(seo["description"])},
  keywords: {keywords_str},
  robots: {json.dumps(seo.get("robots", "index, follow"))},
  alternates: {{
    canonical: {json.dumps(canonical_url)},
  }},
  openGraph: {{
    title: {json.dumps(seo.get("og_title", seo["title"]))},
    description: {json.dumps(seo.get("og_description", seo["description"]))},
    url: {json.dumps(canonical_url)},
    type: {json.dumps(seo.get("og_type", "website"))},
    siteName: 'Compuwork',
    images: [
      {{
        url: '{OG_IMAGE}',
        width: 1200,
        height: 630,
        alt: {json.dumps(seo.get("og_title", seo["title"]))},
      }},
    ],
  }},
  twitter: {{
    card: 'summary_large_image',
    title: {json.dumps(seo.get("og_title", seo["title"]))},
    description: {json.dumps(seo.get("og_description", seo["description"]))},
    images: ['{OG_IMAGE}'],
  }},
}};"""

    # Replace existing metadata block
    content = re.sub(
        r'export const metadata: Metadata = \{.*?\};',
        new_metadata,
        original_content,
        flags=re.DOTALL
    )

    # Ensure Script and KeyFacts are imported
    if "import KeyFacts from '@/components/KeyFacts'" not in content:
        content = content.replace(
            "import type { Metadata } from 'next';",
            "import type { Metadata } from 'next';\nimport KeyFacts from '@/components/KeyFacts';"
        )

    # Build JSON-LD injection block
    jsonld_parts = [f"      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{{{ __html: JSON.stringify({json.dumps(schema_base)}) }}}} />"]
    if breadcrumb_schema:
        jsonld_parts.append(f"      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{{{ __html: JSON.stringify({json.dumps(breadcrumb_schema)}) }}}} />")
    if faq_schema:
        jsonld_parts.append(f"      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{{{ __html: JSON.stringify({json.dumps(faq_schema)}) }}}} />")

    keyfacts_services_prop = ""
    if keyfacts_services:
        keyfacts_services_prop = f'\n        services={{{json.dumps(keyfacts_services)}}}'

    keyfacts_block = f"""      <KeyFacts
        entityName={json.dumps(seo.get("keyfacts_entity_name", COMPANY_NAME))}
        entityType={json.dumps(seo.get("keyfacts_entity_type", "ProfessionalService"))}
        description={json.dumps(seo.get("keyfacts_description", seo["description"]))}
        facts={{{keyfacts_facts_str}}}{keyfacts_services_prop}
        contactInfo={{{{
          phone: '+1-800-COMPUWORK',
          website: '{SITE_URL}',
        }}}}
      />"""

    # Inject JSON-LD and KeyFacts before the first component in the return statement
    # Find the existing KeyFacts block and replace it, or inject after the opening <div>
    existing_keyfacts = re.search(r'\s*<KeyFacts\s[^>]*(?:/>|>.*?</KeyFacts>)', content, re.DOTALL)
    if existing_keyfacts:
        # Replace existing KeyFacts with updated one
        jsonld_injection = "\n".join(jsonld_parts) + "\n\n" + keyfacts_block
        content = content[:existing_keyfacts.start()] + "\n" + jsonld_injection + content[existing_keyfacts.end():]
    else:
        # Find the return statement and inject after opening fragment/div
        return_match = re.search(r'return\s*\(\s*\n\s*<', content)
        if return_match:
            insert_pos = content.find('\n', return_match.end()) + 1
            jsonld_injection = "\n".join(jsonld_parts) + "\n\n" + keyfacts_block + "\n"
            content = content[:insert_pos] + jsonld_injection + content[insert_pos:]

    return content

# ── Main entry point ──────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description="AI-powered SEO enrichment for compuwork.ai")
    parser.add_argument("--page", help="Enrich a specific page (relative path from repo root)")
    parser.add_argument("--all", action="store_true", help="Enrich all pages")
    parser.add_argument("--dry-run", action="store_true", help="Preview without writing files")
    args = parser.parse_args()

    if args.page:
        page_path = REPO_ROOT / args.page
        if not page_path.exists():
            print(f"❌ Page not found: {page_path}")
            sys.exit(1)
        enrich_page(page_path, dry_run=args.dry_run)

    elif args.all:
        pages = sorted(APP_DIR.rglob("page.tsx"))
        print(f"🚀 Enriching {len(pages)} pages...\n")
        success = 0
        skipped = 0
        failed = 0
        for page in pages:
            result = enrich_page(page, dry_run=args.dry_run)
            if result is True:
                success += 1
            elif result is False:
                route = get_route(page)
                is_skip = any(p in str(page) for p in SKIP_PATTERNS)
                if is_skip:
                    skipped += 1
                else:
                    failed += 1

        print(f"\n{'='*60}")
        print(f"✅ Enriched: {success} pages")
        print(f"⏭️  Skipped:  {skipped} pages")
        print(f"❌ Failed:   {failed} pages")
        print(f"{'='*60}")

    else:
        parser.print_help()
        sys.exit(1)

if __name__ == "__main__":
    main()
