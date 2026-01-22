import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RefugeeJobsChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'work-permit',
      title: 'Work Permit & Authorization',
      description: 'Obtain the right to work in France',
      steps: [
        'Check your asylum status - you can work once OFII issues work authorization',
        'Register with your local OFII office to request APS (work authorization document)',
        'Provide necessary documentation: ID, asylum application receipt, proof of residence',
        'Wait for OFII approval - usually granted within 2-4 weeks',
        'Receive your APS document which allows you to work in any job',
        'Register immediately with Pôle Emploi (French employment service)',
        'Get your official social security number (numéro de sécurité sociale)',
        'Receive work authorization documentation from your employer\'s HR department',
        'Keep copies of all work authorization documents in a safe place'
      ],
      links: [
        { label: 'OFII Work Authorization', href: 'https://www.ofii.fr', description: 'Apply for work permit' },
        { label: 'Pôle Emploi Registration', href: 'https://www.pole-emploi.fr', description: 'French employment service' },
        { label: 'Work Rights for Refugees', href: 'https://www.service-public.fr/particuliers/vosdroits/F2183', description: 'Employment rights information' },
        { label: 'Social Security Number', href: 'https://www.ameli.fr', description: 'Get your SSID' }
      ]
    },
    {
      id: 'job-search',
      title: 'Job Search & Placement',
      description: 'Find employment opportunities',
      steps: [
        'Update your CV (curriculum vitae) in French format or get help translating',
        'Create profiles on major job portals: Indeed, LinkedIn, Pôle Emploi',
        'Work with employment counselor at Pôle Emploi - they provide free job placement support',
        'Look for jobs that match your skills - many employers value refugee hiring',
        'Apply to 5-10 positions weekly and track your applications',
        'Attend job fairs and networking events in your local area',
        'Ask for help with interview preparation from counselors or associations',
        'Prepare answers about your work history and why you\'re a good candidate',
        'Follow up after interviews and continue applying while searching'
      ],
      links: [
        { label: 'Indeed France', href: 'https://www.indeed.fr', description: 'Job search portal' },
        { label: 'Pôle Emploi Jobs', href: 'https://www.pole-emploi.fr', description: 'Government job listings' },
        { label: 'LinkedIn Jobs', href: 'https://www.linkedin.com/jobs/', description: 'Professional networking' },
        { label: 'Job Placement Assistance', href: 'https://www.france-terre-asile.org', description: 'Refugee job support programs' },
        { label: 'CV Template', href: 'https://www.pole-emploi.fr/candidat/les-outils-pour-trouver-un-emploi', description: 'French CV format guide' }
      ]
    },
    {
      id: 'vocational-training',
      title: 'Vocational Training & Skills',
      description: 'Develop job-relevant skills and certifications',
      steps: [
        'Assess your existing skills and work experience from home country',
        'Check if your qualifications are recognized in France (contact professional bodies)',
        'Explore available vocational training programs (CAP, BEP, BP certifications)',
        'Look for apprenticeship programs (alternance) combining work and training',
        'Consider skills programs in high-demand areas: healthcare, construction, IT, hospitality',
        'Enroll in free or subsidized training through Pôle Emploi or regional programs',
        'Get recognized French certifications - this significantly improves employment chances',
        'Network with instructors and classmates for job leads during training',
        'Complete training with diploma and begin looking for permanent employment'
      ],
      links: [
        { label: 'Vocational Training Finder', href: 'https://www.formation-continue.gouv.fr', description: 'Find training programs' },
        { label: 'Apprenticeship Programs', href: 'https://www.alternance.emploi.gouv.fr', description: 'Combined work-study programs' },
        { label: 'Profession Recognition', href: 'https://www.enic-naric.net', description: 'Check degree recognition' },
        { label: 'Skills-Based Training', href: 'https://www.pole-emploi.fr/candidat/les-formations', description: 'Short-term training courses' },
        { label: 'CAP/BEP Info', href: 'https://www.eduscol.education.fr', description: 'French vocational certificates' }
      ]
    },
    {
      id: 'job-rights',
      title: 'Workers\' Rights & Protections',
      description: 'Understand your rights as an employee',
      steps: [
        'Learn about employment contracts (CDI = permanent, CDD = temporary, stage = internship)',
        'Understand French minimum wage (SMIC) and your salary rights',
        'Know your workplace rights: 35 hours/week, paid leave, safety protections',
        'Understand social protections: unemployment insurance, health insurance, pensions',
        'Know how to report labor violations to labor inspection (inspection du travail)',
        'Learn about union representation and collective agreements (conventions collectives)',
        'Understand termination procedures and severance rights',
        'Know procedures for disputes with employers',
        'Get help from labor rights organizations if needed'
      ],
      links: [
        { label: 'Workers\' Rights', href: 'https://www.service-public.fr/particuliers/vosdroits/F23149', description: 'Employee rights information' },
        { label: 'Minimum Wage (SMIC)', href: 'https://www.service-public.fr/particuliers/vosdroits/F2300', description: 'Legal wage information' },
        { label: 'Labor Inspection', href: 'https://www.travail-emploi.gouv.fr', description: 'Worker protection agency' },
        { label: 'Employment Contracts', href: 'https://www.service-public.fr/particuliers/vosdroits/F1906', description: 'Contract types explained' },
        { label: 'Labor Disputes', href: 'https://www.service-public.fr/particuliers/vosdroits/F2360', description: 'Resolving workplace conflicts' }
      ]
    },
    {
      id: 'self-employment',
      title: 'Self-Employment & Business',
      description: 'Start your own business or freelance work',
      steps: [
        'Develop and validate your business idea with feasibility study',
        'Get business registration documents (SIRET/SIREN numbers) from InfoGreffe',
        'Understand tax requirements and accounting obligations',
        'Get necessary licenses and permits for your business type',
        'Set up business insurance (responsabilité civile professionnelle)',
        'Register with URSSAF for social security contributions',
        'Open a business bank account separate from personal account',
        'Explore funding options: bank loans, government grants, microfinance',
        'Consider joining business support organizations for mentoring'
      ],
      links: [
        { label: 'Business Registration', href: 'https://www.infogreffe.fr', description: 'Register your business' },
        { label: 'URSSAF Registration', href: 'https://www.urssaf.fr', description: 'Social security for self-employed' },
        { label: 'Business Support', href: 'https://www.bpifrance.fr', description: 'Business development support' },
        { label: 'Self-Employment Info', href: 'https://www.service-public.fr/professionnels/vosdroits/R17122', description: 'Starting a business guide' },
        { label: 'Microfinance Options', href: 'https://www.adie.org', description: 'Micro-loans for entrepreneurs' },
        { label: 'Business Mentoring', href: 'https://www.akcio.org', description: 'Entrepreneur support programs' }
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

  const isTaskCompleted = (taskId) => completedTasks[taskId] || false;

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4m0 2v4m0-11v2m0 0h2m-2 0h-2m9 11h-4a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h4a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Jobs & Employment</h1>
            <p className="text-sm sm:text-base text-slate-600">Find work and build your career</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">Section progress</span>
            <span className="text-xl sm:text-2xl font-bold text-primary">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm text-slate-600 mt-2">{completedCount} out of {tasks.length} tasks completed</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="p-4 sm:p-6 cursor-pointer" onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}>
              <div className="flex items-start gap-3 sm:gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTask(task.id);
                  }}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition cursor-pointer ${
                    isTaskCompleted(task.id) ? 'bg-green-500 border-green-500' : 'border-slate-300 hover:border-primary'
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
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Steps to follow:</h4>
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
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Official links:</h4>
                          <div className="space-y-2">
                            {task.links.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="block p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
                              >
                                <div className="font-medium text-sm sm:text-base text-primary">{link.label}</div>
                                {link.description && (
                                  <div className="text-sm text-slate-600 mt-1">{link.description}</div>
                                )}
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
