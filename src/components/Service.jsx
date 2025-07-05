"use client";

import React, { useState } from "react";

const serviceCards = [
  {
    id: 1,
    category: "Spine",
    title: "Endoscopic Spine Surgery",
    description: "Minimally invasive technique for faster recovery and less pain.",
    href: "/services/endoscopic-spine",
    image: "/images/services/endoscopic-spine.jpeg",
  },
  {
    id: 2,
    category: "Spine",
    title: "Minimally Invasive Spine Surgery (MISS)",
    description: "Precise spinal procedures with less pain, reduced scarring, and quicker return to normal activities.",
    href: "/services/minimally-invasive-spine",
    image: "/images/services/miss.jpg",
  },
  {
    id: 3,
    category: "Joint",
    title: "Joint Replacements - Knee & Hip",
    description: "TKR and THR performed using modern implant technology and high-precision surgical methods.",
    href: "/services/joint-replacement",
    image: "/images/services/joint-replacement.png",
  },
  {
    id: 4,
    category: "Ortho",
    title: "Arthritis & Joint Pain Management",
    description: "Personalized care plans and pain-relief options for arthritis and other degenerative joint disorders.",
    href: "/services/arthritis-management",
    image: "/images/services/arthritis.png",
  },
  {
    id: 5,
    category: "Infection",
    title: "Bone TB & Orthopedic Infections",
    description: "Advanced diagnostic and treatment support for bone tuberculosis and musculoskeletal infections.",
    href: "/services/bone-infections",
    image: "/images/services/bone-tb.jpg",
  },
  {
    id: 6,
    category: "Trauma",
    title: "Fracture & Multiple Injury Care",
    description: "Comprehensive treatment for all types of fractures, trauma cases, and orthopedic emergencies.",
    href: "/services/fracture-treatment",
    image: "/images/services/fracture.jpg",
  },
];

const categories = ["All", "Spine", "Joint", "Ortho", "Infection", "Trauma"];

const ServiceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards =
    selectedCategory === "All"
      ? serviceCards
      : serviceCards.filter((card) => card.category === selectedCategory);

  const visibleCards = showAll ? filteredCards : filteredCards.slice(0, 3);

  return (
    <section className="py-12 bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
          Discover specialized treatments in spine, joint, and orthopedic care — tailored for faster recovery, lasting relief, and enhanced mobility.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-[#f0f2f5] text-blue-600 border-blue-600"
              } hover:bg-blue-100 cursor-pointer transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="relative block max-w-xs bg-[#ebeef8] rounded-md p-4 overflow-hidden m-3 text-decoration-none z-0 group"
            >
              {/* Smooth radial background */}
              <span className="absolute -top-4 -right-4 w-8 h-8 bg-[#155DFC] rounded-full transform scale-100 opacity-0 origin-center transition-all duration-700 ease-in-out group-hover:scale-[35] group-hover:opacity-80 z-[-1]"></span>

              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />

              <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h3>

              <p className="text-[17px] font-normal leading-5 text-[#666] transition-colors duration-300 group-hover:text-white/80">
                {card.description}
              </p>
            </a>
          ))}
        </div>

        {/* Show More / Show Less */}
        {filteredCards.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-sm font-semibold border border-blue-500 text-blue-600 cursor-pointer rounded hover:bg-blue-50 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
