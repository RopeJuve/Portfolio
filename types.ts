export interface FaqItem {
  question: string;
  answer: string;
}

export interface Project {
    projectName: string;
    description: string;
    techNames: string[];
    projectImg: string;
    gitHubLink: string;
    siteLink: string;
}

export interface TechStackRow {
    label: string;
    technologies: string[];
}

export interface Service {
    title: string;
    description: string;
    techChips: string[];
}

export interface SocialLink {
    label: string;
    href: string;
}

export interface HomeData {
    eyebrow: string;
    title: string;
    subTitle: string;
    heroImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    profileImage: string;
    techStack: TechStackRow[];
    availability: string;
    services: Service[];
    socialLinks: SocialLink[];
    aboutMe: string[];
    projects: Project[];
    workMeta: string;
    contactMe: string;
    contactLocale: string;
    footerName: string;
    footerRole: string;
    tickerWords: string[];
    navLinks: string[];
    /** Production origin, e.g. "https://robert-shterjov.dev" */
    siteOrigin: string;
    /** <title> tag — must include freelance, full-stack, Germany, and the author name */
    documentTitle: string;
    /** Meta description — 150–160 chars; starts with Positioning Statement; no price/rate */
    documentDescription: string;
    /** Root-absolute path to the dedicated 1200×630 social-card image */
    socialCardImage: string;
    /** Visible FAQ list; also powers FAQPage JSON-LD */
    faq: FaqItem[];
}

export type HeroProps = Pick<
    HomeData,
    "eyebrow" | "title" | "subTitle" | "heroImage"
>;

export type StackProps = Pick<HomeData, "techStack"> & {
    title: string;
};

export type ServicesProps = Pick<HomeData, "services" | "availability"> & {
    title: string;
};

export type AboutProps = Pick<HomeData, "aboutMe" | "socialLinks" | "profileImage"> & {
    title: string;
};

export type ProjectsProps = Pick<HomeData, "projects" | "workMeta"> & {
    title: string;
};

export type ContactProps = Pick<HomeData, "contactMe" | "contactLocale"> & {
    title: string;
};

export type FooterProps = Pick<HomeData, "footerName" | "footerRole">;

export type LoaderProps = Pick<HomeData, "footerRole" | "contactLocale">;

export type NavBarProps = Pick<HomeData, "navLinks">;

export type ChromeProps = Pick<
    HomeData,
    "footerName" | "footerRole" | "contactLocale" | "navLinks"
>;
