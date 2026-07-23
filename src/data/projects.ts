import type { Project } from "../types";
import phastPhotoMp4 from "../assets/phastPhoto.mp4";
import phastPhotoWebm from "../assets/phastPhoto.webm";
import cellSeekersMp4 from "../assets/cellseekers.mp4";
import cellSeekersWebm from "../assets/cellseekers.webm";

export const PROJECTS: Project[] = [
  {
    id: "phastphoto",
    title: "PHaSTphoto",
    description:
      "A React web app that organizes and searches photos using AI-generated tags from the OpenAI API. Built by a four-person team, it features a Boolean search that filters across 20+ tags.",
    link: "https://github.com/SeniorDesign2023/PHaSTphoto",
    tags: ["React", "OpenAI API", "Team of 4"],
    video: { webm: phastPhotoWebm, mp4: phastPhotoMp4 },
  },
  {
    id: "cellseekers",
    title: "Cell Seekers",
    description:
      "A game designed and built on the PICO-8 fantasy console in Lua, with gameplay mechanics crafted within its strict technical constraints.",
    link: "https://www.lexaloffle.com/bbs/?tid=149519",
    tags: ["PICO-8", "Lua", "Game"],
    video: { webm: cellSeekersWebm, mp4: cellSeekersMp4 },
    previewFit: "contain",
  },
];
