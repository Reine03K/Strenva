import React, { createContext, useContext, useState, useEffect } from 'react';

// Créer le contexte d'authentification
const AuthContext = createContext();

// Fournisseur d'authentification
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Charger l'utilisateur depuis localStorage au démarrage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Erreur chargement utilisateur:', e);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Fonction de login
  const login = (userData) => {
    const userWithDefaults = {
      ...userData,
      completedTasks: userData.completedTasks || {},
      alerts: userData.alerts || []
    };
    setUser(userWithDefaults);
    localStorage.setItem('user', JSON.stringify(userWithDefaults));
  };

  // Fonction de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Fonction pour mettre à jour l'utilisateur
  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // Fonction pour marquer une tâche comme complétée
  const markTaskComplete = (procedure, taskId) => {
    const updatedCompletedTasks = {
      ...user.completedTasks,
      [procedure]: {
        ...(user.completedTasks[procedure] || {}),
        [taskId]: true
      }
    };
    updateUser({ completedTasks: updatedCompletedTasks });
  };

  // Fonction pour marquer une tâche comme non complétée
  const markTaskIncomplete = (procedure, taskId) => {
    const updatedCompletedTasks = {
      ...user.completedTasks,
      [procedure]: {
        ...(user.completedTasks[procedure] || {}),
        [taskId]: false
      }
    };
    updateUser({ completedTasks: updatedCompletedTasks });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      updateUser, 
      loading,
      markTaskComplete,
      markTaskIncomplete
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé avec AuthProvider');
  }
  return context;
}
