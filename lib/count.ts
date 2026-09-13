export type Consent = "accept" | "reject";

export type ConsentStore = {
  read: () => Consent | null;
  write: (consent: Consent) => void;
};

export type CountAdapter = {
  init: () => void;
  capture: (event: string, properties?: Record<string, unknown>) => void;
};

export type CountEvent =
  | "$pageview"
  | "inquiry"
  | "work_link"
  | "cv"
  | "social_pill";

const PRODUCTION_ORIGIN = "https://robert-shterjov.dev";

type RecordFn = (
  event: CountEvent,
  properties?: Record<string, unknown>
) => void;

let boundRecord: RecordFn | null = null;

export const record: RecordFn = (event, properties) => {
  boundRecord?.(event, properties);
};

export const createCounter = (
  origin: string,
  store: ConsentStore,
  adapter: CountAdapter = { init: () => {}, capture: () => {} }
) => {
  const mayCount = () =>
    store.read() === "accept" && origin === PRODUCTION_ORIGIN;

  const recordEvent: RecordFn = (event, properties) => {
    if (!mayCount()) return;

    if (event === "$pageview" || event === "cv") {
      adapter.capture(event);
      return;
    }

    if (event === "inquiry") {
      const status = properties?.status;
      if (status !== "delivered" && status !== "failed") return;
      adapter.capture(event, { status });
      return;
    }

    if (event === "work_link") {
      const kind = properties?.kind;
      const project = properties?.project;
      if (kind !== "live" && kind !== "github") return;
      if (typeof project !== "string") return;
      adapter.capture(event, { kind, project });
      return;
    }

    if (event === "social_pill") {
      const label = properties?.label;
      if (typeof label !== "string") return;
      adapter.capture(event, { label });
    }
  };

  const startIfAllowed = () => {
    if (!mayCount()) return;
    adapter.init();
    recordEvent("$pageview");
  };

  const setConsent = (consent: Consent) => {
    store.write(consent);
    startIfAllowed();
  };

  startIfAllowed();
  boundRecord = recordEvent;

  return { mayCount, setConsent, record: recordEvent };
};
