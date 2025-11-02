import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoSlider = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Invisible Grills Installation Process",
      description: "Watch how our expert technicians install premium invisible grills with precision and care.",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
      duration: "2:45",
      category: "Installation",
      fallbackIcon: "🎬"
    },
    {
      id: 2,
      title: "Mosquito Mesh Benefits",
      description: "Discover the advantages of our high-quality mosquito mesh solutions for your home.",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/movie.mp4", // Sample video URL
      duration: "1:30",
      category: "Benefits",
      fallbackIcon: "🏡"
    },
    {
      id: 3,
      title: "Customer Testimonials",
      description: "Hear from our satisfied customers about their experience with SLA Invisible Grills.",
      thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
      duration: "3:20",
      category: "Testimonials",
      fallbackIcon: "👥"
    },
    {
      id: 4,
      title: "Before & After Transformations",
      description: "See the amazing transformations of homes with our protection solutions.",
      thumbnail: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/movie.mp4", // Sample video URL
      duration: "2:15",
      category: "Showcase",
      fallbackIcon: "✨"
    },
    {
      id: 5,
      title: "Maintenance Guide",
      description: "Learn how easy it is to maintain your invisible grills and mesh installations.",
      thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
      duration: "1:45",
      category: "Guide",
      fallbackIcon: "🔧"
    }
  ];

  // Auto-play video slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 6000); // Change video every 6 seconds

    return () => clearInterval(timer);
  }, [videos.length]);

  const handleVideoClick = (index) => {
    setActiveVideo(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Watch our installation process, customer stories, and see the quality that makes us Hyderabad's trusted protection solution provider.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="relative aspect-video overflow-hidden">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    className={`absolute inset-0 ${index === activeVideo ? 'z-10' : 'z-0'}`}
                    initial={{ x: index === 0 ? 0 : '100%' }}
                    animate={{ 
                      x: index === activeVideo ? '0%' : 
                         index < activeVideo ? '-100%' : '100%' 
                    }}
                    transition={{ 
                      type: "tween",
                      ease: "easeInOut", 
                      duration: 0.8 
                    }}
                  >
                    <video
                      src={video.videoUrl}
                      poster={video.thumbnail}
                      controls
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback thumbnail */}
                    <div 
                      className="hidden w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 items-center justify-center relative"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 items-center justify-center absolute inset-0">
                        <div className="text-center text-white">
                          <div className="text-8xl mb-4">{video.fallbackIcon}</div>
                          <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                          <p className="text-sm text-blue-100">{video.duration}</p>
                        </div>
                      </div>
                      {/* Play Button Overlay */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer"
                      >
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {videos[activeVideo].category}
                  </span>
                </div>
                
                {/* Video Navigation Arrows */}
                <button
                  onClick={() => setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => setActiveVideo((prev) => (prev + 1) % videos.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <motion.h3
                  key={activeVideo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-bold text-white mb-2"
                >
                  {videos[activeVideo].title}
                </motion.h3>
                <motion.p
                  key={`desc-${activeVideo}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-300 mb-4"
                >
                  {videos[activeVideo].description}
                </motion.p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300 cursor-pointer transform hover:scale-105">
                      Watch Full Video
                    </button>
                    <button className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:scale-110">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:scale-110">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-sm text-gray-400">
                    {videos[activeVideo].duration}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Playlist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Video Library</h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleVideoClick(index)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeVideo === index
                      ? 'bg-primary-500 shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center ${
                      activeVideo === index ? 'bg-white bg-opacity-20' : 'bg-gray-700'
                    }`}>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <span className="hidden text-2xl">
                        {video.fallbackIcon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium mb-1 ${
                        activeVideo === index ? 'text-white' : 'text-gray-200'
                      }`}>
                        {video.title}
                      </h4>
                      <p className={`text-sm mb-2 line-clamp-2 ${
                        activeVideo === index ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeVideo === index 
                            ? 'bg-white bg-opacity-20 text-white' 
                            : 'bg-gray-700 text-gray-300'
                        }`}>
                          {video.category}
                        </span>
                        <span className={`text-xs ${
                          activeVideo === index ? 'text-blue-100' : 'text-gray-400'
                        }`}>
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* View All Videos Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-xl transition-all duration-300 border border-gray-700 cursor-pointer"
            >
              View All Videos
            </motion.button>
          </motion.div>
        </div>

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '500+', label: 'Happy Customers' },
            { number: '1000+', label: 'Installations' },
            { number: '15+', label: 'Video Tutorials' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSlider;