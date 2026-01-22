import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkerDashboard() {
  const sections = [
    { id: 'admin', title: 'Administrative Procedures', description: 'Guides and forms for workers (work permits, social contributions).', to: '/worker/procedures/administrative' },
    { id: 'housing', title: 'Housing Search', description: 'Find housing options suitable for workers and families.', to: '/worker/procedures/housing' },
    { id: 'benefits', title: 'Benefits & Aid', description: 'Information on benefits, unemployment insurance and support schemes.', to: '/worker/procedures/benefits' },
    { id: 'food', title: 'Food & Groceries', description: 'Local grocery guides and markets.', to: '/worker/procedures/food' },
    { id: 'leisure', title: 'Leisure & Culture', description: 'Work-life balance, sports, cultural activities and social networking.', to: '/worker/procedures/leisure' },
    { id: 'more', title: 'More', description: 'Other useful services and city-specific resources.', to: '/worker/procedures/more' }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Worker Dashboard</h1>
      <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">Key services and guides for workers relocating to France.</p>

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
