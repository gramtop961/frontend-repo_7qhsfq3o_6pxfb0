import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 900);
  };

  return (
    <section id="contact" className="relative w-full bg-[#070b14] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold md:text-4xl"
          >
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Contact</span>
          </motion.h2>
          <p className="mt-3 text-white/70">Let’s collaborate on something exciting.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-white/70" htmlFor="name">Name</label>
                <input id="name" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-400/50 focus:bg-white/10" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/70" htmlFor="email">Email</label>
                <input id="email" type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-400/50 focus:bg-white/10" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-xs text-white/70" htmlFor="message">Message</label>
              <textarea id="message" rows={5} required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-400/50 focus:bg-white/10" placeholder="Tell me about your project..." />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === 'idle' && (
                  <motion.span key="idle" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-2">
                    <Send className="h-4 w-4" /> Send Message
                  </motion.span>
                )}
                {status === 'loading' && (
                  <motion.span key="loading" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Sending
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span key="success" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Sent!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-md border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300"
                >
                  Thanks! Your message has been queued. I’ll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="mt-2 text-sm text-white/70">I’m open to internships, freelance projects, and collaborations.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/ankit-ranjan-das-03a54a251/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/CypherXXXX" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="mailto:ankitdas3758@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4">
              <p className="text-sm text-white/80">Prefer direct email?</p>
              <a href="mailto:ankitdas3758@gmail.com" className="mt-2 inline-block text-sm text-cyan-300 underline">ankitdas3758@gmail.com</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
