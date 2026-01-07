import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const Contact = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Invisible Grills',
    'Mosquito Mesh',
    'Cloth Hangers',
    'Multiple Services',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
              Contact Us
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to protect your home? Get in touch for a free consultation and personalized quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quotation.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-800 font-medium">
                      Thank you! We'll contact you soon with your quote.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project requirements, property details, and preferred installation timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--primary-color)] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 sm:h-5 w-4 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
                  We're here to help you find the perfect protection solution for your home. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Phone</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Call us for immediate assistance</p>
                      <a href="tel:+919885012999" className="text-[var(--primary-color)] font-medium hover:underline text-sm sm:text-base cursor-pointer">
                        +91 9885 012 999
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Email</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Send us your detailed requirements</p>
                      <a href="mailto:slainvisiblegrill@gmail.com" className="text-[var(--primary-color)] font-medium hover:underline text-sm sm:text-base cursor-pointer">
                        slainvisiblegrill@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Address</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Visit our office or schedule a site visit</p>
                      <p className="text-sm sm:text-base text-gray-800">
                        Sapthagiri Colony,<br />
                        Mini Bypass, Nellore-4
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600 mb-2">We're available when you need us</p>
                      <div className="text-gray-800 space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: 10:00 AM - 5:00 PM</p>
                        <p className="text-sm text-gray-600 mt-2">Emergency service available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              {/* <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919885012999"
                    className="flex items-center justify-between bg-white p-4 rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <span className="font-medium text-gray-900">📞 Call for Immediate Support</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919885012999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white p-4 rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <span className="font-medium text-gray-900">💬 WhatsApp Us</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="#schedule"
                    className="flex items-center justify-between bg-white p-4 rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <span className="font-medium text-gray-900">📅 Schedule Site Visit</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">Located in Nellore for easy accessibility</p>
          </motion.div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600 mb-4">
                Sapthagiri Colony, Mini Bypass, Nellore-4
              </p>
              <button className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;