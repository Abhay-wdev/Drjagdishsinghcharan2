"use client";

import Link from "next/link";

export default function SpineOrthoServices() {
  const services = [
    {
      title: "Spine Surgery",
      image: "/images/services/SpineSurgery.png", // replace with your image path or URL
      description: "Surgical treatment for spinal conditions and deformities.",
      path: "/services/service1",
    },
    {
      title: "Physiotherapy",
      image: "/images/services/Physiotherapy.png",
      description:
        "Rehabilitation and recovery support through expert therapy.",
      path: "/services/service2",
    },
    {
      title: "Disc Replacement",
      image: "/images/services/DiscReplacement.png",
      description: "Advanced procedures to replace damaged spinal discs.",
      path: "/services/service3",
    },
    {
      title: "Orthopedic Surgery",
      image: "/images/services/OrthopedicSurgery.png",
      description: "Treatment for musculoskeletal disorders and injuries.",
      path: "/services/service4",
    },
    {
      title: "Minimally Invasive Spine Surgery",
      image: "/images/services/MinimallyInvasiveSpineSurgery.png",
      description: "Low-impact spinal surgery for faster fit recovery.",
      path: "/services/service5",
    },
    {
      title: "Sports Injury Treatment",
      image: "/images/services/SportsInjuryTreatment.png",
      description: "Specialized care and rehabilitation for sports injuries.",
      path: "/services/service6",
    },
    {
      title: "Back & Neck Pain Management",
      image: "/images/services/Back-NeckPainManagement.png",
      description: "Comprehensive treatment for chronic back and neck pain.",
      path: "/services/service7",
    },
    {
      title: "Joint Replacement",
      image: "/images/services/jointReplacement.png",
      description: "Hip, knee, and other joint replacement surgeries.",
      path: "/services/service8",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-9 rounded-3xl overflow-hidden border border-gray-400 transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer hover:scale-105 hover:border-blue-700 shadow-sm"
          >
            {/* Background radial circles */}
            <span className="absolute right-[-5.2rem] top-[-5.2rem] w-40 h-40 bg-blue-700 rounded-full opacity-0 scale-100 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[7] group-hover:opacity-100 z-0"></span>
            <span className="absolute left-[-5.2rem] bottom-[-5.2rem] w-40 h-40 bg-blue-700 rounded-full opacity-0 scale-100 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[7] group-hover:opacity-100 z-0"></span>

            {/* Content */}
            <div className="flex flex-col items-center gap-4 text-black transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-10">
              <div className="group-hover:text-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 object-cover rounded-full    group-hover:bg-amber-50 transition-all duration-500"
                />
              </div>
              <h3 className="font-bold text-xl group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] text-center">
                {service.title}
              </h3>
              <p className="text-base opacity-80 group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] text-center">
                {service.description}
              </p>

              {/* Button with skew slide effect */}
              <Link href={`${service.path}`}>
                <button
                  aria-label={"Read more about ${service.path}"}
                  className="relative w-[6em] border-2 border-white h-[2em] mt-2 bg-[#1447E6] text-white text-[20px] rounded-[0.625em] overflow-hidden z-10 cursor-pointer transition-colors duration-100 group/button"
                >
                  <span className="relative z-10 group-hover/button:text-black">
                    Read More
                  </span>
                  <span className="absolute inset-0 bg-white transform -skew-x-[45deg] scale-x-0 group-hover/button:scale-x-100 transition-transform duration-500 ease-in-out origin-center"></span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
