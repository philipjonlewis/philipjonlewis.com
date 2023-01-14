import React from 'react';
import { DownloadIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
const DownloadCV = () => {
  return (
    <div className="cv-download-container">
      <div className="text-2xl font-bold mb-4  text-slate-600 dark:text-slate-200">
        <p>Downloads</p>
      </div>
      <div className="dl-list-container">
        <a
          href="/pdf/Lewis_Philip-Jon-E-Resume.pdf"
          download
          onClick={() => {
            toast.info('Thanks for downloading my resume!', {
              position: 'top-center',
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        >
          <div className="cv-container">
            <p>Resume</p>
            <DownloadIcon />
          </div>
        </a>
        {/* <a
          href="/pdf/CV-LEWIS_PHILIP_JON_E.pdf"
          download
          onClick={() => {
            toast.info("Thank you for downloading my CV!", {
              position: "top-center",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        >
          <div className="cv-container">
            <p>Curriculum Vitae</p>
            <DownloadIcon />
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default DownloadCV;
