import type { ProjectContentFormat } from "../types/projects/software/softwareProjectTypes";
import { randomUUID } from "crypto";


const projectContent: ProjectContentFormat[] = [
  {
    projectId: 1,
    projectName: "Taptaptask",
    projectDescription:
      "taptaptask is a task management tool for phase-based projects. CRUD REST API Backend made with node + express --fix this description",
    techStack: [
      "Typescript",
      "React",
      "Vite",
      "Redux Toolkit",
      "RTK Query",
      "Framer-Motion",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Css + Sass",
    ],
    siteLink: "https://www.taptaptask.com",
    imageLink: "/taptaptask.png",
    gitHubLinks: [
      {
        name: "Front-End",
        link: "https://github.com/philipjonlewis/taptaptask_frontend",
      },
      {
        name: "Back-End",
        link: "https://github.com/philipjonlewis/taptaptask_backend",
      },
    ],
    status: "Production",
  },

  {
    projectId: 2,
    projectName: "QuickNotes",
    projectDescription:
      "quicknotes is a minimalist block style editor. Front-end made with vite+react. backend,database and authentication made with google firebase. --fix this description",
    techStack: [
      "Typescript",
      "React",
      "Vite",
      "EditorJs",
      "Css + Sass",
      "Firebase + Firestore",
    ],
    siteLink: "https://quicknotesbyphilip.netlify.app",
    imageLink: "/quicknotes.png",
    gitHubLinks: [
      {
        name: "Full-Stack",
        link: "https://github.com/philipjonlewis/quicknotes",
      },
    ],
    status: "Production",
  },
  // {
  //   projectId: 4,
  //   projectName: "easymoney",
  //   projectDescription: "easymoney is a finance management app",
  //   techStack: [
  //     "Typescript",
  //     "React",
  //     "EditorJs",
  //     "Css + Sass",
  //     "Vite",
  //     "Firebase + Firestore",
  //   ],
  //   siteLink: "https://quicknotesbyphilip.netlify.app",
  //   imageLink: "/easymoney.webp",
  //   gitHubLinks: [
  //     {
  //       name: "Front-End",
  //       link: "https://www.github.com/_jonlewis",
  //     },
  //   ],
  // },
  {
    projectId: 3,
    projectName: "Authentication Server",
    projectDescription:
      "Standard authentication server made with nodeJS+express.",
    techStack: ["Typescript", "NodeJs + Express", "MongoDB", "Mongoose", "EJS"],
    siteLink: "https://github.com/philipjonlewis/authentication_server",
    imageLink: "/authserver.png",
    gitHubLinks: [
      {
        name: "Back-End",
        link: "https://github.com/philipjonlewis/authentication_server",
      },
    ],
    status: "Development",
  },
  {
    projectId: 4,
    projectName: "Archestimator",
    projectDescription:
      "archestimator is a construction cost estimator for architects.",
    techStack: ["Typescript", "Svelte", "Vite", "Css + Sass", "Rollup"],
    siteLink: "https://www.archestimator.com",
    imageLink: "/archestimator.png",
    gitHubLinks: [
      {
        name: "Front-End",
        link: "https://github.com/philipjonlewis/archestimator.github.io",
      },
    ],
    status: "Development",
  },
  {
    projectId: 5,
    projectName: "Philip Lewis Portfolio",
    projectDescription: "philipjonlewis portfolio website",
    techStack: ["Typescript", "React", "NextJs", "Tailwind", "Css + Sass"],
    siteLink: "https://quicknotesbyphilip.netlify.app",
    imageLink: "/philipjonlewis.png",
    gitHubLinks: [
      {
        name: "Full-Stack",
        link: "https://github.com/philipjonlewis/philipjonlewis.com",
      },
    ],
    status: "Production",
  },
];

export { projectContent, ProjectContentFormat };
