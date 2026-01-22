import React from "react";

function HousingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">
        Find Housing
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Popular Housing Platforms
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>
                <a
                  href="https://www.seloger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  SeLoger
                </a>
              </li>
              <li>
                <a
                  href="https://www.leboncoin.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LeBonCoin
                </a>
              </li>
              <li>
                <a
                  href="https://www.airbnb.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Airbnb
                </a>
              </li>
              <li>
                <a
                  href="https://www.appartager.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Appartager
                </a>
              </li>
            </ul>
          </div>
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Housing Tips
            </h2>
            <p className="text-slate-600">
              Start your search early, check for authenticity, compare prices, and
              consider location relative to your work or studies.
            </p>
          </div>
      </div>
    </div>
  );
}

export default HousingPage;
