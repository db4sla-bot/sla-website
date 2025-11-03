import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import VideoSlider from '../components/VideoSlider';
import OurProcess from '../components/OurProcess';
import SiteVisitModal from '../components/SiteVisitModal';
import { ModalContext } from '../App';

const Home = () => {
  const { isSiteVisitModalOpen, closeSiteVisitModal } = useContext(ModalContext);





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
      location: 'Vengal Rao Nagar, Nellore',
      rating: 5,
      text: 'Excellent work by SLA team! The invisible grills are perfectly installed and the quality is outstanding. Highly recommended!'
    },
    {
      name: 'Priya Sharma',
      location: 'Magunta Layout, Nellore',
      rating: 5,
      text: 'Very professional service. The mosquito mesh works perfectly and the installation was done without any mess. Great experience!'
    },
    {
      name: 'Venkat Reddy',
      location: 'Vidya Nagar, Nellore',
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
      {/* Site Visit Modal - Auto display modal */}
      <SiteVisitModal isOpen={isSiteVisitModalOpen} onClose={closeSiteVisitModal} />
      
      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Video Slider */}
      <VideoSlider />

      {/* About SLA Invisible Grills Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="text-[var(--primary-color)] font-semibold text-lg">About SLA</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  About SLA Invisible Grills
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  We are a modern team in home safety, delivering invisible grill solutions you can trust.
                </p>
                
                <p>
                  <strong>SRI LAKSHMI ANANYA INVISIBLE GRILLS</strong> was established in Nellore in 2024. We are delighted to introduce a sleek and stylish invisible grills as a best alternative solution to traditional metal grills.
                </p>
                
                <p>
                  We use only high-quality durable stainless steel materials and accessories to ensure long-lasting product delivery to our beloved customers. Our experienced team is focused on delivering personalized modern safety solutions that meet the unique needs of each client.
                </p>
                
                <p>
                  Our innovative designs ensure security while maintaining an un-obstructed view, making them ideal for homes, offices, and high-rise buildings. Our main AIM is to provide a stylish safety solution for your family without compromising security.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/services"
                  className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 text-center cursor-pointer"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Image/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white font-bold">SLA</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Est. 2024</h3>
                  <p className="text-gray-600">Nellore, Andhra Pradesh</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">100%</div>
                    <div className="text-sm text-gray-600">Quality Materials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Customer Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">Expert</div>
                    <div className="text-sm text-gray-600">Installation Team</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">Modern</div>
                    <div className="text-sm text-gray-600">Safety Solutions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
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
              protection solutions for homes and commercial spaces.
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

      {/* Key Features of Invisible Grills */}
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
              Key Features of Invisible Grills
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advanced features that make invisible grills the perfect choice for modern homes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Kids Safety",
                description: "Invisible grills provide strong protection, especially in high-rise buildings. They prevent accidental falls, making them ideal for homes with children and pets."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Anti Rust",
                description: "Made from high-tensile stainless steel, the grills are rustproof and weather-resistant. This ensures durability and a long-lasting, clean appearance."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                ),
                title: "Anti Bird",
                description: "The grills act as a barrier against birds, preventing them from sitting, entering, or nesting in your balconies or windows. This keeps your space clean and hygienic."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Panoramic View",
                description: "The slim, almost invisible wires allow for an uninterrupted outside view. You enjoy full visibility and natural light without compromising on safety."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Fire Evacuation Friendly",
                description: "In case of emergencies like fire, the wires can be cut quickly to allow safe evacuation. This feature adds an extra layer of safety during critical times."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Low Maintenance",
                description: "Invisible grills require no painting, polishing, or regular cleaning. Once installed, they stay neat and functional with minimal effort."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-[var(--primary-color)] mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why You Should Choose SLA Invisible Grilles Over Traditional Grills
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the clear advantages of modern invisible grills compared to traditional metal grills
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--primary-color)] text-white">
                    <th className="py-4 px-6 text-left font-semibold">Feature</th>
                    <th className="py-4 px-6 text-center font-semibold">SLA Invisible Grills</th>
                    <th className="py-4 px-6 text-center font-semibold">Traditional Grills</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-gray-900">Rust Proof</td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                          ✓ Yes
                        </span>
                        <p className="text-sm text-gray-600">Made with 316 Marine Grade stainless steel, entirely rust-proof and suitable for coastal regions.</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-2">
                          ✗ No
                        </span>
                        <p className="text-sm text-gray-600">Being made of iron, they can rust over time on continuous exposure to sun and moisture, affecting longevity.</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-gray-900">Weather Proof</td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                          ✓ Yes
                        </span>
                        <p className="text-sm text-gray-600">Made with 316 Marine Grade stainless steel, entirely weather-proof and suitable for coastal regions.</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-2">
                          ✗ No
                        </span>
                        <p className="text-sm text-gray-600">Being made of iron, they can rust over time on continuous exposure to sun and moisture, affecting longevity.</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-gray-900">Kids Safety</td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                          Safe
                        </span>
                        <p className="text-sm text-gray-600">Made with 100% chemical free materials, completely safe for kids to play with. Safe even if kids/pets fancy licking them.</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-2">
                          Unsafe
                        </span>
                        <p className="text-sm text-gray-600">These grills rust easily and paint can be seen chipping off from exterior. Can be harmful for kids to play with and almost fatal when ingested.</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-gray-900">View Design</td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                          Great unobstructed view
                        </span>
                        <p className="text-sm text-gray-600">Being only 2mm in diameter, you can enjoy an unhindered view from your high rise building windows or balconies.</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-2">
                          Spoils your view
                        </span>
                        <p className="text-sm text-gray-600">Being thick in nature, they prevent you from enjoying the panoramic view from your window or balcony.</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-gray-900">Maintenance</td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                          Hassle-free
                        </span>
                        <p className="text-sm text-gray-600">You can easily clean without using any cloth by merely pulling the strings of the grill to jerk off the dust.</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-2">
                          Tough to maintain
                        </span>
                        <p className="text-sm text-gray-600">The only way to clean your grills is by wiping with a piece of cloth or some other duster, making it a tedious job.</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-gray-900">Fire Safety</td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                          Safe
                        </span>
                        <p className="text-sm text-gray-600">In case of a fire, you can easily evacuate by cutting the cables using a wire cutter.</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-2">
                          Hard To Cut
                        </span>
                        <p className="text-sm text-gray-600">Does not serve as an emergency exit at all during a fire or any other mishap.</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6 font-medium text-gray-900">Interior Looks</td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                          Superior
                        </span>
                        <p className="text-sm text-gray-600">Believe it or not, invisible grills enhance your home's interiors and are aesthetically stylish, giving a modern look to your space.</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-2">
                          Outdated
                        </span>
                        <p className="text-sm text-gray-600">Being traditional in nature, they don't improve the face value of your space. Additionally, they make your balcony and windows boring and outdated.</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
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

      {/* Our Process Section */}
      <OurProcess />

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
                href="tel:+919885001299"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Call Now: +91 98850 1299
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;