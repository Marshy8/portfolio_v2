import type { Project } from "../types";
import voiceVolumeMp4 from "../assets/voiceVolume.mp4";
import voiceVolumeWebm from "../assets/voiceVolume.webm";
import cellSeekersMp4 from "../assets/cellseekers.mp4";
import cellSeekersWebm from "../assets/cellseekers.webm";
import soloSuiteMp4 from "../assets/solosuite.mp4";
import soloSuiteWebm from "../assets/solosuite.webm";
import teacherTimeMp4 from "../assets/teachertime.mp4";
import teacherTimeWebm from "../assets/teachertime.webm";

export const PROJECTS: Project[] = [
  {
    id: "voicevolume",
    title: "VoiceVolume",
    description:
      "A React volume indicator app built by me and Justin Quan for multiple teachers and their young students across Seminole County, Florida.",
    link: "https://voicevolume.buck-marshall.com",
    tags: ["React", "TypeScript"],
    video: { webm: voiceVolumeWebm, mp4: voiceVolumeMp4 },
  },
  {
    id: "teachertime",
    title: "TeacherTime",
    description:
      "A React time-tracking app built for multiple teachers and their young students across Seminole County, Florida.",
    link: "https://teachertime.buck-marshall.com",
    tags: ["React", "TypeScript"],
    video: { webm: teacherTimeWebm, mp4: teacherTimeMp4 },
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
