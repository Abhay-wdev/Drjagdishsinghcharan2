'use client';

import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      image: '/images/home/slide1.jpg',
      title: 'Welcome to Our Service',
      description: 'High quality and reliable solutions tailored to your needs.',
      buttonText: 'Book Appointment',
    },
    {
      id: 2,
      image: '/images/home/slide.jpg',
      title: 'Trusted by Thousands',
      description: 'Our customers love what we do.',
      buttonText: 'Book Appointment',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const slideInterval = 4000;
  const timerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      startAutoSlide();
      return () => stopAutoSlide();
    }
  }, [containerWidth, slides.length]);

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);
  };

  const stopAutoSlide = () => {
    clearInterval(timerRef.current);
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  };

  const sliderStyle = {
    transform: `translateX(-${currentSlide * containerWidth}px)`,
    transition: 'transform 0.7s ease-in-out',
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
      className="relative w-full h-[700px] overflow-hidden"
      aria-label="Hero image slider"
    >
      {/* Slides */}
      {containerWidth > 0 && (
        <div style={sliderStyle}>
          {slides.map((slide) => (
            <div key={slide.id} style={slideStyle}>
              {/* Make sure parent is relative and has height! */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-start px-6 md:px-20">
                <div className="max-w-xl  p-4 rounded-2xl  text-left">
                  <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white text-lg sm:text-xl mb-6">
                    {slide.description}
                  </p>
                  <button className="special">
                  {slide.buttonText}
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Navigation Buttons */}
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute   left-1/4 transform -translate-x-1/2 sm:top-1/2 sm:left-4 sm:transform sm:-translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 z-20 focus:outline-none"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={18} className="sm:size-5" />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute   right-1/4 transform translate-x-1/2 sm:top-1/2 sm:right-4 sm:transform sm:-translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 z-20 focus:outline-none"
        aria-label="Next Slide"
      >
        <FaChevronRight size={18} className="sm:size-5" />
      </button>
    </section>
  );
}
