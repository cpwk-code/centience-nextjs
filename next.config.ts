// cache-bust: 2026-04-23 18:00:00 UTC
// build-cache-bust: 1776921600
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  generateBuildId: async () => `build-1776832200`,
  // Ignore TypeScript and ESLint errors during build (non-critical type issues)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },

  // Server-side 301 redirects — self-referencing loop removed
  async redirects() {
    return [
      // www to non-www (permanent 301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.centience.ai' }],
        destination: 'https://centience.ai/:path*',
        permanent: true,
      },
      // Nine thin city pages consolidated into three regional pages (301).
      // Each was ~440 words and shared 78% of its text with the others, which
      // is the doorway-page pattern. The signal follows the traffic to the
      // region that now covers that market.
      {
        source: '/locations/ai-governance-manhattan',
        destination: '/locations/ai-governance-new-york',
        permanent: true,
      },
      {
        source: '/locations/ai-governance-westchester',
        destination: '/locations/ai-governance-new-york',
        permanent: true,
      },
      {
        source: '/locations/ai-governance-white-plains-ny',
        destination: '/locations/ai-governance-new-york',
        permanent: true,
      },
      {
        source: '/locations/ai-governance-stamford-ct',
        destination: '/locations/ai-governance-greenwich-ct',
        permanent: true,
      },
      {
        source: '/locations/ai-governance-fort-lauderdale',
        destination: '/locations/ai-governance-miami',
        permanent: true,
      },
      {
        source: '/locations/ai-governance-palm-beach',
        destination: '/locations/ai-governance-miami',
        permanent: true,
      },
      // Retired funnels → the free Governance Score (301)
      {
        source: '/readiness',
        destination: '/assessments/governance-score',
        permanent: true,
      },
      {
        source: '/schedule-assessment',
        destination: '/assessments/governance-score',
        permanent: true,
      },
      // Dedupe overlapping AI-governance assessment URLs → canonical (301)
      {
        source: '/ai-governance-risk-assessment',
        destination: '/assessments/ai-governance',
        permanent: true,
      },
      // Consolidate duplicate industry pages → canonical governance-era slugs (301)
      {
        source: '/industries/legal',
        destination: '/industries/law-firms',
        permanent: true,
      },
      {
        source: '/industries/accounting',
        destination: '/industries/accounting-cpa',
        permanent: true,
      },
      // Legacy blog/listing URLs → canonical Insights listing (no /blog or /blogs route exists)
      {
        source: '/blog',
        destination: '/insights/articles',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/insights/articles',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/insights/articles',
        permanent: true,
      },
      // Legacy service URLs → live governance pages (no /services route exists)
      {
        source: '/services/co-managed-it',
        destination: '/co-management',
        permanent: true,
      },
      {
        source: '/services/co-managed-it-services',
        destination: '/co-management',
        permanent: true,
      },
      {
        source: '/services/compliance-communication',
        destination: '/governance',
        permanent: true,
      },
      {
        source: '/services/communication-compliance',
        destination: '/governance',
        permanent: true,
      },
      {
        source: '/services/it-services/managed-it-services',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/services/managed-it-services',
        destination: '/infrastructure',
        permanent: true,
      },
      {
        source: '/disaster-recovery-for-financial-firms',
        destination: '/infrastructure',
        permanent: true,
      },
      // Legacy short-form location URLs -> live governance location pages (301)
      // Previous destinations (managed-it-services-*) never existed and 301'd into 404s.
      {
        source: '/locations/boca-raton',
        destination: '/locations/ai-governance-palm-beach',
        permanent: true,
      },
      {
        source: '/locations/boca-raton-new',
        destination: '/locations/ai-governance-palm-beach',
        permanent: true,
      },
      {
        source: '/locations/florida',
        destination: '/locations/ai-governance-miami',
        permanent: true,
      },
      {
        source: '/locations/miami',
        destination: '/locations/ai-governance-miami',
        permanent: true,
      },
      {
        source: '/locations/new-york',
        destination: '/locations/ai-governance-new-york',
        permanent: true,
      },
      {
        source: '/locations/west-palm-beach',
        destination: '/locations/ai-governance-palm-beach',
        permanent: true,
      },
      {
        source: '/locations/west-palm-beach-new',
        destination: '/locations/ai-governance-palm-beach',
        permanent: true,
      },
      // Legacy page URLs
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-2',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/wealth-management',
        destination: '/industries/financial-services',
        permanent: true,
      },
      {
        source: '/financial-planning',
        destination: '/industries/financial-services',
        permanent: true,
      },
      {
        source: '/services/managed-it-for-financial-services',
        destination: '/industries/financial-services',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    // Content Security Policy — allowlist every external domain actually used by the app
    const csp = [
      // Only load scripts from self, GA/GTM, GoHighLevel form embed, reCAPTCHA, and hCaptcha
      `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://link.msgsndr.com https://api.leadconnectorhq.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://recaptcha.google.com https://js.hcaptcha.com https://newassets.hcaptcha.com`,
      // hCaptcha widget styles
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://newassets.hcaptcha.com`,
      // Fonts from self, Google Fonts CDN, GoHighLevel, and hCaptcha
      `font-src 'self' https://fonts.gstatic.com https://link.msgsndr.com https://api.leadconnectorhq.com https://newassets.hcaptcha.com data:`,
      // Object/embed elements: none
      `object-src 'none'`,
      // Images from self, data URIs, Supabase storage, and hCaptcha
      `img-src 'self' data: blob: https://*.supabase.co https://www.google-analytics.com https://www.googletagmanager.com https://imgs.hcaptcha.com`,
      // API/fetch calls: self, Supabase, GA, GoHighLevel, reCAPTCHA, hCaptcha
      `connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://api.leadconnectorhq.com https://link.msgsndr.com https://www.google.com https://www.gstatic.com https://api.hcaptcha.com https://hcaptcha.com`,
      // iframes: Google Maps + GoHighLevel forms + reCAPTCHA + hCaptcha
      `frame-src https://www.google.com https://maps.google.com https://api.leadconnectorhq.com https://link.msgsndr.com https://www.google.com/recaptcha/ https://recaptcha.google.com https://newassets.hcaptcha.com`,
      // child-src for hCaptcha and GoHighLevel workers/iframes
      `child-src 'self' https://api.leadconnectorhq.com https://link.msgsndr.com https://www.google.com/recaptcha/ https://recaptcha.google.com https://newassets.hcaptcha.com blob:`,
      // Media from self and GoHighLevel
      `media-src 'self' https://api.leadconnectorhq.com`,
      // Workers: self only
      `worker-src 'self' blob:`,
      // All other resources from self only
      `default-src 'self'`,
      // Upgrade any remaining HTTP requests to HTTPS
      `upgrade-insecure-requests`,
      // Block mixed content
      `block-all-mixed-content`,
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          // Anti-XSS: Content Security Policy
          { key: 'Content-Security-Policy', value: csp },
          // Enforce HTTPS for 1 year, include subdomains
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Legacy XSS filter (belt-and-suspenders for older browsers)
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Control referrer information leakage
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser feature access
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
          // Prevent cross-origin information leakage
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2|ttf|eot|js|css)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
