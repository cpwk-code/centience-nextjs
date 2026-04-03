'use client';
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

let cachedSiteKey: string | null = null;
let inflight: Promise<string | null> | null = null;

export function useHCaptchaSiteKey() {
  const [siteKey, setSiteKey] = useState<string | null>(cachedSiteKey);
  const [loading, setLoading] = useState<boolean>(!cachedSiteKey);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (cachedSiteKey) {
        setSiteKey(cachedSiteKey);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        inflight ??= (async () => {
          const { data, error } = await supabase.functions.invoke("get-hcaptcha-sitekey", {
            body: {},
          });

          if (error) throw error;
          const key = (data as { siteKey?: string } | null)?.siteKey;
          return typeof key === "string" && key.length > 0 ? key : null;
        })();

        const key = await inflight;
        if (!key) throw new Error("Missing site key");

        cachedSiteKey = key;

        if (!cancelled) {
          setSiteKey(key);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) {
          setError("Captcha configuration error");
          setSiteKey(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { siteKey, loading, error };
}
