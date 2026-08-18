import { describe, expect, it } from "vitest";
import { data } from "./data";

describe("data", () => {
  it("exposes a non-empty header and subtitle", () => {
    expect(data.header.length).toBeGreaterThan(0);
    expect(data.subtitle.length).toBeGreaterThan(0);
  });

  it("frames the Hero as full-stack, not frontend-only", () => {
    expect(data.header).toMatch(/full-stack/i);
    expect(data.header).not.toMatch(/frontend/i);
  });

  it("uses the positioning statement as the Hero subtitle", () => {
    expect(data.subtitle).toBe(
      "I design and develop modern websites, landing pages, and custom web applications for businesses and startups."
    );
  });
});
