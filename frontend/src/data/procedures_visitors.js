const procedures = {
  administrative: {
    id: 'administrative',
    title: 'Administrative Procedures - Visitors',
    description: 'Short-term administrative steps for visitors.',
    steps: [
      'Prepare travel documents and proof of accommodation.',
      'Check visa requirements and duration for your nationality.',
      'Keep copies of important documents during your stay.',
      'Get travel and health insurance (required for Schengen visa).',
      'Register at local town hall (mairie) if required for long stays.'
    ],
    links: [
      { label: 'France Visas', href: 'https://france-visas.gouv.fr' }
    ]
  },
  'temporary-housing': {
    id: 'temporary-housing',
    title: 'Temporary Housing - Visitors',
    description: 'Options for short-term stays (hotels, hostels, short rentals).',
    steps: [
      'Compare short-term rental platforms (Booking, Airbnb, Hostelworld).',
      'Check cancellation policies and reviews before booking.',
      'Book in advance during peak season (June-August).',
      'Consider location near public transport.',
      'Budget for tourist tax (taxe de séjour) - usually 1-4€/night.'
    ],
    links: [
      { label: 'Booking.com', href: 'https://www.booking.com' },
      { label: 'Airbnb', href: 'https://www.airbnb.com' }
    ]
  },
  restaurants: {
    id: 'restaurants',
    title: 'Restaurants & Dining - Visitors',
    description: 'Find local restaurants, booking tips and local specialties.',
    steps: [
      'Try local bakeries (boulangeries) for fresh bread and pastries.',
      'Look for "menu du jour" (daily menu) for best lunch deals.',
      'Book popular restaurants in advance.',
      'Explore food markets for local specialties and picnic items.',
      'Remember tipping is optional - service is usually included.'
    ],
    links: [
      { label: 'TripAdvisor', href: 'https://www.tripadvisor.com' },
      { label: 'TheFork (restaurant bookings)', href: 'https://www.thefork.com' }
    ]
  },
  jobs: {
    id: 'jobs',
    title: 'Work Information - Visitors',
    description: 'Legal information about working as a visitor in France.',
    steps: [
      'Know that tourist visas generally do NOT allow work.',
      'Check if you qualify for a Working Holiday Visa (age 18-30, certain countries).',
      'EU/EEA citizens can work freely without restrictions.',
      'Volunteer work (unpaid) may be allowed on tourist visa.',
      'Always verify your visa permissions before accepting any work.'
    ],
    links: [
      { label: 'Working Holiday Visa info', href: 'https://france-visas.gouv.fr' }
    ]
  },
  leisure: {
    id: 'leisure',
    title: 'Attractions & Tours - Visitors',
    description: 'Must-see attractions, tours and activities for visitors.',
    steps: [
      'Book tickets online for major attractions to skip lines.',
      'Join free walking tours (tip-based) to learn about the city.',
      'Visit museums - many offer free entry on first Sunday of month.',
      'Explore parks and gardens for relaxation and photos.',
      'Consider day trips to nearby attractions (Versailles, Loire Valley, etc.).'
    ],
    links: [
      { label: 'Official tourism', href: 'https://www.france.fr' },
      { label: 'Paris tourism', href: 'https://www.parisinfo.com' }
    ]
  }
};

export default procedures;
