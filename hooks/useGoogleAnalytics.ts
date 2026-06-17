'use client';
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const useGoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      const pagePath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      window.gtag("config", "G-T0E3G4JL6X", { page_path: pagePath });
    }
  }, [pathname, searchParams]);
};

export default useGoogleAnalytics;
