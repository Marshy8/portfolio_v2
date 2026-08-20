import type { Project } from "../types";
import phastPhotoMp4 from "../assets/phastPhoto.mp4";
import phastPhotoWebm from "../assets/phastPhoto.webm";
import cellSeekersMp4 from "../assets/cellseekers.mp4";
import cellSeekersWebm from "../assets/cellseekers.webm";
import soloSuiteMp4 from "../assets/solosuite.mp4";
import soloSuiteWebm from "../assets/solosuite.webm";
import teacherTimeMp4 from "../assets/teachertime.mp4";
import teacherTimeWebm from "../assets/teachertime.webm";

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
    id: "solosuite",
    title: "SoloSuite",
    description:
      "A simple demo site showcasing a Node.js backend built by me to service pink colar workers' scheduling needs. It integrates with the Google Calendar API -> reach out for a live demo.",
    link: "https://solosuitedemo.buck-marshall.com",
    tags: ["Node.js", "Google Calendar API"],
    video: { webm: soloSuiteWebm, mp4: soloSuiteMp4 },
  },
  {
    id: "teachertime",
    title: "TeacherTime",
    description:
      "A React time-tracking app built for multiple teachers and their young students across Seminole County, Florida.",
    link: "https://teachertime.buck-marshall.com",
    tags: ["React", "Typescript"],
    video: { webm: teacherTimeWebm, mp4: teacherTimeMp4 },
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
