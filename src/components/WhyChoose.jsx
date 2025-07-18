'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChoose = ({ imagePath = "/images/home/allService.jpg" }) => {
  const features = [
    {
      icon: "🦴",
      title: "Spine & Ortho Expertise",
      description: "Specialized in treating complex spine and orthopedic conditions with precision and care."
    },
    {
      icon: "🩺",
      title: "Advanced Surgical Techniques",
      description: "Utilizing minimally invasive and robotic-assisted surgery for faster recovery and better outcomes."
    },
    {
      icon: "🤝",
      title: "Personalized Treatment Plans",
      description: "Tailored care solutions to suit your specific orthopedic and spinal needs."
    },
    {
      icon: "❤️",
      title: "Patient-Centered Approach",
      description: "Focused on comfort, mobility, and quality of life — every step of your healing journey."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
          <h3 className="text-lg font-medium text-blue-600 mb-2 tracking-wide uppercase">
            Why Choose Us
          </h3>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
            All-Inclusive Medical Care
            </motion.div>
            <br />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
            <span className="text-blue-600">For Everyone</span>
            </motion.div>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         
        <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 size-[95%]">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl transform rotate-3 opacity-30"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-3xl transform -rotate-2 opacity-20"></div>

              {/* Main image container */}
              <div className="relative bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={imagePath}
                  alt="Healthcare Professional"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
</motion.div>
          {/* Right Side - Features */}
          <div className="order-1 lg:order-2 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              >
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center text-white text-xl font-semibold shadow-lg group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 cursor-pointer">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
