import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-4">Student Dashboard</h1>
      <p className="text-slate-600">Welcome to the student dashboard. Use the navigation to access procedures and checklists.</p>
      <div className="mt-6">
        <Link to="/student/procedures" className="text-primary underline">View procedures</Link>
      </div>
    </main>
  );
}
