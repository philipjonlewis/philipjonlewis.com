interface ProjectContentFormat {
  projectId: number;
  projectName: string;
  projectDescription: string;
  techStack: string[];
  siteLink: string;
  imageLink: string;
  gitHubLinks: {
    name: string;
    link: string;
  }[];
}

export { ProjectContentFormat };
