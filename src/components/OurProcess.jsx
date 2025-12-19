import React from 'react';
import { motion } from 'framer-motion';

const OurProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Consultation',
      description: 'Initial discussion to understand your requirements and provide expert advice',
      icon: '👥',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Site Visit & Material Samples',
      description: 'Professional site assessment and material sample presentation',
      icon: '🏠',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Tailor-made Solutions & Quotation',
      description: 'Customized solutions designed specifically for your needs with detailed pricing',
      icon: '📋',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      title: 'Materials & Design Confirmation',
      description: 'Final confirmation of materials, design specifications, and project timeline',
      icon: '✅',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 5,
      title: 'Final Quotation',
      description: 'Comprehensive final quotation with all details and terms',
      icon: '💰',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 6,
      title: 'Installation & Warranty',
      description: 'Professional installation by certified technicians with comprehensive warranty',
      icon: '🔧',
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 7,
      title: 'Handover',
      description: 'Project completion, quality check, and formal handover to customer',
      icon: '🎯',
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      id: 8,
      title: 'Customer Support',
      description: 'Ongoing support and maintenance services for complete peace of mind',
      icon: '🤝',
      color: 'bg-teal-100',
      iconColor: 'text-teal-600'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-lg sm:text-xl mb-6 sm:mb-8 shadow-lg">
            OUR PROCESS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            How We Work With You
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined 8-step process ensures quality delivery, transparent communication, and complete customer satisfaction at every stage.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {/* Curved Road Path */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg 
              viewBox="0 0 800 1400" 
              className="w-full max-w-lg lg:max-w-xl h-auto opacity-60"
              style={{ maxHeight: '1000px' }}
            >
              {/* Main Road */}
              <path
                d="M400 80 
                   C 180 180, 180 240, 400 320
                   C 620 400, 620 480, 400 560
                   C 180 640, 180 720, 400 800
                   C 620 880, 620 960, 400 1040
                   C 180 1120, 180 1200, 400 1280"
                stroke="#374151"
                strokeWidth="50"
                fill="none"
              />
              {/* Road Center Line */}
              <path
                d="M400 80 
                   C 180 180, 180 240, 400 320
                   C 620 400, 620 480, 400 560
                   C 180 640, 180 720, 400 800
                   C 620 880, 620 960, 400 1040
                   C 180 1120, 180 1200, 400 1280"
                stroke="#FBBF24"
                strokeWidth="4"
                fill="none"
                strokeDasharray="30 20"
              />
              {/* Road Edges */}
              <path
                d="M400 80 
                   C 180 180, 180 240, 400 320
                   C 620 400, 620 480, 400 560
                   C 180 640, 180 720, 400 800
                   C 620 880, 620 960, 400 1040
                   C 180 1120, 180 1200, 400 1280"
                stroke="#1F2937"
                strokeWidth="6"
                fill="none"
                transform="translate(-22, 0)"
              />
              <path
                d="M400 80 
                   C 180 180, 180 240, 400 320
                   C 620 400, 620 480, 400 560
                   C 180 640, 180 720, 400 800
                   C 620 880, 620 960, 400 1040
                   C 180 1120, 180 1200, 400 1280"
                stroke="#1F2937"
                strokeWidth="6"
                fill="none"
                transform="translate(22, 0)"
              />
              {/* Road Markers */}
              <circle cx="400" cy="140" r="8" fill="#EF4444" opacity="0.8"/>
              <circle cx="300" cy="220" r="8" fill="#EF4444" opacity="0.8"/>
              <circle cx="500" cy="380" r="8" fill="#EF4444" opacity="0.8"/>
              <circle cx="300" cy="520" r="8" fill="#EF4444" opacity="0.8"/>
              <circle cx="500" cy="680" r="8" fill="#EF4444" opacity="0.8"/>
              <circle cx="300" cy="820" r="8" fill="#EF4444" opacity="0.8"/>
              <circle cx="500" cy="980" r="8" fill="#EF4444" opacity="0.8"/>
              <circle cx="400" cy="1120" r="8" fill="#EF4444" opacity="0.8"/>
            </svg>
          </div>

          {/* Process Steps */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover mb-6 lg:mb-8
                  ${index % 2 === 0 ? 'md:mr-12 lg:mr-16' : 'md:ml-12 lg:ml-16'}
                `}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg">
                  {step.id}
                </div>

                {/* Content */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  {/* Icon */}
                  <div className={`${step.color} ${step.iconColor} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0`}>
                    {step.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow for flow indication */}
                {index < processSteps.length - 1 && (
                  <div className={`
                    hidden md:block absolute top-1/2 transform -translate-y-1/2
                    ${index % 2 === 0 ? '-right-8 lg:-right-10' : '-left-8 lg:-left-10'}
                  `}>
                    <div className="w-6 h-6 bg-[var(--primary-color)] rotate-45 shadow-lg"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Experience our streamlined process and get your project completed with excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[var(--primary-color)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="tel:+919885012999"
                className="border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Call: +91 9885 012 999
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;