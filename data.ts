import { HomeData } from "./types";

export const data: HomeData = {
  eyebrow: "Full-stack web development · React & Node · Based in Germany",
  title: "Robert\nShterjov builds\nfull-stack\nweb products\nend to end",
  subTitle:
    "I design and develop modern websites, landing pages, and custom web applications for businesses and startups.",
  heroImage: {
    mobile: "/images/hero-mobile.webp",
    tablet: "/images/hero-tablet.webp",
    desktop: "/images/hero-desktop.webp",
  },
  profileImage: "/images/profile.png",
  techStack: [
    {
      label: "Frontend",
      technologies: ["React", "Hooks", "Router", "Redux", "Vite"],
    },
    {
      label: "Backend",
      technologies: ["Node.js", "Express", "REST APIs", "Auth"],
    },
    {
      label: "Data",
      technologies: ["PostgreSQL", "MongoDB", "Mongoose", "SQL"],
    },
    {
      label: "Styling",
      technologies: ["Sass", "Tailwind CSS", "Semantics", "A11y"],
    },
    {
      label: "Delivery",
      technologies: ["Git", "Docker", "CI/CD", "Netlify & Render"],
    },
  ],
  availability: "Available — now",
  services: [
    {
      title: "Full-stack build",
      description:
        "A complete web application built end to end — from the first pixel to the server handling your traffic — so you launch with something that actually works for your business.",
      techChips: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "API & backend",
      description:
        "A reliable backend and API layer that powers your product, handles your data securely, and scales as your traffic grows.",
      techChips: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "Interface build",
      description:
        "A fast, polished front end that turns visitors into customers — built to match your brand and work on every device.",
      techChips: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Fix & refactor",
      description:
        "Inherited a codebase that's slowing you down? I diagnose the problems and ship fixes and improvements without disrupting what already works.",
      techChips: ["Debugging", "Refactoring", "Performance"],
    },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/RopeJuve" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/robert-shterjov/" },
    { label: "WhatsApp", href: "https://wa.me/4917621955050" },
    { label: "Telegram", href: "https://t.me/RopeShterjov" },
  ],
  aboutMe: [
    "Hello, I'm Robert Shterjov, a full-stack web developer based in Germany. I design and develop modern websites, landing pages, and custom web applications for businesses and startups — from the first pixel to the server handling their traffic.",
    "I work closely with clients to understand what their business actually needs, then build for it end to end: a fast, polished experience on the front end backed by a reliable application on the back end. Communication, attention to detail, and delivering results my clients can measure are my priorities.",
    "Whether you need a website that converts visitors into customers or a custom application built around how you work, I'm here to turn that into reality. Get in touch, and let's make something exceptional!",
  ],
  projects: [
    {
      projectName: "hacker news",
      description:
        "The Hacker News Project is a React-based web app that displays the latest Tech News, styled with Tailwind CSS and fetching data from the Hacker News API. Users can browse top stories in a clean, responsive interface.",
      techNames: ["React", "Java Script", "Tailwind", "API"],
      projectImg: "/images/hacker-news.png",
      gitHubLink: "https://github.com/RopeJuve/hacker-news.git",
      siteLink: "https://hacker-news-wbs.netlify.app/",
    },
    {
      projectName: "IP-TRACKER",
      description:
        "IP Tracker is a web application that offers comprehensive information about any IP address. Utilizing React, Tailwind CSS, and React-Leaflet, it retrieves IP and country data from APIs and presents the location on an interactive map",
      techNames: ["React", "Java Script", "Tailwind", "API"],
      projectImg: "/images/ip-tracker.png",
      gitHubLink: "https://github.com/RopeJuve/ip-location.git",
      siteLink: "https://ip-tracker-wbs.netlify.app/",
    },
    {
      projectName: "AUDIOPHILE E-COMMERCE WEBSITE",
      description:
        "Multi-page Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techNames: ["React", "Java Script", "Sass", "Redux"],
      projectImg: "/images/Laptop.png",
      gitHubLink:
        "https://github.com/RopeJuve/audiophile-e-commerce-website.git",
      siteLink: "https://audiophile-rope.netlify.app/",
    },
    {
      projectName: "Yoga E-COMMERCE WEBSITE",
      description:
        "Landing page for Yoga Course. Figma conversion made using UIHUT design files. Responsive across devices.",
      techNames: ["React", "Java Script", "css"],
      projectImg: "/images/yoga.png",
      gitHubLink: "https://github.com/RopeJuve/YogaCourse.git",
      siteLink: "https://yoga-course.netlify.app/",
    },
    {
      projectName: "Space Tourism WEBSITE",
      description:
        "Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techNames: ["React", "Java Script", "css"],
      projectImg: "/images/space.png",
      gitHubLink: "https://github.com/RopeJuve/space-tourism.git",
      siteLink: "https://space-tourism-vite-react.netlify.app/",
    },
    {
      projectName: "Single product Page",
      description:
        "Product-page Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techNames: ["React", "Java Script", "css"],
      projectImg: "/images/productPage.png",
      gitHubLink: "https://github.com/RopeJuve/product-page.git",
      siteLink: "https://e-commerce-product-page-challenge.netlify.app/",
    },
  ],
  workMeta: "06 PROJECTS",
  contactMe:
    "Tell me about the project — scope, timeline, and what already exists. I reply within a working day.",
  contactLocale: "Germany · CET · Remote friendly",
  footerName: `© ${new Date().getFullYear()} ROBERT SHTERJOV`,
  footerRole: "FULL-STACK DEVELOPER",
  navLinks: ["work", "services", "stack", "about", "faq", "contact"],
  tickerWords: [
    "Full-stack build",
    "API & backend",
    "Interface build",
    "Fix & refactor",
  ],

  // SEO / GEO fields
  siteOrigin: "https://robert-shterjov.dev",
  documentTitle:
    "Freelance Full-Stack Web Developer in Germany — Robert Shterjov",
  documentDescription:
    "I design and develop modern websites, landing pages, and custom web applications for businesses and startups. Germany · two slots, Q4 2026 · working-day reply.",
  socialCardImage: "/images/social-card.png",
  faq: [
    {
      question: "What does full-stack actually mean on your projects?",
      answer:
        "I own the feature end to end: the data model, the API layer, the UI, and the deployment. You deal with one person for the whole build, so decisions are faster and nothing falls between layers. If a problem starts in the database and surfaces in the browser, I find and fix it.",
    },
    {
      question: "How do you scope and quote a project?",
      answer:
        "For well-defined work I quote a fixed amount after a short discovery call — usually one conversation is enough. For open-ended or maintenance work I bill by the day. I won't lock you into a rolling commitment; most projects quote to a feature list and a clear timeline.",
    },
    {
      question: "Can you take over an existing codebase?",
      answer:
        "Yes — this is the most common real engagement. I start with a short audit to understand what is there, what is fragile, and what actually needs changing. Rewrites are a last resort; most problems are better solved by adding tests, tightening the build, and fixing the specific parts blocking progress.",
    },
    {
      question: "Do you work with designers, or do you handle design yourself?",
      answer:
        "Both. With a designer I work from Figma files and build pixel-faithful to the spec. Without one, I design in the browser — component-first, using real content and your brand constraints. I do not produce polished mockups as standalone deliverables; the running application is the design.",
    },
    {
      question: "What happens after the project launches?",
      answer:
        "Two weeks of fixes included — anything that breaks in the immediate post-launch window is my problem to resolve. After that I am available for a capped weekly retainer if you need ongoing changes, or you take the repo to your own team. Handover documentation ships with every delivery.",
    },
    {
      question: "Where are you based and how do you work remotely?",
      answer:
        "Germany — CET. I default to async: end-of-day updates, decisions in writing, work visible in a shared repo. Available — two slots, Q4 2026 — and I reply within a working day. For clients in a significantly different timezone we agree a short daily overlap at the start.",
    },
  ],
};
