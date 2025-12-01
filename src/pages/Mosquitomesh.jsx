import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const Mosquitomesh = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal, openSiteVisitModal } = useContext(ModalContext);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      title: 'Fine Mesh Technology',
      description: 'Ultra-fine mesh that blocks even the smallest insects while maintaining excellent visibility.',
      icon: '🔬'
    },
    {
      title: 'Maximum Airflow',
      description: 'Specially designed to allow maximum air circulation without compromising protection.',
      icon: '🌬️'
    },
    {
      title: 'UV Resistant',
      description: 'Protected against harmful UV rays ensuring long-lasting durability and color retention.',
      icon: '☀️'
    },
    {
      title: 'Easy Maintenance',
      description: 'Simple to clean and maintain with regular household cleaning methods.',
      icon: '🧽'
    },
    {
      title: 'Custom Fitting',
      description: 'Precisely measured and cut to fit your windows and doors perfectly.',
      icon: '📏'
    },
    {
      title: 'Multiple Options',
      description: 'Available in various colors and mesh densities to suit your specific needs.',
      icon: '🎨'
    }
  ];

  const benefits = [
    'Complete protection against mosquitoes, flies, and other insects',
    'Maintains natural ventilation and airflow',
    'Crystal clear visibility - doesn\'t obstruct your view',
    'Reduces need for chemical insect repellents',
    'Prevents dust and pollution from entering',
    'Child and pet safe - no harmful chemicals',
    'Energy efficient - reduces need for air conditioning',
    'Low maintenance and easy to clean'
  ];

  const applications = [
    {
      title: 'Windows',
      description: 'Perfect for all types of windows - sliding, casement, or fixed',
      icon: '🪟'
    },
    {
      title: 'Doors',
      description: 'Ideal for main doors, balcony doors, and patio entrances',
      icon: '🚪'
    },
    {
      title: 'Balconies',
      description: 'Complete balcony enclosure for insect-free outdoor living',
      icon: '🏢'
    },
    {
      title: 'Terraces',
      description: 'Transform your terrace into a comfortable living space',
      icon: '🏠'
    }
  ];

  const specifications = [
    { label: 'Material', value: 'High-grade Fiberglass' },
    { label: 'Mesh Size', value: '18x16, 20x20 (customizable)' },
    { label: 'Thickness', value: '0.25mm to 0.35mm' },
    { label: 'Colors Available', value: 'Grey, Black, White, Brown' },
    { label: 'Width Options', value: '1.2m, 1.5m, 1.8m (custom available)' },
    { label: 'UV Protection', value: 'Yes - 99% UV resistant' },
    { label: 'Warranty', value: '5 Years' },
    { label: 'Installation', value: 'Professional fitting included' }
  ];

  const testimonials = [
    {
      name: 'Anitha Reddy',
      location: 'Brundavan Gardens, Nellore',
      rating: 5,
      text: 'The mosquito mesh from SLA is amazing! No more mosquitoes in our home and we can still enjoy fresh air. Installation was quick and professional.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Suresh Kumar',
      location: 'Pogathota, Nellore',
      rating: 5,
      text: 'Best investment for our home! The mesh quality is excellent and it\'s been 2 years without any issues. Highly recommend SLA for mosquito mesh.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Lakshmi Devi',
      location: 'Trunk Road, Nellore',
      rating: 5,
      text: 'Perfect solution for our balcony. Now we can sit outside in the evenings without worrying about mosquitoes. Great work by the SLA team!',
      image: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="animate-fade-in">
      <SiteVisitModal isOpen={isSiteVisitModalOpen} onClose={closeSiteVisitModal} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary-color)] via-teal-600 to-cyan-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        {/* Decorative Elements */}
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
                <span className="text-2xl mr-2">🦟</span>
                <span className="text-sm font-medium">Premium Mosquito Protection</span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
                Mosquito Mesh
                <span className="block text-cyan-200">Solutions</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Advanced insect protection that keeps your home comfortable and bug-free while maintaining perfect airflow and visibility.
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
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl max-w-lg w-full">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Pleated%20Mosquito%20Mesh.png?updatedAt=1764586406547" 
                    alt="Premium Mosquito Mesh Installation" 
                    className="w-full h-auto object-cover shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-cyan-500 text-white p-3 lg:p-4 rounded-xl shadow-lg z-10">
                  <div className="text-xl lg:text-2xl font-bold">100%</div>
                  <div className="text-xs lg:text-sm">Insect Protection</div>
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
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Why Choose Our Mosquito Mesh</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced Features for Maximum Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mosquito mesh combines cutting-edge technology with premium materials to provide the ultimate insect protection for your home.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Key Benefits</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Mosquito Mesh is Essential for Your Home
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
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

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openSiteVisitModal}
                className="mt-8 bg-[var(--primary-color)] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[var(--primary-color)]/90 transition-all duration-300 shadow-lg"
              >
                Schedule Free Site Visit
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Trackless%20Mosquito%20Mesh.png?updatedAt=1764586406527" 
                alt="Mosquito Mesh Benefits" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
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
              Perfect for Every Area of Your Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mosquito mesh solutions are versatile and can be installed in various locations to provide comprehensive protection.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="text-5xl mb-4">{application.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{application.title}</h3>
                <p className="text-gray-600 leading-relaxed">{application.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality materials and precise specifications ensure superior performance and durability.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">Customer Reviews</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied customers who chose our mosquito mesh solutions.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--primary-color)] via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-shadow">
              Ready for a Mosquito-Free Home?
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Get professional mosquito mesh installation with our premium quality materials and expert service. Contact us today for a free consultation.
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

export default Mosquitomesh;