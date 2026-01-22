import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    try {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } catch (e) {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go back"
      title="Go back"
      className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

// Navigation items with dropdowns configuration
const navigationItems = [
  {
    label: "Administrative procedures",
    items: [
      { label: "Student administrative procedures", path: "/student/procedures/administrative" },
      { label: "Worker administrative procedures", path: "/worker/procedures/administrative" },
      { label: "Refugee administrative procedures", path: "/refugee/procedures/administrative" }
    ]
  },
  {
    label: "Find housing",
    items: [
      { label: "Student housing", path: "/student/procedures/housing" },
      { label: "Worker housing", path: "/worker/procedures/housing" },
      { label: "Refugee emergency housing", path: "/refugee/procedures/housing" }
    ]
  },
  {
    label: "Transport",
    path: "/transport", // Direct link without dropdown
    isDirect: true
  },
  {
    label: "Food & Aid",
    items: [
      { label: "Student food & groceries", path: "/student/procedures/food" },
      { label: "Worker food & groceries", path: "/worker/procedures/food" },
      { label: "Refugee food aid & solidarity", path: "/refugee/procedures/food" }
    ]
  },
  {
    label: "Health & Support",
    items: [
      { label: "Refugee health & psychology", path: "/refugee/procedures/health" }
    ]
  },
  {
    label: "Integration & Learning",
    items: [
      { label: "Refugee French learning", path: "/refugee/procedures/learning" }
    ]
  },
  {
    label: "Jobs / Internships / Apprenticeships",
    items: [
      { label: "Student internships & jobs", path: "/student/procedures/jobs" },
      { label: "Refugee accessible jobs & training", path: "/refugee/procedures/jobs" }
    ]
  },
  {
    label: "Leisure",
    items: [
      { label: "Student leisure activities", path: "/student/procedures/leisure" },
      { label: "Worker leisure & culture", path: "/worker/procedures/leisure" }
    ]
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Back button + Logo + Name */}
        <div className="flex items-center gap-3">
          <BackButton />
          <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white">
            S
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              Strenva
            </span>
            <span className="text-[10px] text-slate-500">
              Votre parcours guidé en France
            </span>
          </div>
          </Link>
        </div>

        {/* Navigation links (English) - 'Home' removed; logo is the home link */}
        <div className="hidden items-center gap-6 text-xs font-medium text-slate-600 md:flex">
          {navigationItems.map((item, index) => (
            item.isDirect ? (
              // Direct link without dropdown
              <Link 
                key={index}
                to={item.path}
                className="hover:text-primary py-2 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              // Dropdown menu
              <div key={index} className="relative group">
                <button className="hover:text-primary py-2 flex items-center gap-1">
                  {item.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu - appears on hover */}
                <div className="absolute left-0 top-full mt-0 hidden w-56 rounded-lg border border-slate-200 bg-white shadow-lg group-hover:block z-50">
                  <div className="py-2">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/login"
            className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-white hover:bg-primaryLight transition-colors"
          >
            Get started with Strenva
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 text-slate-700 hover:bg-slate-50 md:hidden"
          aria-label="Ouvrir le menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-800"></span>
            <span className="block h-0.5 w-5 bg-slate-800"></span>
            <span className="block h-0.5 w-5 bg-slate-800"></span>
          </div>
        </button>
      </nav>

      

      {/* Menu mobile */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm text-slate-700">
            {navigationItems.map((item, index) => (
              item.isDirect ? (
                // Direct link for mobile
                <Link
                  key={index}
                  to={item.path}
                  className="w-full text-left py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                // Dropdown for mobile
                <div key={index}>
                  <button 
                    onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                    className="w-full text-left py-1 hover:text-primary flex items-center justify-between"
                  >
                    {item.label}
                    <svg 
                      className={`w-4 h-4 transition-transform ${mobileDropdown === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {mobileDropdown === index && (
                    <div className="pl-4 py-1 space-y-1">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block py-1 text-sm text-slate-600 hover:text-primary"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdown(null);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
            
            <div className="mt-2 flex gap-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-center text-xs font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-xl bg-primary px-3 py-2 text-center text-xs font-semibold text-white hover:bg-primaryLight transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
