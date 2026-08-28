import { describe, expect, it } from "vitest";
import { data } from "./data";

describe("data", () => {
  it("exposes a non-empty header and subtitle", () => {
    expect(data.title.length).toBeGreaterThan(0);
    expect(data.subTitle.length).toBeGreaterThan(0);
  });

  it("exposes a non-empty Hero eyebrow line", () => {
    expect(data.eyebrow.length).toBeGreaterThan(0);
  });

  it("frames the Hero as full-stack, not frontend-only", () => {
    expect(data.title).toMatch(/full-stack/i);
    expect(data.title).not.toMatch(/frontend/i);
  });

  it("uses the positioning statement as the Hero subtitle", () => {
    expect(data.subTitle).toBe(
      "I design and develop modern websites, landing pages, and custom web applications for businesses and startups."
    );
  });

  it("expands the Tech Marquee stack to the full-stack toolset without losing the frontend entries", () => {
    const names = data.techStack.map((tech) => tech.name);

    for (const entry of [
      "HTML",
      "JavaScript",
      "Sass",
      "React",
      "Git",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Cloud",
      "Firebase",
    ]) {
      expect(names).toContain(entry);
    }
    expect(data.techStack).toHaveLength(11);
  });

  it("gives every Tech Marquee entry a non-empty icon path", () => {
    for (const tech of data.techStack) {
      expect(tech.iconPath.length).toBeGreaterThan(0);
    }
  });

  it("lists the 4 services in order", () => {
    expect(data.services.map((service) => service.title)).toEqual([
      "Full-stack build",
      "API & backend",
      "Interface build",
      "Fix & refactor",
    ]);
  });

  it("gives every service a description and at least one tech chip", () => {
    for (const service of data.services) {
      expect(service.description.length).toBeGreaterThan(0);
      expect(service.techChips.length).toBeGreaterThan(0);
    }
  });

  it("does not put tier, capabilities, or a price/rate field on a service", () => {
    for (const service of data.services) {
      expect(service).not.toHaveProperty("tier");
      expect(service).not.toHaveProperty("capabilities");
      expect(service).not.toHaveProperty("price");
      expect(service).not.toHaveProperty("rate");
      expect(service).not.toHaveProperty("timeline");
    }
  });

  it("exposes a non-empty Services availability badge", () => {
    expect(data.availability.length).toBeGreaterThan(0);
  });

  it("frames About as full-stack, not frontend-only", () => {
    const aboutText = data.aboutMe.join(" ");
    expect(aboutText).toMatch(/full-stack/i);
    expect(aboutText).not.toMatch(/frontend developer/i);
  });

  it("gives About at least one non-empty paragraph", () => {
    expect(data.aboutMe.length).toBeGreaterThan(0);
    for (const paragraph of data.aboutMe) {
      expect(paragraph.length).toBeGreaterThan(0);
    }
  });
});
