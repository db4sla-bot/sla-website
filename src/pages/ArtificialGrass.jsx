import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const ArtificialGrass = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal, openSiteVisitModal } = useContext(ModalContext);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: '🌿',
      title: 'Natural Looking',
      description: 'Ultra-realistic grass blades that look and feel like natural grass all year round.'
    },
    {
      icon: '💧',
      title: 'Low Maintenance',
      description: 'No watering, mowing, or fertilizing required. Save time, money, and resources.'
    },
    {
      icon: '☀️',
      title: 'UV Resistant',
      description: 'Special UV coating prevents fading and ensures vibrant green color for years.'
    },
    {
      icon: '🌧️',
      title: 'All-Weather Durability',
      description: 'Withstands rain, heat, and heavy foot traffic without degrading or losing shape.'
    },
    {
      icon: '🏡',
      title: 'Eco-Friendly',
      description: 'Saves water, eliminates pesticides, and reduces carbon footprint from lawn maintenance.'
    },
    {
      icon: '🎨',
      title: 'Versatile Applications',
      description: 'Perfect for balconies, terraces, gardens, playgrounds, and commercial spaces.'
    }
  ];

  const types = [
    {
      title: 'Landscape Grass',
      description: 'Premium quality grass perfect for gardens, lawns, and outdoor spaces',
      features: ['35-40mm pile height', 'Natural green color', 'Soft texture', 'High density'],
      bestFor: 'Gardens, Lawns, Outdoor Spaces',
      icon: '🏞️'
    },
    {
      title: 'Balcony Grass',
      description: 'Shorter pile grass ideal for balconies and small terraces',
      features: ['20-25mm pile height', 'Easy installation', 'Lightweight', 'Drainage backing'],
      bestFor: 'Balconies, Small Terraces',
      icon: '🏢'
    },
    {
      title: 'Sports Grass',
      description: 'Heavy-duty artificial turf designed for sports activities',
      features: ['40-50mm pile height', 'Extra durability', 'Shock absorption', 'UV stabilized'],
      bestFor: 'Sports Fields, Play Areas',
      icon: '⚽'
    },
    {
      title: 'Pet Grass',
      description: 'Specially designed grass that is pet-friendly and easy to clean',
      features: ['30-35mm pile height', 'Antimicrobial', 'Odor resistant', 'Easy drainage'],
      bestFor: 'Pet Areas, Dog Parks',
      icon: '🐕'
    }
  ];

  const specifications = [
    { label: 'Material', value: 'Premium PE & PP Yarn' },
    { label: 'Pile Height', value: '20mm - 50mm (based on type)' },
    { label: 'Stitch Rate', value: '18-20 stitches per 10cm' },
    { label: 'Density', value: '16,800 - 18,900 per sqm' },
    { label: 'Backing', value: 'Double layer PP + SBR latex' },
    { label: 'Drainage', value: 'Perforated backing - 60 liters/min/sqm' },
    { label: 'UV Protection', value: '8000-10000 hours' },
    { label: 'Warranty', value: '7-10 Years' }
  ];

  const benefits = [
    'Always green and lush - no seasonal changes or brown patches',
    'Saves thousands of liters of water annually',
    'No need for expensive lawn maintenance equipment',
    'Eliminates use of harmful pesticides and fertilizers',
    'Perfect for areas where natural grass won\'t grow',
    'Soft and safe surface for children to play',
    'Excellent drainage prevents water logging',
    'Increases property value and curb appeal'
  ];

  const applications = [
    { title: 'Balconies', desc: 'Transform your balcony into a green oasis', icon: '🏢' },
    { title: 'Terraces', desc: 'Create beautiful rooftop gardens', icon: '🏠' },
    { title: 'Gardens', desc: 'Maintain perfect lawns effortlessly', icon: '🌳' },
    { title: 'Playgrounds', desc: 'Safe and soft playing surface', icon: '🎪' },
    { title: 'Commercial', desc: 'Hotels, offices, and public spaces', icon: '🏨' },
    { title: 'Sports Areas', desc: 'Football, cricket practice areas', icon: '⚽' }
  ];

  const whyChoose = [
    {
      title: 'Premium Quality Materials',
      description: 'We use only the highest grade PE and PP yarn imported from leading manufacturers. Our grass is UV stabilized, lead-free, and meets international safety standards.'
    },
    {
      title: 'Professional Installation',
      description: 'Our expert team ensures proper ground preparation, seamless joining, and perfect finishing. Every installation comes with proper drainage setup and edge finishing.'
    },
    {
      title: 'Long-Term Durability',
      description: 'Our artificial grass is designed to last 7-10 years with minimal maintenance. UV protection ensures the grass stays vibrant green even under harsh sunlight.'
    },
    {
      title: 'Customized Solutions',
      description: 'Whether it\'s a small balcony or large garden, we provide customized solutions to fit your space perfectly. Multiple grass types and pile heights available.'
    }
  ];

  const maintenanceTips = [
    'Brush the grass periodically to keep fibers upright',
    'Remove debris with a leaf blower or broom',
    'Rinse with water occasionally to remove dust',
    'For pet areas, clean with water and mild detergent',
    'Avoid placing hot objects directly on the grass',
    'Keep sharp objects away to prevent damage'
  ];

  const faq = [
    {
      question: 'How long does artificial grass last?',
      answer: 'Our premium artificial grass lasts 7-10 years with minimal maintenance. The UV-stabilized fibers resist fading and the durable backing withstands heavy foot traffic. Lifespan depends on usage and maintenance.'
    },
    {
      question: 'Does artificial grass get too hot in summer?',
      answer: 'Modern artificial grass is designed with heat-resistant materials. While it can get warm in direct sunlight, it cools down quickly with water spray. Our grass includes UV coating that reduces heat absorption.'
    },
    {
      question: 'Is artificial grass safe for children and pets?',
      answer: 'Yes, absolutely! Our grass is lead-free, non-toxic, and meets international safety standards. It\'s softer than concrete and provides cushioning. For pets, we offer antimicrobial grass that resists odors.'
    },
    {
      question: 'How is drainage handled?',
      answer: 'Our artificial grass has a perforated backing that allows water to drain at 60 liters per minute per square meter. This prevents water logging and ensures the surface dries quickly after rain.'
    },
    {
      question: 'Can it be installed on any surface?',
      answer: 'Yes, artificial grass can be installed on concrete, tiles, soil, or existing grass. We prepare the base according to the surface type to ensure proper drainage and longevity.'
    },
    {
      question: 'What maintenance is required?',
      answer: 'Very minimal! Brush occasionally to keep fibers upright, remove debris, and rinse with water when dusty. No mowing, watering, or fertilizing needed. It\'s that simple!'
    },
    {
      question: 'Does it look fake or artificial?',
      answer: 'Our premium grass looks incredibly realistic with varying blade heights, natural color variations, and soft texture. Most people can\'t tell it\'s artificial unless they touch it closely.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Cost varies based on grass type, area size, and installation complexity. However, considering zero maintenance costs and water savings, artificial grass pays for itself in 3-4 years.'
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
                <span className="text-2xl mr-2">🌱</span>
                <span className="text-sm font-medium">Natural Looking Turf</span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
                Artificial Grass
                <span className="block text-cyan-200">Always Green, Zero Maintenance</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Transform your balcony, terrace, or garden with premium artificial grass that looks natural, feels soft, and stays green all year round.
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
                  src="https://ik.imagekit.io/67x2srjsy/Website/Images/Artificial%20Grass/AG1.webp" 
                  alt="Artificial Grass" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 bg-cyan-500 text-white p-3 lg:p-4 rounded-xl shadow-lg z-10">
                  <div className="text-xl lg:text-2xl font-bold">10 Years</div>
                  <div className="text-xs lg:text-sm">Warranty</div>
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
              Why Choose Our Artificial Grass
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

      {/* Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Our Range</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of Artificial Grass
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-[var(--primary-color)] mb-2">Features:</div>
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                Benefits of Artificial Grass
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
                src="https://ik.imagekit.io/67x2srjsy/Website/Images/Artificial%20Grass/AG2.jpg" 
                alt="Artificial Grass Benefits" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
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
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.desc}</p>
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

          <motion.div {...fadeInUp} className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 lg:p-12">
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
                  <span className="text-[var(--primary-color)] font-bold text-sm">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us
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
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple Maintenance Tips
            </h2>
            <p className="text-gray-600">Keep your artificial grass looking perfect with these easy tips</p>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              {maintenanceTips.map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">{tip}</p>
                </motion.li>
              ))}
            </ul>
          </div>
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
              Ready for a Green Transformation?
            </h2>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Get professional artificial grass installation. Contact us today for a free consultation and quote.
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

export default ArtificialGrass;
