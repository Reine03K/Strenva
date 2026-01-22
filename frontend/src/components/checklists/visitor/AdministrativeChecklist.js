import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VisitorAdministrativeChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'tourist-visa',
      title: 'Tourist Visa (if required)',
      description: 'Apply for a Schengen visa if needed',
      steps: [
        'Check if you need a visa for France',
        'Gather required documents (passport, photos, travel insurance)',
        'Book an appointment at the French consulate',
        'Submit your visa application',
        'Wait for visa approval (can take 15 days)'
      ],
      links: [
        { label: 'France Visas', href: 'https://france-visas.gouv.fr', description: 'Official visa information' },
        { label: 'Schengen Visa Info', href: 'https://www.schengenvisainfo.com', description: 'Schengen visa guide' }
      ]
    },
    {
      id: 'travel-insurance',
      title: 'Travel Insurance',
      description: 'Get comprehensive travel insurance',
      steps: [
        'Compare travel insurance plans',
        'Choose coverage for medical, cancellation, and theft',
        'Purchase insurance before departure',
        'Save policy documents on your phone',
        'Know emergency contact numbers'
      ],
      links: [
        { label: 'World Nomads', href: 'https://www.worldnomads.com', description: 'Travel insurance for tourists' },
        { label: 'SafetyWing', href: 'https://www.safetywing.com', description: 'Flexible travel insurance' }
      ]
    },
    {
      id: 'currency-exchange',
      title: 'Currency & Banking',
      description: 'Manage your money while traveling',
      steps: [
        'Exchange some currency before arrival',
        'Use ATMs for better exchange rates',
        'Notify your bank of travel plans',
        'Use a travel-friendly credit card',
        'Keep emergency cash separate'
      ],
      links: [
        { label: 'Wise', href: 'https://wise.com', description: 'Multi-currency account' },
        { label: 'Revolut', href: 'https://www.revolut.com', description: 'Travel card with no fees' }
      ]
    },
    {
      id: 'emergency-contacts',
      title: 'Emergency Contacts',
      description: 'Know who to call in case of emergency',
      steps: [
        'Save French emergency numbers (112 for all)',
        'Register with your embassy if staying long',
        'Save your accommodation contact info',
        'Download offline maps and translation apps',
        'Share your itinerary with family/friends'
      ],
      links: [
        { label: 'Emergency Numbers', href: 'https://www.service-public.fr/particuliers/vosdroits/F33858', description: 'French emergency services' },
        { label: 'US Embassy France', href: 'https://fr.usembassy.gov', description: 'For US citizens' }
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
      <Link to="/visitor/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to dashboard
      </Link>

      <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-blue-500/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Administrative Procedures</h1>
            <p className="text-sm sm:text-base text-slate-600">Basic administrative steps for visitors</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">{completedCount} out of {tasks.length} tasks completed</p>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3 sm:space-y-4 relative z-10">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden relative">
            <div 
              className="p-4 sm:p-6 cursor-pointer"
              onClick={() => toggleExpand(task.id)}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Checkbox */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTask(task.id);
                  }}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition cursor-pointer ${
                    completedTasks[task.id]
                      ? 'bg-green-500 border-green-500'
                      : 'border-slate-300 hover:border-blue-600'
                  }`}
                >
                  {completedTasks[task.id] && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                {/* Content */}
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
                    <div className="text-blue-600 p-2">
                      <svg className={`w-5 h-5 transform transition ${expandedTask === task.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedTask === task.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                      {/* Steps */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-blue-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-500/10 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                                {idx + 1}
                              </span>
                              <span className="text-slate-700 text-xs sm:text-sm pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Links */}
                      {task.links && task.links.length > 0 && (
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2">
                            <span className="text-blue-600">🔗</span>
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
                                className="block p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-blue-600 group-hover:underline break-words">{link.label}</div>
                                    {link.description && (
                                      <div className="text-xs sm:text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>Always carry your passport and visa (if applicable) with you</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Make photocopies of important documents and store separately</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Travel insurance is highly recommended for medical emergencies</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Emergency number in France: 112 (works for all emergencies)</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
