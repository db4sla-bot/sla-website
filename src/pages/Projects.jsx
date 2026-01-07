import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('invisible-grills');

  const projectData = {
    'invisible-grills': {
      title: 'Invisible Grills',
      icon: '🔒',
      images: [
        { id: 1, url: 'https://ik.imagekit.io/67x2srjsy/Website%20Images/Invisible%20Grills/1.jpg', title: 'Balcony Installation' },
        { id: 2, url: 'https://ik.imagekit.io/67x2srjsy/Website%20Images/Invisible%20Grills/2.jpg', title: 'Window Protection' },
        { id: 3, url: 'https://ik.imagekit.io/67x2srjsy/Website%20Images/Invisible%20Grills/3.jpg', title: 'Terrace Safety' },
        { id: 5, url: 'https://ik.imagekit.io/67x2srjsy/Website%20Images/Invisible%20Grills/5.jpg', title: 'High Rise Building' },
      ]
    },
    'mosquito-mesh': {
      title: 'Mosquito Mesh',
      icon: '🦟',
      images: [
        { id: 7, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Pleated%20Mosquito%20Mesh.png?updatedAt=1764586406547', title: 'Pleated Mesh' },
        { id: 8, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mosquito%20Mesh%20For%20Windows.png?updatedAt=1764586406639', title: 'Window Mesh' },
        { id: 9, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Pleated%20Mosquito%20Mesh.png?updatedAt=1764586406547', title: 'Door Protection' },
        { id: 10, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mosquito%20Mesh%20For%20Windows.png?updatedAt=1764586406639', title: 'Balcony Mesh' },
        { id: 11, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Pleated%20Mosquito%20Mesh.png?updatedAt=1764586406547', title: 'Sliding Mesh' },
      ]
    },
    'cloth-hangers': {
      title: 'Cloth Hangers',
      icon: '👕',
      images: [
        { id: 12, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Ceiling%20Cloth%20Hangers.png?updatedAt=1764586423550', title: 'Ceiling Hanger' },
        { id: 13, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Wall%20Mounted%20Cloth%20Hangers.png?updatedAt=1764586423685', title: 'Wall Mounted' },
        { id: 14, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Ceiling%20Cloth%20Hangers.png?updatedAt=1764586423550', title: 'Balcony Setup' },
        { id: 15, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Wall%20Mounted%20Cloth%20Hangers.png?updatedAt=1764586423685', title: 'Utility Area' },
        { id: 16, url: 'https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Ceiling%20Cloth%20Hangers.png?updatedAt=1764586423550', title: 'Terrace Solution' },
      ]
    }
  };

  const tabs = [
    { id: 'invisible-grills', name: 'Invisible Grills', icon: '🔒' },
    { id: 'mosquito-mesh', name: 'Mosquito Mesh', icon: '🦟' },
    { id: 'cloth-hangers', name: 'Cloth Hangers', icon: '👕' }
  ];

  const currentImages = projectData[activeTab].images;

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#0A647D] to-[#0d7490]">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our Projects
            </h1>
            <p className="text-lg sm:text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Explore our completed projects and see the quality of our work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white border-b sticky top-16 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#0A647D] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg sm:text-xl">{tab.icon}</span>
                <span className="text-sm sm:text-base">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery - Pinterest/Masonry Layout */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              {currentImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="break-inside-avoid mb-4"
                >
                  <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover Overlay with Call Button */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href="tel:+919885012999"
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-8 h-8 text-[#0A647D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {currentImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Yet</h3>
              <p className="text-gray-600">Projects for this category will be added soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#0A647D] to-[#0d7490]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white text-opacity-90 mb-8">
              Get in touch with us today for a free consultation and quotation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#0A647D] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="tel:+919885012999"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0A647D] transition-all duration-300 transform hover:scale-105"
              >
                Call: +91 9885 012 999
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
