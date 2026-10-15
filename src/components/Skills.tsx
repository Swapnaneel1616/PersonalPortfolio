"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" ref={ref} className="section-pad bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 md:mb-16"
        >
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-accent">Skills</p>
          <h2 className="display mt-3 text-4xl text-ink md:text-5xl">
            Toolkit for production engineering
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i }}
            >
              <h3 className="mono text-[11px] uppercase tracking-[0.18em] text-slate">
                {group.title}
              </h3>
              <div className="ink-rule mt-3 mb-5" />
              <ul className="flex flex-wrap gap-x-3 gap-y-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block border-b border-transparent text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
