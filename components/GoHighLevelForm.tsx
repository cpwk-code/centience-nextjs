"use client";
'use client';
import { useState, useEffect, useRef } from "react";
// react-helmet-async not needed in Next.js - preconnect links added to layout.tsx

interface GoHighLevelFormProps {
  formId: string;
  formName: string;
  height: number;
  mobileHeight?: number;
  className?: string;
  scrolling?: boolean;
}

const GoHighLevelForm = ({ 
  formId, 
  formName, 
  height, 
  mobileHeight,
  className = "",
  scrolling = false
}: GoHighLevelFormProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load the form embed script immediately after iframe is in DOM
    const loadScript = () => {
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = false; // Load synchronously for faster form initialization
        // Insert script right after the iframe for faster triggering
        if (iframeRef.current?.parentNode) {
          iframeRef.current.parentNode.insertBefore(script, iframeRef.current.nextSibling);
        } else {
          document.body.appendChild(script);
        }
      }
    };

    loadScript();
  }, []);

  const effectiveHeight = mobileHeight || height;

  return (
    <>
      {/* Resource hints injected via layout.tsx */}

      <div 
        className={`relative overflow-hidden ${className}`} 
        style={{ 
          height: `${height}px`,
        }}
      >
        {/* Mobile height override via CSS */}
        <style>{`
          @media (max-width: 768px) {
            .ghl-form-container-${formId} {
              height: ${effectiveHeight}px !important;
            }
          }
        `}</style>
        
        {/* Skeleton loader with pulse animation */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col gap-3 p-5 bg-card rounded-lg overflow-hidden">
            {/* Form field skeletons with pulse animation */}
            <div className="space-y-3 relative z-10">
              <div className="h-4 w-20 bg-muted/50 rounded animate-pulse" />
              <div className="h-10 w-full bg-muted/30 rounded animate-pulse" />
              
              <div className="h-4 w-16 bg-muted/50 rounded animate-pulse mt-3" />
              <div className="h-10 w-full bg-muted/30 rounded animate-pulse" />
              
              <div className="h-4 w-24 bg-muted/50 rounded animate-pulse mt-3" />
              <div className="h-10 w-full bg-muted/30 rounded animate-pulse" />
              
              <div className="h-4 w-14 bg-muted/50 rounded animate-pulse mt-3" />
              <div className="h-10 w-full bg-muted/30 rounded animate-pulse" />
              
              <div className="h-4 w-18 bg-muted/50 rounded animate-pulse mt-3" />
              <div className="h-24 w-full bg-muted/30 rounded animate-pulse" />
              
              <div className="h-11 w-full bg-gold/30 rounded animate-pulse mt-4" />
            </div>
          </div>
        )}
        
        <iframe
          ref={iframeRef}
          src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
          loading="eager"
          scrolling={scrolling ? "yes" : "no"}
          style={{ 
            display: "block",
            width: "100%", 
            height: "100%", 
            border: "none", 
            borderRadius: "8px",
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
            overflow: "hidden"
          }}
          className={`ghl-form-container-${formId}`}
          id={`inline-${formId}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={formName}
          data-height={height.toString()}
          data-layout-iframe-id={`inline-${formId}`}
          data-form-id={formId}
          title={formName}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  );
};

export default GoHighLevelForm;
