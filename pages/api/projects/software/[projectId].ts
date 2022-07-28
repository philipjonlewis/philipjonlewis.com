import type { NextApiRequest, NextApiResponse } from "next";

import { projectContent } from "../../../../db/projects/software/softwareProjects";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { projectId } = req.query;

  const project = projectContent.filter(
    (project) => project.projectId.toString() == projectId.toString()
  );

  res.status(200).json({ payload: project[0] });
}
