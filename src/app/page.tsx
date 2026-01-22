import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <BlogPreview />
      <Contact />
    </div>
  );
}
