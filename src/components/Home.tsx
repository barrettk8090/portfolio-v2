import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello, I'm Barrett Kowalsky 👋</h1>
        <h2>A Software Engineer based in Denver, CO.</h2>
      </div>
      <About />
      <Projects />
      <TechStack />
    </>
  );
}
