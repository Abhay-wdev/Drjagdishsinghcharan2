"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStethoscope } from "react-icons/fa";

export default function DoctorIntro() {
  return (
    <section className="bg-blue-50 py-12 px-3 lg:px-16 text-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Image */}
        <div className="w-full flex justify-center lg:w-1/3">
          <Image
            src="/images/home/doctor2.jpg"
            alt="Dr. Jagdish Singh Charan"
            width={400}
            height={400}
            className=" border-2 rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/3 space-y-8"
        >
          <div>
            <motion.h2
              className="text-4xl font-bold font-serif text-blue-800 mb-2"
              whileHover={{ scale: 1.02,  }} // slightly enlarge & deeper blue
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="hover:text-blue-900">Dr.</span> Jagdish Singh Charan
            </motion.h2>

            <motion.p
              className="text-lg font-medium"
              whileHover={{ scale: 1.03, color: "#2563EB" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Orthopedic Spine Surgeon – Department of Orthopaedics
            </motion.p>
          </div>

          {/* Experience */}
          <div className="flex gap-4 items-start bg-white shadow-md hover:shadow-lg transition-all rounded-xl p-5 border border-gray-100">
            <Image
              src="/images/home/work.jpg"
              alt="Dr. Jagdish Singh Charan"
              width={40}
              height={40}
              className=" border-2 rounded-3xl shadow-xl object-cover"
            />
            <div>
              <h4 className="font-semibold  text-left  text-lg">
                Previous Experience
              </h4>
              <ul className="list-disc  space-y-1 text-left">
                <li>Assistant Professor & Spine Unit Head – NIMS University</li>
                <li>Consultant Spine Surgeon – Apollo Spectra, Jaipur</li>
                <li>Various Resident Roles – MAMC, Manipal, Apollo</li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="flex gap-4 items-start bg-white shadow-md hover:shadow-lg transition-all rounded-xl p-5 border border-gray-100">
            <FaStethoscope className="text-2xl w-10 h-10 text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-left">Services Offered</h4>
              <ul className="list-disc  space-y-1 text-left">
                <li>Endoscopic & Arthroscopic Spine Surgeries</li>
                <li>MISS (Minimally Invasive Spine Surgery)</li>
                <li>Deformity Correction & Spine Fixation</li>
                <li>Knee & Hip Joint Replacements</li>
                <li>Fracture Management, Bone TB, Arthritis Care</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
