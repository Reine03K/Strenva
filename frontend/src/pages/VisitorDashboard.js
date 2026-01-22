import React from 'react';
import { Link } from 'react-router-dom';

export default function VisitorDashboard() {
  const sections = [
    { id: 'temporary-housing', title: 'Temporary Housing', description: 'Short-term stays, hostels and short rentals.', to: '/visitor/procedures/temporary-housing' },
    { id: 'restaurants', title: 'Restaurants', description: 'Find restaurants and local dining guides.', to: '/visitor/procedures/restaurants' },
    { id: 'administrative', title: 'Administrative Procedures', description: 'Basic administrative steps for visitors.', to: '/visitor/procedures/administrative' },
    { id: 'leisure', title: 'Attractions & Tours', description: 'Discover major attractions, museums, day trips and authentic local experiences.', to: '/visitor/procedures/leisure' }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Visitor Dashboard</h1>
      <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">Resources for short-term visitors and tourists.</p>

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
