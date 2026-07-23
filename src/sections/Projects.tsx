import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { PROJECTS } from "../data/projects";
import projectsBg from "../assets/background_03.webp";

export function Projects() {
  return (
    <Section id="projects" image={projectsBg} imagePosition="center 60%">
      <div className="flex flex-col gap-6 sm:gap-8">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)]">Projects</h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-transform duration-[var(--dur)] hover:-translate-y-1 hover:border-[var(--accent-border)]"
              >
                <div className="aspect-video max-h-[32vh] w-full overflow-hidden bg-[var(--bg)]">
                  {project.video ? (
                    <video
                      className={`h-full w-full ${project.previewFit === "contain" ? "object-contain" : "object-cover"}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      poster={project.image}
                    >
                      {project.video.webm && (
                        <source src={project.video.webm} type="video/webm" />
                      )}
                      <source src={project.video.mp4} type="video/mp4" />
                    </video>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full ${project.previewFit === "contain" ? "object-contain" : "object-cover"}`}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[var(--muted)]">
                      Screenshot
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-xl text-[var(--text-h)]">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-sm text-[var(--text)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-[var(--accent)] opacity-0 transition-opacity duration-[var(--dur)] group-hover:opacity-100">
                    View project →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
