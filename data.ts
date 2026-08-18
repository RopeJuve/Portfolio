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


export const data = {
  header: "Hallo, I'm Robert Shterjov — Full-Stack Web Developer",
  subtitle:
    "I design and develop modern websites, landing pages, and custom web applications for businesses and startups.",
  profileImg: "./images/profile.png",
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
  services: [
    {
      title: "Website Design & Development",
      description:
        "A modern, fast website that turns visitors into customers — designed and built around your business, not a template.",
      capabilities: [
        "Modern business websites",
        "Landing pages",
        "Portfolio websites",
        "Responsive and mobile-friendly design",
        "Fast and optimized websites",
      ],
      tier: "primary" as const,
    },
    {
      title: "Website Redesign",
      description:
        "Give your outdated website a modern, professional look that works better for you and your visitors on every device.",
      capabilities: [
        "Redesign outdated websites",
        "Improve UI/UX",
        "Improve mobile experience",
        "Create modern and professional designs",
      ],
      tier: "primary" as const,
    },
    {
      title: "Custom Web Applications",
      description:
        "For businesses ready to go beyond a website — a custom-built application tailored to how you actually work.",
      capabilities: [
        "SaaS applications",
        "MVP development",
        "Dashboards",
        "Client portals",
        "Authentication",
        "API integrations",
        "AI integrations",
      ],
      tier: "advanced" as const,
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Keep your website running smoothly with ongoing fixes, updates, and improvements, so you don't have to think about it.",
      capabilities: [
        "Bug fixes",
        "Content updates",
        "New features",
        "Performance improvements",
        "Ongoing technical support",
      ],
      tier: "primary" as const,
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
    "Get in touch with me to discuss your project, ask any questions, or simply say hello.I'm here and eager to connect! Whether you have a web development project in mind, need assistance with frontend design, or have inquiries about my services, feel free to reach out using the contact information provided below. I value open communication and prompt responses, so rest assured that I'll get back to you as soon as possible.Let's collaborate and bring your ideas to life. I look forward to hearing from you and being a part of your web development journey!",
  footerName: "© 2023 ROBERT SHTERJOV",
};
