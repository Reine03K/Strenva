import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentHousingChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'institutional',
      title: 'Institutional solutions',
      description: 'Apply for Crous and Lokaviz housing',
      steps: [
        'Create your account on your academy\'s CROUS website',
        'Build your Student Social File (DSE)',
        'Submit your housing application before deadlines',
        'Check Lokaviz for other student residences',
        'Wait for response and confirm your reservation'
      ],
      links: [
        { label: 'CROUS', href: 'https://www.crous-lyon.fr/logements', description: 'CROUS student housing' },
        { label: 'Lokaviz', href: 'https://www.lokaviz.fr', description: 'Student housing platform' }
      ]
    },
    {
      id: 'platforms',
      title: 'Specialized platforms',
      description: 'Use platforms dedicated to student housing',
      steps: [
        'Register on Studapart, Immojeune, or Studylease',
        'Create your profile with your search criteria',
        'Browse available listings',
        'Contact landlords directly via the platform',
        'Organize virtual or physical visits',
        'Build your rental application file'
      ],
      links: [
        { label: 'Studapart', href: 'https://www.studapart.com', description: 'Housing for international students' },
        { label: 'Immojeune', href: 'https://www.immojeune.com', description: 'Student rentals' },
        { label: 'Studylease', href: 'https://studylease.com', description: 'Student housing platform' }
      ]
    },
    {
      id: 'colocation',
      title: 'Shared housing and residences',
      description: 'Find shared housing or a private residence',
      steps: [
        'Check Appartager.com or La Carte des Colocs',
        'Post your shared housing search ad',
        'Filter by budget, location and type of housing',
        'Meet potential roommates',
        'Check compatibility and house rules',
        'Sign the shared lease'
      ],
      links: [
        { label: 'Appartager', href: 'https://www.appartager.com', description: 'Find shared housing' },
        { label: 'La Carte des Colocs', href: 'https://www.lacartedescolocs.fr', description: 'Shared housing in France' },
        { label: 'Private student residences', href: 'https://www.studea.fr', description: 'Studéa residences' }
      ]
    },
    {
      id: 'intergenerational',
      title: 'Intergenerational housing',
      description: 'Discover homestay accommodation',
      steps: [
        'Register on intergenerational housing platforms',
        'Create your profile with your availability',
        'Check offers from seniors offering housing',
        'Discuss conditions with the host (services, reduced rent)',
        'Organize a meeting for mutual validation',
        'Sign a cohabitation agreement'
      ],
      links: [
        { label: 'Ensemble2Générations', href: 'https://www.ensemble2generations.fr', description: 'Intergenerational cohabitation' },
        { label: 'Le Pari Solidaire', href: 'https://www.leparisolidaire.fr', description: 'Solidarity housing' },
        { label: 'Colette Club', href: 'https://www.colette.club', description: 'Homestay accommodation' }
      ]
    }
  ];

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const toggleExpand = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <Link to="/student/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to dashboard
      </Link>

      <div className="bg-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-purple-500/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Student housing</h1>
            <p className="text-slate-600">Find student housing in France</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-2xl font-bold text-purple-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-600 mt-2">{completedCount} out of {tasks.length} tasks completed</p>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-4 relative z-10">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleExpand(task.id)}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTask(task.id);
                  }}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                    completedTasks[task.id]
                      ? 'bg-green-500 border-green-500'
                      : 'border-slate-300 hover:border-purple-600'
                  }`}
                >
                  {completedTasks[task.id] && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 ${completedTasks[task.id] ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                        {task.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{task.description}</p>
                      {completedTasks[task.id] && (
                        <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Completed
                        </span>
                      )}
                    </div>
                    <div className="text-purple-600 p-2">
                      <svg className={`w-5 h-5 transform transition ${expandedTask === task.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedTask === task.id && (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      {/* Steps */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                          <span className="text-purple-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                                {idx + 1}
                              </span>
                              <span className="text-slate-700 text-sm pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Links */}
                      {task.links && task.links.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                            <span className="text-purple-600">🔗</span>
                            Useful links
                          </h4>
                          <div className="space-y-2">
                            {task.links.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="font-medium text-purple-600 group-hover:underline">{link.label}</div>
                                    {link.description && (
                                      <div className="text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Tips */}
      <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
        <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Important tips
        </h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Start your search 2-3 months before your arrival</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Prepare your file: ID, school certificate, guarantor</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Apply for APL (Housing Aid) from CAF as soon as you move in</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Subscribe to mandatory home insurance</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
