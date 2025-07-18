"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";

export default function ServiceSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // 🆕 Track mount status
  const slideRef = useRef(null);

  // mobile check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // set mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const properties = {
    duration: 3000,
    transitionDuration: 800,
    infinite: true,
    indicators: false,
    arrows: !isMobile,
    autoplay: true,
    pauseOnHover: true,
    onChange: (_, newIndex) => setActiveIndex(newIndex),
  };

  const handleDotClick = (i) => slideRef.current?.goTo(i);

  return (
    <div className="relative h-[300px] w-full overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      {/* blobs */}
      <div className="absolute -top-20 -right-20 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

      <Slide {...properties} ref={slideRef}>
        {slides.map((slide, index) => (
          <div key={index} className="each-slide-effect">
            <div className="relative h-[300px] w-full">
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent z-10" />

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={index === 0}
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyIDMiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjMiIGZpbGw9IiMxZTI5M2IiLz48L3N2Zz4="
                className="object-cover"
              />

              {/* content */}
              <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-24 z-20">
                <div
                  className={`max-w-xl space-y-4 text-center transition-opacity duration-500 ${
                    isMounted ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="inline-block rounded-full bg-blue-600/20 px-3 py-1 backdrop-blur-sm text-xs font-medium text-blue-200">
                    Orthopedic Specialist
                  </span>

                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    {slide.title}
                  </h2>

                  <p className="text-sm md:text-lg text-gray-100 max-w-md mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>

      {/* dots */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className="mx-2 p-2 focus:outline-none"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className={`relative h-2 w-2 rounded-full transition-all ${
                activeIndex === i
                  ? "bg-blue-500 scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            >
              {activeIndex === i && (
                <span className="absolute -inset-1 rounded-full bg-blue-500/30 animate-ping" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
