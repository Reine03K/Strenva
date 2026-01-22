import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedStatuses = null }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
          <p className="text-slate-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Si pas d'utilisateur connecté, rediriger vers login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si on a une liste de statuts autorisés, vérifier l'accès
  if (allowedStatuses && !allowedStatuses.includes(user.status)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Accès refusé</h1>
          <p className="text-slate-600 mb-6">
            Cette page n'est pas disponible pour votre profil ({user.status}).
          </p>
          <a href="/" className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  return children;
}
