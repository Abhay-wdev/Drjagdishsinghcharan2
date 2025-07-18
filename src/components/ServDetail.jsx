"use client";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation"; // not next/router
export default function ServDetail() {
  const router = useRouter();

  
  const services = [
    {
      title: "Spine Surgery",
      path: "/endoscopic-spine-surgery",
    },
    {
      title: "Fracture & Trauma Care",
      path: "/fracture-trauma-care",
    },
    {
      title: "Disc Replacement",
      path: "/disc-replacement-surgery",
    },
    {
      title: "Endoscopic & Arthroscopic Surgery",
      path: "/endoscopic-spine-orthroscopic-surgery",
    },
    {
      title: "Minimally Invasive Spine Surgery",
      path: "/minimally-invasive-spine-surgery",
    },
    {
      title: "Sports Injury Treatment",
      path: "/arthroscopy-Sports-injury-care",
    },
    {
      title: "Spinal Deformity Correction",
      path: "/spinal-deformity-correction",
    },
    {
      title: "Joint Replacement",
      path: "/joint-replacement-surgery",
    },
  ];

  return (
    <section className="py-12 px-4 rounded-2xl bg-white  ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image with Experience Badge */}
        <div className="relative">
          <img
            src="/images/services/advancesServices.png" // Replace with your spine & orthopedic doctor's image
            alt="Spine and Orthopedic Doctor"
            className="rounded-xl w-full object-cover"
          />

          {/* <div className="absolute bottom-4 left-4 bg-blue-200 rounded-xl p-1 w-40 text-center shadow-md">
            <p className="text-gray-800 text-xl font-semibold mb-2">
              Certified
            </p>
            <span className="inline-block bg-white text-gray-800  text-xs px-3 py-1 rounded-full">
              Spine & Orthopedic Surgeon
            </span>
          </div> */}
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Advanced Spine & Orthopedic Care for a Pain-Free Life
          </h2>
          <p className="text-gray-600 mb-6">
            We specialize in treating spine and joint problems with precision.
            Our expert team ensures accurate diagnosis, minimally invasive
            treatments, and complete rehabilitation for your fast recovery and
            improved quality of life.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() =>router.push(`/services/${service.path}`) }
                className="cursor-pointer flex flex-wrap items-start text-gray-800 hover:bg-gray-100 rounded-lg p-2 transition"
              >
                <span className="flex flex-row items-center break-words">
                  <CheckCircle className="w-4 h-4 text-blue-800 mr-2 flex-shrink-0" />
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
