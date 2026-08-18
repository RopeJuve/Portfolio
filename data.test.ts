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
});
