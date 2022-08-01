interface ProjectContentFormat {
  slug: string;
  frontMatter: {
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
    status: string;
  };
}

export { ProjectContentFormat };
