
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience section="education" />
      <Experience section="experience" />
      <Projects />
      <Skills />
      <Experience section="certifications" />
      <Contact />
    </div>
  );
};

export default Index;
