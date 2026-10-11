import { useEffect, useState, type SubmitEvent } from "react";
import { createPortal } from "react-dom";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { isConnected, sendContactMessage } from "../lib/contactApi";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Marshy8" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/buck-harris/",
  },
];

type Status = "idle" | "sending" | "sent" | "error" | "not-connected";

const FIELD =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-3 text-[var(--text-h)] transition-colors duration-[var(--dur)] placeholder:text-[var(--muted)] focus:border-[var(--accent-border)]";
const LABEL = "text-xs uppercase tracking-widest text-[var(--muted)]";

/**
 * How long the "sent" toast stays up before it dismisses itself. The others
 * report a message that did not go, so they stay until dismissed or retried.
 */
const TOAST_MS = 6000;

const FEEDBACK: Partial<Record<Status, string>> = {
  sent: "Thank you. Your message is on its way to me.",
  error:
    "Something went wrong and your message was not sent. Please try again, or reach me on LinkedIn.",
  "not-connected":
    "The form is not connected to email yet, so nothing was sent.",
};

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status !== "sent") return;
    const timer = setTimeout(() => setStatus("idle"), TOAST_MS);
    return () => clearTimeout(timer);
  }, [status]);

  const submit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!isConnected) {
      setStatus("not-connected");
      return;
    }
    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    setStatus("sending");
    try {
      await sendContactMessage({
        name: field("name"),
        contact: field("contact"),
        message: field("message"),
        website: field("website"),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Section
        id="contact"
        scrim={false}
        bgClassName="bg-gradient-to-b from-[#080d16] via-[#12304a] to-[#080d16]"
      >
        <div className="flex max-w-3xl flex-col gap-10">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)]">Get in touch</h2>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className={LABEL}>Your name</span>
                  <input
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className={FIELD}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={LABEL}>Email or phone</span>
                  <input
                    name="contact"
                    required
                    maxLength={200}
                    className={FIELD}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className={LABEL}>Message</span>
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  rows={4}
                  className={`${FIELD} resize-none`}
                />
              </label>

              {/* Honeypot: hidden from people, so only bots fill it in. */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mr-auto inline-flex min-h-11 cursor-pointer items-center rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-[var(--accent-ink)] transition-transform duration-[var(--dur)] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                <div className="flex gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--border)] px-4 py-2.5 sm:px-5 text-sm text-[var(--text-h)] transition-colors duration-[var(--dur)] hover:bg-white/5"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </form>
          </Reveal>

          <p className="pt-8 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Buck M Harris. Design, code, and
            photography by Buck.
          </p>
        </div>
      </Section>

      {/* In the body, not the section, so it stays in the corner of the screen
        whichever section is in view. The live region is always mounted so
        screen readers announce the toast when it appears. */}
      {createPortal(
        <div
          role="status"
          className="pointer-events-none fixed inset-x-4 bottom-4 z-50 flex justify-end sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          {FEEDBACK[status] && (
            <div
              className={`toast pointer-events-auto flex items-center gap-4 rounded-xl border bg-[var(--surface)] py-3 pr-3 pl-5 text-sm text-[var(--text-h)] [box-shadow:var(--shadow)] sm:max-w-md ${
                status === "sent"
                  ? "border-[var(--accent-border)]"
                  : "border-[var(--danger-border)]"
              }`}
            >
              <p>{FEEDBACK[status]}</p>
              <button
                type="button"
                aria-label="Dismiss"
                onClick={() => setStatus("idle")}
                className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-full text-lg leading-none text-[var(--muted)] transition-colors duration-[var(--dur)] hover:bg-white/5 hover:text-[var(--text-h)]"
              >
                ×
              </button>
            </div>
          )}
        </div>,
        document.body,
      )}
    </>
  );
}
