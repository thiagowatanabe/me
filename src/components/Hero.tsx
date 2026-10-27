// src/components/Hero.tsx
import { profile } from "../content/en";

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.10),transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-24 sm:pt-32">
        <p className="text-sm text-slate-500">{profile.location}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg text-accent-400 sm:text-xl">{profile.role}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {profile.headline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#cases"
            className="rounded-md bg-accent-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-400"
          >
            View work
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}