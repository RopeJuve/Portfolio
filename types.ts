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

export interface HeaderProps {
    title: string;
    subTitle: string;
    profileImage: string;
}

export interface SkillProps {
    title: string;
    skills: Skill[];
}

export interface TechStackItem {
    name: string;
    iconPath: string;
}

export interface TechMarqueeProps {
    title: string;
    techStack: TechStackItem[];
}

export type ServiceTier = "primary" | "advanced";

export interface Service {
    title: string;
    description: string;
    capabilities: string[];
    tier: ServiceTier;
}

export interface ServicesProps {
    title: string;
    positioningStatement: string;
    services: Service[];
}

export interface AboutProps {
    title: string;
    aboutMe: string[];
}

export interface ProjectsProps {
    title: string;
    projects: Project[];
}

export interface ContactProps {
    title: string;
    contactMe: string;
}

export interface FooterProps {
    nameTitle: string;
}