"use client";
import Image from "next/image";
import { PhoneIcon, EyeIcon, ChartBarIcon } from "@heroicons/react/24/solid"; // ✅ v2 path

export default function MissionVision() {
  const phoneNumber = "+91 8003474733";

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);

      // Now trigger dialer
      window.location.href = `https://wa.me/${phoneNumber.replace(
        /[+\s]/g,
        ""
      )}`;
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  return (
    <main className="bg-white text-slate-900 max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row items-start gap-12 font-['Inter']">
      {/* Left Section: Text Content */}
      <section className="w-full lg:max-w-xl flex flex-col gap-6">
        <a className="text-blue-600 text-sm font-normal leading-5">
          Mission and Vision
        </a>

        <h1 className="text-2xl sm:text-3xl font-semibold leading-snug">
          Discover Our Mission&apos;s
          <br className="hidden sm:block" />
          Inception, Vision
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Learn about the inspiring beginnings and enduring goals that drive our
          purpose and vision, which direct us toward patient-centered care and
          healthcare excellence.
        </p>

        {/* Mission + Vision Cards */}
        {/* <div className="bg-blue-50 rounded-xl p-6 flex flex-col sm:flex-row gap-6 sm:gap-12 w-full">  */}
        {/* Mission */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <ChartBarIcon className="h-4 w-4 text-blue-600" />
            </div>
          </div>
          <div className="flex flex-col text-md text-slate-800">
            <span className="font-semibold">Our Mission</span>
            <span className="leading-tight">
              We want to make life better for people with spine and joint
              problems. Our aim is to give the best care and support—so our
              patients can move freely, feel better, and live fully.
            </span>
          </div>
        </div>

        {/* Vision */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <EyeIcon className="h-4 w-4 text-blue-600" />
            </div>
          </div>
          <div className="flex flex-col text-md text-slate-800">
            <span className=" font-semibold">Our Vision</span>
            <span className="leading-tight">
              To be the most trusted place for spine and bone care in Ajmer,
              offering safe, effective, and personal treatment for every
              patient.
            </span>
          </div>
        </div>

        {/* Doctor Info & Contact */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-6">
          <div className="flex items-center gap-4">
            <Image
              alt="Portrait of Dr. Jagdish Singh Charan"
              className="w-12 h-12 rounded-full object-cover"
              src="/images/home/doctor.png"
              width={48}
              height={48}
            />
            <div className="flex flex-col text-sm text-slate-800">
              <span className="font-semibold text-base leading-tight">
                Dr. Jagdish Singh Charan
              </span>
              <span className="leading-tight">Orthopedic Spine Surgeon</span>
            </div>
          </div>

          {/* Phone contact */}
          <div className="flex items-center gap-4 sm:ml-8">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-sm text-slate-600">
              <span>Call Anytime</span>
              <button
                onClick={handleClick}
                className="font-semibold text-base text-slate-900 leading-tight underline hover:text-blue-600 active:scale-95 transition-all"
              >
                {phoneNumber}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right Section: Image */}
      <section className="w-full lg:w-auto lg:m-20">
        <Image
          alt="Medical professionals in hallway"
          className="rounded-2xl object-cover w-full max-w-md h-auto mx-auto"
          src="/images/home/doctorTeam.jpg"
          width={480}
          height={400}
        />
      </section>
    </main>
  );
}
