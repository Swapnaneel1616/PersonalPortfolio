"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experience } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export default function Experience() {
  const [active, setActive] = useState(experience[0].id);
  const current = experience.find((e) => e.id === active) ?? experience[0];
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-pad relative overflow-hidden bg-ink py-24 text-mist md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#eceee9 1px, transparent 1px), linear-gradient(90deg, #eceee9 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-accent">Experience</p>
            <h2 className="display mt-3 text-4xl text-mist md:text-5xl">
              Roles that shaped the craft
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-deep/80">
            Select a role to explore impact, scope, and the stack behind the work.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative">
            <div className="absolute bottom-3 left-[11px] top-3 w-px bg-white/15" aria-hidden />
            <ul className="space-y-2">
              {experience.map((item, i) => {
                const selected = item.id === active;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.08 * i }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(item.id)}
                      className={cn(
                        "focus-ring group relative w-full pl-10 text-left transition-colors",
                        selected ? "text-mist" : "text-stone-deep/55 hover:text-mist/80",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border transition-all",
                          selected
                            ? "border-accent bg-accent scale-110"
                            : "border-white/30 bg-ink group-hover:border-accent/70",
                        )}
                      />
                      <span className="mono block text-[10px] uppercase tracking-[0.16em]">
                        {item.period}
                        {item.current ? " · Now" : ""}
                      </span>
                      <span className="display mt-1 block text-xl md:text-2xl">{item.role}</span>
                      <span className="mt-0.5 block text-sm opacity-70">{item.company}</span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="border border-white/12 bg-white/[0.03] p-7 md:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="display text-3xl text-mist">{current.role}</h3>
                  <p className="mt-2 text-stone-deep/85">
                    {current.company} · {current.location}
                  </p>
                </div>
                {current.current && (
                  <span className="mono border border-accent/50 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-accent">
                    Current
                  </span>
                )}
              </div>

              <p className="mt-6 text-base leading-relaxed text-stone-deep/90">{current.summary}</p>

              <ul className="mt-7 space-y-4">
                {current.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-mist/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {current.tech.map((t) => (
                  <span
                    key={t}
                    className="mono border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-stone-deep"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
