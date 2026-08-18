import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import ProjectsCards from "@/components/ProjectsCards/ProjectsCards";
import Services from "@/components/Services/Services";
import TechMarquee from "@/components/TechMarquee/TechMarquee";
import { data } from "@/data";

export default function Home() {
  const {
    header,
    subtitle,
    profileImg,
    techStack,
    services,
    aboutMe,
    projects,
    contactMe,
  } = data;
  return (
    <>
      <Hero title={header} subTitle={subtitle} profileImage={profileImg} />
      <TechMarquee title="Built with" techStack={techStack} />
      <Services
        title="services"
        positioningStatement={subtitle}
        services={services}
      />
      <ProjectsCards title="projects" projects={projects} />
      <About title="about me" aboutMe={aboutMe} />
      <Contact title="contact me" contactMe={contactMe} />
    </>
  );
}
