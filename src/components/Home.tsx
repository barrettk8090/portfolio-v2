import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="main-page">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
      </div>
      <Footer />
    </>
  );
}
