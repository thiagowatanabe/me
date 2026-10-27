// src/App.tsx
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceSection } from "./components/Experience";
import { CaseStudies } from "./components/CaseStudies";
import { Stack } from "./components/Stack";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-200 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <CaseStudies />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}