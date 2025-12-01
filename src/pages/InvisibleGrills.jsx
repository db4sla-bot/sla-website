import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const InvisibleGrills = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal, openSiteVisitModal } = useContext(ModalContext);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: '🔒',
      title: 'Maximum Safety',
      description: 'High-tensile stainless steel cables provide superior strength and protection for children and pets.'
    },
    {
      icon: '👁️',
      title: 'Invisible Design',
      description: 'Nearly transparent appearance maintains your beautiful views while ensuring complete safety.'
    },
    {
      icon: '☀️',
      title: 'Weather Resistant',
      description: 'Marine-grade stainless steel withstands all weather conditions without rusting or degrading.'
    },
    {
      icon: '🔧',
      title: 'Easy Maintenance',
      description: 'Simple to clean with just soap and water. No painting or special care required.'
    },
    {
      icon: '📏',
      title: 'Custom Fitting',
      description: 'Precisely measured and installed to fit any balcony, window, or terrace perfectly.'
    },
    {
      icon: '✨',
      title: 'Modern Aesthetic',
      description: 'Sleek contemporary design enhances your property value and appearance.'
    }
  ];

  const specifications = [
    { label: 'Material', value: '316 Grade Stainless Steel' },
    { label: 'Cable Diameter', value: '2mm - 2.5mm' },
    { label: 'Cable Spacing', value: '2 inches (50mm) - customizable' },
    { label: 'Tensile Strength', value: '1800 N/mm²' },
    { label: 'Corrosion Resistance', value: 'Marine Grade' },
    { label: 'Load Capacity', value: 'Up to 150 kg per cable' },
    { label: 'Warranty', value: '10 Years' },
    { label: 'Installation Time', value: '4-6 hours (average balcony)' }
  ];

  const benefits = [
    'Unobstructed panoramic views from your balcony or windows',
    'Child and pet safety without compromising aesthetics',
    'Increases property value and appeal',
    'Prevents bird nesting and intrusion',
    'No maintenance - lasts for decades',
    'Fire escape compliant - easy emergency exit',
    'UV resistant - won\'t fade or discolor',
    'Theft deterrent while maintaining visibility'
  ];

  const applications = [
    {
      title: 'Balconies',
      description: 'Perfect for high-rise apartments and homes',
      icon: '🏢'
    },
    {
      title: 'Windows',
      description: 'Secure windows without blocking light or views',
      icon: '🪟'
    },
    {
      title: 'Terraces',
      description: 'Create safe outdoor spaces for families',
      icon: '🏠'
    },
    {
      title: 'Staircases',
      description: 'Prevent falls while maintaining open design',
      icon: '🪜'
    },
    {
      title: 'Swimming Pools',
      description: 'Safety barrier for pool areas',
      icon: '🏊'
    },
    {
      title: 'Duplex Homes',
      description: 'Multi-level safety solutions',
      icon: '🏘️'
    }
  ];

  const whyChoose = [
    {
      title: 'Premium Quality Materials',
      description: 'We use only 316-grade marine stainless steel, which is the highest quality available. This ensures maximum durability and corrosion resistance.'
    },
    {
      title: 'Expert Installation',
      description: 'Our trained technicians have years of experience and follow strict safety protocols. Every installation is precise and secure.'
    },
    {
      title: 'Safety Certified',
      description: 'All our products meet international safety standards and are tested for load-bearing capacity and durability.'
    },
    {
      title: 'Lifetime Support',
      description: 'We provide ongoing maintenance support and a comprehensive 10-year warranty on all installations.'
    }
  ];

  const faq = [
    {
      question: 'How strong are invisible grills?',
      answer: 'Our invisible grills use 316-grade stainless steel cables with a tensile strength of 1800 N/mm². Each cable can withstand up to 150 kg of force, making them extremely strong and safe for children and pets.'
    },
    {
      question: 'Will invisible grills obstruct my view?',
      answer: 'No, the cables are only 2-2.5mm thick and spaced 2 inches apart, making them nearly invisible from a distance. You can enjoy unobstructed views while maintaining complete safety.'
    },
    {
      question: 'Do invisible grills rust?',
      answer: 'No, we use marine-grade 316 stainless steel which is highly resistant to rust and corrosion, even in coastal areas with high humidity and salt exposure.'
    },
    {
      question: 'How long does installation take?',
      answer: 'A typical balcony takes 4-6 hours to install. Larger areas may take longer. Our team works efficiently to minimize disruption to your daily routine.'
    },
    {
      question: 'Can invisible grills be installed on any balcony?',
      answer: 'Yes, we can install invisible grills on virtually any type of balcony, window, or terrace. Our team will assess your space and provide a customized solution.'
    },
    {
      question: 'What maintenance is required?',
      answer: 'Minimal maintenance is needed. Simply wipe the cables with a damp cloth occasionally to remove dust. No painting or special treatments are required.'
    }
  ];

  return (
    <div className="animate-fade-in">
      <SiteVisitModal isOpen={isSiteVisitModalOpen} onClose={closeSiteVisitModal} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary-color)] via-teal-600 to-cyan-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-300/20 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              >
                <span className="text-2xl mr-2">🔒</span>
                <span className="text-sm font-medium">Premium Safety Solution</span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
                Invisible Grills
                <span className="block text-cyan-200">Safety That's Nearly Invisible</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Protect your loved ones with premium invisible grills that provide maximum safety without obstructing your beautiful views.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openSiteVisitModal}
                  className="bg-white text-[var(--primary-color)] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Get Free Installation Quote
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl max-w-lg w-full">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Invisible Grills Installation" 
                    className="w-full h-auto object-cover shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-cyan-500 text-white p-3 lg:p-4 rounded-xl shadow-lg z-10">
                  <div className="text-xl lg:text-2xl font-bold">10 Years</div>
                  <div className="text-xs lg:text-sm">Warranty</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Key Features</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Invisible Grills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality materials combined with expert installation for unmatched safety and aesthetics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Benefits</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                Complete Protection Without Compromise
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/api/placeholder/600/500" 
                alt="Invisible Grills Benefits" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Applications</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Perfect for Every Space
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Technical Details</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Product Specifications
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm"
                >
                  <span className="font-semibold text-gray-700">{spec.label}:</span>
                  <span className="text-[var(--primary-color)] font-bold">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose SLA Invisible Grills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">FAQ</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 lg:p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--primary-color)] via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-shadow">
              Ready to Secure Your Home?
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Get professional invisible grills installation with our premium quality materials and expert service. Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openSiteVisitModal}
                className="bg-white text-[var(--primary-color)] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Schedule Free Site Visit
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300"
                >
                  Get Instant Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InvisibleGrills;
