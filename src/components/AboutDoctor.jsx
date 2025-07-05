import React from "react";
import Image from "next/image";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";

function AboutDoctor() {
  return (
    <section
      style={{ background: "linear-gradient(to bottom, #ffffff, #F0F8FF)" }}
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 text-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Doctor Profile Card Section */}
        <div className="w-full  transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer lg:w-2/5 flex justify-center">
          <div className="bg-white bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-[#333] text-center h-fit rounded-2xl shadow-xl p-6 w-full max-w-sm">
            {/* Doctor Image */}
            <div className="relative h-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-4">
              <Image
                src="/images/home/doctor2.jpg" // update the path as needed
                alt="Dr. Jagdish Singh Charan"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 640px) 100vw, 
           (max-width: 768px) 100vw, 
           (max-width: 1024px) 50vw, 
           33vw"
              />
            </div>

            {/* Doctor Info */}
            <h2 className="text-xl font-bold text-gray-900">
              Dr. Jagdish Singh Charan
            </h2>
            <p className="text-blue-900 font-medium mt-1">
            FNB & Spine Surgery, DNB Ortho, MNAMS, FAOS Asia Specialist
            </p>
           

            {/* Icons and Experience */}
            <div className="flex justify-center gap-6 text-sm text-gray-700 border-t pt-4">
              <div className="flex items-center gap-1">
                <BsClockHistory className="text-blue-600" />
                <span>15+ Years</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUserMd className="text-blue-600" />
                <span>Spine Specialist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Information Section */}
        <div className="w-full lg:w-3/5 space-y-8">
          <h1 className="text-4xl font-bold text-blue-900">
            Dr. Jagdish Singh Charan — Expert Spine & Orthopedic Surgeon
          </h1>

          <p> 
  <strong>Dr. Jagdish Singh Charan</strong> is a highly experienced{" "}
  <strong>spine and orthopedic surgeon</strong> with over{" "}
  <strong>15 years</strong> of clinical expertise. He holds advanced
  qualifications including <strong>DNB Ortho</strong>,{" "}
  <strong>FNB & Spine Surgery</strong>,{" "}
  <strong>MNAMS</strong>, and <strong>FAOS Asia Specialist</strong>. He has trained at leading
  institutions like <strong>Skims and Shri, Ahmedabad</strong>,{" "}
  <strong>AO Spine</strong>, and the{" "}
  <strong>Orthopedic Association of India</strong>. His work focuses on{" "}
  <strong>minimally invasive spine procedures</strong>,{" "}
  <strong>joint replacements</strong>, and{" "}
  <strong>complex trauma care</strong>.
</p>

<p>
  <strong>Dr. Charan</strong> has served in key roles at top hospitals
  and universities, including <strong>NIMS University</strong> and{" "}
  <strong>Apollo Spectra, Jaipur</strong>. He is a member of respected
  medical associations such as <strong>MNAMS</strong>,{" "}
  <strong>MASSI</strong>, and <strong>AO Spine and Orthopedic Association of India</strong>. He actively
  participates in <strong>national conferences and workshops</strong>,
  staying updated with the latest advancements in{" "}
  <strong>orthopedic and spine care</strong>.
</p>


          {/* Services Offered */}
          <div className="bg-white bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-[#333] p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Specialization
            </h2>
            <ul className="list-disc pl-5 space-y-2">
            <li>
             
                <strong> Arthritis and Rheumatology:</strong> <strong>Joint Pain</strong>{" "}and{" "}
                <strong>Arthritis Treatment</strong> for all age groups
              </li>
              <li>
                <strong>Endoscopic Spine Surgery</strong> and{" "}
                <strong>Arthroscopic Procedures</strong>
              </li>
              <li>
                <strong>Minimally Invasive Spine Surgery (MISS)</strong> for
                faster recovery and minimal scars
              </li>
              <li>
                <strong>Deformity Correction</strong> and{" "}
                <strong>Spine Fixation Surgeries</strong>
              </li>
              <li>
                <strong>Knee (TKR)</strong> and <strong>Hip (THR)</strong> Joint
                Replacements using modern techniques
              </li>
              <li>
                <strong>Orthopedic Consultations</strong> and personalized
                treatment planning
              </li>
              <li>
                <strong>Treatment of Bone Tuberculosis</strong> and other
                complex infections
              </li>
              <li>
                <strong>Management of Fractures</strong> and{" "}
                <strong>Multiple Trauma Injuries</strong>
              </li>
             
            </ul>
          </div>

          {/* Research & Publications
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Research & Publications</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Spinal Aspergillosis in COVID-19 – Egyptian Journal of Neurosurgery (2022)</li>
              <li>Proximal Tibia Fractures Outcomes – JOASP (2022)</li>
              <li>Spinal Injury Profiles – IJNT (2022)</li>
            </ul>
          </div> */}

          {/* Contact Section */}
          {/* <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800">Book Your Consultation</h2>
            <div className="flex items-center space-x-3">
              <IoLocation className="text-blue-600 text-xl" />
              <span>B-15, Aravali Vihar, Vaishali Nagar, Ajmer, Rajasthan 305001</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span>+91 90249 88677</span>
            </div>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
              Book Consultation
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutDoctor;
