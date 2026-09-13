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
  capture: vi.fn(),
});

describe("createCounter", () => {
  it("does not mayCount when Consent is unset, and does not init", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.record("cv");

    expect(counter.mayCount()).toBe(false);
    expect(adapter.init).not.toHaveBeenCalled();
    expect(adapter.capture).not.toHaveBeenCalled();
  });

  it("does not mayCount after Reject, persists the choice, and does not init", () => {
    const store = memoryStore();
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, store, adapter);

    counter.setConsent("reject");
    counter.record("cv");

    expect(store.read()).toBe("reject");
    expect(counter.mayCount()).toBe(false);
    expect(adapter.init).not.toHaveBeenCalled();
    expect(adapter.capture).not.toHaveBeenCalled();
  });

  it("does not mayCount after Accept on a non-production origin, persists the choice, and does not init", () => {
    const store = memoryStore();
    const adapter = fakeAdapter();
    const counter = createCounter("http://localhost:3000", store, adapter);

    counter.setConsent("accept");
    counter.record("cv");

    expect(store.read()).toBe("accept");
    expect(counter.mayCount()).toBe(false);
    expect(adapter.init).not.toHaveBeenCalled();
    expect(adapter.capture).not.toHaveBeenCalled();
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

  it("records $pageview after Accept on the production origin", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);

    counter.setConsent("accept");

    expect(adapter.capture).toHaveBeenCalledWith("$pageview");
  });

  it("records inquiry delivered after Accept on the production origin", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("inquiry", { status: "delivered" });

    expect(adapter.capture).toHaveBeenCalledWith("inquiry", {
      status: "delivered",
    });
  });

  it("records inquiry failed after Accept on the production origin", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("inquiry", { status: "failed" });

    expect(adapter.capture).toHaveBeenCalledWith("inquiry", {
      status: "failed",
    });
  });

  it("does not record inquiry ignored", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("inquiry", { status: "ignored" });

    expect(adapter.capture).not.toHaveBeenCalled();
  });

  it("does not record inquiry invalid", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("inquiry", { status: "invalid" });

    expect(adapter.capture).not.toHaveBeenCalled();
  });

  it("never passes Inquiry name, email, or project text as properties", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("inquiry", {
      status: "delivered",
      name: "Ada Lovelace",
      email: "ada@example.com",
      project: "I need a landing page for my bakery",
    });

    expect(adapter.capture).toHaveBeenCalledWith("inquiry", {
      status: "delivered",
    });
    expect(adapter.capture).not.toHaveBeenCalledWith(
      "inquiry",
      expect.objectContaining({
        name: "Ada Lovelace",
        email: "ada@example.com",
        project: "I need a landing page for my bakery",
      })
    );
  });

  it("records work_link with kind and project name", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("work_link", { kind: "live", project: "IP Tracker" });

    expect(adapter.capture).toHaveBeenCalledWith("work_link", {
      kind: "live",
      project: "IP Tracker",
    });
  });

  it("records work_link github with kind and project name", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("work_link", { kind: "github", project: "IP Tracker" });

    expect(adapter.capture).toHaveBeenCalledWith("work_link", {
      kind: "github",
      project: "IP Tracker",
    });
  });

  it("records cv with no properties", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("cv");

    expect(adapter.capture).toHaveBeenCalledWith("cv");
  });

  it("records social_pill with label", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);
    counter.setConsent("accept");
    adapter.capture.mockClear();

    counter.record("social_pill", { label: "Telegram" });

    expect(adapter.capture).toHaveBeenCalledWith("social_pill", {
      label: "Telegram",
    });
  });

  it("does not record when Consent is unset", () => {
    const adapter = fakeAdapter();
    const counter = createCounter(PRODUCTION_ORIGIN, memoryStore(), adapter);

    counter.record("cv");

    expect(adapter.capture).not.toHaveBeenCalled();
  });
});
