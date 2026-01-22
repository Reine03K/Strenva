import React from 'react';
import { Link } from 'react-router-dom';

export default function VisitorDashboard() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-4">Visitor Dashboard</h1>
      <p className="text-slate-600">Welcome to the visitor dashboard. Use the navigation to access relevant procedures.</p>
      <div className="mt-6">
        <Link to="/visitor/procedures" className="text-primary underline">View procedures</Link>
      </div>
    </main>
  );
}
