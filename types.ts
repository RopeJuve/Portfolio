import { IconProp } from "@fortawesome/fontawesome-svg-core";


interface Skill {
    skillIcon: IconProp;
    skillName: string;
}

export interface Project {
    projectName: string;
    description: string;
    techTitle: string;
    techNames: Skill[];
    projectImg: string;
    gitHubLink: string;
    siteLink: string;
}

export interface SkillProps {
    title: string;
    skills: Skill[];
}

export interface TechStackItem {
    name: string;
    iconPath: string;
}

export interface Service {
    title: string;
    description: string;
    techChips: string[];
}

export interface SocialLink {
    socialIcon: IconProp;
    socialLink: string;
}

export interface HomeData {
    eyebrow: string;
    title: string;
    subTitle: string;
    profileImage: string;
    techStack: TechStackItem[];
    availability: string;
    services: Service[];
    socialLinks: SocialLink[];
    aboutMe: string[];
    projects: Project[];
    contactMe: string;
    footerName: string;
}

export type HeaderProps = Pick<
    HomeData,
    "eyebrow" | "title" | "subTitle" | "profileImage"
>;

export type TechMarqueeProps = Pick<HomeData, "techStack"> & {
    title: string;
};

export type ServicesProps = Pick<HomeData, "services"> & {
    title: string;
};

export type AboutProps = Pick<HomeData, "aboutMe"> & {
    title: string;
};

export type ProjectsProps = Pick<HomeData, "projects"> & {
    title: string;
};

export type ContactProps = Pick<HomeData, "contactMe"> & {
    title: string;
};