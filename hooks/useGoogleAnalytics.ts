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
      // Track page view for primary GA property
      window.gtag("config", "G-P3F69D7TH5", { page_path: pagePath });
      // Track page view for legacy GA property
      window.gtag("config", "G-DYX3P0W32T", { page_path: pagePath });
      // Track page view for domain verification GA property
      window.gtag("config", "G-JGHL5GHDJX", { page_path: pagePath });
    }
  }, [pathname, searchParams]);
};

export default useGoogleAnalytics;
