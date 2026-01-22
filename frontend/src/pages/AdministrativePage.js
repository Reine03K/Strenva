import React from "react";
import { administratif } from "../views/administrative";

function AdministrativePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">
          {administratif.title}
      </h1>
        <div className="space-y-6">
          {administratif.tasks.map((task) => (
          <div key={task.id} className="border border-slate-200 rounded-lg p-6 bg-white">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {task.title}
              </h2>
              <p className="text-slate-600 mb-4">{task.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold text-slate-800 mb-2">Steps:</h3>
                <ol className="list-decimal list-inside space-y-1 text-slate-700">
                  {task.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
              {task.links && task.links.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Useful Links:</h3>
                  <ul className="space-y-1">
                    {task.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdministrativePage;