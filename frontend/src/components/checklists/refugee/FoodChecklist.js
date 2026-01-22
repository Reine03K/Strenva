import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RefugeeFoodChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'food-banks',
      title: 'Food Banks & Distribution Centers',
      description: 'Access free food and essential supplies',
      steps: [
        'Find nearest food bank (Banque Alimentaire)',
        'Check opening hours and location',
        'Bring ID and proof of address if available',
        'Register at the food bank office',
        'Receive appointment schedule for pickups',
        'Visit on scheduled days to collect food packages',
        'Receive diverse food items: canned goods, rice, pasta, fresh produce',
        'Ask about food allergies/dietary restrictions',
        'Connect with social workers for additional aid'
      ],
      links: [
        { label: 'Banque Alimentaire', href: 'https://www.banquealimentaire.org', description: 'Find food banks nationwide - search by postcode' },
        { label: 'Food Aid Directory', href: 'https://www.service-public.fr/particuliers/vosdroits/F13129', description: 'Complete information on food assistance' },
        { label: 'Local Food Distribution', href: 'https://www.secours-catholique.org', description: 'Catholic charity food distribution' }
      ]
    },
    {
      id: 'solidarity-stores',
      title: 'Solidarity Stores (Épiceries Sociales)',
      description: 'Buy discounted food and household items',
      steps: [
        'Locate nearby solidarity store (épicerie sociale)',
        'Contact store for appointment with social worker',
        'Complete assessment form',
        'Get access card or voucher system',
        'Shop for food at reduced prices (50-80% discount)',
        'Buy fresh produce, meat, dairy at affordable prices',
        'Receive budget planning support from staff',
        'Get advice on nutritious meal preparation',
        'Build community connections with other users'
      ],
      links: [
        { label: 'Find Solidarity Stores', href: 'https://www.reses.org', description: 'Réseau des Épiceries Sociales - search nationwide' },
        { label: 'RESEDA Network', href: 'https://reseda.asso.fr', description: 'Social economy resources and support' },
        { label: 'Solidarity Economy', href: 'https://www.service-public.fr/particuliers/vosdroits/F13129', description: 'Information on solidarity stores' }
      ]
    },
    {
      id: 'meal-programs',
      title: 'Meal Programs & Canteens',
      description: 'Access free or subsidized meals',
      steps: [
        'Contact local social services for meal program information',
        'Find community meal programs (soup kitchens)',
        'Register with night shelter or day center',
        'Access daily meals at subsidized or free rates',
        'Build community connections and support network',
        'Ask about special dietary needs',
        'Get information about evening meal delivery services',
        'Connect with other meal recipients for support',
        'Ask about weekend and holiday meal services'
      ],
      links: [
        { label: 'Secours Populaire', href: 'https://www.secoursPopulaire.fr', description: 'Soup kitchens and community meals nationwide' },
        { label: 'Social Dining Programs', href: 'https://www.service-public.fr/particuliers/vosdroits/F13129', description: 'Government food assistance programs' },
        { label: 'Day Center Meals', href: 'https://www.france-terre-asile.org', description: 'Find meal programs near you' }
      ]
    },
    {
      id: 'special-needs',
      title: 'Special Dietary & Medical Needs',
      description: 'Get support for allergies and health requirements',
      steps: [
        'Identify your specific dietary requirements',
        'Inform food bank of dietary restrictions',
        'Request halal/kosher certified items if needed',
        'Declare food allergies to program coordinators',
        'Find ethnic grocery stores for familiar foods',
        'Ask social workers about dietary accommodation',
        'Get specialized food support programs',
        'Work with healthcare providers on nutrition',
        'Connect with religious communities for meal support'
      ],
      links: [
        { label: 'Healthcare Information', href: 'https://www.ameli.fr', description: 'Medical and nutritional support' },
        { label: 'Religious Communities', href: 'https://www.france-terre-asile.org', description: 'Religious organizations offering meal support' }
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
      {/* Back Button */}
      <Link to="/refugee/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to dashboard
      </Link>

      {/* Header */}
      <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-primary/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Food Aid & Nutrition</h1>
            <p className="text-sm sm:text-base text-slate-600">Access food assistance and affordable meals</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-primary">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-600 mt-2">{completedCount} out of {tasks.length} tasks completed</p>
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
                      : 'border-slate-300 hover:border-primary'
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
                    <div className="text-primary p-2">
                      <svg className={`w-5 h-5 transform transition ${expandedTask === task.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedTask === task.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
                      {/* Steps */}
                      {task.steps && task.steps.length > 0 && (
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-primary">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                                {idx + 1}
                              </span>
                              <span className="text-slate-700 text-sm pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      )}

                      {/* Links */}
                      {task.links && task.links.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                            <span className="text-primary">🔗</span>
                            Official links
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
                                    <div className="font-medium text-sm sm:text-base text-primary group-hover:underline break-words">{link.label}</div>
                                    {link.description && (
                                      <div className="text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-5 h-5 text-primary flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </main>
  );
}
