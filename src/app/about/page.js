"use client";
import DocterIntro from "@/components/DoctorIntro";
import MissionVision from "@/components/MissionVision";
import GoogleReviews from "@/components/GoogleReviews";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ServiceSlider from "@/components/ServiceSlider";
import { Fullscreen } from "lucide-react";

export default function Home() {
  const slides = [
    {
      image: "/images/home/slide4.jpg",
      title: "Dr. Jagdish Singh Charan",
      subtitle:
        "Relief for Back and Neck Pain Through Expert, Personalized Care",
    },
    {
      image: "/images/services/joint-replacement.png",
      title: "Dr. Jagdish Singh Charan",
      subtitle:
        "Joint Replacement Surgery – Move Freely Again with Expert Surgery for Pain-Free Living",
    },
    {
      image: "/images/services/kneeinjury.webp",
      title: "Dr. Jagdish Singh Charan",
      subtitle:
        "Sports Injury Care – Specialized Recovery for Athletes and Active Lifestyles",
    },
  ];

  return (
    <div className="text-blue-800">
      <ServiceSlider slides={slides} />

      {/* Hero Section */}
      <section className="bg-blue-50 py-12 px-2 text-center">
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
          <Link href="/book-appointment">
            <button className="bg-blue-700 text-white py-3 px-6 rounded-xl hover:bg-blue-800 transition-all duration-300">
              Book an Appointment
            </button>
          </Link>
          <Link
            href="/services"
            className="border border-blue-700 text-blue-700 py-3 px-6 rounded-xl hover:bg-blue-100 transition-all duration-300"
          >
            Explore Treatment Options
          </Link>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Our Journey of Precision & Compassion
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          Founded by <strong>Dr. Jagdish Singh Charan</strong>, our center is
          rooted in a deep commitment to healing with empathy and skill. Trained
          at premier institutions like Apollo and SKIMS, Dr. Charan’s vision is
          to make cutting-edge spine and joint care accessible and personalized
          — where every treatment is backed by data, heart, and a steady
          surgeon's hand.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-100 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {[
              {
                icon: "/images/about/years-experience.webp",
                label: "Years Experience",
                value: "15+",
              },
              {
                icon: "/images/about/clinic.webp",
                label: "Clinic",
                value: "1",
              },
              {
                icon: "/images/about/happy-patients.webp",
                label: "Happy Patients",
                value: "5000+",
              },
              {
                icon: "/images/about/online-appointment.webp",
                label: "Online Appointment",
                value: "7000+",
              },
              {
                icon: "/images/about/research-publications.webp",
                label: "Research Publications",
                value: "15+",
              },
              {
                icon: "/images/about/awards-won.webp",
                label: "Awards Won",
                value: "8+",
              },
              {
                icon: "/images/about/specialized-procedures.webp",
                label: "Specialized Procedures",
                value: "25+",
              },
              {
                icon: "/images/about/team.webp",
                label: "Team Members",
                value: "12+",
              },
            ].map((item, i) => (
              <motion.div
                key={i} // ✅ key placed correctly
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
              >
                <div className="bg-white shadow-md rounded-xl px-6 py-8 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl flex justify-center mb-2">
                    <Image
                      height={60}
                      width={60}
                      src={item.icon}
                      alt={item.label}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.value}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-blue-50 py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "/images/about/compassion.webp",
                title: "Compassion",
                text: "We treat every patient like family — with empathy, patience, and respect.",
              },
              {
                icon: "/images/about/excellence.webp",
                title: "Excellence",
                text: "Precision surgeries, continual learning, and results that speak for themselves.",
              },
              {
                icon: "/images/about/patient-centered.webp",
                title: "Patient-Centered Care",
                text: "No cookie-cutter treatments. Every case is unique — so is our approach.",
              },
              {
                icon: "/images/about/integrity.webp",
                title: "Integrity",
                text: "Honesty and transparency, from diagnosis to post-op recovery.",
              },
              {
                icon: "/images/about/innovation.webp",
                title: "Innovation",
                text: "We adopt cutting-edge tools like endoscopy, MISS, and 3D implants for best outcomes.",
              },
              {
                icon: "/images/about/teamwork.webp",
                title: "Teamwork",
                text: "Surgeons, physiotherapists, and caregivers — all aligned to your healing.",
              },
            ].map(({ icon, title, text }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: idx * 0.2,
                }}
              >
                <div
                 
                  className="bg-white hover:scale-105   shadow-md rounded-xl p-5 text-left hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative w-full  h-50 mb-3">
                    {" "}
                    {/* adjust h-32 as needed */}
                    <Image
                      src={icon}
                      alt={title}
                      fill
                      className="object-contain border-2 rounded-2xl "
                    />
                  </div>
                  <h3 className="font-semibold flex justify-center text-xl mb-2 text-blue-800">
                    {title}
                  </h3>
                  <p className="text-sm text-center text-gray-700">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MissionVision />
      <GoogleReviews />
    </div>
  );
}
