import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentAdministrativeChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'visa',
      title: 'Visa validation',
      description: 'Validate your long-stay visa within 3 months of your arrival',
      steps: [
        'Prepare your passport with long-stay visa',
        'Have an address in France',
        'Prepare a bank card for payment',
        'Go to the ANEF website',
        'Create your account and follow the procedure'
      ],
      links: [
        { label: 'ANEF - Foreign Administration', href: 'https://administration-etrangers-en-france.interieur.gouv.fr', description: 'Official website for visa validation' },
        { label: 'Public Service - Long-stay visa', href: 'https://www.service-public.fr/particuliers/vosdroits/F16162', description: 'Complete guide on procedures' }
      ]
    },
    {
      id: 'phone',
      title: 'Phone plan',
      description: 'Subscribe to a French mobile plan',
      steps: [
        'Compare available offers',
        'Choose between Free, SFR, Bouygues, Orange, RED, B&You',
        'Prepare your identity documents',
        'Subscribe online or in store'
      ],
      links: [
        { label: 'Free Mobile', href: 'https://mobile.free.fr', description: 'No-commitment plans' },
        { label: 'SFR Mobile', href: 'https://www.sfr.fr/mobile', description: 'Student offers available' },
        { label: 'Bouygues Telecom', href: 'https://www.bouyguestelecom.fr', description: 'B&You no-commitment plans' },
        { label: 'Orange Mobile', href: 'https://www.orange.fr/mobile', description: 'Plans and youth offers' }
      ]
    },
    {
      id: 'social-security',
      title: 'Social security & health',
      description: 'Register for social security and get your Vitale card',
      steps: [
        'Register on Ameli Foreign Students',
        'Build your file',
        'Get your social security number',
        'Request your Vitale card',
        'Subscribe to complementary health insurance',
        'Declare a primary care doctor via Doctolib'
      ],
      links: [
        { label: 'Ameli Foreign Students', href: 'https://www.ameli.fr/assure/droits-demarches/etudes-emploi/etudiant/etudiant-etranger', description: 'Social security registration' },
        { label: 'Doctolib', href: 'https://www.doctolib.fr', description: 'Find and declare a primary care doctor' },
        { label: 'LMDE', href: 'https://www.lmde.fr', description: 'Student mutual insurance' },
        { label: 'SMEREP', href: 'https://www.smerep.fr', description: 'Student complementary health insurance' }
      ]
    },
    {
      id: 'bank',
      title: 'Bank account',
      description: 'Open a French bank account',
      steps: [
        'Choose your bank',
        'Make an appointment',
        'Bring your documents (passport, proof of address, school certificate)',
        'Open the account',
        'Activate your bank card'
      ],
      links: [
        { label: 'BNP Paribas Students', href: 'https://mabanque.bnpparibas', description: 'Student offers' },
        { label: 'Société Générale', href: 'https://www.societegenerale.fr', description: 'Youth accounts' },
        { label: 'N26', href: 'https://n26.com/fr-fr', description: 'Free online bank' }
      ]
    },
    {
      id: 'insurance',
      title: 'Home insurance',
      description: 'Subscribe to mandatory home insurance',
      steps: [
        'Choose your insurer',
        'Prepare your lease or housing certificate',
        'Subscribe online',
        'Get your certificate'
      ],
      links: [
        { label: 'LMDE Insurance', href: 'https://www.lmde.fr/assurance-habitation', description: 'Student home insurance' },
        { label: 'MAE', href: 'https://www.mae.fr', description: 'Student insurance' }
      ]
    },
    {
      id: 'caf',
      title: 'CAF housing aid',
      description: 'Apply for APL (Personalized Housing Assistance)',
      steps: [
        'Create your CAF account',
        'Gather your documents (lease, bank details, supporting documents)',
        'Submit your online application',
        'Track your file',
        'Receive your monthly aid'
      ],
      links: [
        { label: 'CAF - Housing aid', href: 'https://www.caf.fr/allocataires/aides-et-demarches/droits-et-prestations/logement/les-aides-au-logement', description: 'Apply for APL' }
      ]
    },
    {
      id: 'student-services',
      title: 'Student services',
      description: 'CVEC, scholarships, Crous housing',
      steps: [
        'Pay the CVEC (Student and Campus Life Contribution)',
        'Check available scholarships',
        'Apply for CROUS housing if eligible',
        'Access CROUS services'
      ],
      links: [
        { label: 'CVEC', href: 'https://cvec.etudiant.gouv.fr', description: 'Mandatory contribution' },
        { label: 'CROUS', href: 'https://www.crous-lyon.fr', description: 'Scholarships and housing' }
      ]
    },
    {
      id: 'taxes',
      title: 'Tax declaration',
      description: 'Create your personal account on Impots.gouv.fr',
      steps: [
        'Create your account on impots.gouv.fr',
        'Declare your situation',
        'Understand your tax obligations',
        'Make your first declaration the following spring'
      ],
      links: [
        { label: 'Impots.gouv.fr', href: 'https://www.impots.gouv.fr', description: 'Personal space' }
      ]
    },
    {
      id: 'residence-permit',
      title: 'Residence permit',
      description: 'Renew your residence permit 3 months before expiration',
      steps: [
        'Check the expiration date of your permit',
        'Prepare your documents in advance',
        'Submit your application online 3 months before',
        'Track your file',
        'Collect your new permit'
      ],
      links: [
        { label: 'ANEF - Renewal', href: 'https://administration-etrangers-en-france.interieur.gouv.fr', description: 'Renew online' }
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

      <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-primary/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Administrative</h1>
            <p className="text-sm sm:text-base text-slate-600">All your essential administrative procedures</p>
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
