import type { ReactNode } from "react";
import type { SectionId } from "../types";

interface SectionProps {
  id: SectionId;
  children: ReactNode;
  image?: string;
  imagePosition?: string;
  kenBurns?: boolean;
  priority?: boolean;
  bgClassName?: string;
  scrim?: boolean;
  overlay?: ReactNode;
  className?: string;
}

export function Section({
  id,
  children,
  image,
  imagePosition = "center",
  kenBurns = false,
  priority = false,
  bgClassName = "bg-[var(--bg)]",
  scrim = true,
  overlay,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-frame snap-start snap-always ${className ?? ""}`}
    >
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${kenBurns ? "kenburns" : ""}`}
          style={{ objectPosition: imagePosition }}
        />
      ) : (
        <div className={`absolute inset-0 ${bgClassName}`} aria-hidden="true" />
      )}

      {scrim && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1a0f16]/85 via-[#1a0f16]/45 to-[#1a0f16]/70"
          aria-hidden="true"
        />
      )}

      <div className="section-content no-scrollbar relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        {children}
      </div>

      {overlay}
    </section>
  );
}
