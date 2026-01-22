import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

// Définir les tâches prioritaires par statut et leurs dates cibles (jours après arrivée)
const PRIORITY_TASKS = {
  student: [
    { id: 'enrollment', title: 'Inscription à l\'université', daysAfterArrival: 14, urgencyDays: 7 },
    { id: 'housing', title: 'Trouver un logement', daysAfterArrival: 30, urgencyDays: 14 },
    { id: 'student_id', title: 'Carte étudiant', daysAfterArrival: 21, urgencyDays: 7 },
    { id: 'bank_account', title: 'Compte bancaire', daysAfterArrival: 45, urgencyDays: 14 }
  ],
  worker: [
    { id: 'work_permit', title: 'Permis de travail', daysAfterArrival: 30, urgencyDays: 14 },
    { id: 'housing', title: 'Trouver un logement', daysAfterArrival: 30, urgencyDays: 14 },
    { id: 'health_insurance', title: 'Assurance maladie', daysAfterArrival: 45, urgencyDays: 21 },
    { id: 'bank_account', title: 'Compte bancaire', daysAfterArrival: 45, urgencyDays: 14 },
    { id: 'visa_renewal_warning', title: 'Préparation renouvellement visa', daysBeforeExpiry: 90, urgencyDays: 30 }
  ],
  refugee: [
    { id: 'asylum_request', title: 'Demande d\'asile (OFPRA)', daysAfterArrival: 120, urgencyDays: 60 },
    { id: 'emergency_housing', title: 'Logement d\'urgence (115)', daysAfterArrival: 1, urgencyDays: 0 },
    { id: 'health_registration', title: 'Inscription CPAM', daysAfterArrival: 30, urgencyDays: 7 },
    { id: 'food_aid', title: 'Aide alimentaire', daysAfterArrival: 7, urgencyDays: 3 },
    { id: 'french_courses', title: 'Inscription cours français', daysAfterArrival: 60, urgencyDays: 30 },
    { id: 'visa_expiry_warning', title: 'Suivi expiration visa', daysBeforeExpiry: 90, urgencyDays: 30 }
  ]
};

const AlertLevel = {
  URGENT: 'urgent',      // À faire immédiatement (rouge)
  SOON: 'soon',          // À faire bientôt (orange)
  PLANNED: 'planned'     // À prévoir (bleu)
};

function generateAlerts(user) {
  const alerts = [];
  if (!user || !user.status || !user.arrivalDate) return alerts;

  const arrivalDate = new Date(user.arrivalDate);
  const today = new Date();
  const daysElapsed = Math.floor((today - arrivalDate) / (1000 * 60 * 60 * 24));

  const tasks = PRIORITY_TASKS[user.status] || [];

  tasks.forEach(task => {
    let targetDate = null;
    let alertType = null;

    if (task.daysAfterArrival !== undefined) {
      // Tâche basée sur la date d'arrivée
      targetDate = new Date(arrivalDate);
      targetDate.setDate(targetDate.getDate() + task.daysAfterArrival);
      alertType = 'arrival-based';
    } else if (task.daysBeforeExpiry !== undefined && user.visaExpiryDate) {
      // Tâche basée sur l'expiration du visa
      const expiryDate = new Date(user.visaExpiryDate);
      targetDate = new Date(expiryDate);
      targetDate.setDate(targetDate.getDate() - task.daysBeforeExpiry);
      alertType = 'expiry-based';
    }

    if (!targetDate) return;

    const daysUntilTarget = Math.floor((targetDate - today) / (1000 * 60 * 60 * 24));
    const isOverdue = daysUntilTarget < 0;
    const urgency = task.urgencyDays || 7;

    let level = AlertLevel.PLANNED;
    if (isOverdue) {
      level = AlertLevel.URGENT;
    } else if (daysUntilTarget <= urgency) {
      level = AlertLevel.URGENT;
    } else if (daysUntilTarget <= urgency * 2) {
      level = AlertLevel.SOON;
    }

    alerts.push({
      id: task.id,
      title: task.title,
      level,
      daysUntil: daysUntilTarget,
      targetDate: targetDate.toISOString().split('T')[0],
      isOverdue,
      taskType: alertType
    });
  });

  // Trier par urgence puis par date
  alerts.sort((a, b) => {
    const levelOrder = { urgent: 0, soon: 1, planned: 2 };
    const levelDiff = levelOrder[a.level] - levelOrder[b.level];
    if (levelDiff !== 0) return levelDiff;
    return a.daysUntil - b.daysUntil;
  });

  return alerts;
}

