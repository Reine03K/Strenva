import React from 'react';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Tableau de bord</h1>
      <p className="mb-6 text-slate-700">Bienvenue sur votre tableau de bord.</p>
      <Outlet />
    </div>
  );
}

export default Dashboard;
