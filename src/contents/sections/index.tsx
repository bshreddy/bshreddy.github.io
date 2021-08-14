import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";

export const SectionComponents: { [key: string]: JSX.Element; }  = {
  "hero": <Hero />,
  "projects": <Projects />,
  "skills": <Skills />,
  "about": <About />,
  "contact": <Contact />,
}
