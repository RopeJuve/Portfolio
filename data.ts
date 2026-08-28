import {
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faCss3Alt,
  faLinkedin,
  faGithub,
  faWhatsappSquare,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import {
  siHtml5,
  siJavascript,
  siSass,
  siReact,
  siGit,
  siNextdotjs,
  siNodedotjs,
  siExpress,
  siMongodb,
  siGooglecloud,
  siFirebase,
} from "simple-icons";


import { HomeData } from "./types";

export const data: HomeData = {
  eyebrow: "Full-stack web development · React & Node · Based in Germany",
  title: "Hallo, I'm Robert Shterjov — Full-Stack Web Developer",
  subTitle:
    "I design and develop modern websites, landing pages, and custom web applications for businesses and startups.",
  profileImage: "/images/hero.png",
  techStack: [
    { name: "HTML", iconPath: siHtml5.path },
    { name: "JavaScript", iconPath: siJavascript.path },
    { name: "Sass", iconPath: siSass.path },
    { name: "React", iconPath: siReact.path },
    { name: "Git", iconPath: siGit.path },
    { name: "Next.js", iconPath: siNextdotjs.path },
    { name: "Node.js", iconPath: siNodedotjs.path },
    { name: "Express", iconPath: siExpress.path },
    { name: "MongoDB", iconPath: siMongodb.path },
    { name: "Google Cloud", iconPath: siGooglecloud.path },
    { name: "Firebase", iconPath: siFirebase.path },
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
    { socialIcon: faGithub, socialLink: 'https://github.com/RopeJuve' },
    { socialIcon: faLinkedin, socialLink: 'https://www.linkedin.com/in/robert-shterjov/' },
    { socialIcon: faWhatsappSquare, socialLink: 'https://wa.me/4917621955050' },
    { socialIcon: faTelegramPlane, socialLink: 'https://t.me/RopeShterjov' }
  ],
  aboutMe: [
    "Hello, I'm Robert Shterjov, a full-stack web developer based in Germany. I design and develop modern websites, landing pages, and custom web applications for businesses and startups — from the first pixel to the server handling their traffic.",
    "I work closely with clients to understand what their business actually needs, then build for it end to end: a fast, polished experience on the front end backed by a reliable application on the back end. Communication, attention to detail, and delivering results my clients can measure are my priorities.",
    "Whether you need a website that converts visitors into customers or a custom application built around how you work, I'm here to turn that into reality. Get in touch, and let's make something exceptional!",
  ],
  projects: [
    {
      projectName: "hacker news",
      description: "The Hacker News Project is a React-based web app that displays the latest Tech News, styled with Tailwind CSS and fetching data from the Hacker News API. Users can browse top stories in a clean, responsive interface.",
      techTitle: "MADE WITH",
      techNames: [
        { skillIcon: faReact, skillName: "React" },
        { skillIcon: faJsSquare, skillName: "Java Script" },
        { skillIcon: faCss3Alt, skillName: "Tailwind" },
        { skillIcon: faCss3Alt, skillName: "API" }
      ],
      projectImg: "./images/hacker-news.png",
      gitHubLink:
        "https://github.com/RopeJuve/hacker-news.git",
      siteLink: "https://hacker-news-wbs.netlify.app/",
    },
    {
      projectName: "IP-TRACKER",
      description:
        "IP Tracker is a web application that offers comprehensive information about any IP address. Utilizing React, Tailwind CSS, and React-Leaflet, it retrieves IP and country data from APIs and presents the location on an interactive map",
      techTitle: "MADE WITH",
      techNames: [
        { skillIcon: faReact, skillName: "React" },
        { skillIcon: faJsSquare, skillName: "Java Script" },
        { skillIcon: faCss3Alt, skillName: "Tailwind" },
        { skillIcon: faCss3Alt, skillName: "API" }
      ],
      projectImg: "./images/ip-tracker.png",
      gitHubLink:
        "https://github.com/RopeJuve/ip-location.git",
      siteLink: "https://ip-tracker-wbs.netlify.app/",
    },
    {
      projectName: "AUDIOPHILE E-COMMERCE WEBSITE",
      description:
        "Multi-page Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techTitle: "MADE WITH",
      techNames: [
        { skillIcon: faReact, skillName: "React" },
        { skillIcon: faJsSquare, skillName: "Java Script" },
        { skillIcon: faSass, skillName: "Sass" },
        { skillIcon: faHtml5, skillName: "Redux" },
      ],
      projectImg: "./images/Laptop.png",
      gitHubLink:
        "https://github.com/RopeJuve/audiophile-e-commerce-website.git",
      siteLink: "https://audiophile-rope.netlify.app/",
    },
    {
      projectName: "Yoga E-COMMERCE WEBSITE",
      description:
        "Landing page for Yoga Course. Figma conversion made using UIHUT design files. Responsive across devices.",
      techTitle: "MADE WITH",
      techNames: [
        { skillIcon: faReact, skillName: "React" },
        { skillIcon: faJsSquare, skillName: "Java Script" },
        { skillIcon: faCss3Alt, skillName: "css" },
      ],
      projectImg: "./images/yoga.png",
      gitHubLink: "https://github.com/RopeJuve/YogaCourse.git",
      siteLink: "https://yoga-course.netlify.app/",
    },
    {
      projectName: "Space Tourism WEBSITE",
      description:
        "Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techTitle: "MADE WITH",
      techNames: [
        { skillIcon: faReact, skillName: "React" },
        { skillIcon: faJsSquare, skillName: "Java Script" },
        { skillIcon: faCss3Alt, skillName: "css" },
      ],
      projectImg: "./images/space.png",
      gitHubLink: "https://github.com/RopeJuve/space-tourism.git",
      siteLink: "https://space-tourism-vite-react.netlify.app/",
    },
    {
      projectName: "Single product Page",
      description:
        "Product-page Figma conversion made using a Frontend Mentor design files. Responsive across devices.",
      techTitle: "MADE WITH",
      techNames: [
        { skillIcon: faReact, skillName: "React" },
        { skillIcon: faJsSquare, skillName: "Java Script" },
        { skillIcon: faCss3Alt, skillName: "css" },
      ],
      projectImg: "./images/productPage.png",
      gitHubLink: "https://github.com/RopeJuve/product-page.git",
      siteLink: "https://e-commerce-product-page-challenge.netlify.app/",
    },
  ],

  contactMe:
    "Tell me about the project — scope, timeline, and what already exists. I reply within a working day.",
  footerName: `© ${new Date().getFullYear()} ROBERT SHTERJOV`,
};
