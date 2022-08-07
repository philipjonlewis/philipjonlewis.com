import React from "react";
import { DownloadIcon } from "@heroicons/react/solid";
const DownloadCV = () => {
  return (
    <div className="cv-download-container">
      <div className="text-2xl font-bold mb-4  text-slate-600 dark:text-slate-200">
        <p>Downloads</p>
      </div>
      <div className="dl-list-container">
        <div className="cv-container">
          <p>Resume</p>
          <DownloadIcon />
        </div>

        <div className="cv-container">
          <p>Curriculum Vitae</p>
          <DownloadIcon />
        </div>
      </div>
    </div>
  );
};

export default DownloadCV;
