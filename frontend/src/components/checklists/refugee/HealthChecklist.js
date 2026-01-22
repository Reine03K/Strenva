import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RefugeeHealthChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'register-doctor',
      title: 'Register with a Doctor',
      description: 'Establish healthcare access and continuity',
      steps: [
        'Register with CPAM (social security) - get your social security number (numéro de sécurité sociale)',
        'Find a general practitioner (médecin généraliste) near your home using Doctolib or local health centers',
        'Schedule first appointment - mention you are new to France and may need interpreter',
        'Bring ID, CPAM proof, and any medical records you have from your home country',
        'Register as patient with the clinic and discuss your complete health history',
        'Get your doctor\'s contact information and emergency protocols',
        'Ask about continuity of care specialists (cardiologist, specialist, etc.) if needed',
        'Receive your health booklet (carnet de santé) and keep all medical records safe'
      ],
      links: [
        { label: 'Find a Doctor on Doctolib', href: 'https://www.doctolib.fr', description: 'Book appointments online' },
        { label: 'CPAM Health Insurance', href: 'https://www.ameli.fr', description: 'Social security medical insurance' },
        { label: 'Refugee Health Rights', href: 'https://www.service-public.fr/particuliers/vosdroits/F34608', description: 'Government health services' },
        { label: 'Find Local Healthcare', href: 'https://www.sante.fr', description: 'Healthcare provider directory' }
      ]
    },
    {
      id: 'medical-exams',
      title: 'Medical Exams & Vaccinations',
      description: 'Get health screening and required vaccines',
      steps: [
        'Request comprehensive initial health assessment at your local CPAM office or health center',
        'Get tuberculosis (TB) screening - required in France for all newcomers',
        'Provide vaccination history - bring records from your home country if available',
        'Update vaccinations: DTP (diptheria, tetanus, pertussis), measles, hepatitis B, etc.',
        'Schedule dental check-up and eye examination',
        'Get blood work and general health screening as recommended',
        'Discuss any chronic conditions or medications you take',
        'Receive official health booklet (carnet de santé) with all vaccination records',
        'Follow up on any tests or treatments recommended by your doctor'
      ],
      links: [
        { label: 'AME - Free Health Checks', href: 'https://www.service-public.fr/particuliers/vosdroits/F34608', description: 'Healthcare for asylum seekers' },
        { label: 'Vaccination Requirements', href: 'https://www.ameli.fr/assure/sante/pathologie/vaccination', description: 'French vaccination schedules' },
        { label: 'TB Screening', href: 'https://www.reseau-tb.org', description: 'Tuberculosis screening locations' },
        { label: 'Health Centers', href: 'https://www.sante.fr', description: 'Free/low-cost health clinics' }
      ]
    },
    {
      id: 'mental-health',
      title: 'Psychological Support',
      description: 'Access mental health and trauma counseling',
      steps: [
        'Ask your doctor for a psychological referral - explain any trauma or anxiety you experienced',
        'Contact major refugee support organizations (France Terre d\'Asile, Medecins du Monde, etc.)',
        'Find free or low-cost counseling services through social services (CCAS)',
        'Look for trauma-informed therapists with experience working with refugees',
        'Access services in your preferred language or with professional interpreters',
        'Explore both individual therapy and peer support groups',
        'Ask about crisis hotlines available 24/7 (SOS Amitié, 3114 suicide prevention)',
        'Begin therapeutic support if needed - healing from trauma is important for integration',
        'Check if you qualify for social aid to cover mental health services'
      ],
      links: [
        { label: 'France Terre d\'Asile', href: 'https://www.france-terre-asile.org', description: 'Comprehensive refugee support including mental health' },
        { label: 'Médecins du Monde', href: 'https://www.medecinsdumonde.org', description: 'Healthcare for vulnerable populations' },
        { label: 'SOS Amitié Crisis Line', href: 'https://www.sosamilale.org', description: 'Crisis hotline: 09 72 39 40 50' },
        { label: 'Suicide Prevention Hotline', href: 'https://www.3114.fr', description: 'Call 3114 for mental health crisis' },
        { label: 'Find Psychologists', href: 'https://www.doctolib.fr', description: 'Licensed psychologists directory' },
        { label: 'CCAS Social Services', href: 'https://www.service-public.fr/particuliers/vosdroits/F1352', description: 'Local social services' }
      ]
    },
    {
      id: 'medications',
      title: 'Medications & Prescriptions',
      description: 'Access necessary medications affordably',
      steps: [
        'Get a prescription from your doctor - explain any existing conditions or medications',
        'Ask for generic medications (génériques) when possible - they are cheaper',
        'Go to any pharmacy (pharmacie) marked with green cross in France',
        'Show your health insurance card (carte de sécurité sociale) at the pharmacy',
        'Pay reduced amount - usually €1-5 per medication due to social security coverage',
        'Ask about medication assistance programs if you cannot afford costs',
        'Get information on medication side effects and how to take it correctly',
        'Keep all medication documentation, prescriptions, and receipts for records',
        'Ask pharmacist about any interactions with other medications you take'
      ],
      links: [
        { label: 'Find Nearby Pharmacies', href: 'https://www.sante.fr', description: 'Pharmacy locator service' },
        { label: 'Medication Information', href: 'https://www.ameli.fr', description: 'Health insurance coverage details' },
        { label: 'Affordable Medications', href: 'https://www.france-assos-sante.org', description: 'Patient assistance programs' },
        { label: 'Generic Medications', href: 'https://www.ansm.sante.fr', description: 'Information on generic drugs' }
      ]
    },
    {
      id: 'emergency-care',
      title: 'Emergency & Urgent Care',
      description: 'Know where to go for urgent medical needs',
      steps: [
        'Save emergency numbers: 15 (SAMU medical), 17 (police), 18 (fire), 112 (general emergency)',
        'Find the nearest emergency room (urgences) - usually in main hospitals',
        'Learn the difference: minor issues → doctor, urgent → SAMU (call 15), life-threatening → call 112',
        'Keep ID, health insurance card, and emergency contact information easily accessible',
        'For emergencies, call 15 (SAMU) first for medical advice - they will direct you appropriately',
        'If having a stroke, heart attack, or severe injury, call 112 immediately',
        'In life-threatening emergency, go directly to nearest hospital',
        'Know that emergency care is free regardless of insurance status in France',
        'After emergency visit, follow up with your regular doctor for ongoing care'
      ],
      links: [
        { label: 'Emergency Services Info', href: 'https://www.service-public.fr/particuliers/vosdroits/F30111', description: 'How to use emergency services' },
        { label: 'SAMU (Medical Emergency - 15)', href: 'https://www.samu.org', description: 'Medical emergency dispatch service' },
        { label: 'Find Hospital Urgences', href: 'https://www.sante.fr', description: 'Hospital emergency departments' },
        { label: 'Emergency Rights', href: 'https://www.france-assos-sante.org', description: 'Patient rights in emergencies' }
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Health & Support</h1>
            <p className="text-sm sm:text-base text-slate-600">Access healthcare, mental health, and support services</p>
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
