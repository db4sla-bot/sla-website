import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const ClothHangers = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal, openSiteVisitModal } = useContext(ModalContext);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: '💪',
      title: 'Heavy Duty Construction',
      description: 'Made from premium stainless steel that can hold heavy wet clothes without bending or breaking.'
    },
    {
      icon: '🌧️',
      title: 'Weather Resistant',
      description: 'Rust-proof materials ensure your cloth hanger lasts for years even in heavy rain and humidity.'
    },
    {
      icon: '📐',
      title: 'Space Efficient Design',
      description: 'Maximize your drying space with intelligent multi-tier configurations that save valuable balcony space.'
    },
    {
      icon: '⚙️',
      title: 'Pulley System',
      description: 'Easy-to-use pulley mechanism allows you to raise and lower the hanger effortlessly.'
    },
    {
      icon: '🎨',
      title: 'Aesthetic Appeal',
      description: 'Sleek modern design that complements your home decor while being highly functional.'
    },
    {
      icon: '🔧',
      title: 'Easy Installation',
      description: 'Professional installation with minimal drilling and no damage to your walls or ceiling.'
    }
  ];

  const types = [
    {
      title: 'Ceiling Mounted Hangers',
      description: 'Space-saving ceiling mounted cloth hangers with pulley system for easy operation',
      features: ['Pulley mechanism', 'Height adjustable', '4-6 rods', 'Load capacity: 30-40 kg'],
      icon: '⬆️'
    },
    {
      title: 'Wall Mounted Hangers',
      description: 'Fixed wall mounted hangers perfect for smaller spaces and balconies',
      features: ['Fixed installation', 'Compact design', '2-3 rods', 'Load capacity: 20-25 kg'],
      icon: '➡️'
    },
    {
      title: 'Foldable Hangers',
      description: 'Innovative foldable design that can be tucked away when not in use',
      features: ['Space saving', 'Foldable', '3-4 rods', 'Load capacity: 15-20 kg'],
      icon: '🔄'
    },
    {
      title: 'Butterfly Model',
      description: 'Popular butterfly design with multiple drying levels for maximum efficiency',
      features: ['Multi-tier', 'High capacity', '6-8 rods', 'Load capacity: 40-50 kg'],
      icon: '🦋'
    }
  ];

  const specifications = [
    { label: 'Material', value: 'Stainless Steel 304 Grade' },
    { label: 'Pipe Diameter', value: '19mm - 25mm' },
    { label: 'Rod Length', value: '4ft - 8ft (customizable)' },
    { label: 'Number of Rods', value: '4 to 8 (based on model)' },
    { label: 'Load Capacity', value: 'Up to 50 kg' },
    { label: 'Coating', value: 'Powder coated / Chrome finish' },
    { label: 'Warranty', value: '5 Years' },
    { label: 'Installation Time', value: '2-3 hours' }
  ];

  const benefits = [
    'Maximize your balcony or utility area drying space',
    'Heavy-duty construction holds multiple loads of laundry',
    'Rust-proof materials last for decades',
    'Easy to operate with smooth pulley system',
    'Professional installation with no wall damage',
    'Customizable sizing to fit your exact space',
    'Modern aesthetic that enhances your home',
    'Saves electricity - natural drying solution'
  ];

  const faq = [
    {
      question: 'How much weight can cloth hangers hold?',
      answer: 'Our cloth hangers are designed to hold between 20-50 kg depending on the model. The ceiling-mounted pulley systems can typically hold 30-40 kg, while the butterfly models can hold up to 50 kg of wet clothes.'
    },
    {
      question: 'Will the cloth hanger rust?',
      answer: 'No, we use high-grade stainless steel (304 grade) with powder coating or chrome finish. This ensures complete rust protection even in humid coastal areas.'
    },
    {
      question: 'How long does installation take?',
      answer: 'Installation typically takes 2-3 hours depending on the model and your space. Our professional team ensures minimal disruption and clean installation.'
    },
    {
      question: 'Can cloth hangers be customized?',
      answer: 'Yes! We can customize the length, number of rods, and configuration to perfectly fit your balcony or utility area. We take precise measurements during the site visit.'
    },
    {
      question: 'Do you provide warranty?',
      answer: 'Yes, we provide a 5-year warranty on all cloth hanger installations covering manufacturing defects and material quality.'
    },
    {
      question: 'What is the difference between ceiling and wall mounted hangers?',
      answer: 'Ceiling mounted hangers use a pulley system and can be raised/lowered, saving floor space. Wall mounted hangers are fixed but perfect for smaller spaces. Both are equally durable.'
    }
  ];

  return (
    <div className="animate-fade-in">
      <SiteVisitModal isOpen={isSiteVisitModalOpen} onClose={closeSiteVisitModal} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary-color)] via-teal-600 to-cyan-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-300/20 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              >
                <span className="text-2xl mr-2">👕</span>
                <span className="text-sm font-medium">Smart Drying Solutions</span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
                Cloth Hangers
                <span className="block text-cyan-200">Maximum Space, Minimum Hassle</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Heavy-duty stainless steel cloth hangers that maximize your drying space while maintaining a sleek, modern look.
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl max-w-lg w-full">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Cloth Hangers" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 bg-cyan-500 text-white p-3 lg:p-4 rounded-xl shadow-lg z-10">
                  <div className="text-xl lg:text-2xl font-bold">50kg</div>
                  <div className="text-xs lg:text-sm">Load Capacity</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Features</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built to Last, Designed for Convenience
            </h2>
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

      {/* Types of Cloth Hangers */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Our Range</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of Cloth Hangers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                Benefits of Our Cloth Hangers
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/api/placeholder/600/500" 
                alt="Cloth Hanger Benefits" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Technical Specifications
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

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
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
                className="bg-white rounded-2xl p-6 lg:p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--primary-color)] via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Upgrade Your Drying Space?
            </h2>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Get professional cloth hanger installation. Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={openSiteVisitModal}
                className="bg-white text-[var(--primary-color)] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Schedule Free Site Visit
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClothHangers;
