import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b1120] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b1120]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/80 hover:text-white">
            ARD<span className="text-cyan-400">.</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500"
          >
            Let’s talk
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-[#070b14] py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Ankit Ranjan Das • Built with React, Tailwind, Framer Motion, and Spline.
      </footer>
    </div>
  );
}

export default App;
