"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/cn";

const categories: ProjectCategory[] = [
  "All",
  "Distributed Systems",
  "Agentic AI",
  "Full-Stack",
  "ML",
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [activeId, setActiveId] = useState(projects[0].id);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const active: Project =
    filtered.find((p) => p.id === activeId) ?? filtered[0] ?? projects[0];

  const onFilter = (cat: ProjectCategory) => {
    setFilter(cat);
    const next = cat === "All" ? projects : projects.filter((p) => p.category === cat);
    if (next[0]) setActiveId(next[0].id);
  };

  return (
    <section id="projects" ref={ref} className="section-pad bg-stone py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 md:mb-14"
        >
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-accent">Projects</p>
          <h2 className="display mt-3 max-w-2xl text-4xl text-ink md:text-5xl">
            Interactive workbench — systems, agents, and product surfaces
          </h2>
        </motion.div>

        <div
          className="mb-10 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => onFilter(cat)}
              className={cn(
                "focus-ring mono shrink-0 border px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] transition-colors",
                filter === cat
                  ? "border-ink bg-ink text-mist"
                  : "border-line bg-transparent text-slate hover:border-ink hover:text-ink",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ul className="space-y-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const selected = project.id === active.id;
                return (
                  <motion.li
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveId(project.id)}
                      onMouseEnter={() => setActiveId(project.id)}
                      className={cn(
                        "focus-ring group w-full border px-5 py-4 text-left transition-all",
                        selected
                          ? "border-ink bg-ink text-mist"
                          : "border-line bg-mist/40 text-ink hover:border-ink/50",
                      )}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="display text-xl md:text-2xl">{project.title}</span>
                        <span
                          className={cn(
                            "mono text-[9px] uppercase tracking-[0.14em]",
                            selected ? "text-accent" : "text-slate",
                          )}
                        >
                          {project.category}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "mt-2 text-sm leading-relaxed",
                          selected ? "text-stone-deep/85" : "text-slate",
                        )}
                      >
                        {project.blurb}
                      </p>
                    </button>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.32 }}
              className="relative flex min-h-[420px] flex-col justify-between border border-ink bg-mist p-7 md:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    Selected
                  </span>
                  {active.featured && (
                    <span className="mono text-[10px] uppercase tracking-[0.14em] text-slate">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="display mt-3 text-3xl text-ink md:text-4xl">{active.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-slate">{active.description}</p>

                <ul className="mt-7 space-y-3">
                  {active.impact.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink-soft">
                      <span className="mt-1.5 h-px w-5 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="mono border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary focus-ring"
                    >
                      View on GitHub
                    </a>
                  )}
                  <a href="#contact" className="btn btn-ghost focus-ring">
                    Discuss this build
                  </a>
                </div>
              </div>

              <svg
                className="pointer-events-none absolute bottom-4 right-4 opacity-20"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                aria-hidden
              >
                <rect x="4" y="4" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
                <rect x="40" y="4" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
                <rect x="4" y="40" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
                <rect x="40" y="40" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
