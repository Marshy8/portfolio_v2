import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Resume } from "./sections/Resume";
import { Contact } from "./sections/Contact";
import { SECTIONS } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = SECTIONS.map((s) => s.id);

function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <Nav active={active} />
      <main className="snap-scroller">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
