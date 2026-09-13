import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createCookieStore } from "@/lib/consentCookie";
import { createCounter, type Consent } from "@/lib/count";
import { createPosthogAdapter } from "@/lib/posthogAdapter";

export const useConsent = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<ReturnType<typeof createCounter> | null>(null);
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Consent | null>(null);
  const [barOpen, setBarOpen] = useState(false);

  useEffect(() => {
    const store = createCookieStore();
    const counter = createCounter(
      window.location.origin,
      store,
      createPosthogAdapter()
    );
    counterRef.current = counter;
    const stored = store.read();
    setChoice(stored);
    setBarOpen(stored === null);
    setReady(true);
  }, []);

  useLayoutEffect(() => {
    if (!ready || !barOpen) {
      document.documentElement.style.removeProperty("--consent-bar-offset");
      return;
    }

    const updateOffset = () => {
      const height = barRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty(
        "--consent-bar-offset",
        `${height}px`
      );
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("resize", updateOffset);
      document.documentElement.style.removeProperty("--consent-bar-offset");
    };
  }, [ready, barOpen]);

  useLayoutEffect(() => {
    if (!barOpen || choice === null) return;
    barRef.current?.focus();
  }, [barOpen, choice]);

  const handleChoose = (consent: Consent) => {
    counterRef.current?.setConsent(consent);
    setChoice(consent);
    setBarOpen(false);
  };

  const handleAccept = () => {
    handleChoose("accept");
  };

  const handleReject = () => {
    handleChoose("reject");
  };

  const handleReopen = () => {
    setBarOpen(true);
  };

  return {
    showBar: ready && barOpen,
    handleAccept,
    handleReject,
    handleReopen,
    barRef,
  };
};
