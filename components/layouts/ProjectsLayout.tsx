import React, { ReactNode } from "react";
import Link from "next/link";
const ProjectsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>Projects Layout</p>
      <Link href={`/projects/software`}>web dev</Link>
      <main className="container">{children}</main>
    </div>
  );
};

export default ProjectsLayout;
