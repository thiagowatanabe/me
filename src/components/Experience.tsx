// src/components/Experience.tsx
import { Section } from "./Section";
import { experience } from "../content/en";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((item) => (
          <li
            key={`${item.company}-${item.role}`}
            className="grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-8"
          >
            <div className="text-sm text-slate-500">{item.period}</div>
            <div>
              <h3 className="text-lg font-medium text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-accent-400">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}