'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'centience_consent';

export type ConsentValue = 'granted' | 'denied';

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  return (localStorage.getItem(CONSENT_KEY) as ConsentValue) ?? null;
}

export function setStoredConsent(value: ConsentValue) {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent('centience_consent_update', { detail: value }));
}

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    setStoredConsent('granted');
    setVisible(false);
  };

  const decline = () => {
    setStoredConsent('denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-card border-t border-border shadow-xl">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          We use analytics tools (Google Analytics, Microsoft Clarity) to understand site usage and
          improve our services. No data is collected until you consent.{' '}
          <Link href="/privacy-policy" className="text-accent underline hover:text-accent/80 transition-colors">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm font-semibold border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Accept Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
