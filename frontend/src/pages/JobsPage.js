import React from "react";

function JobsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">
        Jobs / Internships / Apprenticeships
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Job Platforms
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>
                <a
                  href="https://www.indeed.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Indeed
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.welcometothejungle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Welcome to the Jungle
                </a>
              </li>
              <li>
                <a
                  href="https://www.pole-emploi.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Pôle Emploi
                </a>
              </li>
            </ul>
          </div>
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Internship & Apprenticeship
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>
                <a
                  href="https://www.studyrama.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Studyrama
                </a>
              </li>
              <li>
                <a
                  href="https://www.stageeme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  StageEME
                </a>
              </li>
              <li>
                <a
                  href="https://www.alternance.emploi.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Alternance.emploi.gouv.fr
                </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default JobsPage;
