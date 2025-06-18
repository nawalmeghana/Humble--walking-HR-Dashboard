import React from 'react';
import { Users, TrendingUp, Calendar, Award, BarChart2, PieChart, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Interns',
      value: '45',
      change: '+5',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Projects',
      value: '23',
      change: '+3',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'This Month',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      title: 'Completion Rate',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: Award,
      color: 'bg-orange-500'
    }
  ];

  const recentActivity = [
    { action: 'New intern onboarded', name: 'Sarah Johnson', time: '2 hours ago', type: 'success' },
    { action: 'Project completed', name: 'Mike Chen', time: '4 hours ago', type: 'success' },
    { action: 'Performance review', name: 'Emma Davis', time: '1 day ago', type: 'info' },
    { action: 'Department transfer', name: 'Alex Wilson', time: '2 days ago', type: 'warning' },
    { action: 'Internship ended', name: 'James Brown', time: '3 days ago', type: 'neutral' }
  ];

  const departmentData = [
    { name: 'Engineering', count: 15, percentage: 33 },
    { name: 'Marketing', count: 8, percentage: 18 },
    { name: 'Design', count: 7, percentage: 16 },
    { name: 'Sales', count: 6, percentage: 13 },
    { name: 'HR', count: 5, percentage: 11 },
    { name: 'Finance', count: 4, percentage: 9 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Overview of your intern management system
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map(({ title, value, change, changeType, icon: Icon, color }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {title}
                  </p>
                  <div className="flex items-center mt-2">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {value}
                    </p>
                    <span
                      className={`ml-2 text-sm font-medium ${
                        changeType === 'positive'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {change}
                    </span>
                  </div>
                </div>
                <div className={`${color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Department Distribution */}
          <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <PieChart className="h-5 w-5 text-primary-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Department Distribution
              </h2>
            </div>
            <div className="space-y-4">
              {departmentData.map(({ name, count, percentage }) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <div className="text-sm font-medium text-gray-900 dark:text-white min-w-0 flex-1">
                      {name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {count}
                    </div>
                  </div>
                  <div className="ml-4 flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                      {percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Activity className="h-5 w-5 text-primary-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </h2>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <div
                    className={`w-2 h-2 rounded-full mr-4 ${
                      activity.type === 'success'
                        ? 'bg-green-500'
                        : activity.type === 'warning'
                        ? 'bg-yellow-500'
                        : activity.type === 'info'
                        ? 'bg-blue-500'
                        : 'bg-gray-400'
                    }`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-white">
                      <span className="font-medium">{activity.action}</span>
                      {' - '}
                      <span className="text-primary-600 dark:text-primary-400">
                        {activity.name}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Power BI Integration */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <BarChart2 className="h-5 w-5 text-primary-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Power BI Analytics Dashboard
            </h2>
          </div>
          <div className="relative">
            <iframe
              title="PowerBI Dashboard"
              width="100%"
              height="600px"
              src={import.meta.env.VITE_POWERBI_EMBED_URL || "https://app.powerbi.com/view?r=YOUR_PUBLIC_LINK"}
              frameBorder="0"
              allowFullScreen
              className="rounded-lg border border-gray-200 dark:border-gray-600"
            ></iframe>
            {!import.meta.env.VITE_POWERBI_EMBED_URL && (
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <BarChart2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Power BI Dashboard
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    Configure your Power BI embed URL in the environment variables to display your analytics dashboard here.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Set VITE_POWERBI_EMBED_URL in your .env file
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;