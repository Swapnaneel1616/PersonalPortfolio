"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-mist/90 backdrop-blur-md border-b border-line/70"
          : "bg-transparent",
      )}
    >
      <nav className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a
          href="#top"
          className="display focus-ring text-lg font-semibold tracking-tight text-ink md:text-xl"
        >
          SC
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring mono text-[11px] uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mono text-[11px] uppercase tracking-[0.16em] text-slate hover:text-ink"
          >
            GitHub
          </a>
          <a href="#contact" className="btn btn-primary focus-ring !py-2.5 !px-4 text-xs">
            Hire Me
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="focus-ring relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-5 bg-ink transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span className={cn("block h-0.5 w-5 bg-ink transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "block h-0.5 w-5 bg-ink transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-0 z-40 bg-mist md:hidden"
          >
            <div className="section-pad flex h-full flex-col justify-center gap-8 pt-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="display text-4xl font-medium text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-accent focus-ring mt-4 w-fit"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
