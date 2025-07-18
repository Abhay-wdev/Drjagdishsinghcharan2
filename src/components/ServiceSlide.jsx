'use client';

import { useState, useEffect, useRef } from 'react';

export default function ExpertiseSlide() {
  const slides = [
    {
      id: 1,
      image: '/images/home/slide.jpg',
      title: 'Comprehensive Services',
      description:
        'We offer diagnosis, surgical treatments, and rehabilitation care for spine disorders, fractures, joint issues, and all orthopaedic conditions with advanced medical expertise.',
    },
    {
      id: 2,
      image: '/images/home/slide3.png',
      title: 'Advanced Spine Care',
      description:
        'Expert spine care including minimally invasive and robotic spine surgeries with precision and faster recovery.',
    },
    {
      id: 3,
      image: '/images/home/slide4.jpg',
      title: 'Orthopaedic Excellence',
      description:
        'Comprehensive orthopaedic treatments for bone, joint, and muscular issues ensuring holistic recovery.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideInterval = 5000;
  const timerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const startSlider = () => {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, slideInterval);
    };

    if (!isPaused && slideWidth > 0) {
      startSlider();
    }

    return () => clearInterval(timerRef.current);
  }, [slideWidth, slides.length, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-12 px-4 rounded-2xl   overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-8 text-white">
          Spine & <span className="text-[#ffd700]">Orthopaedic</span> Expertise
        </h2>

        {/* Slider Container */}
        <div ref={containerRef} className="relative w-full overflow-hidden">
          {slideWidth > 0 && (
            <div
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentSlide * slideWidth}px)`,
                width: slideWidth * slides.length,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0 px-2 h-full"
                  style={{
                    width: slideWidth,
                    maxWidth: '100%',
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center bg-white rounded-xl p-4 sm:p-6 md:p-8 mx-auto h-full min-h-[400px]">

                    {/* Expertise Image */}
                    <div className="relative flex justify-center h-full">
                      <div className="rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-72 md:h-80">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="h-full flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#003049] mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
                        {slide.description}
                      </p>
                      <button
                        className="bg-[#003049] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#002233] transition text-sm sm:text-base w-max"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Book Appointment
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
