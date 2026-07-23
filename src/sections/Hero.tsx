import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import heroBg from "../assets/background_01.webp";

export function Hero() {
  return (
    <Section
      id="home"
      image={heroBg}
      priority
      kenBurns
      overlay={
        <a
          href="#about"
          aria-label="Scroll to About"
          className="absolute inset-x-0 bottom-8 z-20 mx-auto flex w-max animate-bounce flex-col items-center text-[var(--muted)]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span aria-hidden="true">↓</span>
        </a>
      }
    >
      <div className="flex flex-col items-start gap-6">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Software Developer
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-[clamp(2.75rem,10vw,7rem)] font-bold leading-[0.95] text-[var(--text-h)]">
            Buck M Harris
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="max-w-xl text-lg text-[var(--text)]">
            Computer Science graduate constructing fast, portable tools. Excited
            for what is next.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-transform duration-[var(--dur)] hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text-h)] transition-colors duration-[var(--dur)] hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
