"use client";
import { useEffect, useRef, useCallback } from "react";

const SITE_KEY = "192c995a-cf56-4420-9c18-d6c8353845e8";

declare global {
  interface Window {
    hcaptcha?: {
      render: (container: HTMLElement, params: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface HCaptchaProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

const HCaptcha = ({ onVerify, onExpire }: HCaptchaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.hcaptcha || widgetIdRef.current !== null) return;

    widgetIdRef.current = window.hcaptcha.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: (token: string) => onVerify(token),
      "expired-callback": () => onExpire?.(),
      size: "normal",
    });
  }, [onVerify, onExpire]);

  useEffect(() => {
    // If hcaptcha script is already loaded
    if (window.hcaptcha) {
      renderWidget();
      return;
    }

    // Poll for hcaptcha to load
    const interval = setInterval(() => {
      if (window.hcaptcha) {
        clearInterval(interval);
        renderWidget();
      }
    }, 200);

    return () => {
      clearInterval(interval);
      if (widgetIdRef.current !== null && window.hcaptcha) {
        try {
          window.hcaptcha.remove(widgetIdRef.current);
        } catch {
          // widget already removed
        }
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  return <div ref={containerRef} />;
};

export default HCaptcha;
