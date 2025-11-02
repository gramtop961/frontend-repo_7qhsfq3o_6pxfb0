import React from 'react';
import { motion } from 'framer-motion';

const bars = [
  { label: 'Full-Stack Development', value: 92 },
  { label: 'Data Structures & Algorithms', value: 85 },
  { label: 'AI/ML Tooling', value: 80 },
];

const stacks = [
  'Python',
  'C++',
  'JavaScript',
  'SQL',
  'HTML/CSS',
  'React',
  'Node.js',
  'Express.js',
  'Flask',
  'Supabase',
  'Firebase',
  'TailwindCSS',
  'Git',
  'JWT',
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'Matplotlib',
];

const education = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    org: 'Vellore Institute of Technology, Bhopal',
    time: '2022 – 2026',
    desc: 'Focused on full‑stack engineering, systems design, and applied machine learning.'
  },
  {
    title: 'High School (ICSE)',
    org: 'Loyola School, Jamshedpur',
    time: '—',
    desc: 'Strong foundations in mathematics, problem solving, and computer science fundamentals.'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#070b14] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />
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
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Skills & Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mt-3 max-w-3xl text-white/70"
          >
            A balanced foundation in product engineering and applied AI — structured, readable, and robust.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Skill bars */}
          <div className="space-y-6">
            {bars.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/90">{b.label}</span>
                  <span className="text-cyan-300">{b.value}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech grid + education timeline */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <h3 className="mb-3 text-sm font-medium text-white/80">Core Tools & Libraries</h3>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {stacks.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.03 }}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <h3 className="mb-4 text-sm font-medium text-white/80">Education</h3>
              <div className="relative">
                <div className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400/60 to-blue-500/60" />
                <div className="space-y-6">
                  {education.map((e, i) => (
                    <motion.div
                      key={e.org}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative ml-8 rounded-lg border border-white/10 bg-white/5 p-4"
                    >
                      <div className="absolute -left-6 top-4 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px] shadow-cyan-400/60" />
                      <p className="text-xs text-cyan-300/90">{e.time}</p>
                      <p className="mt-1 text-sm font-semibold text-white/90">{e.title}</p>
                      <p className="text-xs text-white/70">{e.org}</p>
                      <p className="mt-2 text-sm text-white/70">{e.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
