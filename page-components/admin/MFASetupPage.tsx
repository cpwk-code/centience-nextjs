"use client";
'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// MFA setup is now handled on the login page.
// This page redirects to the CMS dashboard.
const MFASetupPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/cms');
  }, [router]);
  return null;
};

export default MFASetupPage;
