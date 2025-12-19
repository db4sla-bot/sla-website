import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const Careers = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal } = useContext(ModalContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    mobileNumber: '',
    city: '',
    address: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Telecaller',
      department: 'Sales',
      location: 'Nellore, Andhra Pradesh',
      type: 'Full-time',
      description: 'We are looking for dedicated telecallers to join our team for lead generation and customer support.',
      responsibilities: [
        'MS Excel proficiency for data management',
        'Soft spoken communication skills',
        'Flexible timing availability'
      ]
    },
    {
      id: 2,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Nellore, Andhra Pradesh',
      type: 'Full-time',
      description: 'Join our sales team to drive business growth and help customers find the perfect protection solutions.',
      responsibilities: [
        'Communication skills for customer interaction',
        'Negotiation skills for deal closure',
        'Interest in sales and business development'
      ]
    },
    {
      id: 3,
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Nellore, Andhra Pradesh',
      type: 'Full-time',
      description: 'Be part of our marketing team to promote our services and expand market reach.',
      responsibilities: [
        'Communication skills for marketing campaigns',
        'Negotiation skills for partnerships',
        'Interest in marketing and brand promotion'
      ]
    },
    {
      id: 4,
      title: 'Technician',
      department: 'Operations',
      location: 'Nellore, Andhra Pradesh',
      type: 'Full-time',
      description: 'We need skilled technicians for installation and maintenance work.',
      responsibilities: [
        'Drilling work expertise',
        'Installation and maintenance tasks',
        'Quality workmanship delivery'
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Attractive compensation packages with performance-based incentives'
    },
    {
      icon: '🏥',
      title: 'Health Benefits',
      description: 'Comprehensive health insurance coverage for you and your family'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Continuous training programs and skill development opportunities'
    },
    {
      icon: '⏰',
      title: 'Work-Life Balance',
      description: 'Flexible working hours and supportive work environment'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear career progression paths and leadership development'
    },
    {
      icon: '🏆',
      title: 'Recognition Programs',
      description: 'Performance-based rewards and recognition initiatives'
    }
  ];

  const handleApplicationChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm({
      ...applicationForm,
      [name]: value
    });
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, 'jobRequests'), {
        fullName: applicationForm.fullName,
        mobileNumber: applicationForm.mobileNumber,
        city: applicationForm.city,
        address: applicationForm.address,
        position: selectedJob.title,
        department: selectedJob.department,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      
      console.log('Job application submitted with ID: ', docRef.id);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Clear form and close modal after success
      setTimeout(() => {
        setApplicationForm({
          fullName: '',
          mobileNumber: '',
          city: '',
          address: ''
        });
        setSubmitStatus(null);
        setSelectedJob(null);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting application: ', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Clear error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Join Our Growing Team
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Build your career with SLA Invisible Grills and be part of our mission to provide premium protection solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#openings"
                className="bg-white text-[var(--primary-color)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                View Open Positions
              </a>
              <a
                href="#benefits"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Learn About Benefits
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Benefits */}
      <section id="benefits" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Work With Us?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where our team members can thrive and grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
      <section id="openings" className="py-12 sm:py-16 lg:py-24">
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
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-[var(--primary-color)] font-medium text-sm">{job.department}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Skills:</h4>
                  <ul className="space-y-1">
                    {job.responsibilities.slice(0, 2).map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-3 h-3 text-[var(--primary-color)] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-xs">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    📍 {job.location}
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[var(--primary-color)] to-blue-600 px-6 py-4 rounded-t-2xl relative">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="text-center text-white">
                  <div className="text-2xl mb-2">💼</div>
                  <h2 className="text-xl font-bold mb-1">{selectedJob.title}</h2>
                  <p className="text-blue-100 text-sm">{selectedJob.department} • {selectedJob.location}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you {applicationForm.fullName}! Your application for {selectedJob.title} has been submitted successfully.
                    </p>
                    <p className="text-sm text-gray-500">
                      We'll review your application and contact you at {applicationForm.mobileNumber} if you're selected for the next round.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                      >
                        <div className="flex items-center">
                          <div className="text-2xl mr-3">⚠️</div>
                          <div>
                            <h4 className="font-medium text-red-800">Submission Failed</h4>
                            <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Application Form */}
                    <form onSubmit={handleApplicationSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={applicationForm.fullName}
                          onChange={handleApplicationChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          required
                          value={applicationForm.mobileNumber}
                          onChange={handleApplicationChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                          placeholder="Enter mobile number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={applicationForm.city}
                          onChange={handleApplicationChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                          placeholder="Enter your city"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address *
                        </label>
                        <textarea
                          name="address"
                          required
                          rows={3}
                          value={applicationForm.address}
                          onChange={handleApplicationChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent resize-none"
                          placeholder="Enter your complete address"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--primary-color)] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </div>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Don't See a Perfect Match Section */}
      <section className="py-12 sm:py-16 lg:py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Don't See a Perfect Match?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:slainvisiblegrill@gmail.com"
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