import React from "react";

function GroceriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">
        Food & Groceries
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Grocery Stores
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Carrefour - Large hypermarkets across France</li>
              <li>• Leclerc - Budget-friendly option</li>
              <li>• Monoprix - Convenient, urban locations</li>
              <li>• Auchan - Discount supermarket</li>
              <li>• Local markets - Fresh produce & best prices</li>
            </ul>
          </div>
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Food Delivery
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>
                <a
                  href="https://www.deliveroo.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Deliveroo
                </a>
              </li>
              <li>
                <a
                  href="https://www.ubereats.com/fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  UberEats
                </a>
              </li>
              <li>
                <a
                  href="https://www.justeat.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Just Eat
                </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default GroceriesPage;
