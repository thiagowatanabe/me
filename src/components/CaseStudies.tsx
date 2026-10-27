// src/components/CaseStudies.tsx
import { Section } from "./Section";
import { cases } from "../content/en";

const fields = [
  { key: "context", label: "Context" },
  { key: "constraint", label: "Constraint" },
  { key: "decision", label: "Decision" },
  { key: "tradeoff", label: "Trade-off" },
] as const;

export function CaseStudies() {
  return (
    <Section id="cases" title="Selected work">
      <div className="space-y-6">
        {cases.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-white/10 bg-ink-900/60 p-6 sm:p-8"
          >
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent-400">
              {item.tag}
            </span>
            <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>

            <dl className="mt-6 space-y-4">
              {fields.map((field) => (
                <div key={field.key} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {field.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-slate-300">
                    {item[field.key]}
                  </dd>
                </div>
              ))}
              {item.result && (
                <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Result
                  </dt>
                  <dd className="text-sm leading-relaxed text-white">{item.result}</dd>
                </div>
              )}
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}