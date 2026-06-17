"use client";
import Script from "next/script";
import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

const GA_ID = "G-T0E3G4JL6X";

const GoogleAnalytics = () => {
  useGoogleAnalytics();
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

export default GoogleAnalytics;
