import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context & Providers
import { AuthProvider } from './context/AuthContext';

// Layout
import MainLayout from './layouts/MainLayout';

// Views
import HomePageFixed from './views/HomePageFixed';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

// Dashboards
import StudentDashboard from './views/StudentDashboard';
import WorkerDashboard from './views/WorkerDashboard';
import RefugeeDashboard from './views/RefugeeDashboard';
import VisitorDashboard from './views/VisitorDashboard';

// Refugee Checklists
import RefugeeAdministrativeChecklist from './components/checklists/refugee/AdministrativeChecklist';
import RefugeeHousingChecklist from './components/checklists/refugee/HousingChecklist';
import RefugeeFoodChecklist from './components/checklists/refugee/FoodChecklist';
import RefugeeHealthChecklist from './components/checklists/refugee/HealthChecklist';
import RefugeeLearningChecklist from './components/checklists/refugee/LearningChecklist';
import RefugeeJobsChecklist from './components/checklists/refugee/JobsChecklist';

function App() {
  return (
    <Router>
      <AuthProvider>
        <MainLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePageFixed />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Refugee Routes */}
            <Route path="/refugee/dashboard" element={<RefugeeDashboard />} />
            <Route path="/refugee/administrative" element={<RefugeeAdministrativeChecklist />} />
            <Route path="/refugee/housing" element={<RefugeeHousingChecklist />} />
            <Route path="/refugee/food" element={<RefugeeFoodChecklist />} />
            <Route path="/refugee/health" element={<RefugeeHealthChecklist />} />
            <Route path="/refugee/learning" element={<RefugeeLearningChecklist />} />
            <Route path="/refugee/jobs" element={<RefugeeJobsChecklist />} />

            {/* Other Dashboards */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/worker/dashboard" element={<WorkerDashboard />} />
            <Route path="/visitor/dashboard" element={<VisitorDashboard />} />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </Router>
  );
}

export default App;
