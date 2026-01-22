import React from 'react';
import procedures from '../procedures/visitors';

export default function VisitorProcedures() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">Visitor Procedures</h1>
      <p className="text-slate-600 mb-6">Short-term procedures and tips for visitors. Detail pages will be added later.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {procedures.map(p => (
          <div key={p.id} className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-slate-600 mb-3">{p.description}</p>
            <div className="text-sm text-primary">View details (coming soon)</div>
          </div>
        ))}
      </div>
    </main>
  );
}
