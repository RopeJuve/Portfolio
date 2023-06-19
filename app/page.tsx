import About from "@/components/About/About";
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
    </div>
  );
}
