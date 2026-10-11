export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "resume"
  | "contact";

export interface SectionMeta {
  id: SectionId;
  label: string;
}

export interface ContactMessage {
  name: string;
  contact: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string;
  video?: { webm?: string; mp4: string };
  previewFit?: "cover" | "contain";
}
