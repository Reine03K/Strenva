import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentFoodChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'student-restaurants',
      title: 'Student restaurants',
      description: 'Benefit from university and solidarity restaurants',
      steps: [
        'Find the nearest CROUS restaurant to your campus',
        'Check opening hours and menus online',
        'Pay with your student card for subsidized meals at €3.30',
        'Discover solidarity grocery stores (AGORAé, etc.)',
        'Take advantage of special offers for international students'
      ],
      links: [
        { label: 'CROUS restaurants', href: 'https://www.crous-lyon.fr/restauration', description: 'University restaurants and menus' },
        { label: 'AGORAé', href: 'https://www.fage.org/innovation-sociale/agorae', description: 'Solidarity grocery stores for students' }
      ]
    },
    {
      id: 'anti-waste',
      title: 'Anti-waste',
      description: 'Save money with Too Good To Go and markets',
      steps: [
        'Download the Too Good To Go app',
        'Browse surprise baskets near you at reduced prices',
        'Pick up your orders at the indicated times',
        'Visit local markets at closing time for discounts',
        'Join anti-waste Facebook groups in your city'
      ],
      links: [
        { label: 'Too Good To Go', href: 'https://www.toogoodtogo.com/fr', description: 'Fight food waste and save money' },
        { label: 'Phenix', href: 'https://www.wearephenix.com', description: 'Anti-waste app' }
      ]
    },
    {
      id: 'discount-supermarkets',
      title: 'Discount supermarkets',
      description: 'Shop at the cheapest stores',
      steps: [
        'Find nearby Lidl, Aldi, Netto, or Leader Price stores',
        'Compare prices between different brands',
        'Buy store brand products (less expensive)',
        'Plan your meals to avoid waste',
        'Use loyalty cards and promotional apps'
      ],
      links: [
        { label: 'Lidl', href: 'https://www.lidl.fr', description: 'Discount supermarket' },
        { label: 'Aldi', href: 'https://www.aldi.fr', description: 'Low prices every day' },
        { label: 'Store locator', href: 'https://www.google.com/maps', description: 'Find stores near you' }
      ]
    },
    {
      id: 'specialties',
      title: 'Specialties and diversity',
      description: 'Discover fast food and specialized grocery stores',
      steps: [
        'Explore ethnic grocery stores for international products',
        'Visit Asian, African, and Middle Eastern markets',
        'Try student-friendly fast food chains',
        'Discover local specialties and regional products',
        'Join international student cooking groups'
      ],
      links: [
        { label: 'Paris Store', href: 'https://www.paris-store.com', description: 'Asian products' },
        { label: 'Tang Frères', href: 'https://www.tangfreres.fr', description: 'Asian supermarkets' },
        { label: 'Local markets', href: 'https://www.google.com/maps', description: 'Find markets in your city' }
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

      <div className="bg-green-50 rounded-2xl p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/10 rounded-full p-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Food & Groceries</h1>
            <p className="text-slate-600">Eat well on a budget in France</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-2xl font-bold text-green-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-600 mt-2">{completedCount} out of {tasks.length} tasks completed</p>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-4 relative z-10">
        {tasks.map((task, index) => (
          <div key={task.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleExpand(task.id)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTask(task.id);
                    }}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                      completedTasks[task.id]
                        ? 'bg-green-600 border-green-600'
                        : 'border-slate-300 hover:border-green-500'
                    }`}
                  >
                    {completedTasks[task.id] && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
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
                    <button
                      onClick={() => toggleExpand(task.id)}
                      className="text-green-600 hover:text-green-700 p-2"
                    >
                      <svg className={`w-5 h-5 transform transition ${expandedTask === task.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedTask === task.id && (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      {/* Steps */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                          <span className="text-green-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                            <span className="text-green-600">🔗</span>
                            Useful links
                          </h4>
                          <div className="space-y-2">
                            {task.links.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="font-medium text-green-600 group-hover:underline">{link.label}</div>
                                    {link.description && (
                                      <div className="text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>CROUS restaurants offer balanced meals at €3.30</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Use Too Good To Go to save money and fight waste</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Shop at discount supermarkets (Lidl, Aldi) for better prices</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Find ethnic grocery stores for products from your country</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
