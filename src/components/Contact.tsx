// src/components/Contact.tsx
import { useEffect, useState } from "react";
import { profile } from "../content/en";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
          Contact
        </h2>

        <div className="max-w-2xl">
          <p className="text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">
            Open to technical leadership and senior engineering roles, remote or hybrid.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            The fastest way to reach me is email. I answer every message from a real
            person looking for someone to work with.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.contact.email}`}
              className="rounded-md bg-accent-500 px-5 py-2.5 text-center text-sm font-medium text-ink-950 transition-colors hover:bg-accent-400"
            >
              {profile.contact.email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className="rounded-md border border-white/10 px-5 py-2.5 text-sm text-slate-300 transition-colors hover:border-white/25 hover:text-white"
            >
              {copied ? "Copied" : "Copy address"}
            </button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-6 text-sm">
            <li>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-accent-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-accent-400"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-16 text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  );
}