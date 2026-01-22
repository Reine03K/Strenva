import React from 'react';
import { Link } from 'react-router-dom';

export default function RefugeeDashboard() {
  const sections = [
    { id: 'administrative', title: 'Administrative Procedures', description: 'Asylum request, OFPRA, residence permit and legal support.', to: '/refugee/procedures/administrative', icon: '📋' },
    { id: 'housing', title: 'Emergency Housing', description: 'Emergency and temporary accommodation options.', to: '/refugee/procedures/housing', icon: '🏠' },
    { id: 'food', title: 'Food Aid & Solidarity', description: 'Food banks, solidarity stores and meal assistance.', to: '/refugee/procedures/food', icon: '🍽️' },
    { id: 'health', title: 'Health & Support', description: 'Access to healthcare and psychological accompaniment.', to: '/refugee/procedures/health', icon: '🏥' },
    { id: 'learning', title: 'French Learning & Integration', description: 'Language courses and integration programs.', to: '/refugee/procedures/learning', icon: '📚' },
    { id: 'jobs', title: 'Jobs & Training', description: 'Accessible employment and vocational training.', to: '/refugee/procedures/jobs', icon: '💼' }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4">Refugee Support Hub</h1>
      <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">Comprehensive resources and support for refugees and asylum seekers in France.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sections.map(s => (
          <Link key={s.id} to={s.to} className="block p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-sm sm:text-base text-slate-600">{s.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
