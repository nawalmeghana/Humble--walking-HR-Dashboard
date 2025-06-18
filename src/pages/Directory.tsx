import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, Mail, Phone, Calendar, User, GraduationCap, Award } from 'lucide-react';
import internsData from '../data/interns.json';

interface Intern {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  startDate: string;
  endDate: string;
  counselor: string;
  status: string;
  phone: string;
  university: string;
  gpa: string;
  skills: string[];
}

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedCounselor, setSelectedCounselor] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const interns: Intern[] = internsData;

  const departments = [...new Set(interns.map(intern => intern.department))];
  const statuses = [...new Set(interns.map(intern => intern.status))];
  const counselors = [...new Set(interns.map(intern => intern.counselor))];

  const filteredAndSortedInterns = useMemo(() => {
    let filtered = interns.filter(intern => {
      const matchesSearch = intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           intern.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           intern.position.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All' || intern.department === selectedDepartment;
      const matchesStatus = selectedStatus === 'All' || intern.status === selectedStatus;
      const matchesCounselor = selectedCounselor === 'All' || intern.counselor === selectedCounselor;

      return matchesSearch && matchesDepartment && matchesStatus && matchesCounselor;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'department':
          return a.department.localeCompare(b.department);
        case 'startDate':
          return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        case 'status':
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

    return filtered;
  }, [interns, searchTerm, selectedDepartment, selectedStatus, selectedCounselor, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'On Hold':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Intern Directory</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Comprehensive directory of all interns with search and filtering capabilities
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative xl:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search interns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Department Filter */}
            <div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="All">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="All">All Statuses</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            {/* Counselor Filter */}
            <div>
              <select
                value={selectedCounselor}
                onChange={(e) => setSelectedCounselor(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="All">All Counselors</option>
                {counselors.map(counselor => (
                  <option key={counselor} value={counselor}>{counselor}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="name">Sort by Name</option>
                <option value="department">Sort by Department</option>
                <option value="startDate">Sort by Start Date</option>
                <option value="status">Sort by Status</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Filter className="h-4 w-4" />
              <span>Showing {filteredAndSortedInterns.length} of {interns.length} interns</span>
            </div>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedInterns.map((intern) => (
            <div
              key={intern.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded-full">
                    <User className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {intern.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {intern.position}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(intern.status)}`}>
                  {intern.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a
                    href={`mailto:${intern.email}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    {intern.email}
                  </a>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a
                    href={`tel:${intern.phone}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {intern.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {formatDate(intern.startDate)} - {formatDate(intern.endDate)}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {intern.university} (GPA: {intern.gpa})
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Award className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Counselor: {intern.counselor}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  SKILLS
                </p>
                <div className="flex flex-wrap gap-1">
                  {intern.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {intern.skills.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                      +{intern.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Department Badge */}
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400">
                  {intern.department}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedInterns.length === 0 && (
          <div className="text-center py-12">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No interns found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;