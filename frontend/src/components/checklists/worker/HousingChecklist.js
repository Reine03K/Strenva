import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WorkerHousingChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'real-estate-agencies',
      title: 'Real Estate Agencies',
      description: 'Use professional agencies to find housing',
      steps: [
        'Research reputable agencies in your city',
        'Prepare your file (ID, work contract, pay slips)',
        'Schedule visits with agents',
        'Negotiate rent and lease terms',
        'Sign lease agreement and pay deposit'
      ],
      links: [
        { label: 'SeLoger', href: 'https://www.seloger.com', description: 'Real estate listings' },
        { label: 'Orpi', href: 'https://www.orpi.com', description: 'Real estate agency network' },
        { label: 'Century 21', href: 'https://www.century21.fr', description: 'International real estate' }
      ]
    },
    {
      id: 'online-platforms',
      title: 'Online Rental Platforms',
      description: 'Search for rentals on popular websites',
      steps: [
        'Create alerts on PAP, Leboncoin, SeLoger',
        'Filter by location, size, and budget',
        'Contact landlords directly',
        'Schedule viewings quickly (apartments go fast)',
        'Prepare complete application file'
      ],
      links: [
        { label: 'PAP', href: 'https://www.pap.fr', description: 'Private rentals without agency fees' },
        { label: 'Leboncoin', href: 'https://www.leboncoin.fr/recherche?category=10', description: 'Classified ads for housing' },
        { label: 'Logic-Immo', href: 'https://www.logic-immo.com', description: 'Real estate search engine' }
      ]
    },
    {
      id: 'corporate-relocation',
      title: 'Corporate Relocation Services',
      description: 'Ask your employer about relocation assistance',
      steps: [
        'Check if your company offers relocation package',
        'Request temporary housing for first weeks',
        'Use company-recommended agencies',
        'Negotiate housing allowance in contract',
        'Get assistance with administrative procedures'
      ],
      links: [
        { label: 'Homelike', href: 'https://www.thehomelike.com', description: 'Corporate furnished apartments' },
        { label: 'Lodgis', href: 'https://www.lodgis.com', description: 'Furnished rentals for expats' }
      ]
    },
    {
      id: 'temporary-housing',
      title: 'Temporary Housing',
      description: 'Short-term accommodation while searching',
      steps: [
        'Book an Airbnb or apart-hotel for first weeks',
        'Look for extended-stay hotels',
        'Consider co-living spaces',
        'Use time to visit neighborhoods',
        'Search for permanent housing once settled'
      ],
      links: [
        { label: 'Airbnb', href: 'https://www.airbnb.com', description: 'Short-term rentals' },
        { label: 'Appart City', href: 'https://www.appartcity.com', description: 'Serviced apartments' },
        { label: 'The Babel Community', href: 'https://www.thebabelcommunity.com', description: 'Co-living for expats' }
      ]
    },
    {
      id: 'suburbs-commute',
      title: 'Suburbs & Commuting Options',
      description: 'Consider suburbs for better value',
      steps: [
        'Research suburbs with good transport links',
        'Calculate commute time to your workplace',
        'Check public transport season ticket costs',
        'Visit neighborhoods at different times',
        'Consider family-friendly areas with schools'
      ],
      links: [
        { label: 'RATP', href: 'https://www.ratp.fr', description: 'Paris public transport' },
        { label: 'SNCF', href: 'https://www.sncf.com', description: 'French rail network' }
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
      <Link to="/worker/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Housing Search</h1>
            <p className="text-sm sm:text-base text-slate-600">Find housing options suitable for workers and families</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-purple-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">{completedCount} out of {tasks.length} tasks completed</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 relative z-10">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
            <div 
              className="p-4 sm:p-6 cursor-pointer"
              onClick={() => toggleExpand(task.id)}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTask(task.id);
                  }}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition cursor-pointer ${
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

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base sm:text-lg font-semibold mb-1 ${completedTasks[task.id] ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                        {task.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">{task.description}</p>
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

                  {expandedTask === task.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-purple-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-purple-500/10 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                                {idx + 1}
                              </span>
                              <span className="text-slate-700 text-xs sm:text-sm pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {task.links && task.links.length > 0 && (
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2">
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
                                onClick={(e) => e.stopPropagation()}
                                className="block p-3 sm:p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-purple-600 group-hover:underline break-words">{link.label}</div>
                                    {link.description && (
                                      <div className="text-xs sm:text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <div className="mt-6 sm:mt-8 bg-amber-50 border-l-4 border-amber-400 p-4 sm:p-6 rounded-lg">
        <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Important tips
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Rental market is competitive - prepare a complete application file</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Expect to pay 1-2 months deposit plus first month's rent</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>You may need a French guarantor or rent guarantee insurance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Consider commute time when choosing location</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
