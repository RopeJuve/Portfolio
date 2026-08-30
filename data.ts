import { HomeData } from "./types";

export const data: HomeData = {
  eyebrow: "Full-stack web development · React & Node · Based in Germany",
  title: "Robert\nShterjov builds\nfull-stack\nweb products\nend to end",
  subTitle:
    "I design and develop modern websites, landing pages, and custom web applications for businesses and startups.",
  heroImage: "/images/hero.png",
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
  availability: "Available — two slots, Q4 2026",
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
      projectImg: "./images/hacker-news.png",
      gitHubLink: "https://github.com/RopeJuve/hacker-news.git",
      siteLink: "https://hacker-news-wbs.netlify.app/",
    },
    {
      projectName: "IP-TRACKER",
      description:
        "IP Tracker is a web application that offers comprehensive information about any IP address. Utilizing React, Tailwind CSS, and React-Leaflet, it retrieves IP and country data from APIs and presents the location on an interactive map",
      techNames: ["React", "Java Script", "Tailwind", "API"],
      projectImg: "./images/ip-tracker.png",
      gitHubLink: "https://github.com/RopeJuve/ip-location.git",
      siteLink: "https://ip-tracker-wbs.netlify.app/",
    },
    {
      projectName: "AUDIOPHILE E-COMMERCE WEBSITE",
      description:
        "Multi-page Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techNames: ["React", "Java Script", "Sass", "Redux"],
      projectImg: "./images/Laptop.png",
      gitHubLink:
        "https://github.com/RopeJuve/audiophile-e-commerce-website.git",
      siteLink: "https://audiophile-rope.netlify.app/",
    },
    {
      projectName: "Yoga E-COMMERCE WEBSITE",
      description:
        "Landing page for Yoga Course. Figma conversion made using UIHUT design files. Responsive across devices.",
      techNames: ["React", "Java Script", "css"],
      projectImg: "./images/yoga.png",
      gitHubLink: "https://github.com/RopeJuve/YogaCourse.git",
      siteLink: "https://yoga-course.netlify.app/",
    },
    {
      projectName: "Space Tourism WEBSITE",
      description:
        "Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techNames: ["React", "Java Script", "css"],
      projectImg: "./images/space.png",
      gitHubLink: "https://github.com/RopeJuve/space-tourism.git",
      siteLink: "https://space-tourism-vite-react.netlify.app/",
    },
    {
      projectName: "Single product Page",
      description:
        "Product-page Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techNames: ["React", "Java Script", "css"],
      projectImg: "./images/productPage.png",
      gitHubLink: "https://github.com/RopeJuve/product-page.git",
      siteLink: "https://e-commerce-product-page-challenge.netlify.app/",
    },
  ],
  workMeta: "06 PROJECTS · 2023–2024",
  contactMe:
    "Tell me about the project — scope, timeline, and what already exists. I reply within a working day.",
  contactLocale: "Germany · CET · Remote friendly",
  footerName: `© ${new Date().getFullYear()} ROBERT SHTERJOV`,
  footerRole: "FULL-STACK DEVELOPER",
  navLinks: ["work", "services", "stack", "about", "contact"],
  tickerWords: [
    "Full-stack build",
    "API & backend",
    "Interface build",
    "Fix & refactor",
  ],
};
