# Compuwork Page Standards & Templates

> **IMPORTANT**: These standards must be followed for ALL new pages and when editing existing pages.
> The Fix Guardian workflow (`.github/workflows/fix-guardian.yml`) automatically enforces the critical fixes listed here.

---

## 1. Root Wrapper – Every Page Component

Every page component's root `<div>` **must** include `overflow-x-hidden` to prevent horizontal overflow on iOS Safari and other mobile browsers:

```tsx
return (
  <div className="min-h-screen bg-background overflow-x-hidden">
    {/* page content */}
  </div>
);
```

---

## 2. AnimatedSection – Mobile-Safe Animations

Always use the `AnimatedSection` component from `@/components/AnimatedSection`. **Do not** use raw `motion.div` with `x:` offsets for section-level animations.

The component automatically:
- Uses `margin: "0px"` on `useInView` so content never stays invisible on short mobile screens
- Converts `direction="left"` and `direction="right"` to `direction="up"` on mobile (< 768px) to prevent horizontal overflow

```tsx
import AnimatedSection from "@/components/AnimatedSection";

// ✅ Correct
<AnimatedSection direction="up" delay={0.2}>
  <div>Content</div>
</AnimatedSection>

// ✅ Also fine — left/right auto-converts to up on mobile
<AnimatedSection direction="left">
  <div>Sidebar content</div>
</AnimatedSection>

// ❌ Never do this for section-level content
<motion.div initial={{ x: -60 }} animate={{ x: 0 }}>
  <div>Content</div>
</motion.div>
```

---

## 3. Form/Content Section Wrapper

The main content section (containing forms, cards, sidebars) must include `overflow-x-hidden`:

```tsx
<section className="py-20 overflow-x-hidden">
  <div className="container mx-auto px-4">
    {/* content */}
  </div>
</section>
```

---

## 4. Card Padding – Responsive

Cards must use responsive padding so they don't overflow on narrow mobile screens:

```tsx
// ✅ Correct — reduced padding on mobile
<div className="bg-card border border-border rounded-3xl p-5 sm:p-8 lg:p-10">

// ✅ For sidebar cards (no lg override needed)
<div className="bg-card border border-border rounded-3xl p-5 sm:p-8">

// ❌ Avoid fixed large padding on mobile
<div className="bg-card border border-border rounded-3xl p-8">
```

---

## 5. Submit Button – Long Text

When a button has long text (> 25 characters), add `text-sm sm:text-base` and `flex-shrink-0` on the icon:

```tsx
<Button
  type="submit"
  size="lg"
  className="w-full ... text-sm sm:text-base"
>
  <span className="flex items-center gap-2">
    <Calendar className="w-5 h-5 flex-shrink-0" />
    Get AI Readiness Assessment
  </span>
</Button>
```

---

## 6. Page Templates by Type

### Assessment/Form Page (e.g., `/get-ai-assessment`, `/get-dr-assessment`)

Structure:
```
Root div (min-h-screen bg-background overflow-x-hidden)
├── Navbar
├── Hero section (pt-32 pb-16 relative overflow-hidden)
│   └── container mx-auto px-4
│       └── AnimatedSection (max-w-4xl mx-auto text-center)
│           ├── Badge
│           ├── H1 title
│           └── Subtitle paragraph
├── Contact info bar (py-8 bg-violet-500/5 border-y)
│   └── container mx-auto px-4
│       └── flex flex-wrap justify-center gap-6
│           └── [icon + text] items
├── Main content section (py-20 overflow-x-hidden)
│   └── container mx-auto px-4
│       └── grid lg:grid-cols-5 gap-12 lg:gap-16
│           ├── AnimatedSection lg:col-span-3 (Form card)
│           │   └── bg-card rounded-3xl p-5 sm:p-8 lg:p-10
│           │       ├── H2 title
│           │       ├── Form fields (grid sm:grid-cols-2 gap-6)
│           │       ├── HCaptcha
│           │       └── Submit button (w-full, text-sm sm:text-base for long text)
│           └── AnimatedSection lg:col-span-2 (Sidebar)
│               └── space-y-6
│                   ├── "What You'll Get" card (p-5 sm:p-8)
│                   ├── Feature/info card (p-5 sm:p-8)
│                   └── Contact card (p-5 sm:p-8 text-center)
└── Footer
```

### Service Page (e.g., `/services/managed-it-services`, `/services/cybersecurity`)

Structure:
```
Root div (min-h-screen bg-background overflow-x-hidden)
├── Navbar
├── Hero section (pt-32 pb-20 relative overflow-hidden)
├── Features/benefits section
├── CTA section
└── Footer
```

### Industry Page (e.g., `/industries/financial-services`)

Structure:
```
Root div (min-h-screen bg-background overflow-x-hidden)
├── Navbar
├── Hero section
├── Pain points / challenges section
├── Solutions section
├── Case study / testimonials section
├── CTA section
└── Footer
```

### Blog/Content Page

- Blog listing: `/blogs` (NOT `/blog`)
- Blog post: `/blogs/[slug]`
- Images: Always use `getSrc(post.image)` from `@/data/blogPosts` to handle both string and StaticImageData formats

---

## 7. SEO Health Check URLs

The SEO auto-push workflow checks these URLs. When adding new pages, update `.github/workflows/seo-auto-push.yml` to include them:

| Route | URL |
|-------|-----|
| Home | `/` |
| About | `/about` |
| Managed IT | `/services/managed-it-services` |
| Cybersecurity | `/services/cybersecurity` |
| Financial Services | `/industries/financial-services` |
| Blog listing | `/blogs` |
| Contact | `/contact` |
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |

---

## 8. globals.css – Required Rules

The following rules in `app/globals.css` must never be removed:

```css
html {
  scroll-behavior: smooth;
  overflow-x: hidden;  /* ← REQUIRED: prevents iOS Safari horizontal overflow */
}

body {
  @apply bg-background text-foreground antialiased;
  font-family: 'Inter', system-ui, sans-serif;
  overflow-x: hidden;  /* ← REQUIRED: prevents horizontal scroll on all browsers */
}
```

---

## 9. New Page Checklist

When Lovable creates a new page, verify:

- [ ] Root `<div>` has `overflow-x-hidden`
- [ ] Main content section has `overflow-x-hidden`  
- [ ] Cards use `p-5 sm:p-8` (not just `p-8`)
- [ ] Long button text uses `text-sm sm:text-base`
- [ ] Icons in buttons have `flex-shrink-0`
- [ ] Section animations use `<AnimatedSection>` not raw `motion.div` with x offsets
- [ ] Route added to SEO health check if it's a primary page
- [ ] Blog images use `getSrc()` helper

---

*Last updated: March 2026 — maintained by Fix Guardian workflow*
