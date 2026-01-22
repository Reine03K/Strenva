import React from "react";

function LeisurePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">
        Loisirs & Cities
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Entertainment
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Museums & Cultural Sites</li>
              <li>• Cinema & Theater</li>
              <li>• Parks & Recreation</li>
              <li>• Sports & Fitness</li>
              <li>• Restaurants & Cafés</li>
            </ul>
          </div>
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              City Guides
            </h2>
            <p className="text-slate-600 mb-3">
              Discover attractions, local events, and community activities in major
              French cities.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Paris</li>
              <li>• Lyon</li>
              <li>• Marseille</li>
              <li>• Toulouse</li>
              <li>• Nice</li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default LeisurePage;
