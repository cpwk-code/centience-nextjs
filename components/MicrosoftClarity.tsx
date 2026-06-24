'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';
import { getStoredConsent, type ConsentValue } from './ConsentBanner';

const MicrosoftClarity = () => {
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
    const handler = (e: Event) => setConsent((e as CustomEvent<ConsentValue>).detail);
    window.addEventListener('centience_consent_update', handler);
    return () => window.removeEventListener('centience_consent_update', handler);
  }, []);

  if (consent !== 'granted') return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","x8l56p9ikd");`}
    </Script>
  );
};

export default MicrosoftClarity;
