import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

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
      image: '/api/placeholder/600/400'
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
      image: '/api/placeholder/600/400'
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
      image: '/api/placeholder/600/400'
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
      image: '/api/placeholder/600/400'
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
      image: '/api/placeholder/600/400'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-bg">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive protection and enhancement solutions for your home and office spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedService === index
                    ? 'bg-[var(--primary-color)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="text-5xl mb-4">{services[selectedService].icon}</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {services[selectedService].title}
                </h2>
                <h3 className="text-xl text-[var(--primary-color)] mb-4">
                  {services[selectedService].subtitle}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {services[selectedService].description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-[var(--primary-color)] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[selectedService].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {services[selectedService].applications.map((application, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-[var(--primary-color)] rounded-full text-sm font-medium"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="lg:order-first">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">{services[selectedService].icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {services[selectedService].title}
                  </h3>
                  <p className="text-gray-600">Professional Installation Available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From consultation to installation, we ensure a seamless experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <div className="w-16 h-16 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and personalized quote for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
              >
                Call: +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;