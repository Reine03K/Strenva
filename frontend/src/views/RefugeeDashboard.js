import React from 'react';
import { Link } from 'react-router-dom';

export default function RefugeeDashboard() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-4">Refugee Dashboard</h1>
      <p className="text-slate-600">Welcome to the refugee dashboard. Use the navigation to access your checklists and alerts.</p>
      <div className="mt-6">
        <Link to="/refugee/administrative" className="text-primary underline">Start procedures</Link>
      </div>
    </main>
  );
}
