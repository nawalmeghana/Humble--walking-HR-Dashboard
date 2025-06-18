import React from 'react';
import { Plus, ExternalLink, FileText, Users, Calendar, MapPin } from 'lucide-react';

const AddIntern: React.FC = () => {
  const formFeatures = [
    {
      icon: FileText,
      title: 'Personal Information',
      description: 'Basic details and contact information'
    },
    {
      icon: Users,
      title: 'Department Assignment',
      description: 'Select appropriate department and role'
    },
    {
      icon: Calendar,
      title: 'Duration & Schedule',
      description: 'Set internship timeline and working hours'
    },
    {
      icon: MapPin,
      title: 'Location Preferences',
      description: 'Remote, hybrid, or on-site options'
    }
  ];

  const guidelines = [
    'Ensure all required fields are completed accurately',
    'Upload necessary documents (resume, ID, agreements)',
    'Verify contact information for communication',
    'Select appropriate department and supervisor',
    'Set realistic timeline and expectations',
    'Review all information before submission'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Add New Intern</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Use our comprehensive form to onboard new interns into the program
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Features */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Form Sections
              </h2>
              <div className="space-y-4">
                {formFeatures.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start space-x-3">
                    <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Submission Guidelines
              </h2>
              <ul className="space-y-2">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {guideline}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Google Form Embed */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-600 p-2 rounded-lg">
                      <Plus className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        New Intern Registration Form
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Complete all sections to register a new intern
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://docs.google.com/forms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Open in new tab
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative">
                {/* Google Form Iframe - Replace with your actual Google Form URL */}
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdummy-form-id/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="New Intern Registration Form"
                  className="border-none"
                >
                  Loading…
                </iframe>

                {/* Placeholder overlay when Google Form is not configured */}
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center p-8 max-w-md">
                    <Plus className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Google Form Integration
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Replace the iframe src with your actual Google Form embed URL to enable 
                      new intern registration directly from this page.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-left">
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                        src="your-google-form-embed-url"
                      </p>
                    </div>
                    <a
                      href="https://docs.google.com/forms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors duration-200"
                    >
                      Create Google Form
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-800">
          <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
            What happens after submission?
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-start space-x-3">
              <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-medium text-primary-900 dark:text-primary-100">
                  Review & Verification
                </h4>
                <p className="text-sm text-primary-700 dark:text-primary-300 mt-1">
                  HR team reviews the application and verifies all information
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-medium text-primary-900 dark:text-primary-100">
                  Assignment & Setup
                </h4>
                <p className="text-sm text-primary-700 dark:text-primary-300 mt-1">
                  Department assignment and initial setup in our systems
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-medium text-primary-900 dark:text-primary-100">
                  Welcome & Onboarding
                </h4>
                <p className="text-sm text-primary-700 dark:text-primary-300 mt-1">
                  Welcome email and onboarding process initiation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIntern;