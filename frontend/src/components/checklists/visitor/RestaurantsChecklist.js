import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VisitorRestaurantsChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'local-restaurants',
      title: 'Discover Local Restaurants',
      description: 'Find authentic French restaurants',
      steps: [
        'Use Google Maps or TripAdvisor for reviews',
        'Ask locals for recommendations',
        'Check restaurant menus and prices online',
        'Make a reservation for popular places',
        'Try traditional French cuisine'
      ],
      links: [
        { label: 'TripAdvisor', href: 'https://www.tripadvisor.com', description: 'Restaurant reviews and rankings' },
        { label: 'TheFork', href: 'https://www.thefork.com', description: 'Restaurant reservations with discounts' },
        { label: 'Michelin Guide', href: 'https://guide.michelin.com', description: 'Fine dining restaurants' }
      ]
    },
    {
      id: 'budget-dining',
      title: 'Budget-Friendly Dining',
      description: 'Eat well without breaking the bank',
      steps: [
        'Look for lunch menus (menu du jour)',
        'Visit local bakeries for affordable meals',
        'Try food markets for fresh produce',
        'Use restaurant discount apps',
        'Eat at university cafeterias (if accessible)'
      ],
      links: [
        { label: 'TheFork', href: 'https://www.thefork.com', description: 'Restaurant discounts up to 50%' },
        { label: 'Groupon', href: 'https://www.groupon.fr', description: 'Dining deals and offers' }
      ]
    },
    {
      id: 'specialty-cuisine',
      title: 'International & Specialty Cuisine',
      description: 'Explore diverse culinary options',
      steps: [
        'Search for your preferred cuisine type',
        'Check ethnic neighborhoods for authentic options',
        'Read reviews from other international visitors',
        'Try fusion restaurants for modern takes',
        'Explore vegetarian and vegan options'
      ],
      links: [
        { label: 'HappyCow', href: 'https://www.happycow.net', description: 'Vegan and vegetarian restaurants' },
        { label: 'Yelp', href: 'https://www.yelp.fr', description: 'Local restaurant reviews' }
      ]
    },
    {
      id: 'food-tours',
      title: 'Food Tours & Experiences',
      description: 'Join guided culinary experiences',
      steps: [
        'Search for food tours in your city',
        'Book a wine tasting experience',
        'Join a cooking class',
        'Visit local food markets with a guide',
        'Try a cheese or chocolate tasting'
      ],
      links: [
        { label: 'Viator', href: 'https://www.viator.com', description: 'Food tours and culinary experiences' },
        { label: 'GetYourGuide', href: 'https://www.getyourguide.com', description: 'Local food experiences' },
        { label: 'Airbnb Experiences', href: 'https://www.airbnb.com/s/experiences', description: 'Cooking classes and food tours' }
      ]
    },
    {
      id: 'cafes-bakeries',
      title: 'Cafés & Bakeries',
      description: 'Experience French café culture',
      steps: [
        'Visit a traditional French café',
        'Try fresh croissants and pastries',
        'Order an espresso or café au lait',
        'Discover local bakeries (boulangeries)',
        'Learn basic café etiquette'
      ],
      links: [
        { label: 'Paris Café Culture', href: 'https://en.parisinfo.com/discovering-paris/themed-guides/paris-for-foodies/best-cafes-in-paris', description: 'Guide to Parisian cafés' },
        { label: 'Time Out', href: 'https://www.timeout.com', description: 'Best cafés and bakeries by city' }
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

      <div className="bg-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-orange-500/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Restaurants</h1>
            <p className="text-sm sm:text-base text-slate-600">Find restaurants and local dining guides</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-orange-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-orange-600 h-3 rounded-full transition-all duration-500"
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
                      : 'border-slate-300 hover:border-orange-600'
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
                    <div className="text-orange-600 p-2">
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
                          <span className="text-orange-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-orange-500/10 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                            <span className="text-orange-600">🔗</span>
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
                                className="block p-3 sm:p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-orange-600 group-hover:underline break-words">{link.label}</div>
                                    {link.description && (
                                      <div className="text-xs sm:text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>Lunch menus are usually cheaper than dinner prices</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Service is typically included in the bill (service compris)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Make reservations for popular restaurants, especially on weekends</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Try local specialties unique to each French region</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
