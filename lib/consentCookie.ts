import type { Consent, ConsentStore } from "./count";

const COOKIE_NAME = "consent";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

const parseConsent = (cookie: string): Consent | null => {
  const match = cookie.match(
    new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=(accept|reject)(?:;|$)`)
  );
  if (match?.[1] === "accept" || match?.[1] === "reject") {
    return match[1];
  }
  return null;
};

export const createCookieStore = (): ConsentStore => ({
  read: () => {
    if (typeof document === "undefined") return null;
    return parseConsent(document.cookie);
  },
  write: (consent) => {
    if (typeof document === "undefined") return;
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${COOKIE_NAME}=${consent}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
  },
});
