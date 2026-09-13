import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createCookieStore } from "@/lib/consentCookie";
import { createCounter, type Consent } from "@/lib/count";

export const useConsent = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<ReturnType<typeof createCounter> | null>(null);
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Consent | null>(null);

  useEffect(() => {
    const store = createCookieStore();
    const counter = createCounter(window.location.origin, store);
    counterRef.current = counter;
    setChoice(store.read());
    setReady(true);
  }, []);

  useLayoutEffect(() => {
    if (!ready || choice !== null) {
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
  }, [ready, choice]);

  const handleAccept = () => {
    counterRef.current?.setConsent("accept");
    setChoice("accept");
  };

  const handleReject = () => {
    counterRef.current?.setConsent("reject");
    setChoice("reject");
  };

  return {
    showBar: ready && choice === null,
    handleAccept,
    handleReject,
    barRef,
  };
};
