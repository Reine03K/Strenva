import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* HERO SECTION */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        {/* Text */}
        <div className="space-y-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-primary">
            Discover the Strenva Platform
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-snug">
            Your guided journey for a smooth, hassle-free settlement in France.
          </h1>
          <p className="text-sm text-slate-600">
            Centralize your administrative procedures, housing searches, 
            internship & apprenticeship opportunities, and city-specific essentials in one simple, reliable space.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/register"
              className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primaryLight transition-colors"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
            >
              Already have an account?
            </Link>
          </div>
          <p className="text-[10px] text-slate-500">
            free for students, workers, and visitors.
          </p>
        </div>
      </section>

      {/* 4 INFO CARDS */}
      <section className="grid gap-4 md:grid-cols-4 text-xs">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
          <h3 className="font-semibold text-slate-900">Administrative procedures</h3>
          <p className="text-slate-600">
            A guided journey through every key step: visa, residence permit, social security, CAF, and more.
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
          <h3 className="font-semibold text-slate-900">Find housing</h3>
          <p className="text-slate-600">
            Accès aux bonnes plateformes selon votre profil et votre budget.
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
          <h3 className="font-semibold text-slate-900">Food & Groceries</h3>
          <p className="text-slate-600">
           Local essentials: markets, supermarkets, and nearby shops.
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
          <h3 className="font-semibold text-slate-900">Jobs / Internships / Apprenticeships</h3>
          <p className="text-slate-600">
            Find opportunities that match your profile and skills.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
