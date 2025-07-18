// components/GoogleReviews.jsx
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-center bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-[#333]">
       <motion.div
              initial={{ opacity: 1, scale: 0 }}
              whileInView={{ opacity: 1, scale:1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            > 
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
      What our patients are saying about their experience.
      </h2>
      </motion.div>

      <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >

      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Read some of the latest reviews from our satisfied customers.
      </p>
      </motion.div>
      {/* Elfsight Widget Container */}
      <div className="elfsight-app-cd234694-494f-439e-8474-f5cf159360a8" data-elfsight-app-lazy></div>
    </section>
  );
}
