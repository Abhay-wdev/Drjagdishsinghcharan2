"use client";

import Link from "next/link";

export default function SpineOrthoServices() {
  const services = [
    {
      title: "Spine Surgery",
      image: "/images/services/SpineSurgery.png",
      description: "Surgical care for spine conditions and deformities.",
      path: "/services/endoscopic-spine-surgery",
    },
    {
      title: "Fracture & Trauma Care",
      image: "/images/services/OrthopedicSurgery.png",
      description: "Expert treatment for fractures, injuries, and trauma cases.",
      path: "/services/fracture-trauma-care",
    },
    {
      title: "Disc Replacement",
      image: "/images/services/DiscReplacement.png",
      description: "Advanced disc replacement for spinal damage relief.",
      path: "/services/disc-replacement-surgery",
    },
    {
      title: "Endoscopic Spine & Arthroscopic Surgery",
      image: "/images/services/scoliosis.png",
      description: "Minimally invasive surgery for joints and spine conditions.",
      path: "/services/endoscopic-spine-orthroscopic-surgery",
    },
    {
      title: "Minimally Invasive Spine Surgery",
      image: "/images/services/MinimallyInvasiveSpineSurgery.png",
      description: "Low-impact spine surgery for quicker recovery.",
      path: "/services/minimally-invasive-spine-surgery",
    },
    {
      title: "Sports Injury Treatment",
      image: "/images/services/SportsInjuryTreatment.png",
      description: "Treatment and rehab for common sports-related injuries.",
      path: "/services/arthroscopy-Sports-injury-care",
    },
    {
      title: "Spinal Deformity Correction",
      image: "/images/services/SpinalDeformityCorrection.png",
      description: "Surgical correction for spinal alignment and balance.",
      path: "/services/spinal-deformity-correction",
    },
    {
      title: "Joint Replacement",
      image: "/images/services/JointReplacement.png",
      description: "Hip and knee replacements for better mobility.",
      path: "/services/joint-replacement-surgery",
    }
  ];
  
  return (
    <section className="py-12 px-2 bg-white">
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
