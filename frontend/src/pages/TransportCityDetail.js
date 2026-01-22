import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCityById } from '../data/transport_cities';

function TransportCityDetail() {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const city = getCityById(cityId);
  const [completedSteps, setCompletedSteps] = useState([]);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ville non trouvée</h2>
          <Link to="/transport" className="text-primary hover:underline">
            Retour à la liste des villes
          </Link>
        </div>
      </div>
    );
  }

  const toggleStep = (stepNumber) => {
    setCompletedSteps(prev =>
      prev.includes(stepNumber)
        ? prev.filter(n => n !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/transport')}
        className="inline-flex items-center gap-2 text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour aux villes
      </button>

      {/* Header */}
      <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="bg-primary/10 rounded-full p-3 sm:p-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
              Transport à {city.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-600">{city.transportSystem.fullName}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Transport System Overview */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2 className="text-xl font-bold text-slate-900">
              Système de transport de {city.name}
            </h2>
          </div>
          <p className="text-slate-600 mb-4">
            {city.transportSystem.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {city.transportSystem.types.map((type, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Student Card Section */}
        <div className="bg-gradient-to-br from-primary to-primaryDark rounded-xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <h2 className="text-xl font-bold">{city.studentCard.name}</h2>
          </div>
          <p className="text-white/90 mb-4 text-sm">{city.studentCard.description}</p>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="rounded-lg bg-white/10 p-3">
              <p className="text-xs text-white/80 mb-1">Mensuel</p>
              <p className="text-2xl font-bold">{city.studentCard.monthlyPrice}</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <p className="text-xs text-white/80 mb-1">Annuel</p>
              <p className="text-2xl font-bold">{city.studentCard.annualPrice}</p>
            </div>
          </div>
          <a
            href={city.studentCard.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-primary hover:bg-white/90 transition-all"
          >
            Souscrire en ligne
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Steps to Follow */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-xl font-bold text-slate-900">Étapes à suivre</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6">
            Suivez ces étapes pour obtenir votre abonnement de transport étudiant
          </p>

          <div className="space-y-3">
            {city.steps.map((step) => (
              <div
                key={step.number}
                className={`rounded-lg bg-white border transition-all p-4 ${
                  completedSteps.includes(step.number)
                    ? 'border-green-500'
                    : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleStep(step.number)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all ${
                      completedSteps.includes(step.number)
                        ? 'bg-green-500 text-white'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {completedSteps.includes(step.number) ? (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">
                      {step.description}
                    </p>
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        Lien officiel
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mt-4 rounded-lg bg-slate-50 p-3 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-700">Progression</span>
              <span className="text-xs font-bold text-primary">
                {completedSteps.length} / {city.steps.length}
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{
                  width: `${(completedSteps.length / city.steps.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>

        {/* Official Links */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <h2 className="text-xl font-bold text-slate-900">Liens officiels</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {city.officialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg bg-white p-4 border border-slate-200 hover:border-primary transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default TransportCityDetail;
