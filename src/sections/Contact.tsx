import { useState } from "react";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";

const EMAIL = "buckmarshallharris@gmail.com";
const PHONE = "+1 (307) 337-8876";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Marshy8" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/buck-harris-846a3931b/",
  },
];
export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  return (
    <Section
      id="contact"
      scrim={false}
      bgClassName="bg-gradient-to-b from-[#1a0f16] via-[#3a1f4d] to-[#1a0f16]"
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)]">Get in touch</h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {[
            { label: "Email", value: EMAIL },
            { label: "Phone", value: PHONE },
          ].map(({ label, value }, i) => (
            <Reveal key={label} delay={i * 80}>
              <button
                type="button"
                onClick={() => copy(value)}
                className="group flex w-full items-center justify-between gap-4 rounded-xl border border-[var(--border)] px-5 py-4 text-left transition-colors duration-[var(--dur)] hover:border-[var(--accent-border)]"
              >
                <span>
                  <span className="block text-xs uppercase tracking-widest text-[var(--muted)]">
                    {label}
                  </span>
                  <span className="text-[var(--text-h)]">{value}</span>
                </span>
                <span className="text-sm text-[var(--accent)]">
                  {copied === value ? "Copied!" : "Copy"}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--text-h)] transition-colors duration-[var(--dur)] hover:bg-white/5"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <p className="pt-8 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Buck M Harris. Design, code, and
          photography by Buck.
        </p>
      </div>
    </Section>
  );
}
