import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Architecture from "./components/Architecture";
import Education from "./components/Education";
import DSA from "./components/DSA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Experience />

        <Skills />
        <DSA />

        <Projects />
        <Architecture />
        <Education />
        <Contact />
        

        
      </main>
      <footer className="border-t border-slate-800/60 px-6 py-8">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">

    <p>
      © {new Date().getFullYear()} Anup Kumar. All rights reserved.
    </p>

    <p>
      Built with React + Tailwind CSS
    </p>

  </div>
</footer>
    </div>
  );
}

export default App;