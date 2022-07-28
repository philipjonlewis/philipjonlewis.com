import type { ProjectContentFormat } from "../../../types/projects/software/softwareProjectTypes";

const projectContent: ProjectContentFormat[] = [
  {
    projectId: 1,
    projectName: "taptaptask",
    projectDescription:
      "taptaptask is a task management tool for phase-based projects.",
    techStack: [
      "Typescript",
      "React",
      "Redux Toolkit",
      //   "RTK Query",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Css + Sass",
      "Vite",
    ],
    siteLink: "https://www.taptaptask.com",
    imageLink: "/taptaptask.png",
    gitHubLinks: [
      {
        name: "Front-End",
        link: "https://www.github.com/_jonlewis",
      },
      {
        name: "Back-End",
        link: "https://www.github.com/_jonlewis",
      },
    ],
  },
  {
    projectId: 2,
    projectName: "archestimator",
    projectDescription:
      "archestimator is a construction cost estimator for architects.",
    techStack: ["Typescript", "Svelte", "Css + Sass", "Rollup"],
    siteLink: "https://www.archestimator.com",
    imageLink: "/archestimator.jpeg",
    gitHubLinks: [
      {
        name: "Front-End",
        link: "https://www.github.com/_jonlewis",
      },
    ],
  },
  {
    projectId: 3,
    projectName: "qwinotes",
    projectDescription: "quicknotes is a minimalist block style editor",
    techStack: [
      "Typescript",
      "React",
      "EditorJs",
      "Css + Sass",
      "Vite",
      "Firebase + Firestore",
    ],
    siteLink: "https://quicknotesbyphilip.netlify.app",
    imageLink: "/quicknotes.png",
    gitHubLinks: [
      {
        name: "Full Stack",
        link: "https://www.github.com/_jonlewis",
      },
    ],
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
    projectId: 5,
    projectName: "philipjonlewis",
    projectDescription: "philipjonlewis portfolio website",
    techStack: ["Typescript", "React + NextJs", "Tailwind", "Css + Sass"],
    siteLink: "https://quicknotesbyphilip.netlify.app",
    imageLink: "/philipjonlewis.png",
    gitHubLinks: [
      {
        name: "Full Stack",
        link: "https://www.github.com/_jonlewis",
      },
    ],
  },
];

export { projectContent, ProjectContentFormat };
