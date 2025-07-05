"use client";
import DocterIntro from "@/components/DoctorIntro";
import MissionVision from "@/components/MissionVision";
import GoogleReviews from "@/components/GoogleReviews";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="text-blue-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Our Goal
            <br /> Keeping Your Spine Strong, Body Pain-Free
          </h2>
        </motion.div>
        <DocterIntro />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-800"
        >
          At Dr. Jagdish Singh Charan’s Orthopedic & Spine Center, our mission
          is simple: restore your mobility, relieve pain, and help you reclaim
          the life you love — with empathy, innovation, and unmatched surgical
          expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button className="bg-blue-700 text-white py-3 px-6 rounded-xl hover:bg-blue-800 transition-all duration-300">
            Book an Appointment
          </button>
          <Link href={"/services"}  className="border border-blue-700 text-blue-700 py-3 px-6 rounded-xl hover:bg-blue-100 transition-all duration-300">
            Explore Treatment Options
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-100 py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
    {/* Right Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {[
        { icon: "📍", label: "Years Experience", value: "10+" },
        { icon: "💼", label: "Clinic", value: "1" },
        { icon: "😊", label: "Happy Patients", value: "5000+" },
        { icon: "📅", label: "Online Appointment", value: "500+" },
        { icon: "🔬", label: "Research Publications", value: "15+" },
        { icon: "🏅", label: "Awards Won", value: "8+" },
        { icon: "🧠", label: "Specialized Procedures", value: "25+" },
        { icon: "👨‍⚕", label: "Team Members", value: "12+" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-xl px-6 py-8 text-center hover:shadow-lg transition-shadow"
        >
          <div className="text-4xl mb-2">{item.icon}</div>
          <h3 className="text-2xl font-bold text-gray-800">{item.value}</h3>
          <p className="text-gray-600 text-sm mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Journey Section */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Our Journey of Precision & Compassion
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          Founded by <strong className="">Dr. Jagdish Singh Charan</strong>, our center is
          rooted in a deep commitment to healing with empathy and skill. Trained
          at premier institutions like Apollo and SKIMS, Dr. Charan’s vision is
          to make cutting-edge spine and joint care accessible and personalized
          — where every treatment is backed by data, heart, and a steady
          surgeon's hand.
        </p>
      </section>

      <section className="bg-blue-50 py-14 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-blue-900 mb-10">
      Our Core Values
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          icon: "❤",
          title: "Compassion",
          text: "We treat every patient like family — with empathy, patience, and respect.",
        },
        {
          icon: "🏆",
          title: "Excellence",
          text: "Precision surgeries, continual learning, and results that speak for themselves.",
        },
        {
          icon: "🧍",
          title: "Patient-Centered Care",
          text: "No cookie-cutter treatments. Every case is unique — so is our approach.",
        },
        {
          icon: "🧭",
          title: "Integrity",
          text: "Honesty and transparency, from diagnosis to post-op recovery.",
        },
        {
          icon: "💡",
          title: "Innovation",
          text: "We adopt cutting-edge tools like endoscopy, MISS, and 3D implants for best outcomes.",
        },
        {
          icon: "🤝",
          title: "Teamwork",
          text: "Surgeons, physiotherapists, and caregivers — all aligned to your healing.",
        },
      ].map(({ icon, title, text }, idx) => (
        <div
          className="bg-white shadow-md rounded-xl px-6 py-8 text-left hover:shadow-lg transition-all hover:-translate-y-1"
          key={idx}
        >
          <div className="text-3xl mb-3">{icon}</div>
          <h3 className="font-semibold text-xl mb-2 text-blue-800">
            {title}
          </h3>
          <p className=" text-sm text-gray-700">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Services Section */}
      {/* <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Specialized Orthopedic Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ['Endoscopic & Arthroscopic Surgery', 'Minimally invasive precision surgeries for spine and joints.'],
            ['Spine Deformity Correction', 'Advanced care for scoliosis, kyphosis, and alignment disorders.'],
            ['Joint Replacements (TKR & THR)', 'Proven techniques for restoring mobility and eliminating chronic pain.'],
            ['Trauma & Fracture Management', 'Timely intervention and reconstruction for injuries and accidents.'],
            ['Arthritis & Joint Care', 'Medical to surgical solutions tailored to your stage and symptoms.'],
            ['Bone TB & Complex Infections', 'Expertise in managing chronic orthopedic infections with precision.']
          ].map(([title, desc], idx) => (
            <div key={idx}>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section> */}
      <MissionVision/>
      <GoogleReviews />
    </div>
  );
}