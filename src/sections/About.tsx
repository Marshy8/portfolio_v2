import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import aboutBg from "../assets/background_02.webp";
import portrait from "../assets/portrait.webp";

const SKILLS = [
  "TypeScript",
  "JavaScript",
  "C#",
  "Lua",
  "React",
  "Angular",
  "REST APIs",
  "Git",
];

export function About() {
  return (
    <Section id="about" image={aboutBg} imagePosition="center 40%">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-12">
        <Reveal>
          <div className="mx-auto aspect-[4/5] w-full max-w-[16rem] max-h-[55vh] overflow-hidden rounded-2xl ring-1 ring-[var(--border)] md:mx-0 md:max-w-none">
            <img
              src={portrait}
              alt="Buck M Harris"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)]">About me</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[60ch] text-[var(--text)]">
              I'm a Computer Science graduate from the University of Wyoming
              (Cum Laude, 3.935 GPA), with a minor in Mathematics and a
              certificate in Cybersecurity. I earned the Trustees Scholarship, a
              full-ride award.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-[60ch] text-[var(--text)]">
              Outside of code I fly fish, ride motorcycles, and invest in those
              I love. I adapt to and master new skills quickly, delivering
              dependable results.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="flex flex-wrap gap-2 pt-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
