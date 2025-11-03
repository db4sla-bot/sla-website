import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const NotFound = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal } = useContext(ModalContext);

  return (
    <>
      <SiteVisitModal isOpen={isSiteVisitModalOpen} onClose={closeSiteVisitModal} />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl font-bold text-primary-500 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Go Home
            </Link>
            <Link
              to="/services"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              View Services
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/services"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <h3 className="font-medium text-gray-900 mb-1">Services</h3>
              <p className="text-sm text-gray-600">Our protection solutions</p>
            </Link>
            <Link
              to="/contact"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <h3 className="font-medium text-gray-900 mb-1">Contact</h3>
              <p className="text-sm text-gray-600">Get in touch with us</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default NotFound;