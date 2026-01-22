import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <p className="text-slate-600 mb-4">Complete your profile to get matched with opportunities</p>
          <Link
            to="/profile/edit"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Edit Profile
          </Link>
        </div>

        {/* Jobs Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Browse Jobs</h2>
          <p className="text-slate-600 mb-4">Find freelance opportunities matching your skills</p>
          <Link
            to="/jobs"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            View Jobs
          </Link>
        </div>

        {/* Applications Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Applications</h2>
          <p className="text-slate-600 mb-4">Track your job applications and test results</p>
          <Link
            to="/applications"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            View Applications
          </Link>
        </div>

        {/* Messages Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <p className="text-slate-600 mb-4">Communicate with companies</p>
          <Link
            to="/messages"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            View Messages
          </Link>
        </div>
      </div>
    </div>
  );
}
