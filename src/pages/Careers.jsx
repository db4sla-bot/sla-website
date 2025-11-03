import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const Careers = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal } = useContext(ModalContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Installation Technician',
      department: 'Operations',
      location: 'Nellore, Andhra Pradesh',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹25,000 - ₹40,000',
      description: 'We are looking for skilled installation technicians to join our growing team. The ideal candidate will have experience in installing invisible grills, mosquito mesh, and other protective solutions.',
      responsibilities: [
        'Install invisible grills, mosquito mesh, and other protection systems',
        'Conduct site visits and measurements',
        'Ensure quality installation and customer satisfaction',
        'Maintain installation equipment and tools',
        'Follow safety protocols and procedures',
        'Provide technical support to customers'
      ],
      requirements: [
        '2+ years of experience in installation or construction',
        'Knowledge of tools and safety procedures',
        'Good communication skills',
        'Ability to work at heights',
        'Valid driving license preferred',
        'Physical fitness for manual work'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance coverage',
        'Performance-based incentives',
        'Skill development training',
        'Career growth opportunities'
      ]
    },
    {
      id: 2,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Nellore, Andhra Pradesh',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹20,000 - ₹35,000',
      description: 'Join our sales team to help customers find the perfect protection solutions for their homes. We seek enthusiastic individuals with strong communication skills and a passion for customer service.',
      responsibilities: [
        'Generate leads and convert inquiries into sales',
        'Conduct product demonstrations and site visits',
        'Prepare quotations and proposals',
        'Build and maintain customer relationships',
        'Achieve monthly sales targets',
        'Follow up on customer feedback and concerns'
      ],
      requirements: [
        '1+ years of sales experience',
        'Excellent communication and presentation skills',
        'Knowledge of local market and customer behavior',
        'Proficiency in MS Office and CRM software',
        'Two-wheeler with valid license',
        'Graduate in any discipline'
      ],
      benefits: [
        'Attractive commission structure',
        'Monthly incentives and bonuses',
        'Travel allowances',
        'Health insurance',
        'Professional development training'
      ]
    },
    {
      id: 3,
      title: 'Customer Support Executive',
      department: 'Customer Service',
      location: 'Nellore, Andhra Pradesh',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹18,000 - ₹28,000',
      description: 'Provide exceptional customer service and support to our clients. Handle inquiries, complaints, and ensure customer satisfaction throughout their journey with SLA Invisible Grills.',
      responsibilities: [
        'Handle customer inquiries via phone, email, and chat',
        'Schedule appointments and site visits',
        'Process customer orders and complaints',
        'Coordinate with installation teams',
        'Maintain customer database and records',
        'Follow up on service completion and feedback'
      ],
      requirements: [
        'Excellent verbal and written communication',
        'Computer proficiency and typing skills',
        'Problem-solving and multitasking abilities',
        'Patience and empathy in customer interactions',
        'Graduate or equivalent qualification',
        'Fresh graduates welcome to apply'
      ],
      benefits: [
        'Competitive starting salary',
        'Regular training and skill development',
        'Health insurance coverage',
        'Flexible working hours',
        'Career advancement opportunities'
      ]
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Nellore, Andhra Pradesh',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₹50,000 - ₹80,000',
      description: 'Lead and manage large-scale installation projects from planning to completion. Ensure timely delivery, quality standards, and customer satisfaction while coordinating multiple teams.',
      responsibilities: [
        'Plan and execute large installation projects',
        'Coordinate between sales, installation, and customer service teams',
        'Monitor project timelines and budget',
        'Ensure quality standards and safety compliance',
        'Manage vendor relationships and procurement',
        'Prepare project reports and documentation'
      ],
      requirements: [
        '5+ years of project management experience',
        'Engineering or MBA qualification preferred',
        'Knowledge of construction and installation processes',
        'Strong leadership and team management skills',
        'PMP certification is a plus',
        'Proficiency in project management tools'
      ],
      benefits: [
        'Executive-level compensation package',
        'Performance-linked incentives',
        'Health and life insurance',
        'Company vehicle provision',
        'Leadership development programs'
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Market-competitive compensation with regular increments'
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for employees and family'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Continuous skill development and training programs'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear career progression paths and advancement opportunities'
    },
    {
      icon: '🎉',
      title: 'Work-Life Balance',
      description: 'Flexible working hours and employee-friendly policies'
    },
    {
      icon: '🏆',
      title: 'Recognition Programs',
      description: 'Performance-based rewards and recognition initiatives'
    }
  ];

  const handleApplicationChange = (e) => {
    const { name, value, type, files } = e.target;
    setApplicationForm({
      ...applicationForm,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    // Handle application submission
    alert('Application submitted successfully! We will contact you soon.');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
    setSelectedJob(null);
  };

  return (
    <div className="animate-fade-in">
      {/* Site Visit Modal */}
      <SiteVisitModal isOpen={isSiteVisitModalOpen} onClose={closeSiteVisitModal} />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-32 gradient-bg">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-shadow">
              Join Our Team
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Build your career with SLA Invisible Grills. We're looking for passionate individuals to join our growing team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Work With Us?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              At SLA Invisible Grills, we believe in nurturing talent and providing an environment where you can grow and excel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center card-hover"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Current Openings
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Explore exciting career opportunities with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 card-hover"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-[var(--primary-color)] font-medium text-sm sm:text-base">{job.department}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {job.type}
                  </span>
                </div>

                <div className="space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    {job.experience} experience
                  </div>
                  <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    {job.salary}/month
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{job.description}</p>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-[var(--primary-color)] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium text-sm sm:text-base cursor-pointer"
                >
                  View Details & Apply
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
          >
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                  <p className="text-[var(--primary-color)] font-medium text-sm sm:text-base">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Job Details */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Job Description</h3>
                    <p className="text-sm sm:text-base text-gray-600">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Responsibilities</h3>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-3 sm:w-4 h-3 sm:h-4 text-[var(--primary-color)] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-xs sm:text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-3 sm:w-4 h-3 sm:h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-xs sm:text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedJob.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for this Position</h3>
                  <form onSubmit={handleApplicationSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={applicationForm.name}
                        onChange={handleApplicationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={applicationForm.email}
                        onChange={handleApplicationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={applicationForm.phone}
                        onChange={handleApplicationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience
                      </label>
                      <select
                        name="experience"
                        value={applicationForm.experience}
                        onChange={handleApplicationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume *
                      </label>
                      <input
                        type="file"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleApplicationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter
                      </label>
                      <textarea
                        name="coverLetter"
                        rows={3}
                        value={applicationForm.coverLetter}
                        onChange={handleApplicationChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent resize-none"
                        placeholder="Tell us why you're interested in this position..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[var(--primary-color)] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Don't See a Perfect Match?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:slainvisiblegrills@gmail.com"
                className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Your Resume
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
              >
                Contact HR
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;