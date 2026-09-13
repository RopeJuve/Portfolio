import { afterEach, describe, expect, it, vi } from "vitest";
import { submitInquiry } from "./submitInquiry";

const validInquiry = {
  user_name: "Ada",
  user_last_name: "Lovelace",
  user_email: "ada@example.com",
  message: "I need a landing page for my bakery",
};

describe("submitInquiry", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("delivers a valid Inquiry with name, email, project text, and CET arrival time", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-15T11:00:00.000Z"));

    const delivered: string[] = [];
    const result = await submitInquiry(validInquiry, async (text) => {
      delivered.push(text);
    });

    expect(result).toEqual({ status: "delivered" });
    expect(delivered).toEqual([
      [
        "Inquiry",
        "First name: Ada",
        "Last name: Lovelace",
        "Email: ada@example.com",
        "Project: I need a landing page for my bakery",
        "Arrived: 15 January 2026, 12:00 CET",
      ].join("\n"),
    ]);
  });

  it("labels a summer arrival in CEST", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-15T11:00:00.000Z"));

    const delivered: string[] = [];
    await submitInquiry(validInquiry, async (text) => {
      delivered.push(text);
    });

    expect(delivered[0]).toContain("Arrived: 15 July 2026, 13:00 CEST");
  });

  it("rejects an Inquiry with invalid fields and does not deliver", async () => {
    const delivered: string[] = [];
    const result = await submitInquiry(
      {
        user_name: "A",
        user_last_name: "L",
        user_email: "not-an-email",
        message: "too short",
      },
      async (text) => {
        delivered.push(text);
      }
    );

    expect(result).toEqual({ status: "invalid" });
    expect(delivered).toEqual([]);
  });

  it("returns failed when the deliver adapter rejects", async () => {
    const result = await submitInquiry(validInquiry, async () => {
      throw new Error("telegram unavailable");
    });

    expect(result).toEqual({ status: "failed" });
  });
});
