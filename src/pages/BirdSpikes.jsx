import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const BirdSpikes = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal, openSiteVisitModal } = useContext(ModalContext);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: '🕊️',
      title: 'Humane Solution',
      description: 'Prevents bird landing and nesting without harming them - a completely ethical bird control method.'
    },
    {
      icon: '🔩',
      title: 'Durable Construction',
      description: 'Made from high-quality stainless steel or UV-resistant polycarbonate that lasts for years.'
    },
    {
      icon: '🏢',
      title: 'Versatile Application',
      description: 'Suitable for ledges, signs, rooftops, AC units, and any surface where birds perch or nest.'
    },
    {
      icon: '🌧️',
      title: 'Weather Resistant',
      description: 'Withstands rain, sun, wind, and extreme temperatures without degrading or losing effectiveness.'
    },
    {
      icon: '👁️',
      title: 'Discreet Design',
      description: 'Nearly invisible from ground level, maintaining your building\'s aesthetic appeal.'
    },
    {
      icon: '⚡',
      title: 'Easy Installation',
      description: 'Quick professional installation with adhesive or screws, suitable for all surface types.'
    }
  ];

  const types = [
    {
      title: 'Stainless Steel Spikes',
      description: 'Premium quality stainless steel bird spikes for maximum durability',
      features: ['304 grade stainless steel', 'Rust-proof', 'Long-lasting', '10+ year lifespan'],
      bestFor: 'Commercial buildings, high-value properties',
      icon: '🔧'
    },
    {
      title: 'Polycarbonate Spikes',
      description: 'UV-resistant plastic spikes that are lighter and more affordable',
      features: ['UV stabilized plastic', 'Lightweight', 'Cost-effective', '5-7 year lifespan'],
      bestFor: 'Residential properties, cost-conscious solutions',
      icon: '🛡️'
    },
    {
      title: 'Narrow Spike Strips',
      description: 'Designed for narrow ledges and pipes',
      features: ['2-3 inch width', 'Flexible mounting', 'Dense spike pattern', 'Prevents small birds'],
      bestFor: 'Narrow ledges, pipes, railings',
      icon: '📏'
    },
    {
      title: 'Wide Coverage Strips',
      description: 'For broader surfaces like rooftops and large ledges',
      features: ['4-8 inch width', 'Wide coverage', 'Heavy-duty', 'Prevents large birds'],
      bestFor: 'Rooftops, wide ledges, signage',
      icon: '📐'
    }
  ];

  const specifications = [
    { label: 'Material Options', value: 'Stainless Steel 304 / Polycarbonate' },
    { label: 'Spike Length', value: '4-6 inches' },
    { label: 'Base Width', value: '1.5 - 8 inches' },
    { label: 'Number of Rows', value: '1-4 rows (based on model)' },
    { label: 'UV Protection', value: 'Yes (for polycarbonate)' },
    { label: 'Temperature Range', value: '-40°C to +80°C' },
    { label: 'Installation', value: 'Adhesive / Screws / Ties' },
    { label: 'Warranty', value: '5-10 Years' }
  ];

  const benefits = [
    'Prevents bird droppings and associated health hazards',
    'Protects building facades from bird damage and staining',
    'Reduces cleaning and maintenance costs significantly',
    'Prevents bird nesting in AC units and vents',
    'Eliminates noise from bird colonies',
    'Protects signage and solar panels from bird damage',
    'Humane - doesn\'t harm birds, just deters them',
    'Low maintenance once installed'
  ];

  const applications = [
    { title: 'Building Ledges', desc: 'Prevent nesting on window ledges and parapets', icon: '🏢' },
    { title: 'Rooftops', desc: 'Keep roofs free from bird colonies', icon: '🏠' },
    { title: 'Signs & Hoardings', desc: 'Protect advertising signs from droppings', icon: '🪧' },
    { title: 'AC Units', desc: 'Prevent nesting in outdoor units', icon: '❄️' },
    { title: 'Solar Panels', desc: 'Keep solar installations bird-free', icon: '☀️' },
    { title: 'Warehouses', desc: 'Large-scale bird deterrent solutions', icon: '🏭' }
  ];

  const whyNeed = [
    {
      title: 'Health Concerns',
      description: 'Bird droppings carry over 60 transmittable diseases including histoplasmosis, salmonella, and cryptococcosis. They also attract insects and parasites that pose additional health risks to building occupants.'
    },
    {
      title: 'Property Damage',
      description: 'Bird droppings are highly acidic and can permanently damage paint, metal, stone, and other building materials. Nesting materials can block drainage systems, causing water damage and costly repairs.'
    },
    {
      title: 'Safety Hazards',
      description: 'Droppings on walkways create slip hazards. Nests in ventilation systems pose fire risks. Large bird colonies can become aggressive during nesting season, posing risks to people.'
    },
    {
      title: 'Aesthetic Impact',
      description: 'Bird droppings create unsightly stains on buildings, vehicles, and outdoor furniture. This affects property value and business image, especially for commercial establishments.'
    }
  ];

  const installationProcess = [
    {
      step: 1,
      title: 'Site Assessment',
      description: 'We inspect the area to identify bird pressure points and determine the best spike type and configuration.'
    },
    {
      step: 2,
      title: 'Surface Preparation',
      description: 'Clean and prepare the surface to ensure optimal adhesion and long-lasting installation.'
    },
    {
      step: 3,
      title: 'Installation',
      description: 'Professional installation using appropriate method (adhesive, screws, or ties) based on surface type.'
    },
    {
      step: 4,
      title: 'Quality Check',
      description: 'Thorough inspection to ensure complete coverage and secure installation with no gaps.'
    }
  ];

  const faq = [
    {
      question: 'Do bird spikes harm birds?',
      answer: 'No, bird spikes are a completely humane solution. The spikes don\'t injure birds; they simply make it uncomfortable for them to land or perch. Birds will naturally move to other areas without being harmed.'
    },
    {
      question: 'How long do bird spikes last?',
      answer: 'Stainless steel spikes last 10+ years, while polycarbonate spikes last 5-7 years. Both types are weather-resistant and require minimal maintenance. The longevity depends on environmental conditions and quality of installation.'
    },
    {
      question: 'Will bird spikes damage my building?',
      answer: 'No, we use appropriate installation methods that don\'t damage surfaces. For sensitive surfaces, we use strong adhesives instead of screws. Our installation preserves your building\'s integrity and appearance.'
    },
    {
      question: 'Are bird spikes visible from the ground?',
      answer: 'Bird spikes are designed to be discreet. When installed on higher ledges or rooftops, they\'re nearly invisible from ground level. They blend with the building\'s architecture and don\'t affect aesthetic appeal.'
    },
    {
      question: 'What types of birds do the spikes deter?',
      answer: 'Bird spikes effectively deter pigeons, crows, mynas, sparrows, and other common urban birds. The spike density and length can be customized based on the bird species in your area.'
    },
    {
      question: 'Can bird spikes be installed on any surface?',
      answer: 'Yes, bird spikes can be installed on ledges, roofs, signs, pipes, AC units, solar panels, and virtually any flat or curved surface. We have different installation methods for different surface types.'
    },
    {
      question: 'How much maintenance do bird spikes require?',
      answer: 'Very minimal! Occasional cleaning to remove dust or leaves is all that\'s needed. The spikes are weather-resistant and don\'t require any special treatment or replacement for years.'
    },
    {
      question: 'Are there alternatives to bird spikes?',
      answer: 'Yes, alternatives include bird netting, bird wire systems, and visual deterrents. However, bird spikes are often the most effective and long-lasting solution for ledges and narrow surfaces. We can recommend the best solution based on your specific situation.'
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
                <span className="text-2xl mr-2">🐦</span>
                <span className="text-sm font-medium">Humane Bird Control</span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
                Bird Spikes
                <span className="block text-cyan-200">Effective & Humane Protection</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Protect your property from bird droppings and nesting with our premium bird spike solutions that are safe, effective, and long-lasting.
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
                  alt="Bird Spikes Installation" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 bg-cyan-500 text-white p-3 lg:p-4 rounded-xl shadow-lg z-10">
                  <div className="text-xl lg:text-2xl font-bold">100%</div>
                  <div className="text-xs lg:text-sm">Humane</div>
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
              Why Choose Our Bird Spikes
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

      {/* Why You Need Bird Spikes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">The Problem</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Bird Control is Essential
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyNeed.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Our Range</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of Bird Spikes
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
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Best For:</span> {type.bestFor}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                Benefits of Bird Spikes
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
                alt="Bird Spikes Benefits" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Where We Install Bird Spikes
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Installation Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-sm"
                >
                  <span className="font-semibold text-gray-700">{spec.label}:</span>
                  <span className="text-[var(--primary-color)] font-bold text-sm">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
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
                className="bg-gray-50 rounded-2xl p-6 lg:p-8"
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
              Ready to Protect Your Property?
            </h2>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Get professional bird spike installation. Contact us today for a free site assessment and quote.
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

export default BirdSpikes;
