'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, MapPin, Award } from 'lucide-react';

export default function HeroSectiontwo() {
  const slides = [
    {
      id: 1,
      image: '/images/home/slide3.png',
      title: 'Expert Spine Care',
      subtitle: 'Dr. Jagdish Singh Charan',
      description: 'Advanced spine surgery with precision and compassion. Your journey to pain-free living starts here.',
      specialty: 'Minimally Invasive Spine Surgery',
    },
    {
      id: 5,
      image: '/images/home/slide61.webp',
      imageMobile: '/images/home/slide6.webp',
      title: 'Agastya Spine & Ortho Aarogyam',
      subtitle: 'Excellence in Spine & Orthopedic Care',
      description: 'Delivering advanced treatments with expertise, ethics, and empathy for your complete musculoskeletal health.',
      specialty: 'Trusted Spine & Ortho Center',
      scale: 1,
    },
    {
      id: 2,
      image: '/images/home/slide.jpg',
      title: 'Orthopedic Excellence',
      subtitle: 'Agastya Spine & Ortho Aarogyam',
      description: 'Comprehensive orthopedic care with state-of-the-art technology and personalized treatment plans.',
      specialty: 'Complete Orthopedic Solutions',
    },
    {
      id: 3,
      image: '/images/home/slide5.png',
      title: 'Advanced Spine Surgery',
      subtitle: 'Precision & Innovation',
      description: 'Leading-edge surgical techniques for complex spine conditions with faster recovery times.',
      specialty: 'Robotic Spine Surgery',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const slideInterval = 5000;
  const timerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateWidth();
    checkScreenSize();

    window.addEventListener('resize', updateWidth);
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    stopAutoSlide();
    if (containerWidth > 0 && !isHovered) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [containerWidth, slides.length, isHovered]);

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);
  };

  const stopAutoSlide = () => {
    clearInterval(timerRef.current);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const sliderStyle = {
    transform: `translateX(-${currentSlide * containerWidth}px)`,
    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    width: `${slides.length * containerWidth}px`,
    height: '100%',
  };

  const slideStyle = {
    flexShrink: 0,
    width: containerWidth ? `${containerWidth}px` : '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-teal-800"
      aria-label="Hero Section"
    >
      {containerWidth > 0 && (
        <div style={sliderStyle}>
          {slides.map((slide) => (
            <div key={slide.id} style={slideStyle}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div
                  className={`absolute w-full inset-0 bg-cover bg-no-repeat transition-transform duration-700 hover:scale-105 ${
                    slide.id === 5 || slide.id === 2 ? 'bg-[66.2%_center] sm:bg-center' : 'bg-center'
                  }`}
                  style={{
                    backgroundImage:
                      slide.id === 5
                        ? `url(${isMobile ? slide.imageMobile : slide.image})`
                        : `url(${slide.image})`,
                    transform: `scale(${slide.scale || 1})`,
                    zIndex: 0,
                  }}
                />

                {/* ✅ Gradient Overlay only for id=5 on large screens */}
                 
                 {slide.id === 5 && (
                  <div className="absolute inset-0 w-full h-full z-10 opacity-60 bg-blue-900 lg:bg-gradient-to-r lg:from-blue-900 lg:via-blue-900 lg:to-transparent lg:w-1/2 lg:bg-blue-900/0" />
                )}
                
              

                {/* Content Overlay */}
                <div
                  className="absolute inset-0 z-20 flex items-center justify-start px-6 sm:px-12 lg:px-20"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="max-w-3xl text-left animate-fadeIn">
                    <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-300/30 mb-6">
                      <Award className="w-4 h-4 text-teal-300 mr-2" />
                      <span className="text-teal-200 text-sm font-medium">{slide.specialty}</span>
                    </div>

                    <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">
                        {slide.title}
                      </span>
                    </h1>

                    <h2 className="text-teal-200 text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 opacity-90">
                      {slide.subtitle}
                    </h2>

                    <p className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>

                    <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:flex-row gap-4 sm:gap-6">
                      <Link href="/book-appointment">
                        <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                          <span className="relative z-10 flex items-center justify-center">
                            <Calendar className="w-5 h-5 mr-2" />
                            Book Appointment
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                      </Link>

                      <Link href="tel:+91 8003474733">
                        <div className="group px-8 cursor-pointer py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                          <span className="flex items-center justify-center">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-8 flex items-center text-white/80">
                      <MapPin className="w-4 h-4 mr-2 text-teal-300" />
                      <span className="text-sm">Agastya Spine & Ortho Aarogyam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Navigation Buttons */}
      {/* Large screens: center vertically */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Small screens: buttons at bottom */}
      <div className="flex sm:hidden absolute inset-x-0 bottom-6 justify-between px-6 z-20">
        <button
          onClick={handlePrev}
          className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>

        <button
          onClick={handleNext}
          className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
}
