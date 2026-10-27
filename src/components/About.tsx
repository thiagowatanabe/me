// src/components/About.tsx
import { Section } from "./Section";
import { profile } from "../content/en";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
        <p>{profile.summary}</p>
        <p>{profile.summaryExtra}</p>
      </div>
    </Section>
  );
}