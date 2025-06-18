import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun, LogOut, Users, Home, Plus, FolderOpen, BarChart3, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!currentUser) return null;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/add-intern', icon: Plus, label: 'Add Intern' },
    { path: '/directory', icon: FolderOpen, label: 'Directory' },
    { path: '/members', icon: Users, label: 'Members' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <User className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Humble Walking
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === path
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* User Info */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {currentUser.displayName || 'Yash Shah'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {currentUser.email}
                </p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === path
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <Icon className="h-5 w-5 mr-3" />
                {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;