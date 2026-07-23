import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import resumeBg from "../assets/background_04.webp";

const TIMELINE = [
  {
    when: "Oct 2025 - May 2026",
    title: "IT / PC Support Technician - Wyoming Machinery",
    detail:
      "Resolve hardware, OS, and network issues for 500+ employees - closing 100+ tickets a month with same-day average resolution while keeping 500+ workstations reliable.",
  },
  {
    when: "Summer 2023 - Jan 2026",
    title: "Software Developer Intern - InsurXcel",
    detail:
      "Built and maintained C# REST API endpoints powering an insurance rating engine used by 3+ companies, plus Angular admin and self-service quoting front-ends. Shipped production features on a 5-person team.",
  },
  {
    when: "May 2025",
    title: "B.S. Computer Science - University of Wyoming",
    detail:
      "Minor in Mathematics and a Cybersecurity Certificate. Cum Laude, 3.935 GPA, Trustees Scholar (full-ride academic scholarship).",
  },
];

export function Resume() {
  return (
    <Section id="resume" image={resumeBg} imagePosition="center 35%">
      <div className="flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)]">Resume</h2>
            <a
              href="/Buck-M-Harris-Resume.pdf"
              download="Buck-M-Harris-Resume.pdf"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-transform duration-[var(--dur)] hover:-translate-y-0.5"
            >
              Download PDF
            </a>
          </div>
        </Reveal>

        <ol className="relative flex flex-col gap-8 pl-6">
          {TIMELINE.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <li className="relative">
                <span
                  className="absolute -left-[1.7rem] top-1.5 h-3 w-3 rounded-full bg-[var(--accent)]"
                  aria-hidden="true"
                />
                <p className="text-sm text-[var(--muted)]">{item.when}</p>
                <h3 className="text-lg text-[var(--text-h)]">{item.title}</h3>
                <p className="max-w-[60ch] text-sm text-[var(--text)]">
                  {item.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
