"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceItems = [
  {
    title: "Online Stores",
    description: "Connect with third-party tools that you're already using.",
    path: "/services/online-stores",
  },
  {
    title: "Segmentation",
    description: "Connect with third-party tools that you're already using.",
    path: "/services/segmentation",
  },
  {
    title: "Marketing CRM",
    description: "Connect with third-party tools that you're already using.",
    path: "/services/marketing-crm",
  },
];

export default function Navbarone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef();
  const pathname = usePathname();

  // Close menu and dropdowns on outside click
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

  const isActive = (href) => pathname === href;

  return (
    <nav ref={navRef} className="bg-white  border-gray-200 dark:border-gray-700 relative z-40">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto py-2 px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/home/logo.png" className="h-10 sm:h-12" alt="Logo" />
          <span className="self-center text-[clamp(1rem,2vw,1.2rem,2rem)] font-semibold whitespace-nowrap dark:text-blue-900 hide-764-1038">
  AGASTYA <span className="hidden sm:inline">(अगस्त्य)</span> SPINE & ORTHO AAROGY
</span>



        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto mt-4 md:mt-0`}>
        <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 md:border-0 rounded-lg bg-blue-50 md:bg-white md:space-x-8 rtl:space-x-reverse">

            {/* Home */}
            <li className="hover:bg-blue-200 md:hover:bg-transparent rounded-2xl">
              <Link
                href="/"
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  isActive("/") ? "text-blue-700" : "text-gray-700 hover:text-white-700"
                }`}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="hover:bg-blue-200 md:hover:bg-transparent rounded-2xl relative"  >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0"
              >
                Services
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 6">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 md:left-1/2 top-full z-50 mt-3 w-full md:w-[700px] md:-translate-x-1/2 bg-white border shadow-xl rounded-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    {[0, 1].map((col) => (
                      <ul key={col} className="space-y-4">
                        {serviceItems.map((item, index) => (
                          <li key={`${col}-${index}`} className="border border-blue-300 rounded-lg hover:shadow-md transition">
                            <Link href={item.path} className="block p-4 rounded-lg hover:bg-blue-100">
                              <div className="font-semibold text-[#0A2A7F]">{item.title}</div>
                              <span className="text-sm text-gray-600">{item.description}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* About Us */}
            <li className="hover:bg-blue-200 md:hover:bg-transparent rounded-2xl">
              <Link
                href="/about"
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  isActive("/about") ? "text-blue-700" : "text-gray-700 hover:text-blue-700"
                }`}
              >
                About Us
              </Link>
            </li>

            {/* Blogs */}
            <li className="hover:bg-blue-200 md:hover:bg-transparent rounded-2xl">
              <Link
                href="/blogs"
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  isActive("/blogs") ? "text-blue-700" : "text-gray-700 hover:text-blue-700"
                }`}
              >
                Blogs
              </Link>
            </li>

            {/* Contact */}
            <li className="hover:bg-blue-200 md:hover:bg-transparent rounded-2xl">
              <Link
                href="/contact"
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  isActive("/contact") ? "text-blue-700" : "text-gray-700 hover:text-blue-700"
                }`}
              >
                Contact
              </Link>
            </li>

            {/* Book Appointment */}
            <li>
              <button className="bg-indigo-600 text-white font-semibold text-sm px-3 py-2 mt-2 md:mt-0 rounded-lg shadow-md transition hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                Book Appointment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
