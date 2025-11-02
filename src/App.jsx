import React from 'react';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b1120] text-white">
      <SEOHead />
      <Header />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-[#070b14] py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Ankit Ranjan Das • Built with React, Tailwind, and Framer Motion.
      </footer>
    </div>
  );
}

export default App;
