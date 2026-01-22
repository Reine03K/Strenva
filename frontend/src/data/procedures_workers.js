const procedures = {
  administrative: {
    id: 'administrative',
    title: 'Administrative Procedures - Workers',
    description: 'Worker-specific administrative steps (work permits, registrations).',
    steps: [
      'Verify work permit requirements for your nationality.',
      'Prepare employer documents and contract if needed for permit application.',
      'Register with social security and tax authorities after starting work.',
      'Apply for residence permit (carte de séjour) at prefecture.',
      'Open a French bank account with your employment contract.'
    ],
    links: [ 
      { label: 'Service-public (work)', href: 'https://www.service-public.fr' },
      { label: 'Prefecture appointments', href: 'https://www.interieur.gouv.fr' }
    ]
  },
  housing: {
    id: 'housing',
    title: 'Housing Search - Workers',
    description: 'Finding housing suitable for workers and families.',
    steps: [
      'Search listings by commute time and transportation links.',
      'Check lease terms for long-term contracts and tenant responsibilities.',
      'Budget for security deposit (1-2 months rent) and agency fees.',
      'Consider furnished apartments for easier relocation.',
      'Use Garantie Visale if you don\'t have a French guarantor.'
    ],
    links: [
      { label: 'SeLoger', href: 'https://www.seloger.com' },
      { label: 'PAP (no agency fees)', href: 'https://www.pap.fr' }
    ]
  },
  jobs: {
    id: 'jobs',
    title: 'Job Opportunities - Workers',
    description: 'Finding professional employment and career development.',
    steps: [
      'Update your CV to French format and standards.',
      'Network on LinkedIn and attend professional events.',
      'Research salary ranges on Glassdoor France.',
      'Understand contract types (CDI, CDD) and your rights.',
      'Negotiate benefits including tickets restaurant and mutuelle.'
    ],
    links: [
      { label: 'LinkedIn Jobs', href: 'https://www.linkedin.com/jobs' },
      { label: 'Indeed France', href: 'https://www.indeed.fr' },
      { label: 'Apec (executives)', href: 'https://www.apec.fr' }
    ]
  },
  benefits: {
    id: 'benefits',
    title: 'Benefits & Aid - Workers',
    description: 'Information on unemployment support, family benefits and allowances.',
    steps: [ 
      'Find applicable benefits and register with relevant agencies.',
      'Register with Pôle Emploi if unemployed.',
      'Check family benefits (allocations familiales) eligibility.',
      'Understand your health insurance (Sécurité sociale + mutuelle).'
    ],
    links: [
      { label: 'Pôle Emploi', href: 'https://www.pole-emploi.fr' },
      { label: 'CAF', href: 'https://www.caf.fr' }
    ]
  },
  food: {
    id: 'food',
    title: 'Food & Groceries - Workers',
    description: 'Local grocery and market tips for workers.',
    steps: [
      'Find nearby supermarkets (Carrefour, Auchan, Leclerc).',
      'Use tickets restaurant (lunch vouchers) from employer.',
      'Shop at weekly markets for fresh local produce.',
      'Consider grocery delivery services for convenience.'
    ],
    links: []
  },
  leisure: {
    id: 'leisure',
    title: 'Leisure & Culture - Workers',
    description: 'Work-life balance, sports, culture and social activities.',
    steps: [
      'Join gym or sports clubs (often with company discounts).',
      'Explore cultural events - museums, theaters, concerts.',
      'Connect with expat groups and professional networks.',
      'Plan weekend getaways using TGV trains.',
      'Take advantage of company benefits (CE - comité d\'entreprise).'
    ],
    links: []
  },
  more: {
    id: 'more',
    title: 'More',
    description: 'Other useful services and city-specific resources.',
    steps: [],
    links: []
  }
};

export default procedures;
