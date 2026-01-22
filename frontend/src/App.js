import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context
import { AuthProvider } from './context/AuthContext';

// Layout
import MainLayout from './layouts/MainLayout';

// Views
import HomePageFixed from './views/HomePageFixed';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';

// Dashboards from pages
import StudentDashboard from './pages/StudentDashboard';
import WorkerDashboard from './pages/WorkerDashboard';
import RefugeeDashboard from './pages/RefugeeDashboard';
import VisitorDashboard from './pages/VisitorDashboard';

// Procedures pages
import AdministrativePage from './pages/AdministrativePage';
import HousingPage from './pages/HousingPage';
import GroceriesPage from './pages/GroceriesPage';
import JobsPage from './pages/JobsPage';
import LeisurePage from './pages/LeisurePage';
import TransportPage from './pages/TransportPage';
import TransportCityDetail from './pages/TransportCityDetail';
import ProcedureDetail from './pages/ProcedureDetail';

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
            {/* Home & Auth */}
            <Route path="/" element={<HomePageFixed />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Dashboards */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/worker/dashboard" element={<WorkerDashboard />} />
            <Route path="/refugee/dashboard" element={<RefugeeDashboard />} />
            <Route path="/visitor/dashboard" element={<VisitorDashboard />} />

            {/* Generic Procedures Pages */}
            <Route path="/administrative" element={<AdministrativePage />} />
            <Route path="/housing" element={<HousingPage />} />
            <Route path="/groceries" element={<GroceriesPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/leisure" element={<LeisurePage />} />
            <Route path="/transport" element={<TransportPage />} />
            <Route path="/transport/:city" element={<TransportCityDetail />} />

            {/* Student Routes */}
            <Route path="/student/procedures/administrative" element={<ProcedureDetail />} />
            <Route path="/student/procedures/housing" element={<ProcedureDetail />} />
            <Route path="/student/procedures/jobs" element={<ProcedureDetail />} />
            <Route path="/student/procedures/benefits" element={<ProcedureDetail />} />
            <Route path="/student/procedures/food" element={<ProcedureDetail />} />
            <Route path="/student/procedures/leisure" element={<ProcedureDetail />} />
            <Route path="/student/procedures/more" element={<ProcedureDetail />} />

            {/* Worker Routes */}
            <Route path="/worker/procedures/administrative" element={<ProcedureDetail />} />
            <Route path="/worker/procedures/housing" element={<ProcedureDetail />} />
            <Route path="/worker/procedures/benefits" element={<ProcedureDetail />} />
            <Route path="/worker/procedures/food" element={<ProcedureDetail />} />
            <Route path="/worker/procedures/leisure" element={<ProcedureDetail />} />
            <Route path="/worker/procedures/more" element={<ProcedureDetail />} />

            {/* Visitor Routes */}
            <Route path="/visitor/procedures/temporary-housing" element={<ProcedureDetail />} />
            <Route path="/visitor/procedures/restaurants" element={<ProcedureDetail />} />
            <Route path="/visitor/procedures/administrative" element={<ProcedureDetail />} />
            <Route path="/visitor/procedures/leisure" element={<ProcedureDetail />} />

            {/* Refugee Checklists */}
            <Route path="/refugee/administrative" element={<RefugeeAdministrativeChecklist />} />
            <Route path="/refugee/housing" element={<RefugeeHousingChecklist />} />
            <Route path="/refugee/food" element={<RefugeeFoodChecklist />} />
            <Route path="/refugee/health" element={<RefugeeHealthChecklist />} />
            <Route path="/refugee/learning" element={<RefugeeLearningChecklist />} />
            <Route path="/refugee/jobs" element={<RefugeeJobsChecklist />} />

            {/* Refugee Procedures Routes (aliases for dashboard navigation) */}
            <Route path="/refugee/procedures/administrative" element={<RefugeeAdministrativeChecklist />} />
            <Route path="/refugee/procedures/housing" element={<RefugeeHousingChecklist />} />
            <Route path="/refugee/procedures/food" element={<RefugeeFoodChecklist />} />
            <Route path="/refugee/procedures/health" element={<RefugeeHealthChecklist />} />
            <Route path="/refugee/procedures/learning" element={<RefugeeLearningChecklist />} />
            <Route path="/refugee/procedures/jobs" element={<RefugeeJobsChecklist />} />

            {/* Legacy routes for compatibility */}
            <Route path="/demo/refugee-administrative" element={<RefugeeAdministrativeChecklist />} />
            <Route path="/demo/refugee-housing" element={<RefugeeHousingChecklist />} />
            <Route path="/demo/refugee-food" element={<RefugeeFoodChecklist />} />
            <Route path="/demo/refugee-health" element={<RefugeeHealthChecklist />} />
            <Route path="/demo/refugee-learning" element={<RefugeeLearningChecklist />} />
            <Route path="/demo/refugee-jobs" element={<RefugeeJobsChecklist />} />

            {/* Generic procedure detail route */}
            <Route path="/procedure/:id" element={<ProcedureDetail />} />

            {/* Fallback */}
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