function AlertCard({ alert, onDismiss }) {
  const getLevelStyles = (level) => {
    const styles = {
      urgent: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: '🚨',
        textColor: 'text-red-700',
        badge: 'bg-red-100 text-red-800'
      },
      soon: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: '⚠️',
        textColor: 'text-orange-700',
        badge: 'bg-orange-100 text-orange-800'
      },
      planned: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'ℹ️',
        textColor: 'text-blue-700',
        badge: 'bg-blue-100 text-blue-800'
      }
    };
    return styles[level] || styles.planned;
  };

  const styles = getLevelStyles(alert.level);
  
  let timeText = '';
  if (alert.isOverdue) {
    const daysLate = Math.abs(alert.daysUntil);
    timeText = `EN RETARD de ${daysLate} jour${daysLate > 1 ? 's' : ''}`;
  } else if (alert.daysUntil === 0) {
    timeText = 'AUJOURD\'HUI';
  } else if (alert.daysUntil === 1) {
    timeText = 'Demain';
  } else {
    timeText = `Dans ${alert.daysUntil} jours`;
  }

  return (
    <div className={`${styles.bg} border-l-4 ${styles.border} p-4 rounded-lg mb-3 ${styles.textColor}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-2xl flex-shrink-0">{styles.icon}</span>
          <div className="flex-1">
            <h3 className="font-semibold text-sm mb-1">{alert.title}</h3>
            <div className="flex items-center gap-2">
              <span className={`${styles.badge} text-xs font-semibold px-2 py-1 rounded`}>
                {timeText}
              </span>
              <span className="text-xs opacity-75">
                {alert.taskType === 'expiry-based' ? 'Visa' : 'Arrivée'}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className="text-lg hover:opacity-70 transition flex-shrink-0"
          aria-label="Fermer l'alerte"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function AlertsPanel() {
  const { user } = useAuth();
  const [alerts, setAlerts] = useState([]);
  const [dismissedAlerts, setDismissedAlerts] = useState(
    () => JSON.parse(localStorage.getItem('dismissedAlerts') || '[]')
  );

  useEffect(() => {
    if (user) {
      const generatedAlerts = generateAlerts(user);
      const visibleAlerts = generatedAlerts.filter(
        alert => !dismissedAlerts.includes(alert.id)
      );
      setAlerts(visibleAlerts);
    }
  }, [user, dismissedAlerts]);

  const handleDismiss = (alertId) => {
    const newDismissed = [...dismissedAlerts, alertId];
    setDismissedAlerts(newDismissed);
    localStorage.setItem('dismissedAlerts', JSON.stringify(newDismissed));
  };

  if (alerts.length === 0) {
    return null;
  }

  const urgentCount = alerts.filter(a => a.level === AlertLevel.URGENT).length;
  const soonCount = alerts.filter(a => a.level === AlertLevel.SOON).length;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Tâches à faire {urgentCount > 0 && `(${urgentCount} urgent${urgentCount > 1 ? 's' : ''})`}
        </h2>
        <span className="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
          {alerts.length} alerte{alerts.length > 1 ? 's' : ''}
        </span>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {alerts.map(alert => (
          <AlertCard
            key={alert.id}
            alert={alert}
            onDismiss={() => handleDismiss(alert.id)}
          />
        ))}
      </div>
    </div>
  );
}
