"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const MultiItemCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const slides = [
    {
      id: 1,
      img: "/images/services/knee-replacement.jpg",
      title: "Knee Replacement",
    },
    {
      id: 2,
      img: "/images/services/robotic-spine.jpg",
      title: "Robotic Spine Surgery",
    },
    {
      id: 3,
      img: "/images/services/total-knee-replacement.jpg",
      title: "Total Knee Replacement",
    },
    {
      id: 4,
      img: "/images/services/nerve-roots-decompression.jpg",
      title: "Nerve Roots Decompression",
    },
    {
      id: 5,
      img: "/images/services/vertebroplasty.jpg",
      title: "Vertebroplasty",
    },
    {
      id: 6,
      img: "/images/services/endoscopic-spine-surgery.jpg",
      title: "Endoscopic Spine Surgery",
    },
    {
      id: 7,
      img: "/images/services/hip-replacement.jpg",
      title: "Hip Replacement",
    },
  ];

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % slides.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="max-w-7xl mx-auto text-center my-8 px-4">
      <h2 className="text-4xl font-bold mb-6 text-blue-800">Gallery</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div
              className="bg-white rounded shadow p-0 hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(i)}
            >
              <div className="h-100 w-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="py-2 font-bold text-xl text-blue-700 bg-green-100">
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal - show selected image with controls */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-20 right-15  scale-150 lg:scale-200 text-white text-3xl font-bold hover:text-red-400"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 py-2 hover:text-blue-300"
          >
            &#10094;
          </button>

          {/* Image Display */}
          <img
            src={slides[selectedImage].img}
            alt={slides[selectedImage].title}
            className="max-w-full max-h-full object-contain"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 py-2 hover:text-blue-300"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiItemCarousel;
