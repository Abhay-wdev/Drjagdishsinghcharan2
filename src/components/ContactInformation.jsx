"use client";

import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const ContactInformation = () => {
  return (
    <section
      aria-label="Contact information"
      className=" min-h-[400px] flex items-center justify-center "
    >
      <div className="max-w-4xl w-full bg-gradient-to-br from-[#ffffff] to-[#ffffff] rounded-xl shadow-lg p-10 flex flex-col md:flex-row justify-around gap-8 text-center md:text-left">
        <h2 className="sr-only">Contact Information</h2>

        <div className="md:flex-1 flex flex-col items-center">
          <div className="bg-[#dbeff1] p-4 rounded-full mb-4 flex items-center justify-center shadow-md w-16 h-16">
            <MdLocationOn className="h-8 w-8 text-blue-900" />
          </div>
          <h3 className="mb-2 font-semibold text-gray-900">Address</h3>
          <p className="text-[#06539b] max-w-xs text-center">
          1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004
          </p>
        </div>

        <div className="md:flex-1 flex flex-col items-center">
          <div className="bg-[#dbeff1] p-4 rounded-full mb-4 flex items-center justify-center shadow-md w-16 h-16">
            <MdEmail className="h-8 w-8 text-blue-900" />
          </div>
          <h3 className="mb-2 font-semibold text-gray-900">Email</h3>
          <a
            href="mailto:mayurchildrenhospital@gmail.com"
            className="text-[#06539b] hover:underline"
          >
            info@Jagdishspinecare.com
          </a>
        </div>

        <div className="md:flex-1 flex flex-col items-center">
          <div className="bg-[#dbeff1] p-4 rounded-full mb-4 flex items-center justify-center shadow-md w-16 h-16">
            <MdPhone className="h-8 w-8 text-blue-900" />
          </div>
          <h3 className="mb-2 font-semibold text-gray-900">Phone</h3>
          <div className="flex flex-col text-[#06539b]">
            <a href="tel:8003474733" className="hover:underline">
            +91 8003474733
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
