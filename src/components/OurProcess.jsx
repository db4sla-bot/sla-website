import React from 'react';
import { motion } from 'framer-motion';

const OurProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Consultation',
      description: 'Initial discussion to understand your requirements and provide expert advice',
      icon: '�'
    },
    {
      id: 2,
      title: 'Site Visit & Material Samples',
      description: 'Professional site assessment and material sample presentation',
      icon: '🏠'
    },
    {
      id: 3,
      title: 'Tailor-made Solutions & Quotation',
      description: 'Customized solutions designed specifically for your needs with detailed pricing',
      icon: '📋'
    },
    {
      id: 4,
      title: 'Materials & Design Confirmation',
      description: 'Final confirmation of materials, design specifications, and project timeline',
      icon: '✅'
    },
    {
      id: 5,
      title: 'Final Quotation',
      description: 'Comprehensive final quotation with all details and terms',
      icon: '💰'
    },
    {
      id: 6,
      title: 'Installation & Warranty',
      description: 'Professional installation by certified technicians with comprehensive warranty',
      icon: '🔧'
    },
    {
      id: 7,
      title: 'Handover',
      description: 'Project completion, quality check, and formal handover to customer',
      icon: '🎯'
    },
    {
      id: 8,
      title: 'Customer Support',
      description: 'Ongoing support and maintenance services for complete peace of mind',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block bg-[#0A647D] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-lg sm:text-xl mb-6 sm:mb-8 shadow-lg">
            OUR PROCESS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            How We Work With You
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined 8-step process ensures quality delivery, transparent communication, and complete customer satisfaction at every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Hidden on Mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#99CFDF] via-[#339FBF] to-[#0A647D]"></div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#99CFDF] via-[#339FBF] to-[#0A647D]"></div>

          {/* Process Steps */}
          <div className="relative space-y-8 sm:space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'} pl-16 md:pl-0`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-l-4 border-[#0A647D]">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#339FBF] to-[#0A647D] rounded-xl flex items-center justify-center text-2xl shadow-md">
                        {step.icon}
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Circle/Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className="relative">
                    {/* Outer Ring */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#339FBF] to-[#0A647D] rounded-full flex items-center justify-center shadow-lg ring-4 ring-white relative z-20">
                      {/* Step Number */}
                      <span className="text-white font-bold text-xl z-30">
                        {step.id}
                      </span>
                    </div>
                    
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 rounded-full bg-[#339FBF] animate-ping opacity-20 z-10"></div>
                  </div>
                </div>

                {/* Empty Space for Alignment (Desktop) */}
                <div className="hidden md:block md:w-5/12"></div>
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