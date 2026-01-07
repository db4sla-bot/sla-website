import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalContext } from '../App';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const { openSiteVisitModal } = useContext(ModalContext);

  const services = [
    { name: 'Invisible Grills', path: '/services/invisible-grills', icon: '🔒', desc: 'Premium safety grills' },
    { name: 'Mosquito Mesh', path: '/services/mosquito-mesh', icon: '🦟', desc: 'Insect protection' },
    { name: 'Cloth Hangers', path: '/services/cloth-hangers', icon: '👕', desc: 'Drying solutions' }
  ];

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' }
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img style={{width: '266px', height: '64px'}}
              src="/Logo.png"
              alt="SLA Invisible Grills Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="relative"
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors duration-200 relative cursor-pointer flex items-center ${
                        isActive(item.path)
                          ? 'text-[var(--primary-color)]'
                          : 'text-gray-700 hover:text-[var(--primary-color)]'
                      }`}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {isActive(item.path) && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-color)]"
                          layoutId="activeTab"
                          initial={false}
                        />
                      )}
                    </Link>
                    
                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                          <div className="p-2">
                            {services.map((service, index) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <span className="text-2xl mr-3 mt-0.5">{service.icon}</span>
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-900 group-hover:text-[var(--primary-color)] transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">{service.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="bg-gray-50 p-3 border-t">
                            <Link
                              to="/services"
                              className="text-sm text-[var(--primary-color)] font-medium hover:underline"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 relative cursor-pointer ${
                      isActive(item.path)
                        ? 'text-[var(--primary-color)]'
                        : 'text-gray-700 hover:text-[var(--primary-color)]'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary-color)]"
                        layoutId="activeTab"
                        initial={false}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
            <button
              onClick={openSiteVisitModal}
              className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 text-sm font-medium cursor-pointer"
            >
              Free Site Visit
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[var(--primary-color)] focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Sliding Menu from Right */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto"
              >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <img 
                    src="/Logo.png" 
                    alt="SLA Invisible Grills" 
                    className="h-10 w-auto"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-gray-700 hover:text-[var(--primary-color)] focus:outline-none cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Content */}
                <nav className="p-4 space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                              isActive(item.path)
                                ? 'bg-[var(--primary-color)] text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span>{item.name}</span>
                            <svg 
                              className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {/* Mobile Services Accordion */}
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-2 mt-2 space-y-1 overflow-hidden"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.path}
                                    to={service.path}
                                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsMobileServicesOpen(false);
                                    }}
                                  >
                                    <span className="text-2xl mr-3">{service.icon}</span>
                                    <div>
                                      <div className="font-medium text-gray-900 text-sm">{service.name}</div>
                                      <div className="text-xs text-gray-500">{service.desc}</div>
                                    </div>
                                  </Link>
                                ))}
                                <Link
                                  to="/services"
                                  className="block p-3 text-sm text-[var(--primary-color)] font-medium hover:bg-gray-50 rounded-lg"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                >
                                  View All Services →
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                            isActive(item.path)
                              ? 'bg-[var(--primary-color)] text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      openSiteVisitModal();
                    }}
                    className="w-full mt-6 px-4 py-3 bg-[var(--primary-color)] text-white text-center rounded-lg hover:bg-opacity-90 transition-all duration-200 text-base font-medium cursor-pointer"
                  >
                    Free Site Visit
                  </button>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;