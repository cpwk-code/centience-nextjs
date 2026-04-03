'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const GONE_PARAMS = new Set([
  "page_id=989241",
  "p=988265",
  "p=988269",
  "p=989131",
  "page_id=987924",
  "page_id=91",
]);

const GONE_PATHS = [
  "/wp-content/themes/beratung",
  "/project/microsoft",
  "/services/it-services/business-continuity",
  "/services/it-services/mac-it-services-support",
];

interface GoneQueryParamGuardProps {
  children: React.ReactNode;
}

const GoneQueryParamGuardInner = ({ children }: GoneQueryParamGuardProps) => {
  const searchParams = useSearchParams();

  for (const [key, value] of (searchParams?.entries() ?? [])) {
    if (GONE_PARAMS.has(`${key}=${value}`)) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <h1 className="text-2xl font-bold">Page Not Found</h1>
        </div>
      );
    }
  }

  return <>{children}</>;
};

const GoneQueryParamGuard = ({ children }: GoneQueryParamGuardProps) => {
  return (
    <Suspense fallback={<>{children}</>}>
      <GoneQueryParamGuardInner>{children}</GoneQueryParamGuardInner>
    </Suspense>
  );
};

export default GoneQueryParamGuard;
