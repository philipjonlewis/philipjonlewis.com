// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fsPromises from "fs/promises";
import path from "path";

import {
  projectContent,
  ProjectContentFormat,
} from "../../../../db/projects/software/softwareProjects";

interface ResponseData {
  payload: ProjectContentFormat[];
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { projectId } = req.query;

  res.status(200).json({ payload: projectContent });
}
