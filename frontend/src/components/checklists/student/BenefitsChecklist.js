import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentBenefitsChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'crous-scholarship',
      title: 'CROUS Scholarship',
      description: 'Apply for social criteria scholarship',
      steps: [
        'Create your account on messervices.etudiant.gouv.fr',
        'Complete your Student Social File (DSE) between January 15 and May 15',
        'Provide required documents (tax notice, family income, etc.)',
        'Wait for conditional notification',
        'Confirm your enrollment to finalize the scholarship'
      ],
      links: [
        { label: 'CROUS Scholarships', href: 'https://www.etudiant.gouv.fr/fr/les-bourses-sur-criteres-sociaux-4', description: 'Apply for scholarship' },
        { label: 'DSE Portal', href: 'https://www.messervices.etudiant.gouv.fr', description: 'Create your application' }
      ]
    },
    {
      id: 'housing-aid',
      title: 'Housing Aid (APL/ALS)',
      description: 'Request personalized housing assistance',
      steps: [
        'Create your CAF account',
        'Gather required documents (lease, income, bank details)',
        'Submit your online application',
        'Provide your landlord\'s information',
        'Receive monthly aid directly in your account'
      ],
      links: [
        { label: 'CAF - Housing Aid', href: 'https://www.caf.fr/allocataires/aides-et-demarches/droits-et-prestations/logement/les-aides-au-logement', description: 'Apply for APL/ALS' },
        { label: 'Aid Simulator', href: 'https://www.caf.fr/allocataires/caf-du-rhone/offre-de-service/etudes-formations-et-insertion/etudiants', description: 'Calculate your rights' }
      ]
    },
    {
      id: 'meal-assistance',
      title: 'Meal Assistance',
      description: 'Access €1 student meals and food aid',
      steps: [
        'Check your eligibility (scholarship holder or precarious situation)',
        'Get your student card',
        'Find participating CROUS restaurants',
        'Download the Izly app for payments',
        'Show your student card to get €1 meals'
      ],
      links: [
        { label: 'CROUS Restaurants', href: 'https://www.crous-lyon.fr/restauration', description: '€1 meals for scholarship holders' },
        { label: 'Izly App', href: 'https://www.izly.fr', description: 'Digital payment for meals' }
      ]
    },
    {
      id: 'culture-pass',
      title: 'Culture Pass',
      description: 'Get €300 for cultural activities (18-year-olds)',
      steps: [
        'Check if you are 18 years old',
        'Download the Culture Pass app',
        'Create your account with your identity',
        'Verify your profile',
        'Use your €300 credit for books, concerts, cinema, etc.'
      ],
      links: [
        { label: 'Culture Pass', href: 'https://pass.culture.fr', description: '€300 for 18-year-olds' },
        { label: 'Eligible Offers', href: 'https://pass.culture.fr/le-pass-culture/ou-depenser-le-pass-culture', description: 'Find cultural venues' }
      ]
    },
    {
      id: 'mobility-aid',
      title: 'Mobility Aid',
      description: 'Financial support for international mobility',
      steps: [
        'Check Erasmus+ eligibility for European studies',
        'Contact your school\'s international office',
        'Apply for mobility grants',
        'Prepare your mobility project',
        'Submit your application before deadlines'
      ],
      links: [
        { label: 'Erasmus+', href: 'https://info.erasmusplus.fr', description: 'European mobility program' },
        { label: 'International Mobility Aid', href: 'https://www.etudiant.gouv.fr/fr/aides-la-mobilite-internationale-1540', description: 'Financial support for mobility' }
      ]
    },
    {
      id: 'emergency-aid',
      title: 'Emergency Aid',
      description: 'Financial assistance for urgent situations',
      steps: [
        'Contact your CROUS social service',
        'Explain your emergency situation',
        'Provide supporting documents',
        'Meet with a social worker',
        'Receive one-time or recurring aid'
      ],
      links: [
        { label: 'CROUS Social Service', href: 'https://www.crous-lyon.fr/aides-sociales', description: 'Emergency financial assistance' },
        { label: 'Make an Appointment', href: 'https://www.crous-lyon.fr/contact', description: 'Meet a social worker' }
      ]
    },
    {
      id: 'health-insurance',
      title: 'Complementary Health Insurance',
      description: 'Get affordable health coverage',
      steps: [
        'Check mutual insurance options (LMDE, SMEREP, etc.)',
        'Compare rates and coverage',
        'Check eligibility for Complementary Health Solidarity (C2S)',
        'Subscribe online or in person',
        'Receive your mutual insurance card'
      ],
      links: [
        { label: 'LMDE', href: 'https://www.lmde.fr', description: 'Student mutual insurance' },
        { label: 'C2S', href: 'https://www.complementaire-sante-solidaire.gouv.fr', description: 'Free or €1/day health coverage' }
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

      <div className="bg-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-indigo-500/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Benefits & Aid</h1>
            <p className="text-sm sm:text-base text-slate-600">Financial aid, scholarships and student support</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-indigo-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
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
                      : 'border-slate-300 hover:border-indigo-600'
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
                    <div className="text-indigo-600 p-2">
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
                          <span className="text-indigo-600">📝</span>
                          Steps to follow
                        </h4>
                        <ol className="space-y-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-indigo-500/10 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                            <span className="text-indigo-600">🔗</span>
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
                                className="block p-3 sm:p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition group"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-indigo-600 group-hover:underline break-words">{link.label}</div>
                                    {link.description && (
                                      <div className="text-xs sm:text-sm text-slate-600 mt-1">{link.description}</div>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span>Apply for scholarship between January 15 and May 15 each year</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Request housing aid (APL) as soon as you sign your lease</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Scholarship holders can access €1 meals in CROUS restaurants</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Don't hesitate to contact CROUS social service in case of financial difficulty</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
