import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ankit-ranjan-das-03a54a251/' },
  { icon: Github, href: 'https://github.com/CypherXXXX' },
  { icon: Mail, href: 'mailto:ankitdas3758@gmail.com' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a0f1c] text-white">
      {/* Spline cover background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/10 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 sm:pt-28">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wide text-cyan-300/90 backdrop-blur"
        >
          Full-Stack Developer • AI Enthusiast
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Ankit Ranjan Das
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-4 max-w-2xl text-center text-base text-white/80 md:text-lg"
        >
          Building intelligent, scalable, and efficient web applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-5 max-w-3xl text-center text-sm text-white/70 md:text-base"
        >
          Skilled in Python, C++, JavaScript, SQL, and HTML/CSS. Experienced with React, Node.js, Express.js, Flask,
          Supabase, Firebase, and TailwindCSS. Comfortable with Scikit‑learn, Pandas, NumPy, Matplotlib, JWT, and modern tooling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex items-center gap-4"
        >
          {socials.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label={href}
            >
              <Icon className="h-5 w-5 transition group-hover:scale-110" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 hidden sm:block"
        >
          <a href="#skills" className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <span>Explore my work</span>
            <span className="h-6 w-6 animate-bounce rounded-full bg-gradient-to-br from-cyan-400 to-blue-500/80 text-center leading-6">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
