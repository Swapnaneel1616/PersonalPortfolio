"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, profile } from "@/data/portfolio";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-pad relative bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="mono text-[11px] uppercase tracking-[0.22em] text-accent"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="display mt-3 text-4xl leading-tight text-ink md:text-5xl"
            >
              Engineer first.
              <br />
              Systems thinker always.
            </motion.h2>
            <div className="ink-rule mt-8 max-w-xs" />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-slate md:text-lg">
            {profile.about.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 + i * 0.08 }}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8 border-t border-line pt-8"
            >
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-slate">Education</p>
              <p className="display mt-2 text-2xl text-ink">{education.degree}</p>
              <p className="mt-1 text-slate">
                {education.school} · {education.period}
              </p>
              <p className="mono mt-2 text-[11px] tracking-wide text-accent">{education.note}</p>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
          {profile.highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.07 }}
              className="bg-mist px-5 py-7 md:px-7"
            >
              <p className="display text-3xl text-ink md:text-4xl">{item.value}</p>
              <p className="mono mt-2 text-[10px] uppercase tracking-[0.16em] text-slate">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
