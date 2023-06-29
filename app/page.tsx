import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import ProjectsCards from "@/components/ProjectsCards/ProjectsCards";
import Skills from "@/components/Skills/Skills";
import { data } from "@/data";

export default function Home() {
  const {
    header,
    subtitle,
    profileImg,
    skills,
    aboutMe,
    projects,
    footerName,
    contactMe,
  } = data;
  return (
    <div>
      <Hero title={header} subTitle={subtitle} profileImage={profileImg} />
      <Skills title='skills' skills={skills} />
      <About  title='about me' aboutMe={aboutMe}/>
      <ProjectsCards />
      <Contact title='contact me' contactMe={contactMe} />
    </div>
  );
}
