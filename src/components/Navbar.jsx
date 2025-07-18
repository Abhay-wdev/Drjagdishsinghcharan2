"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoChevronDown } from "react-icons/go";

const serviceItems = [
  {
    title: "Spine Surgery",
    description: "Surgical treatments for spinal conditions and deformities.",
    path: "/services/endoscopic-spine-surgery",
  },
  {
    title: "Disc Replacement",
    description: "Advanced procedures to replace damaged spinal discs.",
    path: "/services/disc-replacement-surgery",
  },
  {
    title: "Minimally Invasive Spine Surgery",
    description: "Low-impact spinal surgeries for faster recovery.",
    path: "/services/minimally-invasive-spine-surgery",
  },
  {
    title: "Spinal Deformity Correction",
    description:
      "Realigning the spine to restore balance and relieve chronic pain through advanced surgical care.",
    path: "/services/spinal-deformity-correction",
  },
  {
    title: "Fracture & Trauma Care",
    description:
      "Swift recovery starts here with expert treatment for bone injuries and accidents.",
    path: "/services/fracture-trauma-care",
  },
  {
    title: "Endoscopic Spine & Arthroscopic Surgery",
    description:
      "Minimally invasive treatments for spine and joint conditions using endoscopic and arthroscopic techniques.",
    path: "/services/endoscopic-spine-orthroscopic-surgery",
  },
  {
    title: "Sports Injury Treatment",
    description: "Specialized care and rehabilitation for sports injuries.",
    path: "/services/arthroscopy-Sports-injury-care",
  },
  {
    title: "Joint Replacement",
    description:
      "Hip, knee, and other joint replacement surgeries for improved mobility.",
    path: "/services/joint-replacement-surgery",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false); // Close dropdown on page change
  }, [pathname]);

  const isActive = (href) => pathname === href;

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      // md breakpoint
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className="bg-white border-b border-gray-200 z-50 w-[100%] sticky top-0"
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3"
          onClick={handleLinkClick}
        >
          <img
            src="/images/home/logo.png"
            className="h-10 sm:h-12"
            alt="Logo"
          />
          <span className="text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-blue-900 whitespace-nowrap">
            AGASTYA <span className="hidden sm:inline">(अगस्त्य)</span> SPINE &
            ORTHO AAROGYAM
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 ml-auto"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center font-medium gap-3 md:gap-6 p-4 md:p-0 border md:border-0 rounded-lg bg-blue-50 md:bg-transparent w-full md:w-auto">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/")
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                Home
              </Link>
            </li>

            <li className="relative w-full md:w-auto">
              <span className="flex nowrap">
                <Link href="/services" onClick={handleLinkClick}>
                  <button className="flex items-center gap-1 py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0">
                    Services
                  </button>
                </Link>
                <div
                  className="text-black hover:text-blue-700 cursor-pointer flex items-center hover:font-bold"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <GoChevronDown />
                </div>
              </span>
              {isDropdownOpen && (
                <div className="absolute left-0 md:left-1/2 top-full mt-2 w-full md:w-[700px] md:-translate-x-1/2 bg-white border shadow-xl rounded-xl max-h-[70vh] overflow-y-auto z-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    <ul className="space-y-4">
                      {serviceItems
                        .slice(0, Math.ceil(serviceItems.length / 2))
                        .map((item, index) => (
                          <li
                            key={`left-${index}`}
                            className="border border-blue-200 rounded-lg hover:shadow-md transition"
                          >
                            <Link
                              href={item.path}
                              onClick={handleLinkClick}
                              className="block p-4 hover:bg-blue-100 rounded-lg"
                            >
                              <div className="font-semibold text-[#0A2A7F]">
                                {item.title}
                              </div>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <ul className="space-y-4">
                      {serviceItems
                        .slice(Math.ceil(serviceItems.length / 2))
                        .map((item, index) => (
                          <li
                            key={`right-${index}`}
                            className="border border-blue-200 rounded-lg hover:shadow-md transition"
                          >
                            <Link
                              href={item.path}
                              onClick={handleLinkClick}
                              className="block p-4 hover:bg-blue-100 rounded-lg"
                            >
                              <div className="font-semibold text-[#0A2A7F]">
                                {item.title}
                              </div>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/about")
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/blogs"
                onClick={handleLinkClick}
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/blogs")
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/contact")
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                Contact
              </Link>
            </li>

            <li className="w-full md:w-auto">
               <Link href="/book-appointment">
              <button className="relative mb-3  px-5 py-2 text-white font-bold rounded-full bg-[#006bb3] border-[3px] border-white/30 flex items-center justify-center gap-2 text-sm cursor-pointer overflow-hidden shadow-[0px_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/90 group">
                {/* Shine Effect */}
                <span className="absolute top-0 left-[-100px] w-[100px] h-full opacity-60 bg-gradient-to-r from-transparent via-white to-transparent animate-shine"></span>
                {/* Icon */}
                <svg
                  className="w-7 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                Book Appointment
              </button>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
