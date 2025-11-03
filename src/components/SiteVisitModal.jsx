import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

const SiteVisitModal = ({ isOpen, onClose }) => {
  console.log('SiteVisitModal rendered with isOpen:', isOpen);
  
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    city: '',
    lookingFor: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const services = [
    'Invisible Grills',
    'Mosquito Mesh',
    'Cloth Hangers',
    'Artificial Grass',
    'Bird Spikes',
    'Multiple Services',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, 'freeSiteVisitBookings'), {
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        city: formData.city,
        lookingFor: formData.lookingFor,
        createdAt: serverTimestamp(),
        status: 'pending',
        source: 'website'
      });
      
      console.log('Document written with ID: ', docRef.id);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Clear form and close modal after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          mobileNumber: '',
          city: '',
          lookingFor: ''
        });
        setSubmitStatus(null);
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error adding document: ', error);
      setIsSubmitting(false);
      setSubmitError('Failed to submit booking. Please try again or call us directly.');
      
      // Clear error status after 5 seconds
      setTimeout(() => {
        setSubmitError(null);
      }, 5000);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={handleBackdropClick}
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
            <div className="bg-gradient-to-r from-[var(--primary-color)] to-blue-600 px-6 py-2 rounded-t-2xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center text-white">
                <div className="text-2xl mb-2">🏠</div>
                <h2 className="text-xl font-bold mb-1">Free Site Visit</h2>
                <p className="text-blue-100 text-sm">Get expert consultation at your doorstep</p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you {formData.fullName}! Your site visit request has been saved successfully.
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll contact you at {formData.mobileNumber} within 24 hours to schedule your free site visit in {formData.city}.
                  </p>
                </motion.div>
              ) : (
                <>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                    >
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">⚠️</div>
                        <div>
                          <h4 className="text-red-800 font-semibold mb-1">Booking Failed</h4>
                          <p className="text-red-600 text-sm">{submitError}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Your Free Site Visit</h3>
                    <p className="text-sm text-gray-600">
                      Fill out the form below and our expert will visit your location for free consultation and measurement.
                    </p>
                  </div> */}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your city"
                      />
                    </div>

                    {/* Looking For */}
                    <div>
                      <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700 mb-1">
                        Looking For *
                      </label>
                      <select
                        id="lookingFor"
                        name="lookingFor"
                        required
                        value={formData.lookingFor}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--primary-color)] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer mt-6"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving Booking...
                        </div>
                      ) : (
                        'Book Free Site Visit'
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
  );
};

export default SiteVisitModal;