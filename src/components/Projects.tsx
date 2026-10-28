// src/components/Projects.tsx
import { Section } from "./Section";
import { ProjectCarousel } from "./ProjectCarousel";
import { projects } from "../content/en";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ProjectCarousel projects={projects} />
    </Section>
  );
}