import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="section-pad border-t border-line bg-mist py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="display text-lg text-ink">{profile.name}</p>
        <p className="mono text-[10px] uppercase tracking-[0.16em] text-slate">
          © {new Date().getFullYear()} · Designed for New Grad 2027
        </p>
      </div>
    </footer>
  );
}
