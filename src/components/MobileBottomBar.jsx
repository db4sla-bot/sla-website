import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MobileBottomBar = () => {
  const location = useLocation();
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const services = [
    { name: 'Invisible Grills', path: '/services/invisible-grills', icon: '🔒' },
    { name: 'Mosquito Mesh', path: '/services/mosquito-mesh', icon: '🦟' },
    { name: 'Cloth Hangers', path: '/services/cloth-hangers', icon: '👕' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/919885012999?text=Hello! I would like to inquire about your services.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919885012999';
  };

  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  return (
    <>
      {/* Services Popup Menu */}
      <AnimatePresence>
        {showServicesMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowServicesMenu(false)}
              className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-40 md:hidden"
            />
            
            {/* Services Menu */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed bottom-20 left-4 right-4 bg-white rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#0A647D] to-[#0d7490] text-white px-4 py-3 flex items-center justify-between">
                <h3 className="font-bold text-lg">Our Services</h3>
                <button
                  onClick={() => setShowServicesMenu(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={() => setShowServicesMenu(false)}
                    className="flex items-center gap-3 p-4 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className="font-medium text-gray-900">{service.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30 md:hidden pb-safe">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          {/* Services */}
          <button
            onClick={toggleServicesMenu}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all ${
              showServicesMenu
                ? 'bg-[#0A647D] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-xs font-medium">Services</span>
          </button>

          {/* Projects */}
          <Link
            to="/services"
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all ${
              location.pathname === '/services'
                ? 'bg-[#0A647D] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs font-medium">Projects</span>
          </Link>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all"
          >
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-xs font-medium">WhatsApp</span>
          </button>

          {/* Phone */}
          <button
            onClick={handleCall}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs font-medium">Call</span>
          </button>
        </div>
      </div>

      {/* Bottom Spacer - prevents content from being hidden behind the bottom bar */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default MobileBottomBar;
