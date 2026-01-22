import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentMoreChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'student-associations',
      title: 'Student Associations',
      description: 'Join student clubs and organizations',
      steps: [
        'Discover associations at your school forum',
        'Attend information meetings',
        'Choose associations matching your interests',
        'Pay membership fee if required',
        'Participate actively in events'
      ],
      links: [
        { label: 'Student Life', href: 'https://www.etudiant.gouv.fr/fr/vie-etudiante-349', description: 'Campus life guide' },
        { label: 'FAGE', href: 'https://www.fage.org', description: 'Student associations federation' }
      ]
    },
    {
      id: 'language-courses',
      title: 'French Language Courses',
      description: 'Improve your French with free or paid courses',
      steps: [
        'Take a level test to assess your French',
        'Check free courses offered by your school',
        'Register for Alliance Française courses',
        'Join language exchange groups',
        'Practice daily with native speakers'
      ],
      links: [
        { label: 'Alliance Française', href: 'https://www.alliancefr.org', description: 'French language courses' },
        { label: 'FUN MOOC', href: 'https://www.fun-mooc.fr', description: 'Free online courses in French' }
      ]
    },
    {
      id: 'legal-aid',
      title: 'Legal Aid & Support',
      description: 'Get free legal advice and assistance',
      steps: [
        'Contact your school\'s legal service',
        'Make an appointment with a legal clinic',
        'Prepare your questions and documents',
        'Get advice on housing, work, visa, etc.',
        'Request legal aid (aide juridictionnelle) if needed'
      ],
      links: [
        { label: 'Legal Aid', href: 'https://www.service-public.fr/particuliers/vosdroits/F18074', description: 'Free legal assistance' },
        { label: 'Legal Clinics', href: 'https://www.cliniques-juridiques.org', description: 'Free legal advice by law students' }
      ]
    },
    {
      id: 'psychological-support',
      title: 'Psychological Support',
      description: 'Access mental health services for students',
      steps: [
        'Contact your school\'s health service',
        'Make a free appointment with a psychologist',
        'Call Nightline for nighttime listening (9pm-2:30am)',
        'Use Santé Psy Étudiant (free sessions)',
        'Don\'t hesitate to seek help if needed'
      ],
      links: [
        { label: 'Santé Psy Étudiant', href: 'https://santepsy.etudiant.gouv.fr', description: 'Free psychological consultations' },
        { label: 'Nightline', href: 'https://www.nightline.fr', description: 'Nighttime listening for students' }
      ]
    },
    {
      id: 'career-guidance',
      title: 'Career Guidance',
      description: 'Get help with career orientation and choices',
      steps: [
        'Schedule an appointment with a career counselor',
        'Attend career orientation workshops',
        'Explore different career paths',
        'Do internships to test professions',
        'Network with professionals in your field'
      ],
      links: [
        { label: 'Career Centers', href: 'https://www.etudiant.gouv.fr/fr/orientation-et-parcours-1486', description: 'Career guidance resources' },
        { label: 'APEC Young Graduates', href: 'https://www.apec.fr/candidat/jeune-diplome.html', description: 'Support for young graduates' }
      ]
    },
    {
      id: 'sports-facilities',
      title: 'Sports & Fitness',
      description: 'Access sports facilities and activities',
      steps: [
        'Get your CROUS sports pass',
        'Register for sports offered by your school',
        'Join municipal sports facilities',
        'Participate in university sports competitions',
        'Benefit from reduced student rates'
      ],
      links: [
        { label: 'University Sports', href: 'https://www.ffsport-u.org', description: 'Sports federation for students' },
        { label: 'CROUS Sports', href: 'https://www.crous-lyon.fr/culture-et-sport', description: 'Sports and culture activities' }
      ]
    },
    {
      id: 'volunteering',
      title: 'Volunteering & Civic Service',
      description: 'Engage in volunteering or civic service',
      steps: [
        'Discover volunteering opportunities',
        'Choose a cause that matters to you',
        'Register on civic service platform',
        'Sign your contract (6-12 months)',
        'Receive monthly allowance and training'
      ],
      links: [
        { label: 'Civic Service', href: 'https://www.service-civique.gouv.fr', description: 'Voluntary commitment missions' },
        { label: 'Associations France', href: 'https://www.associations.gouv.fr', description: 'Find associations to volunteer' }
      ]
    },
    {
      id: 'city-resources',
      title: 'City-Specific Resources',
      description: 'Explore resources specific to your city',
      steps: [
        'Visit your city hall website',
        'Get a youth card for local discounts',
        'Discover free cultural events',
        'Join city libraries and media centers',
        'Participate in municipal activities'
      ],
      links: [
        { label: 'Lyon City', href: 'https://www.lyon.fr', description: 'Lyon municipal services' },
        { label: 'Paris City', href: 'https://www.paris.fr', description: 'Paris municipal services' },
        { label: 'Youth Services', href: 'https://www.info-jeunes.fr', description: 'Youth information centers' }
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
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to dashboard
      </Link>

      <div className="bg-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-teal-500/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">More</h1>
            <p className="text-sm sm:text-base text-slate-600">Other useful services and city-specific resources</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-teal-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-teal-600 h-3 rounded-full transition-all duration-500"
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
                      : 'border-slate-300 hover:border-teal-600'
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
                    <div className="text-teal-600 p-2">
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
                          <span className="text-teal-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-teal-500/10 text-teal-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                            <span className="text-teal-600">🔗</span>
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
                                className="block p-3 sm:p-4 bg-teal-50 hover:bg-teal-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-teal-600 group-hover:underline break-words">{link.label}</div>
                                    {link.description && (
                                      <div className="text-xs sm:text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>Join student associations to make friends and practice French</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Don't hesitate to seek psychological support - it's free and confidential</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Take advantage of student discounts at museums, sports facilities, and cultural venues</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Civic service is a great way to gain professional experience while helping others</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
