import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function TeacherDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <p className="text-slate-600 mb-4">Showcase your expertise and training capabilities</p>
          <Link
            to="/profile/edit"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Edit Profile
          </Link>
        </div>

        {/* Training Services Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Training Services</h2>
          <p className="text-slate-600 mb-4">Offer training and expertise to companies</p>
          <Link
            to="/profile"
            className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            View Profile
          </Link>
        </div>

        {/* Messages Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <p className="text-slate-600 mb-4">Communicate with companies interested in your services</p>
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
