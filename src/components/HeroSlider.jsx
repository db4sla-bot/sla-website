import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Premium Invisible Grills",
      subtitle: "Transparent Protection Without Compromising Views",
      description: "Experience the perfect blend of safety and aesthetics with our premium invisible grills. Protect your loved ones while maintaining unobstructed views.",
      buttonText: "Explore Invisible Grills",
      buttonLink: "/services",
      bgColor: "from-blue-600 to-blue-800",
      image: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/1.jpg?updatedAt=1762091645922",
      fallbackIcon: "🏠"
    },
    {
      id: 2,
      title: "Mosquito Mesh Solutions",
      subtitle: "Advanced Insect Protection for Your Home",
      description: "Keep your home insect-free with our high-quality mosquito mesh. Enjoy fresh air without unwanted guests.",
      buttonText: "View Mesh Solutions",
      buttonLink: "/services",
      bgColor: "from-green-600 to-green-800",
      image: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/2.jpg?updatedAt=1762091645902",
      fallbackIcon: "🦟"
    },
    {
      id: 3,
      title: "Smart Cloth Hangers",
      subtitle: "Maximize Your Drying Space Efficiently",
      description: "Revolutionary cloth hanging solutions designed for modern homes. Weather-resistant and space-optimized.",
      buttonText: "Discover Solutions",
      buttonLink: "/services",
      bgColor: "from-purple-600 to-purple-800",
      image: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/3.jpg?updatedAt=1762091646162",
      fallbackIcon: "👕"
    },
    {
      id: 4,
      title: "Artificial Grass",
      subtitle: "Transform Spaces with Premium Synthetic Lawn",
      description: "Create beautiful green spaces without maintenance. Perfect for balconies, terraces, and decorative areas.",
      buttonText: "See Grass Options",
      buttonLink: "/services",
      bgColor: "from-emerald-600 to-emerald-800",
      image: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/4.webp?updatedAt=1762091646189",
      fallbackIcon: "🌱"
    },
    {
      id: 5,
      title: "Bird Spikes",
      subtitle: "Humane Bird Control Solutions",
      description: "Effective bird deterrent systems that protect your property while ensuring the safety of our feathered friends.",
      buttonText: "Learn About Spikes",
      buttonLink: "/services",
      bgColor: "from-orange-600 to-orange-800",
      image: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/5.jpg?updatedAt=1762091645909",
      fallbackIcon: "🐦"
    },
    {
      id: 6,
      title: "Complete Protection Package",
      subtitle: "All-in-One Safety Solutions",
      description: "Comprehensive protection solutions combining invisible grills, mosquito mesh, and more for complete home safety.",
      buttonText: "View All Services",
      buttonLink: "/services",
      bgColor: "from-indigo-600 to-indigo-800",
      image: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/6.webp?updatedAt=1762091646186",
      fallbackIcon: "🛡️"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Autoplay every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
            initial={{ x: index === 0 ? 0 : '100%' }}
            animate={{ 
              x: index === currentSlide ? '0%' : 
                 index < currentSlide ? '-100%' : '100%' 
            }}
            transition={{ 
              type: "tween",
              ease: "easeInOut", 
              duration: 0.8 
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url('${slide.image}')`,
                backgroundColor: '#1f2937' // fallback gray color
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#00000045] bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                  {/* Text Content - Left Half */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: index === currentSlide ? 0 : -100, opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-left"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: index === currentSlide ? 0 : 20, opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-lg font-medium text-blue-200 mb-4"
                    >
                      {slide.subtitle}
                    </motion.div>
                    
                    <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: index === currentSlide ? 0 : 30, opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-shadow leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: index === currentSlide ? 0 : 20, opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg sm:text-xl mb-8 text-blue-100 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: index === currentSlide ? 0 : 20, opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link
                        to={slide.buttonLink}
                        className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center cursor-pointer"
                      >
                        {slide.buttonText}
                      </Link>
                      <Link
                        to="/contact"
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
                      >
                        Get Free Quote
                      </Link>
                    </motion.div>
                  </motion.div>
                  
                  {/* Empty Right Half - for image background visibility */}
                  <div className="hidden lg:block"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSlider;