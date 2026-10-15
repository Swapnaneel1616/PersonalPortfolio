"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const ArchitectureScene = dynamic(() => import("./ArchitectureScene"), {
  ssr: false,
});

const nameWords = profile.name.split(" ");

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative min-h-[100svh] overflow-hidden bg-stone"
    >
      <ArchitectureScene />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(184,50,40,0.08),transparent_45%),linear-gradient(120deg,rgba(236,238,233,0.92)_0%,rgba(236,238,233,0.55)_42%,rgba(236,238,233,0.15)_68%,transparent_85%)]" />

      <div className="section-pad relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-end gap-10 pb-14 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20 lg:pt-24">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono mb-5 text-[11px] uppercase tracking-[0.22em] text-accent"
          >
            {profile.availability}
          </motion.p>

          <h1 className="display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.92] text-ink">
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.22em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="mt-6 max-w-md text-base leading-relaxed text-slate md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn btn-primary focus-ring">
              View projects
            </a>
            <a href="#experience" className="btn btn-ghost focus-ring">
              Work experience
            </a>
            <a href="#contact" className="btn btn-accent focus-ring">
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 flex items-center gap-4"
          >
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" aria-hidden>
              <path
                d="M2 12h48M42 4l12 8-12 8"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-ink/50"
                strokeDasharray="240"
                style={{ animation: "ink-draw 1.4s ease forwards 1s" }}
              />
            </svg>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-slate">
              MS CS · GWU · May 2027
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft shadow-[0_40px_80px_-40px_rgba(20,20,20,0.55)]">
            <Image
              src="/portrait.jpg"
              alt="Swapnaneel Chatterjee standing before a classical architectural mural"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-[center_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </div>
          <p className="mono mt-3 text-[10px] uppercase tracking-[0.18em] text-slate">
            {profile.title}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
