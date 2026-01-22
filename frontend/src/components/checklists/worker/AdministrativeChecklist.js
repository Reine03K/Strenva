import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WorkerAdministrativeChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'work-visa',
      title: 'Work Visa & Residence Permit',
      description: 'Obtain authorization to work in France',
      steps: [
        'Check visa requirements for your nationality',
        'Gather documents (work contract, passport, photos)',
        'Apply for a long-stay work visa (VLS-TS)',
        'Validate your visa as residence permit upon arrival',
        'Register with OFII within 3 months'
      ],
      links: [
        { label: 'France Visas', href: 'https://france-visas.gouv.fr', description: 'Work visa applications' },
        { label: 'OFII', href: 'https://www.ofii.fr', description: 'French Immigration Office' },
        { label: 'Service Public', href: 'https://www.service-public.fr/particuliers/vosdroits/N107', description: 'Work permits guide' }
      ]
    },
    {
      id: 'social-security',
      title: 'Social Security Registration',
      description: 'Register with French social security system',
      steps: [
        'Your employer will register you with URSSAF',
        'Receive your social security number (numéro de sécurité sociale)',
        'Get your Carte Vitale (health insurance card)',
        'Choose a primary care doctor (médecin traitant)',
        'Keep your attestation de droits for medical visits'
      ],
      links: [
        { label: 'Ameli', href: 'https://www.ameli.fr', description: 'French health insurance' },
        { label: 'URSSAF', href: 'https://www.urssaf.fr', description: 'Social security contributions' }
      ]
    },
    {
      id: 'tax-registration',
      title: 'Tax Registration',
      description: 'Register with French tax authorities',
      steps: [
        'Declare your arrival to tax authorities',
        'Get your tax identification number (numéro fiscal)',
        'Register on impots.gouv.fr website',
        'Declare your worldwide income',
        'File your first tax return in May/June'
      ],
      links: [
        { label: 'Impôts.gouv', href: 'https://www.impots.gouv.fr', description: 'French tax services' },
        { label: 'Tax Info', href: 'https://www.service-public.fr/particuliers/vosdroits/N247', description: 'Income tax guide' }
      ]
    },
    {
      id: 'bank-account',
      title: 'Open a Bank Account',
      description: 'Set up your French bank account',
      steps: [
        'Gather documents (passport, proof of address, work contract)',
        'Choose a bank (traditional or online)',
        'Schedule an appointment to open account',
        'Receive your RIB (bank details) and debit card',
        'Set up direct debit for bills and rent'
      ],
      links: [
        { label: 'Bank Selection', href: 'https://www.service-public.fr/particuliers/vosdroits/F2417', description: 'Opening a bank account' },
        { label: 'Online Banks', href: 'https://www.lesfurets.com/banque/guide/banque-en-ligne', description: 'Comparison of online banks' }
      ]
    },
    {
      id: 'family-reunion',
      title: 'Family Reunification (if applicable)',
      description: 'Bring your family to France',
      steps: [
        'Check eligibility for family reunification',
        'Prove sufficient income and housing',
        'Submit application to OFII',
        'Wait for approval (can take 6-8 months)',
        'Apply for family members\' visas once approved'
      ],
      links: [
        { label: 'Family Reunification', href: 'https://www.service-public.fr/particuliers/vosdroits/F11166', description: 'Regroupement familial guide' },
        { label: 'OFII', href: 'https://www.ofii.fr/procedure/le-regroupement-familial', description: 'Family reunion procedures' }
      ]
    },
    {
      id: 'drivers-license',
      title: 'Driver\'s License Exchange',
      description: 'Exchange your foreign license for a French one',
      steps: [
        'Check if your country has a reciprocal agreement',
        'Apply within your first year in France',
        'Gather documents (license, translations, photos)',
        'Submit application online or at prefecture',
        'Wait for your French license to arrive'
      ],
      links: [
        { label: 'License Exchange', href: 'https://www.service-public.fr/particuliers/vosdroits/F1758', description: 'Foreign license exchange' },
        { label: 'ANTS', href: 'https://ants.gouv.fr', description: 'Online application portal' }
      ]
    },
    {
      id: 'housing-certificate',
      title: 'Housing Certificate (Attestation de Logement)',
      description: 'Get proof of residence for administrative procedures',
      steps: [
        'Obtain a lease agreement (bail)',
        'Set up utilities in your name',
        'Get utility bills as proof of address',
        'Request housing certificate from landlord if needed',
        'Use for various administrative registrations'
      ],
      links: [
        { label: 'Proof of Address', href: 'https://www.service-public.fr/particuliers/vosdroits/F31853', description: 'Acceptable proof of address' }
      ]
    },
    {
      id: 'residence-card',
      title: 'Long-Term Residence Card',
      description: 'Apply for multi-year residence permit',
      steps: [
        'After one year, apply for multi-year permit',
        'Prepare documents (proof of work, income, taxes)',
        'Book appointment at prefecture',
        'Submit application and pay fees',
        'Receive residence card valid for 2-4 years'
      ],
      links: [
        { label: 'Residence Permits', href: 'https://www.service-public.fr/particuliers/vosdroits/N110', description: 'Types of residence cards' },
        { label: 'Prefecture Appointments', href: 'https://www.demarches.interieur.gouv.fr', description: 'Book prefecture appointments' }
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
      <Link to="/worker/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base">
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
            <p className="text-sm sm:text-base text-slate-600">Guides and forms for workers (work permits, social contributions)</p>
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

                  {expandedTask === task.id && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100">
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
            <span>Keep all original documents and make certified copies</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Some procedures can take several months - start early</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Your employer's HR department can help with many procedures</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Always keep your residence permit valid - renew 2-3 months before expiry</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
