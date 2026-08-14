import StarfieldCanvas from './components/StarfieldCanvas';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Expertise from './components/Expertise';
import Skills    from './components/Skills';
import Projects  from './components/Projects';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

export default function Home() {
  return (
    <>
      {/* Fixed animated starfield — renders behind everything */}
      <StarfieldCanvas />

      {/* Site wrapper — scrollable, sits above the canvas */}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
