import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    profileData: {}
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('profile.')) {
      const profileField = name.replace('profile.', '');
      setFormData(prev => ({
        ...prev,
        profileData: {
          ...prev.profileData,
          [profileField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear profile field errors
    if (name.startsWith('profile.')) {
      const errorKey = name;
      if (errors[errorKey]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[errorKey];
          return newErrors;
        });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    // Validate profile fields
    if (!formData.profileData.firstName) {
      newErrors['profile.firstName'] = 'First name is required';
    }

    if (!formData.profileData.lastName) {
      newErrors['profile.lastName'] = 'Last name is required';
    }

    if (!formData.profileData.city) {
      newErrors['profile.city'] = 'City is required';
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
      const { confirmPassword, ...submitData } = formData;
      const response = await api.post('/auth/register', submitData);
      const { token } = response.data;

      // Store token
      localStorage.setItem('token', token);
      
      // Redirect to login or dashboard
      navigate('/login');
    } catch (error) {
      setErrors({ 
        submit: error.response?.data?.message || 'Registration failed. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const roles = [
    { value: 'student', label: 'Student', icon: '🎓' },
    { value: 'workers', label: 'Worker', icon: '💼' },
    { value: 'refugees', label: 'Refugee', icon: '🤝' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
          <p className="mt-2 text-sm text-slate-600">
            Create your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {errors.submit && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {errors.submit}
            </div>
          )}

          {/* Role selection */}
          {(
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                I am a...
              </label>
              <div className="grid grid-cols-3 gap-3">
                {roles.map(role => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, role: role.value }))}
                    className={`p-4 rounded-lg border-2 transition flex flex-col items-center gap-2 ${
                      formData.role === role.value
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-2xl">{role.icon}</span>
                    <span className="text-xs font-medium">{role.label}</span>
                  </button>
                ))}
              </div>
              {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
            </div>
          )}

          {/* First Name */}
          <div>
            <label htmlFor="profile.firstName" className="block text-sm font-medium text-slate-700 mb-2">
              First Name
            </label>
            <input
              id="profile.firstName"
              name="profile.firstName"
              type="text"
              value={formData.profileData.firstName || ''}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors['profile.firstName'] ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="John"
            />
            {errors['profile.firstName'] && <p className="mt-1 text-sm text-red-500">{errors['profile.firstName']}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="profile.lastName" className="block text-sm font-medium text-slate-700 mb-2">
              Last Name
            </label>
            <input
              id="profile.lastName"
              name="profile.lastName"
              type="text"
              value={formData.profileData.lastName || ''}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors['profile.lastName'] ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="Doe"
            />
            {errors['profile.lastName'] && <p className="mt-1 text-sm text-red-500">{errors['profile.lastName']}</p>}
          </div>

          {/* City */}
          <div>
            <label htmlFor="profile.city" className="block text-sm font-medium text-slate-700 mb-2">
              City
            </label>
            <input
              id="profile.city"
              name="profile.city"
              type="text"
              value={formData.profileData.city || ''}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors['profile.city'] ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="Paris"
            />
            {errors['profile.city'] && <p className="mt-1 text-sm text-red-500">{errors['profile.city']}</p>}
          </div>

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
                errors.email ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
        <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.password ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
        </div>

          {/* Confirm Password */}
        <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.confirmPassword ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition"
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
