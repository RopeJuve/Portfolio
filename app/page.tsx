import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import ProjectsCards from "@/components/ProjectsCards/ProjectsCards";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <About />
      <ProjectsCards />
      <Contact />   
    </div>
  );
}
