import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileCard({ id, icon, title, subtitle, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className="w-full bg-white p-8 rounded-2xl shadow-lg transition-transform duration-200 transform hover:shadow-2xl hover:-translate-y-1 border border-transparent text-left"
    >
      <div className="flex flex-col items-start">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>
    </button>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  const profiles = [
    {
      id: 'student',
      icon: '🎓',
      title: 'Student',
      subtitle: 'Students looking for opportunities'
    },
    {
      id: 'worker',
      icon: '💼',
      title: 'Worker',
      subtitle: 'Workers seeking freelance projects'
    },
    {
      id: 'refugee',
      icon: '🤝',
      title: 'Refugee',
      subtitle: 'Refugees offering expertise and training'
    }
  ];

  const handleProfileSelect = (profileId) => {
    navigate('/register');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="max-w-7xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Icam Talent Platform
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connecting Icam students, alumni, and teachers with companies for freelance opportunities and projects
          </p>
        </div>

        {/* Profile Selection */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Choose your profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                id={profile.id}
                icon={profile.icon}
                title={profile.title}
                subtitle={profile.subtitle}
                onSelect={handleProfileSelect}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-slate-900 mb-2">Job Matching</h3>
            <p className="text-sm text-slate-600">
              Platform automatically selects 3-5 candidates matching your requirements
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-slate-900 mb-2">Practical Testing</h3>
            <p className="text-sm text-slate-600">
              Validated tests for candidates with 2-day deadline to assess real skills
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-slate-900 mb-2">Secure Communication</h3>
            <p className="text-sm text-slate-600">
              Chat and video calls for seamless collaboration
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Already have an account?</p>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>
        </div>
      </section>
    </main>
  );
}
