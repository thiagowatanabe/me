// src/components/ProjectCarousel.tsx
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { ProjectItem } from "../content/en";

const AUTOPLAY_MS = 8000;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-ink-900/60 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-medium text-white">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent-400"
          >
            {project.name}
          </a>
        </h3>
        {project.year && (
          <span className="text-xs text-slate-500">{project.year}</span>
        )}
      </div>

      <p className="mt-3 grow text-sm leading-relaxed text-slate-300">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-white/10 px-2 py-1 text-xs text-slate-400"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProjectCarousel({ projects }: { projects: ProjectItem[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  const isSingle = projects.length <= 1;
  const autoplayActive =
    playing && !isSingle && !hovered && !focused && pageVisible;

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const child = track.children[
      Math.max(0, Math.min(index, track.children.length - 1))
    ] as HTMLElement | undefined;

    if (!child) return;

    track.scrollBy({
      left:
        child.getBoundingClientRect().left -
        track.getBoundingClientRect().left,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => {
    if (isSingle) return;
    if (prefersReducedMotion()) return;
    setPlaying(true);
  }, [isSingle]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const measure = () => {
      const trackLeft = track.getBoundingClientRect().left;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      Array.from(track.children).forEach((child, index) => {
        const distance = Math.abs(
          child.getBoundingClientRect().left - trackLeft,
        );
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setCurrent(bestIndex);
      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 1);
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    track.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      track.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [projects.length]);

  useEffect(() => {
    if (!autoplayActive) return;
    const track = trackRef.current;
    if (!track) return;

    const id = window.setInterval(() => {
      const last = projects.length - 1;
      scrollToIndex(current >= last ? 0 : current + 1);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [autoplayActive, current, projects.length, scrollToIndex]);

  useEffect(() => {
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    scrollToIndex(event.key === "ArrowRight" ? current + 1 : current - 1);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      <ul
        ref={trackRef}
        onKeyDown={handleKeyDown}
        tabIndex={isSingle ? -1 : 0}
        aria-label={isSingle ? undefined : "Projects carousel"}
        aria-roledescription={isSingle ? undefined : "carousel"}
        className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-smooth pb-2 motion-reduce:scroll-auto [scrollbar-width:none] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="w-full shrink-0 snap-start md:w-[calc(50%-0.5rem)]"
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      {!isSingle && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to project ${index + 1}: ${project.name}`}
                aria-current={index === current ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  index === current
                    ? "w-6 bg-accent-400"
                    : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={
                playing ? "Pause automatic rotation" : "Start automatic rotation"
              }
              className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-white/25 hover:text-white"
            >
              {playing ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => scrollToIndex(current - 1)}
              disabled={atStart}
              aria-label="Previous project"
              className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-white/25 hover:text-white disabled:opacity-30"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scrollToIndex(current + 1)}
              disabled={atEnd}
              aria-label="Next project"
              className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-white/25 hover:text-white disabled:opacity-30"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}