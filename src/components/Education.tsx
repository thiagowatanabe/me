// src/components/Education.tsx
import { Section } from "./Section";
import { education } from "../content/en";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-8">
        {education.map((item) => (
          <li
            key={item.institution}
            className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8"
          >
            <div className="text-sm text-slate-500">{item.period}</div>
            <div>
              <h3 className="text-lg font-medium text-white">{item.degree}</h3>
              <p className="mt-1 text-sm text-accent-400">{item.institution}</p>
              {item.detail && (
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}