"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="section-pad relative overflow-hidden bg-stone py-24 md:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl"
        >
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-accent">Contact</p>
          <h2 className="display mt-3 text-4xl leading-tight text-ink md:text-6xl">
            Let&apos;s build the next system together.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate md:text-lg">
            Targeting New Grad 2027 Software Engineering roles. Happy to talk internships,
            full-time opportunities, and technical collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <a href={`mailto:${profile.email}`} className="btn btn-primary focus-ring">
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost focus-ring"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost focus-ring"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-14 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-slate">Personal</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block text-sm text-ink underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-slate">University</p>
            <a
              href={`mailto:${profile.universityEmail}`}
              className="mt-2 block text-sm text-ink underline-offset-4 hover:underline"
            >
              {profile.universityEmail}
            </a>
          </div>
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-slate">Based in</p>
            <p className="mt-2 text-sm text-ink">{profile.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
