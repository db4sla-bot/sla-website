import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OurProcess from '../components/OurProcess';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const Services = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal } = useContext(ModalContext);

  const services = [
    {
      title: 'Invisible Grills',
      subtitle: 'Transparent Protection Without Compromising Views',
      description: 'Our premium invisible grills provide complete safety for balconies, windows, and terraces while maintaining the aesthetic beauty of your home. Made from high-grade stainless steel cables, these grills are virtually invisible and extremely durable.',
      features: [
        'High-tensile stainless steel cables',
        'Corrosion and weather resistant',
        'Customizable spacing and design',
        'Child and pet safe',
        'Easy maintenance',
        'Professional installation',
        '10-year warranty',
        'Suitable for all weather conditions'
      ],
      benefits: [
        'Unobstructed panoramic views',
        'Enhanced property value',
        'Complete safety assurance',
        'Modern aesthetic appeal'
      ],
      applications: ['Balconies', 'Windows', 'Terraces', 'Staircases', 'Swimming Pool Areas'],
      icon: '🏠',
      image: '/api/placeholder/600/400',
      link: '/services/invisible-grills'
    },
    {
      title: 'Mosquito Mesh',
      subtitle: 'Advanced Insect Protection Solutions',
      description: 'Keep your home free from mosquitoes and other insects with our high-quality mesh solutions. Our mosquito mesh allows fresh air circulation while providing 100% protection against insects, ensuring a comfortable living environment.',
      features: [
        'Fine mesh technology',
        'Maximum visibility',
        'Durable fiberglass material',
        'UV resistant coating',
        'Easy to clean and maintain',
        'Custom sizing available',
        'Multiple color options',
        'Quick installation'
      ],
      benefits: [
        'Insect-free environment',
        'Improved air quality',
        'Reduced use of repellents',
        'Better sleep quality'
      ],
      applications: ['Doors', 'Windows', 'Balcony Openings', 'Ventilation Areas'],
      icon: '🦟',
      image: '/api/placeholder/600/400',
      link: '/services/mosquito-mesh'
    },
    {
      title: 'Cloth Hangers',
      subtitle: 'Smart Drying Solutions for Modern Homes',
      description: 'Maximize your drying space with our innovative cloth hanging systems. Designed for both indoor and outdoor use, our hangers are weather-resistant and space-efficient, perfect for apartments and homes with limited drying areas.',
      features: [
        'Weather-proof materials',
        'Space-saving design',
        'Multiple configuration options',
        'Rust-resistant coating',
        'Heavy-duty construction',
        'Easy installation',
        'Adjustable height settings',
        'Compact storage when not in use'
      ],
      benefits: [
        'Optimized drying space',
        'Faster drying times',
        'Organized laundry area',
        'Durability in all weather'
      ],
      applications: ['Balconies', 'Utility Areas', 'Terraces', 'Laundry Rooms'],
      icon: '👕',
      image: '/api/placeholder/600/400',
      link: '/services/cloth-hangers'
    },
    {
      title: 'Artificial Grass',
      subtitle: 'Premium Synthetic Lawn Solutions',
      description: 'Transform your spaces with our realistic artificial grass that looks and feels like natural turf. Perfect for creating beautiful green spaces without the maintenance requirements of natural grass.',
      features: [
        'Natural grass appearance',
        'Soft and comfortable texture',
        'UV stabilized for color retention',
        'Drainage backing system',
        'Pet and child friendly',
        'Easy installation process',
        'Low maintenance requirements',
        'Eco-friendly alternative'
      ],
      benefits: [
        'Year-round green appearance',
        'No watering or mowing needed',
        'Allergy-free environment',
        'Cost-effective long-term solution'
      ],
      applications: ['Balconies', 'Terraces', 'Gardens', 'Play Areas', 'Indoor Decoration'],
      icon: '🌱',
      image: '/api/placeholder/600/400',
      link: '/services/artificial-grass'
    },
    {
      title: 'Bird Spikes',
      subtitle: 'Humane Bird Control Solutions',
      description: 'Protect your property from bird-related issues with our humane bird spike systems. These spikes prevent birds from landing and nesting without causing harm, maintaining the cleanliness and integrity of your building.',
      features: [
        'Humane deterrent solution',
        'Stainless steel construction',
        'Weather resistant',
        'Easy installation',
        'Various spike configurations',
        'Transparent base options',
        'Long-lasting durability',
        'Maintenance-free operation'
      ],
      benefits: [
        'Prevents property damage',
        'Maintains building cleanliness',
        'Reduces health risks',
        'Environmentally friendly'
      ],
      applications: ['Building Ledges', 'Rooftops', 'Signage', 'Air Conditioning Units', 'Balcony Railings'],
      icon: '🐦',
      image: '/api/placeholder/600/400',
      link: '/services/bird-spikes'
    }
  ];

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
      <section className="relative py-20 lg:py-32 gradient-bg">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-shadow">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive protection and enhancement solutions for your home and office spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
              viewport={{ once: true }}
              className={`mb-16 sm:mb-20 lg:mb-24 ${serviceIndex === services.length - 1 ? 'mb-0' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div className={`space-y-6 lg:space-y-8 ${serviceIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h2>
                    <h3 className="text-lg sm:text-xl text-[var(--primary-color)] mb-3 sm:mb-4">
                      {service.subtitle}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary-color)] mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Benefits</h4>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((application, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-blue-50 text-[var(--primary-color)] rounded-full text-xs sm:text-sm font-medium"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore More Button */}
                  <div>
                    <Link
                      to={service.link}
                      className="inline-block bg-[var(--primary-color)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={`${serviceIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl sm:text-6xl lg:text-8xl mb-3 sm:mb-4">{service.icon}</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">Professional Installation Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Separator line */}
              {serviceIndex < services.length - 1 && (
                <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-gray-200"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Process</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              From consultation to installation, we ensure a seamless experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Free site visit and requirement analysis with expert recommendations'
              },
              {
                step: '02',
                title: 'Quotation',
                description: 'Detailed quotation with transparent pricing and no hidden costs'
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional installation by certified technicians with quality assurance'
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing maintenance support and warranty service for peace of mind'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-base sm:text-lg lg:text-xl font-bold mx-auto mb-3 sm:mb-4">
                  {process.step}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Process Section */}
      <OurProcess />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8">
              Contact us today for a free consultation and personalized quote for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[var(--primary-color)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+919885012999"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Call: +91 98850 1299
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;