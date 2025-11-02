import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            className="relative z-[61] w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0a0f1c] p-6 text-white shadow-2xl"
          >
            <button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 rounded-md p-2 text-white/70 transition hover:bg-white/5 hover:text-white">
              <X className="h-5 w-5" />
            </button>
            <div className="pr-10">
              <h3 className="text-xl font-semibold">{project?.title}</h3>
              <p className="mt-2 text-white/70">{project?.desc}</p>
              {project?.details && (
                <div className="mt-4 space-y-2 text-sm text-white/75">
                  {project.details.map((d, i) => (
                    <p key={i}>• {d}</p>
                  ))}
                </div>
              )}
              {project?.stack?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{s}</span>
                  ))}
                </div>
              ) : null}
              {project?.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500">
                  Visit Project
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
