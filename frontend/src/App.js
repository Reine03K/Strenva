import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context
import { AuthProvider } from './context/AuthContext';

// Layout
import MainLayout from './layouts/MainLayout';

// Views
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

// Dashboards
import StudentDashboard from './views/StudentDashboard';
import WorkerDashboard from './views/WorkerDashboard';
import RefugeeDashboard from './views/RefugeeDashboard';

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute';

// Job Pages
import JobListPage from './views/JobListPage';
import JobDetailPage from './views/JobDetailPage';
import CreateJobPage from './views/CreateJobPage';

// Profile Pages
import ProfilePage from './views/ProfilePage';
import EditProfilePage from './views/EditProfilePage';

// Application Pages
import ApplicationsPage from './views/ApplicationsPage';
import ApplicationDetailPage from './views/ApplicationDetailPage';

// Test Pages
import TestPage from './views/TestPage';

// Message Pages
import MessagesPage from './views/MessagesPage';
import ChatPage from './views/ChatPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <MainLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/jobs" element={<JobListPage />} />
            <Route path="/jobs/:id" element={<JobDetailPage />} />

            {/* Protected Routes */}
            <Route
              path="/student/dashboard"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/worker/dashboard"
              element={
                <ProtectedRoute allowedRoles={['workers']}>
                  <WorkerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/refugee/dashboard"
              element={
                <ProtectedRoute allowedRoles={['refugees']}>
                  <RefugeeDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jobs/create"
              element={
                <ProtectedRoute>
                  <CreateJobPage />
                </ProtectedRoute>
              }
            />

            {/* Protected Routes - Profile */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile/edit"
              element={
                <ProtectedRoute>
                  <EditProfilePage />
                </ProtectedRoute>
              }
            />

            {/* Protected Routes - Applications */}
            <Route
              path="/applications"
              element={
                <ProtectedRoute allowedRoles={['student', 'workers']}>
                  <ApplicationsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/applications/:id"
              element={
                <ProtectedRoute allowedRoles={['student', 'workers']}>
                  <ApplicationDetailPage />
                </ProtectedRoute>
              }
            />

            {/* Protected Routes - Tests */}
            <Route
              path="/tests/:id"
              element={
                <ProtectedRoute allowedRoles={['student', 'workers']}>
                  <TestPage />
                </ProtectedRoute>
              }
            />

            {/* Protected Routes - Messages */}
            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <MessagesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/messages/:userId"
              element={
                <ProtectedRoute>
                  <ChatPage />
                </ProtectedRoute>
              }
            />

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
