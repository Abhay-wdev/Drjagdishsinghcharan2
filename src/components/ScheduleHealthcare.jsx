"use client";

 import Link from "next/link";
import React from "react";

export default function ScheduleHealthcare() {
  return (
    <section className="bg-[#003153] relative overflow-hidden flex flex-col items-center justify-center text-center py-16 px-4">
      {/* Decorative Circle Left */}
      <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-48 h-48 bg-[#00D9D9] rounded-full"></div>


      {/* Decorative Rounded Corner Right */}
      <div
  className="hidden lg:block absolute right-0 top-0 w-96 h-96 rounded-bl-[300px] bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/services/bookappointment.jpg')",
  }}
></div>


      <p className="text-white text-sm mb-2">Book Today</p>
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
        Schedule your healthcare <br /> visit now.
      </h2>
      <Link href="/book-appointment">
      <div className="flex flex-col md:flex-row items-center gap-4">
      
      <button
      className="
        text-white 
        font-extrabold 
        text-base 
        px-8 
        py-3 
        cursor-pointer
        bg-[#1447E6] 
        border-[3px] 
        border-[#003153] 
        rounded-xl 
        shadow-[-5px_5px_0px_0px_#00D9D9] 
        transition-transform 
        duration-400 
        ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        hover:translate-x-[5px]
        hover:-translate-y-[5px]
      "
    >
      Book Appointment
    </button>
   
    </div>
    </Link>
    </section>
  );
}
