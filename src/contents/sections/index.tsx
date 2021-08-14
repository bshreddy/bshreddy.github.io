import Hero from "./hero";
import Projects from "../../../src1/sections/Projects";
import Skills from "./skills";
import About from "../about";
import Contact from "../contact";

export const SectionComponents: { [key: string]: JSX.Element; }  = {
  "Hero": <Hero />,
  "Projects": <Projects />,
  "Skills": <Skills />,
  "About": <About />,
  "Contact": <Contact />,
}
