import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

export const SectionComponents: { [key: string]: JSX.Element; }  = {
  "Hero": <Hero />,
  "Projects": <Projects />,
  "Skills": <Skills />,
  "About": <About />,
  "Contact": <Contact />,
}
