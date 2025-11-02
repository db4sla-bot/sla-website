import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import VideoSlider from '../components/VideoSlider';

const Home = () => {
  const services = [
    {
      title: 'Invisible Grills',
      description: 'Premium quality invisible grills for balconies, windows, and terraces. Transparent protection without compromising your view.',
      icon: '🏠',
      features: ['Transparent Design', 'Weather Resistant', 'Easy Maintenance', 'Custom Fitting']
    },
    {
      title: 'Mosquito Mesh',
      description: 'High-quality mosquito mesh solutions for doors and windows. Keep insects out while maintaining proper ventilation.',
      icon: '🦟',
      features: ['Fine Mesh Quality', 'Durable Material', 'Custom Sizes', 'Easy Installation']
    },
    {
      title: 'Cloth Hangers',
      description: 'Modern and sturdy cloth hanging solutions for balconies and utility areas. Maximize your drying space efficiently.',
      icon: '👕',
      features: ['Space Efficient', 'Weather Proof', 'Multiple Configurations', 'Premium Quality']
    },
    {
      title: 'Artificial Grass',
      description: 'Transform your spaces with premium artificial grass. Perfect for balconies, terraces, and indoor decorative areas.',
      icon: '🌱',
      features: ['Natural Look', 'Low Maintenance', 'UV Resistant', 'Eco-Friendly']
    },
    {
      title: 'Bird Spikes',
      description: 'Humane bird control solutions for buildings and structures. Prevent bird nesting without harming them.',
      icon: '🐦',
      features: ['Humane Solution', 'Durable Material', 'Weather Resistant', 'Easy Installation']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Banjara Hills, Hyderabad',
      rating: 5,
      text: 'Excellent work by SLA team! The invisible grills are perfectly installed and the quality is outstanding. Highly recommended!'
    },
    {
      name: 'Priya Sharma',
      location: 'Gachibowli, Hyderabad',
      rating: 5,
      text: 'Very professional service. The mosquito mesh works perfectly and the installation was done without any mess. Great experience!'
    },
    {
      name: 'Venkat Reddy',
      location: 'Jubilee Hills, Hyderabad',
      rating: 5,
      text: 'Amazing quality artificial grass! It looks so natural and has completely transformed our terrace. Worth every penny!'
    }
  ];

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

  return (
    <div className="animate-fade-in">
      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Video Slider */}
      <VideoSlider />

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SLA Invisible Grills?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With years of experience and thousands of satisfied customers, we provide the highest quality 
              protection solutions for homes and commercial spaces across Hyderabad.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Premium Quality',
                description: 'We use only the finest materials and latest technology to ensure long-lasting protection solutions.'
              },
              {
                icon: '👥',
                title: 'Expert Installation',
                description: 'Our certified technicians provide professional installation with attention to every detail.'
              },
              {
                icon: '🔧',
                title: 'Lifetime Support',
                description: 'Complete after-sales service with maintenance support and warranty on all our products.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center card-hover"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection and enhancement solutions for your property
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[var(--primary-color)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[var(--primary-color)] hover:text-blue-800 font-medium cursor-pointer"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our satisfied customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
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
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and quote for your protection needs. Our experts are ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Call Now: +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;