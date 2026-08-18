import { describe, expect, it } from "vitest";
import { data } from "./data";

describe("data", () => {
  it("exposes a non-empty header and subtitle", () => {
    expect(data.header.length).toBeGreaterThan(0);
    expect(data.subtitle.length).toBeGreaterThan(0);
  });
});
