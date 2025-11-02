import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Edcare: Virtual Healthcare Platform',
    desc: 'Full-stack healthcare app with ML-powered breast cancer prediction.',
    stack: ['React', 'Flask', 'Supabase', 'Scikit-learn'],
  },
  {
    title: 'Fire TV Recommendation App',
    desc: 'Content recommender with collaborative filtering and Firebase integration.',
    stack: ['Flask', 'Firebase', 'Collaborative Filtering'],
  },
  {
    title: 'Quizmaster: Interactive Quiz Platform',
    desc: 'Real-time quizzes with instant scoring and analytics.',
    stack: ['React', 'Supabase', 'TailwindCSS'],
  },
  {
    title: 'Management System',
    desc: 'Digital workflow solution for universities with JWT authentication.',
    stack: ['Node.js', 'Express.js', 'JWT'],
  },
];

function ProjectCard({ title, desc, stack, index }) {
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', `${x}%`);
    e.currentTarget.style.setProperty('--y', `${y}%`);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ rotateX: 3, rotateY: -3, scale: 1.015 }}
      className="group relative flex min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5 text-white shadow-2xl backdrop-blur-md"
      style={{ transformStyle: 'preserve-3d' }}
      role="article"
      aria-label={`${title} project card`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(140px 90px at var(--x, 50%) var(--y, 50%), rgba(56,189,248,0.15), rgba(59,130,246,0.08), transparent)'
        }}
      />
      <div className="relative z-10">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
      </div>
      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80"
          >
            {s}
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100"
        style={{
          background: 'linear-gradient(135deg, rgba(34,211,238,0.22), rgba(59,130,246,0.22))',
          filter: 'blur(14px)'
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0f1c] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold md:text-4xl"
          >
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mt-3 max-w-3xl text-white/70"
          >
            A selection of work with consistent layouts, clean interactions, and focused details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
