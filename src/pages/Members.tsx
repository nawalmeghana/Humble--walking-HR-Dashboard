import React, { useState, useMemo } from 'react';
import { Mail, Phone, MapPin, Calendar, Award, Users, Target, Briefcase, Search } from 'lucide-react';

const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const teamMembers = [
    {
      id: 1,
      name: 'Jaytee',
      role: 'Head of HR',
      email: 'jaytee@humblewalking.com',
      phone: '+1-555-0201',
      location: 'San Francisco, CA',
      joinDate: '2020-03-15',
      bio: 'Leading our HR initiatives with over 8 years of experience in talent management and organizational development.',
      achievements: [
        'Implemented new intern program that increased retention by 40%',
        'Streamlined recruitment process reducing time-to-hire by 30%',
        'Led diversity and inclusion initiatives across the organization'
      ],
      responsibilities: [
        'Strategic HR planning and policy development',
        'Intern program oversight and management',
        'Performance evaluation and career development',
        'Team leadership and mentoring'
      ],
      stats: { internsManaged: 120, projectsLed: 15, yearsExperience: 8 }
    },
    {
      id: 2,
      name: 'Advait',
      role: 'Lead for Frontend',
      email: 'advait@humblewalking.com',
      phone: '+1-555-0202',
      location: 'San Francisco, CA',
      joinDate: '2021-01-20',
      bio: 'Technical lead specializing in modern frontend technologies and mentoring the next generation of developers.',
      achievements: [
        'Architected the company\'s design system used across all products',
        'Mentored 25+ frontend developer interns',
        'Led migration to modern React and TypeScript stack'
      ],
      responsibilities: [
        'Frontend architecture and technical decisions',
        'Code review and quality assurance',
        'Intern technical mentoring and training',
        'Technology stack evaluation and adoption'
      ],
      stats: { internsManaged: 45, projectsLed: 22, yearsExperience: 6 }
    },
    {
      id: 3,
      name: 'Ish',
      role: 'General Assistant Manager',
      email: 'ish@humblewalking.com',
      phone: '+1-555-0203',
      location: 'San Francisco, CA',
      joinDate: '2021-08-10',
      bio: 'Versatile team member supporting operations across multiple departments with focus on process optimization.',
      achievements: [
        'Optimized intern onboarding process reducing setup time by 50%',
        'Implemented cross-departmental collaboration tools',
        'Managed logistics for company-wide intern events'
      ],
      responsibilities: [
        'Cross-departmental project coordination',
        'Operational efficiency and process improvement',
        'Intern logistics and administrative support',
        'Event planning and program management'
      ],
      stats: { internsManaged: 35, projectsLed: 18, yearsExperience: 4 }
    }
  ];

  const filteredMembers = useMemo(() => {
    return teamMembers.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, teamMembers]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Meet the dedicated professionals who make our intern management program successful. 
            Our team brings together expertise from HR, technology, and operations to create 
            an exceptional internship experience.
          </p>
        </div>

        <div className="mb-10 max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="space-y-8">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:flex">
                <div className="lg:w-1/3 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-800">
                  <div className="text-center">
                    <div className="bg-primary-600 text-white rounded-full w-24 h-24 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {getInitials(member.name)}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {member.bio}
                    </p>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <a href={`mailto:${member.email}`} className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <a href={`tel:${member.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm">
                          {member.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {member.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          Joined {formatDate(member.joinDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 p-8">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {member.stats.internsManaged}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Interns Managed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {member.stats.projectsLed}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Projects Led
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {member.stats.yearsExperience}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Years Experience
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <Briefcase className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Key Responsibilities
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {member.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <Award className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Key Achievements
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
