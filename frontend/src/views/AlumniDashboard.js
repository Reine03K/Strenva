import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AlumniDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Alumni Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <p className="text-slate-600 mb-4">Update your professional profile and showcase your expertise</p>
          <Link
            to="/profile/edit"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Edit Profile
          </Link>
        </div>

        {/* Jobs Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Browse Opportunities</h2>
          <p className="text-slate-600 mb-4">Find freelance projects and long-term collaborations</p>
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
          <p className="text-slate-600 mb-4">Track your applications and project proposals</p>
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
          <p className="text-slate-600 mb-4">Connect with companies and discuss projects</p>
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
