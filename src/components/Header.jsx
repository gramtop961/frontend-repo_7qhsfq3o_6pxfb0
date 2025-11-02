import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState('home');
  const containerRef = useRef(null);
  const itemRefs = useMemo(() => new Map(), []);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // Observe sections in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Position moving indicator under active nav item
  useEffect(() => {
    const el = itemRefs.get(active);
    const container = containerRef.current;
    if (el && container) {
      const rect = el.getBoundingClientRect();
      const crect = container.getBoundingClientRect();
      setIndicator({ left: rect.left - crect.left, width: rect.width });
    }
  }, [active, itemRefs]);

  const onNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b1120]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" onClick={(e) => onNavClick(e, 'home')} className="text-sm font-semibold tracking-wide text-white/80 hover:text-white">
          ARD<span className="text-cyan-400">.</span>
        </a>

        <nav ref={containerRef} className="relative hidden items-center gap-6 text-sm text-white/70 sm:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              ref={(el) => el && itemRefs.set(s.id, el)}
              onClick={(e) => onNavClick(e, s.id)}
              className={`relative py-1 transition-colors ${active === s.id ? 'text-white' : 'hover:text-white'}`}
              aria-current={active === s.id ? 'page' : undefined}
            >
              {s.label}
            </a>
          ))}
          <motion.span
            className="absolute bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            animate={{ left: indicator.left, width: indicator.width }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/Resume-Ankit-Ranjan-Das.txt"
            download
            className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 shadow transition hover:bg-white/10 sm:inline-flex items-center gap-2"
            aria-label="Download resume"
          >
            <FileDown className="h-4 w-4" /> Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => onNavClick(e, 'contact')}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500"
          >
            Let’s talk
          </a>
        </div>
      </div>
    </header>
  );
}
