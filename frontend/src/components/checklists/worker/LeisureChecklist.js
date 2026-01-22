import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WorkerLeisureChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'work-life-balance',
      title: 'Work-Life Balance',
      description: 'Maintain healthy balance between work and personal life',
      steps: [
        'Set clear boundaries between work and personal time',
        'Use all your vacation days (congés payés)',
        'Take advantage of RTT days if applicable',
        'Disconnect from work emails after hours',
        'Plan regular weekend activities and hobbies'
      ],
      links: [
        { label: 'French Labor Law', href: 'https://www.service-public.fr/particuliers/vosdroits/F2258', description: 'Vacation rights in France' },
        { label: 'Work-Life Balance', href: 'https://www.gouvernement.fr/droit-a-la-deconnexion', description: 'Right to disconnect' }
      ]
    },
    {
      id: 'company-benefits',
      title: 'Company Benefits (Comité d\'Entreprise)',
      description: 'Use employee benefits and discounts',
      steps: [
        'Check your company\'s CE (Comité d\'Entreprise) benefits',
        'Get discounts on cinema, theater, and concerts',
        'Access vacation packages at reduced prices',
        'Use gift vouchers and holiday bonuses',
        'Participate in company-organized events'
      ],
      links: [
        { label: 'CE Benefits', href: 'https://www.service-public.fr/particuliers/vosdroits/F31137', description: 'Employee committee explained' },
        { label: 'Chèques-Vacances', href: 'https://www.ancv.com', description: 'Vacation vouchers' }
      ]
    },
    {
      id: 'sports-fitness',
      title: 'Sports & Fitness',
      description: 'Stay active with gyms and sports clubs',
      steps: [
        'Join a gym (many offer corporate discounts)',
        'Try municipal sports facilities',
        'Join running or cycling clubs',
        'Participate in company sports teams',
        'Use sports tax credit (crédit d\'impôt sport)'
      ],
      links: [
        { label: 'Basic-Fit', href: 'https://www.basic-fit.com/fr-fr', description: 'Affordable gym chain' },
        { label: 'Municipal Sports', href: 'https://www.paris.fr/pages/sport-et-loisirs-2317', description: 'Local sports facilities' }
      ]
    },
    {
      id: 'cultural-activities',
      title: 'Cultural Activities',
      description: 'Explore French culture and arts',
      steps: [
        'Visit museums and art galleries',
        'Attend theater and opera performances',
        'Explore local music scene and concerts',
        'Join book clubs or cultural associations',
        'Take advantage of Journées du Patrimoine (Heritage Days)'
      ],
      links: [
        { label: 'Fnac Spectacles', href: 'https://www.fnacspectacles.com', description: 'Book cultural events' },
        { label: 'Ticketmaster', href: 'https://www.ticketmaster.fr', description: 'Concerts and shows' },
        { label: 'Heritage Days', href: 'https://journeesdupatrimoine.culture.gouv.fr', description: 'Free access to monuments' }
      ]
    },
    {
      id: 'expat-networking',
      title: 'Expat Communities & Networking',
      description: 'Connect with other expats and professionals',
      steps: [
        'Join expat groups on Meetup or Facebook',
        'Attend international networking events',
        'Join professional associations in your field',
        'Participate in language exchange meetups',
        'Connect through InterNations platform'
      ],
      links: [
        { label: 'Meetup', href: 'https://www.meetup.com', description: 'Find local groups and events' },
        { label: 'InterNations', href: 'https://www.internations.org', description: 'Global expat community' },
        { label: 'Expat.com', href: 'https://www.expat.com/en/guide/europe/france/', description: 'Expat guide and forum' }
      ]
    },
    {
      id: 'weekend-getaways',
      title: 'Weekend Getaways & Travel',
      description: 'Explore France and Europe',
      steps: [
        'Use TGV trains for fast travel across France',
        'Book budget flights for European destinations',
        'Plan short breaks to nearby regions',
        'Use vacation rental platforms',
        'Take advantage of long weekends (ponts)'
      ],
      links: [
        { label: 'SNCF', href: 'https://www.sncf-connect.com', description: 'French rail network' },
        { label: 'EasyJet', href: 'https://www.easyjet.com', description: 'Budget flights in Europe' },
        { label: 'Booking.com', href: 'https://www.booking.com', description: 'Accommodation worldwide' }
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

      <div className="bg-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-cyan-500/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Leisure & Culture</h1>
            <p className="text-sm sm:text-base text-slate-600">Work-life balance, sports, culture and social activities</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-cyan-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-cyan-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">{completedCount} out of {tasks.length} tasks completed</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 relative z-10">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden relative">
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
                      : 'border-slate-300 hover:border-cyan-600'
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
                    <div className="text-cyan-600 p-2">
                      <svg className={`w-5 h-5 transform transition ${expandedTask === task.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {expandedTask === task.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-cyan-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-cyan-500/10 text-cyan-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                            <span className="text-cyan-600">🔗</span>
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
                                className="block p-3 sm:p-4 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-cyan-600 group-hover:underline break-words">{link.label}</div>
                                    {link.description && (
                                      <div className="text-xs sm:text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>Use all your vacation days - they're a right, not a privilege</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Check your company's CE benefits - you may have access to great discounts</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Work-life balance is highly valued in France - don't feel guilty about it</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Join expat groups to build your social network outside of work</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
