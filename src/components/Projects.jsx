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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5 text-white shadow-2xl backdrop-blur-md"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
        background: 'radial-gradient(120px 80px at var(--x, 50%) var(--y, 50%), rgba(56,189,248,0.15), rgba(59,130,246,0.08), transparent)'
      }} />
      <h3 className="relative z-10 text-lg font-semibold">{title}</h3>
      <p className="relative z-10 mt-2 text-sm text-white/70">{desc}</p>
      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{s}</span>
        ))}
      </div>
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100" style={{
        background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(59,130,246,0.2))',
        filter: 'blur(12px)'
      }} />
    </motion.div>
  );
}

export default function Projects() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', `${x}%`);
    e.currentTarget.style.setProperty('--y', `${y}%`);
  };

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
            Interactive 3D cards with quick views of the stack and a short description.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p, i) => (
            <div key={p.title} onMouseMove={handleMouseMove}>
              <ProjectCard index={i} {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
