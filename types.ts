import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface Skill extends FontAwesomeIconProps {
    skillIcon: IconProp;
    skillName: string;
}

type Project = {
    projectName: string;
    description: string;
    techTitle: string;
    techNames: Skill[];
    projectImg: string;
}

export interface HeaderProps{
    title: string;
    subTitle: string;
    profileImage: string;
}

export interface SkillProps{
    title: string;
    skills: Skill[];
}

export interface AboutProps{
    title: string;
    aboutMe: string[];
}

export interface ProjectsProps{
    title: string;
    projects: Project[];
}

export interface ContactProps{
    title: string;
    contactMe: string;
}

export interface FooterProps{
    nameTitle: string;
}