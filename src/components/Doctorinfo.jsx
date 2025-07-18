
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const Doctorinfo = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden my-20">
      {/* Blue Background - Left 80% */}
      <div className="absolute left-0 top-0 w-full lg:w-[80%] rounded-r-3xl h-full bg-[#003153]"></div>

      {/* Background Pattern - Left Side */}
      <div className="absolute left-0 top-0 w-full lg:w-[40%] h-full opacity-10">
        <Image
          src="/images/home/backstyle.png"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[500px]">
        {/* Left Content */}
        <div className="flex-1 lg:max-w-[60%] px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              {/* Book Now Label */}
              <div className="inline-block mb-4">
                <span className="text-white/90 text-sm font-medium">Book Now</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Reserve Your Appointment:
              </h1>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
                Book your appointment today and receive a consultation with our skilled medical staff. Experience customized attention and excellent service in a relaxing and welcoming setting.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/book-appointment">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors duration-200 min-w-[200px]">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Consultation
                </button>
              </Link>

              <Link href="/services">
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200 min-w-[150px]">
                  Our Services
                </button>
              </Link>
            </div>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
      
        <div className="flex-1 relative h-[300px] lg:h-full min-h-[450px] w-[95%] lg:w-auto lg:max-w-[40%]">
        
          <div className="absolute inset-0 lg:inset-y-4 lg:right-4">
          
            <Image
              src="/images/home/bookimg.jpg"
              alt="Medical professional on phone"
              fill
              className="object-cover object-center rounded-2xl"
              priority
            />
             
          </div>
         
        </div>
     
      </div>
    </div>
  );
};

export default Doctorinfo;
