/* NOT USING THIS PAGE ( UNUSED ) */

import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Users, Plus, FolderOpen, ArrowRight, Shield, Clock, Target } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Dashboard Analytics',
      description: 'Comprehensive insights and analytics about intern performance and progress.',
      link: '/dashboard'
    },
    {
      icon: Plus,
      title: 'Add New Interns',
      description: 'Seamlessly onboard new interns through our integrated Google Form.',
      link: '/add-intern'
    },
    {
      icon: FolderOpen,
      title: 'Intern Directory',
      description: 'Search and filter through our complete directory of current and past interns.',
      link: '/directory'
    },
    {
      icon: Users,
      title: 'Team Members',
      description: 'Meet our dedicated HR team managing the intern program.',
      link: '/members'
    }
  ];

  const stats = [
    { label: 'Active HumbleWalkers', value: '90+', icon: Users },
    { label: 'Departments', value: '8', icon: Target },
    { label: 'Success Rate', value: '95%', icon: Shield },
    { label: 'Avg Duration', value: '1 months', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Humble Walking
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-slide-in">
              HR Intern Management System
            </p>
            <p className="text-lg mb-12 text-primary-200 max-w-3xl mx-auto">
              Streamline your intern management process with our comprehensive platform. 
              Track progress, manage documentation, and foster growth in your organization.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage your intern program effectively and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description, link }) => (
            <Link
              key={title}
              to={link}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
            >
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3 w-fit mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors duration-200">
                <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
              <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Access your comprehensive HR dashboard and start managing your intern program more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Link>
              <Link
                to="/add-intern"
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 dark:bg-gray-700 dark:text-primary-400 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add New Intern
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
