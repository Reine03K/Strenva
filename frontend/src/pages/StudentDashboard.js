import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  const sections = [
    { id: 'admin', title: 'Student Administrative Procedures', description: 'Guides and forms specific to students (visa, registration, social security).', to: '/student/procedures/administrative' },
    { id: 'housing', title: 'Housing Search', description: 'Search student-friendly housing and tips for renting in France.', to: '/student/procedures/housing' },
    { id: 'jobs', title: 'Jobs / Internships / Apprenticeships', description: 'Find internships, part-time jobs and apprenticeships.', to: '/student/procedures/jobs' },
    { id: 'benefits', title: 'Benefits & Aid', description: 'Information on financial aid, scholarships and student support.', to: '/student/procedures/benefits' },
    { id: 'food', title: 'Food & Groceries', description: 'Local grocery guides, student discounts and food resources.', to: '/student/procedures/food' },
    { id: 'leisure', title: 'Leisure & Activities', description: 'Discover sports, culture, social activities and travel opportunities.', to: '/student/procedures/leisure' },
    { id: 'more', title: 'More', description: 'Other useful services and city-specific resources.', to: '/student/procedures/more' }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Student Dashboard</h1>
      <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">Quick access to the main services and guides for students.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sections.map(s => (
          <Link key={s.id} to={s.to} className="block p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-sm sm:text-base text-slate-600">{s.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
