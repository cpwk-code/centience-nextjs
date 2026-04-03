"use client";
'use client';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

interface RedirectProps {
  to: string;
}

const Redirect = ({ to }: RedirectProps) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return null;
};

export default Redirect;
