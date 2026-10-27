// src/components/Contact.tsx
import { profile } from "../content/en";

const links = [
  { label: "Email", href: `mailto:${profile.contact.email}` },
  { label: "LinkedIn", href: profile.contact.linkedin },
  { label: "GitHub", href: profile.contact.github },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
          Contact
        </h2>
        <p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">
          Open to technical leadership and senior engineering roles, remote or hybrid.
        </p>

        <ul className="mt-8 flex flex-wrap gap-6 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-accent-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  );
}