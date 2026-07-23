import { SECTIONS } from "../data/sections";
import type { SectionId } from "../types";

interface NavProps {
  active: SectionId;
}

export function Nav({ active }: NavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 backdrop-blur-md sm:px-8">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-[var(--text-h)]"
        >
          Buck M Harris
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {SECTIONS.filter((s) => s.id !== "home").map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors duration-[var(--dur)] ${
                    isActive
                      ? "bg-[var(--accent-bg)] text-[var(--text-h)]"
                      : "text-[var(--muted)] hover:text-[var(--text-h)]"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
