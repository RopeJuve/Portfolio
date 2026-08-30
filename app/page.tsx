import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import ProjectsCards from "@/components/ProjectsCards/ProjectsCards";
import Services from "@/components/Services/Services";
import Stack from "@/components/Stack/Stack";
import Ticker from "@/components/Ticker/Ticker";
import { data } from "@/data";

export default function Home() {
  const {
    eyebrow,
    title,
    subTitle,
    heroImage,
    profileImage,
    techStack,
    availability,
    services,
    aboutMe,
    socialLinks,
    projects,
    workMeta,
    contactMe,
    contactLocale,
    tickerWords,
  } = data;

  return (
    <>
      <Hero
        eyebrow={eyebrow}
        title={title}
        subTitle={subTitle}
        heroImage={heroImage}
      />
      <ProjectsCards title="Work" projects={projects} workMeta={workMeta} />
      <Ticker words={tickerWords} />
      <Services title="Services" services={services} availability={availability} />
      <Stack title="Stack" techStack={techStack} />
      <About
        title="About"
        aboutMe={aboutMe}
        socialLinks={socialLinks}
        profileImage={profileImage}
      />
      <Contact title="Let's work" contactMe={contactMe} contactLocale={contactLocale} />
    </>
  );
}
