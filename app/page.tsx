import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import ProjectsCards from "@/components/ProjectsCards/ProjectsCards";
import Services from "@/components/Services/Services";
import TechMarquee from "@/components/TechMarquee/TechMarquee";
import { data } from "@/data";

export default function Home() {
  const {
    eyebrow,
    title,
    subTitle,
    profileImage,
    techStack,
    availability,
    services,
    aboutMe,
    projects,
    contactMe,
  } = data;
  return (
    <>
      <Hero
        eyebrow={eyebrow}
        title={title}
        subTitle={subTitle}
        profileImage={profileImage}
      />
      <TechMarquee title="Built with" techStack={techStack} />
      <ProjectsCards title="Selected Work" projects={projects} />
      <Services title="Services" services={services} />
      <About title="About Me" aboutMe={aboutMe} />
      <Contact title="Let's work" contactMe={contactMe} />
    </>
  );
}
