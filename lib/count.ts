export type Consent = "accept" | "reject";

export type ConsentStore = {
  read: () => Consent | null;
  write: (consent: Consent) => void;
};

export type CountAdapter = {
  init: () => void;
};

const PRODUCTION_ORIGIN = "https://robert-shterjov.dev";

export const createCounter = (
  origin: string,
  store: ConsentStore,
  adapter: CountAdapter = { init: () => {} }
) => {
  const mayCount = () =>
    store.read() === "accept" && origin === PRODUCTION_ORIGIN;

  const setConsent = (consent: Consent) => {
    store.write(consent);
    if (mayCount()) {
      adapter.init();
    }
  };

  if (mayCount()) {
    adapter.init();
  }

  return { mayCount, setConsent };
};
