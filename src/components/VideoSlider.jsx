import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const iframeRefs = useRef([]);

  // Helper function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Helper function to get YouTube thumbnail
  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const videos = [
    {
      id: 1,
      title: "Invisible Grills Installation Process",
      description: "Watch how our expert technicians install premium invisible grills with precision and care.",
      youtubeUrl: "https://youtube.com/shorts/y2ieKQ5P4Bw", // Replace with your actual YouTube URL
      duration: "2:45",
      category: "Installation"
    },
    {
      id: 2,
      title: "Mosquito Mesh Benefits",
      description: "Discover the advantages of our high-quality mosquito mesh solutions for your home.",
      youtubeUrl: "https://youtube.com/shorts/tyBdSB4Vevs", // Replace with your actual YouTube URL
      duration: "1:30",
      category: "Benefits"
    },
    {
      id: 3,
      title: "Customer Testimonials",
      description: "Hear from our satisfied customers about their experience with SLA Invisible Grills.",
      youtubeUrl: "https://youtube.com/shorts/c6YgVE_CNsI", // Replace with your actual YouTube URL
      duration: "3:20",
      category: "Testimonials"
    },
    {
      id: 4,
      title: "Before & After Transformations",
      description: "See the amazing transformations of homes with our protection solutions.",
      youtubeUrl: "https://youtube.com/shorts/qUXvKgCJ3fQ", // Replace with your actual YouTube URL
      duration: "2:15",
      category: "Showcase"
    },
    {
      id: 5,
      title: "Maintenance Guide",
      description: "Learn how easy it is to maintain your invisible grills and mesh installations.",
      youtubeUrl: "https://youtube.com/shorts/UBFiXOkaKw8", // Replace with your actual YouTube URL
      duration: "1:45",
      category: "Guide"
    }
  ];

  // Stop all videos when slide changes
  useEffect(() => {
    iframeRefs.current.forEach((iframe, index) => {
      if (iframe && index !== activeIndex) {
        // Stop non-active videos by reloading iframe src
        const currentSrc = iframe.src;
        iframe.src = currentSrc;
      }
    });
  }, [activeIndex]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
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
            Watch our installation process, customer stories, and see the quality that makes us the trusted protection solution provider.
          </p>
        </motion.div>

        {/* Swiper Video Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={false}
            speed={800}
            loop={true}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {videos.map((video, index) => {
              const videoId = getYouTubeVideoId(video.youtubeUrl);

              return (
                <SwiperSlide key={video.id}>
                  <div className="relative bg-gray-800">
                    {/* YouTube Video Embed */}
                    <div className="relative aspect-video">
                      <iframe
                        ref={(el) => (iframeRefs.current[index] = el)}
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`}
                        title={video.title}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          {video.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    {/* <div className="p-6 lg:p-8 bg-gray-800">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                        {video.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-400 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {video.duration}
                          </span>
                        </div>
                        <a
                          href={video.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-color)]/90 transition-all duration-300 font-medium text-sm flex items-center space-x-2"
                        >
                          <span>Watch on YouTube</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div> */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            className="swiper-button-prev-custom absolute left-2 lg:left-4 top-[35%] -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 lg:p-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 backdrop-blur-sm"
            aria-label="Previous video"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="swiper-button-next-custom absolute right-2 lg:right-4 top-[35%] -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 lg:p-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 backdrop-blur-sm"
            aria-label="Next video"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Video Thumbnail Navigation */}
          {/* <div className="mt-8 grid grid-cols-5 gap-2 lg:gap-4">
            {videos.map((video, index) => {
              const videoId = getYouTubeVideoId(video.youtubeUrl);
              const thumbnail = getYouTubeThumbnail(video.youtubeUrl);
              
              return (
                <button
                  key={video.id}
                  onClick={() => goToSlide(index)}
                  className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                    activeIndex === index 
                      ? 'ring-4 ring-[var(--primary-color)] scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-video bg-gray-700">
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary-color)] h-1"></div>
                  )}
                </button>
              );
            })}
          </div> */}
        </motion.div>

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
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

      {/* Custom Swiper Pagination Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #6b7280;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: var(--primary-color);
          opacity: 1;
        }
        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default VideoSlider;