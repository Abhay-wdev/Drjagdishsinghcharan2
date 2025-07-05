"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoChevronDown } from "react-icons/go";

const serviceItems = [
  { title: "Spine Surgery", description: "Surgical treatment for spinal conditions and deformities.", path: "/services/service1" },
  { title: "Disc Replacement", description: "Advanced procedures to replace damaged spinal discs.", path: "/services/service3" },
  { title: "Minimally Invasive Spine Surgery", description: "Low-impact spinal surgery for faster fit recovery.", path: "/services/service5" },
  { title: "Spinal Deformity Correction", description: "Realigning the spine, restoring balance, and relieving chronic pain through advanced surgical care.", path: "/services/service4" },
  { title: "Fracture & Trauma Care", description: "Swift Recovery Starts Here – Expert Treatment for Bone Injuries and Accidents", path: "/services/service8" },
  { title: "Endoscopic Spine & Arthroscopic Surgery", description: "Treatment for Endoscopic Spine & Arthroscopic Surgery.", path: "/services/service" },
  { title: "Sports Injury Treatment", description: "Specialized care and rehabilitation for sports injuries.", path: "/services/service7" },
  { title: "Joint Replacement", description: "Hip, knee, and other joint replacement surgeries.", path: "/services/service6" },
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
    if (window.innerWidth < 768) { // md breakpoint
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-200 z-50 w-[100%] sticky top-0">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
          <img src="/images/home/logo.png" className="h-10 sm:h-12" alt="Logo" />
          <span className="text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-blue-900 whitespace-nowrap">
            AGASTYA <span className="hidden sm:inline">(अगस्त्य)</span> SPINE & ORTHO AAROGYAM
             
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
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row items-start md:items-center font-medium gap-3 md:gap-6 p-4 md:p-0 border md:border-0 rounded-lg bg-blue-50 md:bg-transparent w-full md:w-auto">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/") ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"
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
                      {serviceItems.slice(0, Math.ceil(serviceItems.length / 2)).map((item, index) => (
                        <li key={`left-${index}`} className="border border-blue-200 rounded-lg hover:shadow-md transition">
                          <Link href={item.path} onClick={handleLinkClick} className="block p-4 hover:bg-blue-100 rounded-lg">
                            <div className="font-semibold text-[#0A2A7F]">{item.title}</div>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-4">
                      {serviceItems.slice(Math.ceil(serviceItems.length / 2)).map((item, index) => (
                        <li key={`right-${index}`} className="border border-blue-200 rounded-lg hover:shadow-md transition">
                          <Link href={item.path} onClick={handleLinkClick} className="block p-4 hover:bg-blue-100 rounded-lg">
                            <div className="font-semibold text-[#0A2A7F]">{item.title}</div>
                            <p className="text-sm text-gray-600">{item.description}</p>
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
                  isActive("/about") ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"
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
                  isActive("/blogs") ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"
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
                  isActive("/contact") ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"
                }`}
              >
                Contact
              </Link>
            </li>

            <li className="w-full md:w-auto">
              <Link href="/book-appointment" onClick={handleLinkClick} className="block w-full">
                <button className="group cursor-pointer relative inline-flex h-[calc(30px+8px)] items-center justify-center rounded-full bg-blue-600 pl-3 pr-14 font-medium text-neutral-50">
                  <span className="z-10 pr-2 font-bold">Book Appointment</span>
                  <div className="absolute right-1 inline-flex h-8 w-10 items-center justify-end rounded-full bg-[#003153] transition-[width] group-hover:w-[calc(100%-8px)]">
                    <div className="mr-3.5 flex items-center justify-center">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-50">
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
