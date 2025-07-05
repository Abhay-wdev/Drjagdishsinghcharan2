// components/GoogleReviews.jsx
"use client";
import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-center bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-[#333]">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
      What our patients are saying about their experience.
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Read some of the latest reviews from our satisfied customers.
      </p>

      {/* Elfsight Widget Container */}
      <div className="elfsight-app-657efde6-8c9a-40b9-8838-dee8292a34e0" data-elfsight-app-lazy></div>
    </section>
  );
}
