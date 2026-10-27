// src/components/Section.tsx
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/5 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}