import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ModalContext } from '../App';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const { openSiteVisitModal } = useContext(ModalContext);

  const slides = [
    {
      id: 1,
      title: "Vertical - Balcony",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Vertical%20Balcony.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Vertical%20Balcony.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/invisible-grills"
    },
    {
      id: 2,
      title: "Horizontal - Balcony",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Horizontal%20Balcony.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Horizontal%20balcony.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/invisible-grills"
    },
    {
      id: 3,
      title: "Horizontal Window",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Horizontal%20Window.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Horizontal%20Window.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/invisible-grills"
    },
    {
      id: 4,
      title: "Vertical Window",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Vertical%20Window.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Vertical%20Window.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/invisible-grills"
    },
    {
      id: 5,
      title: "Pleated Mosquito Mesh",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Pleated%20Mosquito%20Mesh.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Pleated%20mosquito%20Mesh.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/mosquito-mesh"
    },
    {
      id: 6,
      title: "Metal Mesh Lock System",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Metal%20Mesh%20Lock%20System.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Metal%20Mesh%20Lock%20Sysytem.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/mosquito-mesh"
    },
    {
      id: 6,
      title: "Track Less Mosquito Mesh",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Trackless%20Mosquito%20Mesh.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Track%20Less%20mosquito%20mesh.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/mosquito-mesh"
    },
    {
      id: 6,
      title: "Ceiling Cloth Hangers",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Ceiling%20Cloth%20Hangers.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Ceiling%20Cloth%20Hangers.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/cloth-hangers"
    },
    {
      id: 6,
      title: "Wall Mounted Cloth Hangers",
      desktopImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Desktop/Wall%20Mount%20Cloth%20Hangers.png",
      mobileImage: "https://ik.imagekit.io/67x2srjsy/Website/Hero%20Slider/Mobile/Wall%20Mount%20Cloth%20Hangers.png",
      buttonLabel: "Explore More",
      buttonLink: "/services/cloth-hangers"
    }
  ];

  return (
    <div className="relative overflow-hidden" style={{ height: '80vh' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image - Desktop */}
              <div 
                className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url('${slide.desktopImage}')`,
                  backgroundColor: '#1f2937'
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
              </div>
              
              {/* Background Image - Mobile */}
              <div 
                className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url('${slide.mobileImage}')`,
                  backgroundColor: '#1f2937'
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="text-center text-white">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 lg:mb-12 text-shadow leading-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Link
                        to={slide.buttonLink}
                        className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center cursor-pointer min-w-[200px]"
                      >
                        {slide.buttonLabel}
                      </Link>
                      <button
                        onClick={openSiteVisitModal}
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 text-center cursor-pointer min-w-[200px]"
                      >
                        Book Free Site Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(10, 100, 125, 0.8);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          transition: all 0.3s ease;
          padding: 16px;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(10, 100, 125, 1);
          transform: scale(1.05);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
        }
        
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6);
          width: 10px;
          height: 10px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;