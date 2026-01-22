import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function RefugeeAdministrativeChecklist() {
  const { user, markTaskComplete, markTaskIncomplete } = useAuth();
  const procedureKey = 'refugee_administrative';

  const tasks = [
    {
      id: 'asylum-request',
      title: 'Asylum Request & OFPRA',
      description: 'File your asylum request with OFPRA (French asylum office)',
      steps: [
        'Understand your rights as an asylum seeker in France',
        'Gather required documents: valid ID, passport, travel documents, proof of persecution, marriage certificates',
        'Register at OFPRA within 120 days of arrival in France',
        'Receive temporary receipt (document de circulation et de séjour)',
        'Prepare your asylum interview with interpreter if needed',
        'Submit detailed testimony about persecution reasons',
        'Attend OFPRA interview at scheduled date',
        'Receive decision on your application (approval or rejection)',
        'If rejected, you can appeal to CNDA (National Asylum Court)'
      ],
      links: [
        { label: 'OFPRA Official Website', href: 'https://www.ofpra.gouv.fr', description: 'French asylum office - Full information on procedures' },
        { label: 'OFPRA My Account', href: 'https://www.ofpra.gouv.fr/monespace', description: 'Track your asylum application status online' },
        { label: 'Asylum Seeker Rights', href: 'https://www.service-public.fr/particuliers/vosdroits/F10026', description: 'Your rights and procedures explained' },
        { label: 'CNDA - Appeal Court', href: 'https://www.cnda.fr', description: 'National Asylum Court for appeals' },
        { label: 'Legal Aid Organizations', href: 'https://www.france-terre-asile.org', description: 'Free legal assistance' }
      ]
    },
    {
      id: 'residence-permit',
      title: 'Residence Permit (Titre de Séjour)',
      description: 'Obtain and renew your residence permit for legal stay',
      steps: [
        'Verify your current residence permit status and expiration date',
        'Gather required documents: current permit, ID, 4 photos, proof of address, employment contract (if applicable)',
        'Schedule appointment at local prefecture 2-3 months before expiration',
        'Fill out application form for renewal',
        'Submit documents and attend prefecture appointment',
        'Receive temporary receipt valid during processing',
        'Wait for new permit (usually 2-4 months)',
        'Collect your new residence permit at prefecture',
        'Register any address changes within 3 months',
        'Keep copies of your permit for employer and housing'
      ],
      links: [
        { label: 'Prefecture Information', href: 'https://www.interieur.gouv.fr', description: 'Find your local prefecture' },
        { label: 'Residence Permit Guide', href: 'https://www.service-public.fr/particuliers/vosdroits/F16225', description: 'Complete guide on residence permits' },
        { label: 'Online Appointment Booking', href: 'https://www.mon-espace-pref.interieur.gouv.fr', description: 'Book prefecture appointments online' }
      ]
    },
    {
      id: 'social-security',
      title: 'Social Security & Healthcare',
      description: 'Register for social security and healthcare access to protect your health',
      steps: [
        'Locate your local CPAM (Caisse Primaire d\'Assurance Maladie)',
        'Gather required documents: ID, proof of address, OFPRA letter',
        'Complete registration form at CPAM office',
        'Receive your social security number and card (Carte Vitale)',
        'Check eligibility for CMU-C (Universal Health Complementary) - free for asylum seekers',
        'Check eligibility for AME (State Medical Aid) if not eligible for CMU-C',
        'Apply for complementary health insurance (mutuelle) to cover additional costs',
        'Register with a primary care doctor (médecin généraliste)',
        'Use your health insurance card for doctor visits and prescriptions',
        'Keep your CPAM card always - essential for healthcare access'
      ],
      links: [
        { label: 'CPAM Website', href: 'https://www.ameli.fr', description: 'Social security information and services' },
        { label: 'CMU-C Eligibility', href: 'https://www.service-public.fr/particuliers/vosdroits/F34608', description: 'Free complementary healthcare' },
        { label: 'AME - Medical Aid for Foreigners', href: 'https://www.service-public.fr/particuliers/vosdroits/F32879', description: 'Healthcare for undocumented residents' },
        { label: 'Find Your CPAM', href: 'https://www.ameli.fr/contact', description: 'Locate your nearest CPAM office' }
      ]
    },
    {
      id: 'bank-account',
      title: 'Bank Account',
      description: 'Open a French bank account for work, housing, and daily life',
      steps: [
        'Choose a bank (La Poste, BNP Paribas, Crédit Agricole, or online banks like N26, Revolut)',
        'Prepare required documents: valid ID/passport, OFPRA decision or receipt letter, proof of address (utility bill, rental lease)',
        'Schedule appointment at bank branch',
        'Complete bank account opening form',
        'Provide references if available',
        'Deposit initial amount (usually €100-300)',
        'Receive activation of your account',
        'Receive debit card (usually takes 5-7 business days)',
        'Set up online banking access',
        'Use IBAN and BIC for salary payments and transfers'
      ],
      links: [
        { label: 'Right to Bank Access', href: 'https://www.service-public.fr/particuliers/vosdroits/F2965', description: 'Everyone has the right to open an account' },
        { label: 'La Poste Banking', href: 'https://www.labanquepostale.fr', description: 'Postal services banking option' },
        { label: 'Online Banks', href: 'https://www.revolut.com/fr', description: 'Quick online account opening' },
        { label: 'Banking Information', href: 'https://www.service-public.fr/particuliers/vosdroits/F31476', description: 'Information on bank services' }
      ]
    }
  ];

  const completedTasks = useMemo(() => {
    const completed = user?.completedTasks?.[procedureKey] || {};
    return Object.values(completed).filter(Boolean).length;
  }, [user?.completedTasks, procedureKey]);

  const progress = useMemo(() => {
    if (tasks.length === 0) return 0;
    return Math.round((completedTasks / tasks.length) * 100);
  }, [completedTasks, tasks.length]);

  const toggleTask = (taskId) => {
    const isCompleted = user?.completedTasks?.[procedureKey]?.[taskId];
    if (isCompleted) {
      markTaskIncomplete(procedureKey, taskId);
    } else {
      markTaskComplete(procedureKey, taskId);
    }
  };

  const [expandedTask, setExpandedTask] = React.useState(null);

  const isTaskCompleted = (taskId) => {
    return user?.completedTasks?.[procedureKey]?.[taskId] || false;
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Link to="/refugee/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to dashboard
      </Link>

      <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-primary/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Administrative Procedures</h1>
            <p className="text-sm sm:text-base text-slate-600">Essential legal procedures for asylum seekers and refugees</p>
          </div>
        </div>

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
          <p className="text-sm text-slate-600 mt-2">{completedTasks} out of {tasks.length} tasks completed</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 relative z-10">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden relative">
            <div 
              className="p-4 sm:p-6 cursor-pointer"
              onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTask(task.id);
                  }}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition cursor-pointer ${
                    isTaskCompleted(task.id)
                      ? 'bg-green-500 border-green-500'
                      : 'border-slate-300 hover:border-primary'
                  }`}
                >
                  {isTaskCompleted(task.id) && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base sm:text-lg font-semibold mb-1 ${isTaskCompleted(task.id) ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                        {task.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">{task.description}</p>
                      {isTaskCompleted(task.id) && (
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

                  {expandedTask === task.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
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
