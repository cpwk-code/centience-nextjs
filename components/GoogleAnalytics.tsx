'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { type ConsentValue } from './ConsentBanner';

const GA_ID = 'G-T0E3G4JL6X';

/**
 * Google Analytics 4 with Consent Mode v2 (Advanced).
 *
 * GA loads on every page, but all consent signals default to DENIED.
 * In the denied state GA sends cookieless pings only — no cookies, no
 * identifiers — which feed Google's behavioral modeling so aggregate
 * traffic is still measured. When the user clicks "Accept" on the
 * ConsentBanner, consent is upgraded to granted and full (cookie-based)
 * analytics begin. Declining leaves it cookieless.
 *
 * Note: cookieless pings DO leave the browser before consent. That is the
 * intended mechanism of Advanced Consent Mode and the reason the banner copy
 * says "cookieless measurement runs by default" rather than "no data is
 * collected." Clarity remains fully gated (see MicrosoftClarity.tsx).
 */
const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reflect live consent changes (user clicks Accept/Decline mid-session).
  useEffect(() => {
    const handler = (e: Event) => {
      const value = (e as CustomEvent<ConsentValue>).detail;
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          analytics_storage: value === 'granted' ? 'granted' : 'denied',
        });
      }
    };
    window.addEventListener('centience_consent_update', handler);
    return () => window.removeEventListener('centience_consent_update', handler);
  }, []);

  // Page views on SPA navigation (a cookieless ping while consent is denied).
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const pagePath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      window.gtag('config', GA_ID, { page_path: pagePath });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Consent Mode v2 defaults — pushed to dataLayer before config runs.
          All signals denied by default; returning users who already granted
          are upgraded immediately so their session is tracked in full. */}
      <Script id="ga-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', false);
          try {
            if (localStorage.getItem('centience_consent') === 'granted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch (e) {}
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`gtag('js', new Date()); gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
