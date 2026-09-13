import { describe, expect, it, vi } from "vitest";
import { createCounter, type Consent, type ConsentStore } from "./count";

const PRODUCTION_ORIGIN = "https://robert-shterjov.dev";

const memoryStore = (initial: Consent | null = null): ConsentStore => {
  let value = initial;
  return {
    read: () => value,
    write: (next) => {
      value = next;
    },
  };
};

const fakeAdapter = () => ({
  init: vi.fn(),
});

describe("createCounter", () => {
  it("does not mayCount when Consent is unset, and does not init", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);

    expect(counter.mayCount()).toBe(false);
    expect(adapter.init).not.toHaveBeenCalled();
  });

  it("does not mayCount after Reject, persists the choice, and does not init", () => {
    const store = memoryStore();
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, store, adapter);

    counter.setConsent("reject");

    expect(store.read()).toBe("reject");
    expect(counter.mayCount()).toBe(false);
    expect(adapter.init).not.toHaveBeenCalled();
  });

  it("does not mayCount after Accept on a non-production origin, persists the choice, and does not init", () => {
    const store = memoryStore();
    const adapter = fakeAdapter();
    const counter = createCounter("http://localhost:3000", store, adapter);

    counter.setConsent("accept");

    expect(store.read()).toBe("accept");
    expect(counter.mayCount()).toBe(false);
    expect(adapter.init).not.toHaveBeenCalled();
  });

  it("mayCount after Accept on the production origin, persists the choice, and inits", () => {
    const store = memoryStore();
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, store, adapter);

    counter.setConsent("accept");

    expect(store.read()).toBe("accept");
    expect(counter.mayCount()).toBe(true);
    expect(adapter.init).toHaveBeenCalledOnce();
  });

  it("inits when stored Consent is already Accept on the production origin", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(
      PRODUCTION_ORIGIN,
      memoryStore("accept"),
      adapter
    );

    expect(counter.mayCount()).toBe(true);
    expect(adapter.init).toHaveBeenCalledOnce();
  });
});
