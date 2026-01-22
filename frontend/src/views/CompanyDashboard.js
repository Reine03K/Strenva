import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function CompanyDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Company Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Company Profile</h2>
          <p className="text-slate-600 mb-4">Manage your company information</p>
          <Link
            to="/profile/edit"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Edit Profile
          </Link>
        </div>

        {/* Post Job Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
          <p className="text-slate-600 mb-4">Create a new job posting to find talented candidates</p>
          <Link
            to="/company/jobs/create"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Create Job
          </Link>
        </div>

        {/* Applications Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Applications</h2>
          <p className="text-slate-600 mb-4">Review candidate applications and test results</p>
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
          <p className="text-slate-600 mb-4">Communicate with candidates</p>
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
