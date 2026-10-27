// src/components/Stack.tsx
import { Section } from "./Section";
import { profile } from "../content/en";

export function Stack() {
  return (
    <Section id="stack" title="Stack">
      <ul className="flex flex-wrap gap-2">
        {profile.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Section>
  );
}