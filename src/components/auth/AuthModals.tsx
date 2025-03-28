"use client";

import Snackbar from '@/components/ui/Snackbar';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';

interface AuthModalsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModals({ isOpen, onClose }: AuthModalsProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user' as const
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setShowSnackbar(false);

    try {
      if (!formData.email || !formData.email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      if (!isLogin && formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (!isLogin && formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      if (isLogin) {
        await signIn(formData.email, formData.password);
        setSnackbarMessage('Successfully signed in!');
        setSnackbarType('success');
      } else {
        const result = await signUp(
          formData.email,
          formData.password,
          formData.username || formData.email.split('@')[0],
          formData.role || 'user'
        );
        setSnackbarMessage('Registration successful! Please check your email to confirm your account.');
        setSnackbarType('success');
      }

      onClose();
      setShowSnackbar(true);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Authentication failed';
      console.error('Auth error:', error);
      setError(errorMessage);
      setSnackbarMessage(errorMessage);
      setSnackbarType('error');
      setShowSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex items-center justify-center p-4">
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
          {/* Toggle Buttons */}
          <div className="flex mb-8 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 ${
                isLogin
                  ? 'bg-white dark:bg-gray-600 shadow-md text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 ${
                !isLogin
                  ? 'bg-white dark:bg-gray-600 shadow-md text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
              }`}
            >
              Register
            </button>
          </div>

          <div className="relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 -right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Username (optional)
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white transition-colors"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white transition-colors"
                  required
                />
              </div>

              {!isLogin && (
                <>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white transition-colors"
                    >
                      <option value="user">User</option>
                      <option value="researcher">Researcher</option>
                    </select>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Snackbar
        message={snackbarMessage}
        type={snackbarType}
        show={showSnackbar}
        onClose={() => setShowSnackbar(false)}
      />
    </>
  );
}