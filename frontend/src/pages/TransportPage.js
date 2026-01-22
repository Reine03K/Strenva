import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { transportCities, getAvailableRegions } from '../data/transport_cities';

function TransportPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const regions = getAvailableRegions();

  // Filtrage avancé par région et recherche
  const filteredCities = transportCities.filter(city => {
    const matchesRegion = selectedRegion === 'all' || city.region === selectedRegion;
    const matchesSearch = searchQuery === '' || 
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.transportSystem.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Main Content with Sidebar */}
      <div className="flex min-h-screen">
        {/* Sidebar Filters */}
        <aside className="w-80 bg-white border-r border-slate-200 p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Filtrer les villes</h2>
          
          {/* Search Bar */}
          <div className="mb-6">
            <label className="text-sm font-medium text-slate-700 mb-2 block">Rechercher</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ville ou région..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pl-10 text-sm text-slate-900 placeholder-slate-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <svg 
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Region Filters */}
          <div className="mb-6">
            <label className="text-sm font-medium text-slate-700 mb-3 block">Régions</label>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedRegion('all')}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedRegion === 'all'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Toutes les régions
              </button>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedRegion === region
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          {(searchQuery || selectedRegion !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
              }}
              className="w-full px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all"
            >
              Réinitialiser les filtres
            </button>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Counter */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Transport & Mobilité</h1>
              <p className="text-slate-600">
                <span className="font-semibold text-primary">{filteredCities.length}</span>
                {' '}ville{filteredCities.length > 1 ? 's' : ''} disponible{filteredCities.length > 1 ? 's' : ''}
                {searchQuery && ` pour "${searchQuery}"`}
                {selectedRegion !== 'all' && ` en ${selectedRegion}`}
              </p>
            </div>

            {/* Cities Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCities.map((city) => (
            <Link
              key={city.id}
              to={`/transport/${city.id}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* City Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                  <p className="text-sm text-white/90">{city.region}</p>
                </div>
              </div>

              {/* City Info */}
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <svg 
                    className="h-5 w-5 text-primary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                  <span className="font-semibold text-slate-900">
                    {city.transportSystem.name}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {city.transportSystem.description}
                </p>

                {/* Transport Types */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {city.transportSystem.types.map((type, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* Student Card Info */}
                <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                  <div className="flex items-center gap-2 mb-1">
                    <svg 
                      className="h-4 w-4 text-primary" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
                      />
                    </svg>
                    <span className="text-xs font-semibold text-slate-700">
                      {city.studentCard.name}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-primary">
                    {city.studentCard.monthlyPrice}
                    <span className="text-xs font-normal text-slate-500"> / mois</span>
                  </p>
                </div>

                {/* View Details Link */}
                <div className="mt-4 flex items-center justify-between text-sm font-medium text-primary">
                  <span>Voir les détails</span>
                  <svg 
                    className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No results message */}
        {filteredCities.length === 0 && (
          <div className="text-center py-20">
            <div className="mx-auto w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <svg 
                className="h-10 w-10 text-slate-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Aucune ville trouvée
            </h3>
            <p className="text-slate-600 mb-6">
              {searchQuery 
                ? `Aucun résultat pour "${searchQuery}"`
                : 'Aucune ville disponible pour cette région'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primaryDark transition-all shadow-sm"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Réinitialiser
            </button>
          </div>
        )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default TransportPage;
