import {
  faGitAlt,
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


export const data = {
  header: "Hallo, I'm Robert Shterjov Frontend Web Developer",
  subtitle: "Transforming Ideas into Beautifully Responsive Websites",
  profileImg: "./images/profile1.png",
  skills: [
    { skillIcon: faHtml5, skillName: "html" },
    { skillIcon: faJsSquare, skillName: "java script" },
    { skillIcon: faSass, skillName: "sass" },
    { skillIcon: faReact, skillName: "react" },
    { skillIcon: faGitAlt, skillName: "git" },
    { skillIcon: faHtml5, skillName: "next" },
  ],
  socialLinks: [
    { socialIcon: faGithub, socialLink: 'https://github.com/RopeJuve' },
    { socialIcon: faLinkedin, socialLink: 'https://www.linkedin.com/in/robert-shterjov/' },
    { socialIcon: faWhatsappSquare, socialLink: 'https://wa.me/4917621955050' },
    { socialIcon: faTelegramPlane, socialLink: 'https://t.me/RopeShterjov' }
  ],
  aboutMe: [
    "Hello, I'm Robert Shterjov, a frontend developer based in Germany. I specialize in creating captivating user experiences through beautifully responsive websites using React. With expertise in React, CSS, and JavaScript, I stay up-to-date with the latest trends and technologies.",
    "Collaboration is key to my process. I work closely with clients and creative teams to bring their vision to life. Communication, attention to detail, and delivering high-quality results are my priorities.",
    "Let's work together to create a web experience that engages and inspires. Whether you need a stunning website or an interactive web application built with React, I'm here to turn your ideas into reality. Get in touch, and let's make something exceptional!",
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
