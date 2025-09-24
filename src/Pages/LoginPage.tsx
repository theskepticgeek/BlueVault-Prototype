import React, { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'admin' | 'contributor'>((localStorage.getItem('bv_role') as any) || 'contributor');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const navigate = useNavigate();
  const { login, authenticated } = usePrivy();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Persist role on change
  useEffect(() => {
    localStorage.setItem('bv_role', role);
  }, [role]);

  // If already authenticated, route based on stored role
  useEffect(() => {
    if (authenticated) {
      const stored = (localStorage.getItem('bv_role') as 'admin' | 'contributor') || role;
      if (stored === 'admin') navigate('/admin', { replace: true });
      else navigate('/contributor', { replace: true });
    }
  }, [authenticated, role, navigate]);

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Left side - Video Background */}
      <div className="relative w-full lg:w-2/3 h-1/2 lg:h-full flex flex-col">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="text-center text-white px-4 lg:px-8">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            From Coasts to Carbon Credits
            </h1>
            <p className="text-lg lg:text-xl opacity-90">
              Transparent MRV for a Sustainable Tomorrow
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login/Register Form */}
      <div className="w-full lg:w-1/3 h-1/2 lg:h-full bg-gray-50 flex items-center justify-center px-8 py-8 lg:py-0">
        <div className="w-full max-w-sm">
          {/* Brand */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-2">TeamBigDev6</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'BlueVault' : 'Register'}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? 'Welcome Back! Please enter your details.' 
                : 'Create your account to get started.'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Username Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>

            {/* Confirm Password Field (for register) */}
            {!isLogin && (
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
            )}

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Remember me for 30 days
                </span>
              </label>
              {isLogin && (
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Forgot Password?
                </a>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {isLogin ? 'Log in' : 'Register'}
            </button>

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">or</span>
              </div>
            </div>

            {/* Role Selection + Google/Web3 Sign In via Privy */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Continue as:</span>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-1 text-sm text-gray-700" onClick={() => setRole('contributor')}>
                    <input
                      type="radio"
                      name="role"
                      value="contributor"
                      checked={role === 'contributor'}
                      onChange={() => setRole('contributor')}
                    />
                    Contributor
                  </label>
                  <label className="flex items-center gap-1 text-sm text-gray-700" onClick={() => setRole('admin')}>
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={role === 'admin'}
                      onChange={() => setRole('admin')}
                    />
                    Admin
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={() => { localStorage.setItem('bv_role', role); login(); }}
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google / Web3 (Privy)
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-900 font-medium hover:underline"
              >
                {isLogin ? 'Sign up for free' : 'Sign in'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


