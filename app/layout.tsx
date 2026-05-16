import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import QueryProvider from '@/components/QueryProvider';
import { AuthProvider } from '@/contexts/AuthContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ScrollToTop from '@/components/ScrollToTop';

const inter = DM_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://centience.ai'),
  title: {
    default: 'Centience — AI & Technology Governance for Regulated Organizations',
    template: '%s',
  },
  description:
    'Centience helps financial, healthcare, and regulated firms build secure, compliant technology environments that withstand regulatory scrutiny. AI governance, cybersecurity, and infrastructure oversight.',
  keywords: [
    'AI governance',
    'technology governance',
    'cybersecurity governance',
    'regulated industries',
    'compliance',
    'NIST AI RMF',
    'ISO 42001',
    'financial services compliance',
    'healthcare compliance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://centience.ai',
    siteName: 'Centience',
    title: 'Centience — AI & Technology Governance for Regulated Organizations',
    description:
      'Centience helps financial, healthcare, and regulated firms build secure, compliant technology environments that withstand regulatory scrutiny.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Centience — AI & Technology Governance',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centience — AI & Technology Governance for Regulated Organizations',
    description:
      'AI governance, cybersecurity, and infrastructure oversight for regulated organizations.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://centience.ai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        {/* Preconnect for performance — reduces DNS + TLS handshake latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://js.hcaptcha.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://newassets.hcaptcha.com" />
        <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Suspense fallback={null}><GoogleAnalytics /></Suspense>
        <QueryProvider>
          <AuthProvider>
            <TooltipProvider>
              <Suspense fallback={null}><ScrollToTop /></Suspense>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
