import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    status: 'student', // 'student', 'worker', 'refugee'
    arrivalDate: '',
    visaExpiryDate: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur quand l'utilisateur corrige
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    if (!formData.status) {
      newErrors.status = 'Veuillez sélectionner votre statut';
    }

    if (!formData.arrivalDate) {
      newErrors.arrivalDate = 'Date d\'arrivée en France est requise';
    }

    if (formData.status === 'refugee' || formData.status === 'worker') {
      if (!formData.visaExpiryDate) {
        newErrors.visaExpiryDate = 'Date d\'expiration du visa est requise';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulation d'une requête d'authentification
      // En production, ceci communiquerait avec le backend
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email: formData.email,
        status: formData.status,
        arrivalDate: new Date(formData.arrivalDate),
        visaExpiryDate: formData.visaExpiryDate ? new Date(formData.visaExpiryDate) : null,
        loginTime: new Date()
      };

      // Appel backend (à adapter avec votre API réelle)
      // const response = await fetch('/api/auth/login', { ... })
      
      login(userData);

      // Redirection selon le statut
      const dashboardMap = {
        student: '/student/dashboard',
        worker: '/worker/dashboard',
        refugee: '/refugee/dashboard'
      };

      navigate(dashboardMap[formData.status]);
    } catch (error) {
      setErrors({ submit: 'Erreur de connexion. Veuillez réessayer.' });
    } finally {
      setIsLoading(false);
    }
  };

  const statusOptions = [
    { value: 'student', label: 'Étudiant', icon: '🎓' },
    { value: 'worker', label: 'Travailleur', icon: '💼' },
    { value: 'refugee', label: 'Réfugié', icon: '🤝' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo et titre */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white">
              S
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Strenva</h1>
          <p className="mt-2 text-sm text-slate-600">Votre parcours guidé en France</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {errors.submit && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {errors.submit}
            </div>
          )}

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
              }`}
              placeholder="vous@exemple.fr"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Mot de passe */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.password ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
              }`}
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>

          {/* Statut utilisateur */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Statut
            </label>
            {errors.status && <p className="mb-2 text-sm text-red-500">{errors.status}</p>}
            <div className="grid grid-cols-3 gap-3">
              {statusOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, status: option.value }));
                    if (errors.status) {
                      setErrors(prev => ({ ...prev, status: '' }));
                    }
                  }}
                  className={`p-4 rounded-lg border-2 transition flex flex-col items-center gap-2 ${
                    formData.status === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="text-xs font-medium text-center">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Date d'arrivée */}
          <div>
            <label htmlFor="arrivalDate" className="block text-sm font-medium text-slate-700 mb-2">
              Date d'arrivée en France
            </label>
            <input
              id="arrivalDate"
              name="arrivalDate"
              type="date"
              value={formData.arrivalDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.arrivalDate ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
              }`}
            />
            {errors.arrivalDate && <p className="mt-1 text-sm text-red-500">{errors.arrivalDate}</p>}
          </div>

          {/* Date d'expiration du visa - conditionnelle */}
          {(formData.status === 'refugee' || formData.status === 'worker') && (
            <div>
              <label htmlFor="visaExpiryDate" className="block text-sm font-medium text-slate-700 mb-2">
                Date d'expiration du visa {formData.status === 'refugee' ? '(si applicable)' : ''}
              </label>
              <input
                id="visaExpiryDate"
                name="visaExpiryDate"
                type="date"
                value={formData.visaExpiryDate}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                  errors.visaExpiryDate ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
                }`}
              />
              {errors.visaExpiryDate && <p className="mt-1 text-sm text-red-500">{errors.visaExpiryDate}</p>}
            </div>
          )}

          {/* Bouton de connexion */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition"
          >
            {isLoading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>

        {/* Message d'information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
          <p className="font-semibold mb-2">Démonstration:</p>
          <p>Pour tester l'application, utilisez n'importe quel email et mot de passe (min. 6 caractères).</p>
        </div>
      </div>
    </div>
  );
}
