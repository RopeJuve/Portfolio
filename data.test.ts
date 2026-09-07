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
    expect(data.title.replace(/\s+/g, " ")).toMatch(/web products end to end/i);
    expect(data.title).not.toMatch(/frontend/i);
  });

  it("uses the positioning statement as the Hero subtitle", () => {
    expect(data.subTitle).toBe(
      "I design and develop modern websites, landing pages, and custom web applications for businesses and startups."
    );
  });

  it("lists the Stack technologies across the five rows", () => {
    const names = data.techStack.flatMap((row) => row.technologies);

    for (const entry of [
      "React",
      "Hooks",
      "Router",
      "Redux",
      "Vite",
      "Node.js",
      "Express",
      "REST APIs",
      "Auth",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "SQL",
      "Sass",
      "Tailwind CSS",
      "Semantics",
      "A11y",
      "Git",
      "Docker",
      "CI/CD",
      "Netlify & Render",
    ]) {
      expect(names).toContain(entry);
    }
  });

  it("groups the Stack into labeled hairline rows", () => {
    expect(data.techStack.map((row) => row.label)).toEqual([
      "Frontend",
      "Backend",
      "Data",
      "Styling",
      "Delivery",
    ]);
    for (const row of data.techStack) {
      expect(row.technologies.length).toBeGreaterThan(0);
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

  it("exposes work meta, footer role, and contact locale", () => {
    expect(data.workMeta).toBe("06 PROJECTS · 2023–2024");
    expect(data.footerRole).toBe("FULL-STACK DEVELOPER");
    expect(data.contactLocale.length).toBeGreaterThan(0);
  });

  it("lists the main nav section ids in order", () => {
    expect(data.navLinks).toEqual([
      "work",
      "services",
      "stack",
      "about",
      "faq",
      "contact",
    ]);
  });

  it("exposes ticker capability words from the four services", () => {
    expect(data.tickerWords).toEqual([
      "Full-stack build",
      "API & backend",
      "Interface build",
      "Fix & refactor",
    ]);
  });

  it("lists social links as text labels, not icons", () => {
    expect(data.socialLinks.map((link) => link.label)).toEqual([
      "GitHub",
      "LinkedIn",
      "WhatsApp",
      "Telegram",
    ]);
    for (const link of data.socialLinks) {
      expect(link.href.length).toBeGreaterThan(0);
      expect(link).not.toHaveProperty("socialIcon");
    }
  });

  // SEO / GEO invariants -------------------------------------------------------

  it("has hero, profile, and all project image paths that are root-absolute", () => {
    expect(data.heroImage.mobile).toMatch(/^\//);
    expect(data.heroImage.tablet).toMatch(/^\//);
    expect(data.heroImage.desktop).toMatch(/^\//);
    expect(data.profileImage).toMatch(/^\//);
    for (const project of data.projects) {
      expect(project.projectImg).toMatch(/^\//);
    }
  });

  it("exposes a production siteOrigin that is the canonical HTTPS origin", () => {
    expect(data.siteOrigin).toBe("https://robert-shterjov.dev");
  });

  it("has a documentTitle containing freelance, full-stack, Germany, and Robert Shterjov", () => {
    const title = data.documentTitle.toLowerCase();
    expect(title).toContain("freelance");
    expect(title).toContain("full-stack");
    expect(title).toContain("germany");
    expect(data.documentTitle).toContain("Robert Shterjov");
  });

  it("has a documentTitle that contains no price or rate", () => {
    expect(data.documentTitle).not.toMatch(/€|\$|£|\/h|per hour|rate|price/i);
  });

  it("has a documentDescription that starts with the Positioning Statement", () => {
    expect(data.documentDescription).toMatch(
      /^I design and develop modern websites/
    );
  });

  it("has a documentDescription in the 150–160 character range", () => {
    expect(data.documentDescription.length).toBeGreaterThanOrEqual(150);
    expect(data.documentDescription.length).toBeLessThanOrEqual(160);
  });

  it("has a documentDescription containing Germany, availability, and reply time", () => {
    const desc = data.documentDescription.toLowerCase();
    expect(desc).toContain("germany");
    expect(desc).toContain("q4 2026");
    expect(desc).toContain("working-day");
  });

  it("has a documentDescription that contains no price or rate", () => {
    expect(data.documentDescription).not.toMatch(
      /€|\$|£|\/h|per hour|rate|price/i
    );
  });

  it("has a socialCardImage that is root-absolute and is not the heroImage", () => {
    expect(data.socialCardImage).toMatch(/^\//);
    expect(data.socialCardImage).not.toBe(data.heroImage);
  });

  it("exposes at least 5 FAQ items, each with a non-empty question and answer", () => {
    expect(data.faq.length).toBeGreaterThanOrEqual(5);
    for (const item of data.faq) {
      expect(item.question.length).toBeGreaterThan(0);
      expect(item.answer.length).toBeGreaterThan(0);
    }
  });

  it("has FAQ answers that mention availability or reply time", () => {
    const combinedAnswers = data.faq.map((i) => i.answer).join(" ");
    expect(combinedAnswers).toMatch(/slot|available/i);
    expect(combinedAnswers).toMatch(/working day/i);
  });

  it("has FAQ answers that contain no price or rate", () => {
    for (const item of data.faq) {
      expect(item.answer).not.toMatch(/€|\$|£|\/h|per hour|\brate\b|\bprice\b/i);
    }
  });
});
