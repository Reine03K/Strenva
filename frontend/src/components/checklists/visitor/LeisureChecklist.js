import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VisitorLeisureChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'major-attractions',
      title: 'Major Attractions',
      description: 'Visit must-see monuments and landmarks',
      steps: [
        'Book tickets online in advance to skip lines',
        'Visit early morning or late afternoon to avoid crowds',
        'Consider multi-attraction passes for savings',
        'Download audio guides or join guided tours',
        'Take advantage of night visits when available'
      ],
      links: [
        { label: 'Paris Museum Pass', href: 'https://www.parismuseumpass.fr', description: '60+ museums and monuments' },
        { label: 'GetYourGuide', href: 'https://www.getyourguide.com', description: 'Book tours and skip-the-line tickets' }
      ]
    },
    {
      id: 'free-walking-tours',
      title: 'Free Walking Tours',
      description: 'Explore cities with local guides',
      steps: [
        'Find free walking tours (tip-based)',
        'Book in advance or show up at meeting point',
        'Learn about history and culture from locals',
        'Ask for restaurant and activity recommendations',
        'Tip your guide (typically €10-20)'
      ],
      links: [
        { label: 'Free Tour', href: 'https://www.freetour.com', description: 'Free walking tours in French cities' },
        { label: 'SANDEMANs', href: 'https://www.neweuropetours.eu', description: 'Free tours across Europe' }
      ]
    },
    {
      id: 'museums-culture',
      title: 'Museums & Cultural Sites',
      description: 'Discover French art and history',
      steps: [
        'Many museums free first Sunday of month',
        'Check for reduced evening rates',
        'Explore lesser-known museums for hidden gems',
        'Visit temporary exhibitions',
        'Use museum apps for interactive experiences'
      ],
      links: [
        { label: 'Louvre', href: 'https://www.louvre.fr/en', description: 'World\'s largest art museum' },
        { label: 'Musée d\'Orsay', href: 'https://www.musee-orsay.fr/en', description: 'Impressionist masterpieces' },
        { label: 'Museums in France', href: 'https://www.france.fr/en/trending/article/museums-in-france', description: 'Guide to French museums' }
      ]
    },
    {
      id: 'parks-gardens',
      title: 'Parks & Gardens',
      description: 'Relax in beautiful green spaces',
      steps: [
        'Visit iconic gardens (Jardin du Luxembourg, Tuileries)',
        'Perfect for picnics and relaxation',
        'Take beautiful photos',
        'Enjoy free outdoor activities',
        'Watch street performers and musicians'
      ],
      links: [
        { label: 'Paris Parks', href: 'https://www.paris.fr/pages/les-parcs-et-jardins-7478', description: 'Guide to Paris parks' },
        { label: 'French Gardens', href: 'https://www.france.fr/en/nature-and-wildlife/gardens-france', description: 'Beautiful gardens across France' }
      ]
    },
    {
      id: 'day-trips',
      title: 'Day Trips & Excursions',
      description: 'Explore beyond the city',
      steps: [
        'Plan day trips to Versailles, Mont Saint-Michel, etc.',
        'Book combined transport and entrance tickets',
        'Start early to maximize your day',
        'Check weather forecast before going',
        'Bring snacks and water for the journey'
      ],
      links: [
        { label: 'Château de Versailles', href: 'https://www.chateauversailles.fr/english', description: 'Palace of Versailles' },
        { label: 'Mont Saint-Michel', href: 'https://www.ot-montsaintmichel.com/en/', description: 'Medieval abbey island' },
        { label: 'Loire Valley Castles', href: 'https://www.valdeloire.org/en', description: 'Famous châteaux' }
      ]
    },
    {
      id: 'local-experiences',
      title: 'Local Experiences',
      description: 'Authentic French cultural activities',
      steps: [
        'Attend local festivals and events',
        'Visit farmers markets',
        'Join wine tasting sessions',
        'Take a cooking class',
        'Experience French café culture'
      ],
      links: [
        { label: 'Airbnb Experiences', href: 'https://www.airbnb.com/s/experiences', description: 'Local activities and workshops' },
        { label: 'Viator', href: 'https://www.viator.com', description: 'Tours and experiences' }
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
      <Link to="/visitor/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to dashboard
      </Link>

      <div className="bg-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-rose-500/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Attractions & Tours</h1>
            <p className="text-sm sm:text-base text-slate-600">Must-see attractions, tours and activities for visitors</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-rose-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-rose-600 h-3 rounded-full transition-all duration-500"
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
                      : 'border-slate-300 hover:border-rose-600'
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
                    <div className="text-rose-600 p-2">
                      <svg className={`w-5 h-5 transform transition ${expandedTask === task.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {expandedTask === task.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-rose-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-rose-500/10 text-rose-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                            <span className="text-rose-600">🔗</span>
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
                                className="block p-3 sm:p-4 bg-rose-50 hover:bg-rose-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-rose-600 group-hover:underline break-words">{link.label}</div>
                                    {link.description && (
                                      <div className="text-xs sm:text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>Book popular attractions online to save time and money</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Visit during shoulder season (April-May, September-October) for fewer crowds</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Download offline maps and translation apps before exploring</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Many museums offer free entry first Sunday of the month</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
