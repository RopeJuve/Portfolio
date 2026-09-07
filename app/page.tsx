import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import ProjectsCards from "@/components/ProjectsCards/ProjectsCards";
import Services from "@/components/Services/Services";
import Stack from "@/components/Stack/Stack";
import Ticker from "@/components/Ticker/Ticker";
import { data } from "@/data";
import { discoverSite } from "@/lib/siteDiscovery";

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
    faq,
  } = data;

  const { jsonLd } = discoverSite(data, data.siteOrigin);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      <FAQ faq={faq} />
      <Contact title="Let's work" contactMe={contactMe} contactLocale={contactLocale} />
    </>
  );
}
