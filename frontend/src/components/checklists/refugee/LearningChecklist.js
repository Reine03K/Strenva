import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RefugeeLearningChecklist() {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTask, setExpandedTask] = useState(null);

  const tasks = [
    {
      id: 'french-courses',
      title: 'French Language Courses',
      description: 'Learn French to communicate and integrate',
      steps: [
        'Contact your local CCAS (Centre Communal d\'Action Sociale) or social services immediately',
        'Take a French level assessment - government determines appropriate course level (A1, A2, B1, etc.)',
        'Enroll in OFII-funded French courses - usually free or heavily subsidized for asylum seekers',
        'Attend classes regularly and participate actively in learning activities',
        'Practice outside class - join language exchange groups, conversation clubs at libraries',
        'Use free online resources: TV5Monde (French TV), RFI Savoirs (French radio lessons)',
        'Look for volunteer tutors through associations and community centers',
        'Complete your French courses and work towards DELF/DALF certification if desired',
        'Continue practicing French daily - watch French media, read news, practice with friends'
      ],
      links: [
        { label: 'OFII French Programs', href: 'https://www.ofii.fr', description: 'Government-funded language classes' },
        { label: 'Adult Education Finder', href: 'https://www.formation-continue.gouv.fr', description: 'Find courses near you' },
        { label: 'TV5Monde Learning', href: 'https://www.tv5monde.com/apprendre-francais', description: 'Free French learning via TV' },
        { label: 'RFI Savoirs', href: 'https://savoirs.rfi.fr', description: 'French lessons with audio' },
        { label: 'DELF Certification', href: 'https://www.france-education-international.fr', description: 'French language certification' },
        { label: 'Public Libraries', href: 'https://www.bibli-cite.fr', description: 'Free language resources and tutoring' }
      ]
    },
    {
      id: 'civic-integration',
      title: 'Civic Integration & Values',
      description: 'Understand French society and values',
      steps: [
        'Attend mandatory civic orientation sessions organized by OFII or local prefectures',
        'Learn about French Republican values: liberty, equality, fraternity, and secularity (laïcité)',
        'Understand rights and responsibilities as a resident or future citizen of France',
        'Learn about democratic participation, voting rights, and civic obligations',
        'Study French history and geography to understand the country',
        'Learn about French institutions: government, parliament, legal system',
        'Understand cultural integration expectations and workplace norms',
        'Get civic integration certificate (attestation d\'accueil) if eligible',
        'Prepare for citizenship naturalization process if you have been resident for required time'
      ],
      links: [
        { label: 'Republican Values Guide', href: 'https://www.interieur.gouv.fr', description: 'French government civic information' },
        { label: 'Integration Requirements', href: 'https://www.service-public.fr/particuliers/vosdroits/F2811', description: 'Civic integration process' },
        { label: 'OFII Integration Program', href: 'https://www.ofii.fr', description: 'Integration sessions for newcomers' },
        { label: 'French Institutions', href: 'https://www.gouvernement.fr', description: 'How French government works' },
        { label: 'Naturalization Info', href: 'https://www.service-public.fr/particuliers/vosdroits/F2213', description: 'Citizenship path after residency' }
      ]
    },
    {
      id: 'digital-skills',
      title: 'Digital & Technology Skills',
      description: 'Learn essential computer and internet skills',
      steps: [
        'Find digital literacy programs at local libraries, community centers, or associations',
        'Learn basic computer skills: turning on, using mouse/keyboard, file management',
        'Practice internet browsing, using search engines, and accessing official websites',
        'Create and manage email accounts (Gmail, Outlook) for official communications',
        'Learn to use video calls (Zoom, Skype, Teams) for virtual appointments',
        'Understand online safety: password protection, recognizing scams, privacy settings',
        'Learn to access online services: government websites, job portals, online banking',
        'Practice using smartphone apps for transportation, communication, and shopping',
        'Take certification courses if available - helps with job applications and digital confidence'
      ],
      links: [
        { label: 'Digital Literacy Programs', href: 'https://www.formation-continue.gouv.fr', description: 'Free training courses' },
        { label: 'Pix Digital Certification', href: 'https://pix.fr', description: 'Official digital skills certification' },
        { label: 'Online Safety Guide', href: 'https://www.cnil.fr', description: 'Privacy and cybersecurity information' },
        { label: 'Government Digital Services', href: 'https://www.france-identite-numerique.fr', description: 'Online government portals' },
        { label: 'Library Technology Classes', href: 'https://www.bibli-cite.fr', description: 'Free computer training' },
        { label: 'Internet Safety', href: 'https://www.internetresponsible.fr', description: 'Online safety information' }
      ]
    },
    {
      id: 'education-access',
      title: 'Education & Training Access',
      description: 'Access vocational and general education',
      steps: [
        'Register with local education authorities and assess your level',
        'Check if your foreign qualifications are recognized (ENIC-NARIC system)',
        'Explore vocational training options (CAP, BEP certifications)',
        'Look for apprenticeship programs combining work and studies',
        'Consider continuing general education if needed (adult education programs)',
        'Enroll in recognized training programs leading to French certifications',
        'Pursue official diplomas and qualifications valued by employers',
        'Network with instructors and other students for opportunities',
        'Update your skills based on job market demands'
      ],
      links: [
        { label: 'Education Access', href: 'https://www.service-public.fr/particuliers/vosdroits/F12089', description: 'Education and training information' },
        { label: 'Skills Assessment', href: 'https://www.france-competences.gouv.fr', description: 'National skills framework' },
        { label: 'Degree Recognition', href: 'https://www.enic-naric.net', description: 'Check if your diploma is recognized' },
        { label: 'Vocational Training', href: 'https://www.formation-continue.gouv.fr', description: 'Find training programs' },
        { label: 'Adult Education', href: 'https://www.eduscol.education.fr', description: 'Continuing education for adults' }
      ]
    },
    {
      id: 'cultural-integration',
      title: 'Cultural Activities & Networking',
      description: 'Build connections and understand French culture',
      steps: [
        'Join community centers, associations, and social groups in your area',
        'Participate in local cultural events, festivals, and markets',
        'Join religious communities, cultural associations that match your background',
        'Volunteer for local organizations - great way to practice French and meet people',
        'Build social networks and friendships with local residents',
        'Participate in sports clubs, hobby groups, and leisure activities',
        'Attend neighborhood meetings and civic events to understand local issues',
        'Share your own culture - many communities welcome cultural diversity',
        'Maintain connections with other refugee communities while integrating into French society'
      ],
      links: [
        { label: 'Community Associations', href: 'https://www.associations.gouv.fr', description: 'Find local organizations' },
        { label: 'Cultural Events', href: 'https://www.france.fr', description: 'Cultural information portal' },
        { label: 'Volunteer Opportunities', href: 'https://www.france-benevolat.org', description: 'Find volunteering programs' },
        { label: 'Sports & Recreation', href: 'https://www.territoires-innovants.fr', description: 'Local activities and groups' },
        { label: 'Refugee Communities', href: 'https://www.france-terre-asile.org', description: 'Support networks for refugees' }
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Learning & Integration</h1>
            <p className="text-sm sm:text-base text-slate-600">Develop skills and integrate into French society</p>
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
