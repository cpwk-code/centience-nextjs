'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getStoredConsent, type ConsentValue } from './ConsentBanner';

const GA_ID = 'G-T0E3G4JL6X';

const GoogleAnalyticsInner = ({ consent }: { consent: ConsentValue }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const pagePath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      window.gtag('config', GA_ID, { page_path: pagePath });
    }
  }, [pathname, searchParams]);

  if (consent !== 'granted') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
};

const GoogleAnalytics = () => {
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
    const handler = (e: Event) => setConsent((e as CustomEvent<ConsentValue>).detail);
    window.addEventListener('centience_consent_update', handler);
    return () => window.removeEventListener('centience_consent_update', handler);
  }, []);

  if (consent !== 'granted') return null;

  return <GoogleAnalyticsInner consent={consent} />;
};

export default GoogleAnalytics;
