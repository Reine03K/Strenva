import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "../images/strenva-happy-users.png";

// Small accessible profile card used in the selector
function ProfileCard({ id, icon, title, subtitle, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(id); }}
      aria-pressed={selected}
      aria-label={`Select ${title}`}
      className={`w-full bg-white p-8 rounded-2xl shadow-lg transition-transform duration-200 transform ${selected ? 'ring-4 ring-indigo-200 shadow-2xl -translate-y-1 border-2 border-indigo-300' : 'hover:shadow-2xl hover:-translate-y-1 border border-transparent'} text-left`}
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
    { id: 'student', icon: '🎓', title: 'Student', subtitle: 'Student housing, internships, administrative procedures' },
    { id: 'worker', icon: '💼', title: 'Worker', subtitle: 'Housing, jobs/apprenticeships, professional procedures' },
    { id: 'refugee', icon: '🤝', title: 'Refugee', subtitle: 'Emergency housing, aid, legal support, integration' },
  ];

  const [selectedProfile, setSelectedProfile] = React.useState(() => {
    try { return localStorage.getItem('userProfile') || null } catch { return null }
  });

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
    try { localStorage.setItem('userProfile', profileId); } catch {}
    navigate(`/${profileId}/dashboard`);
  };

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Hero text (reduced bold size and centered) */}
        <div className="px-4 lg:px-0 lg:text-center lg:items-center lg:flex lg:flex-col lg:justify-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-dark mb-6">
            Your guided journey for a smooth, hassle-free settlement in France.
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Centralize your administrative procedures, housing searches, internship & apprenticeship opportunities, and city-specific essentials in one simple, reliable space.
          </p>

          <div className="mt-12">
            <h3 className="text-sm font-medium text-slate-500 mb-3 lg:hidden">Choose your profile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {profiles.map(p => (
                <ProfileCard key={p.id} id={p.id} icon={p.icon} title={p.title} subtitle={p.subtitle} selected={selectedProfile === p.id} onSelect={handleProfileSelect} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Replace testimonial text with full image */}
        <div className="px-4 lg:px-0 flex items-center justify-center">
          <img src={HeroImage} alt="Happy users using Strenva" className="w-full h-96 lg:h-[520px] object-cover rounded-3xl shadow-xl" />
        </div>
      </section>
    </main>
  );
}

