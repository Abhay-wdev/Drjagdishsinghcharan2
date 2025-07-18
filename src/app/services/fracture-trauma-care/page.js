"use client";
import Image from "next/image";
import ConditionWeTreat from "@/components/ConditionWeTreat";
import ServiceFeq from "@/components/ServiceFeq";
import Bookbutton from "@/components/Bookbutton";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function Home() {
   const faqs = [
    {
      q: "What should I do if I think I have a fracture?",
      a: "If you suspect a fracture—especially after a fall or injury—immobilize the area, avoid putting weight on it, and seek immediate medical attention.",
    },
    {
      q: "Is surgery always needed for fractures?",
      a: "Not always. Many fractures heal with casting or splinting, but some need surgical fixation with plates, screws, or rods to ensure proper healing.",
    },
    {
      q: "What is trauma care exactly?",
      a: "Trauma care involves emergency treatment of injuries caused by accidents, falls, or impacts—ranging from fractures to soft tissue damage and internal injuries.",
    },
    {
      q: "How long is the recovery for broken bones?",
      a: "Depending on the location and severity, bones typically heal in 6–12 weeks. Rehab and follow-ups are essential to regain full strength and function.",
    },
    {
      q: "Can kids and older adults get different treatment?",
      a: "Yes—children's bones heal faster and may need different techniques, while older adults often need more support due to weaker bones and slower healing.",
    },
  ];

  const conditions = [
    {
      title: "Simple & Compound Fractures",
      description:
        "From clean breaks to open wounds, we stabilize, align, and protect bones using the right mix of casting, splinting, or surgery.",
    },
    {
      title: "Joint Dislocations",
      description:
        "We reduce dislocated shoulders, elbows, hips, and more—then treat the surrounding damage and prevent future instability.",
    },
    {
      title: "Trauma from Accidents",
      description:
        "Car crashes, falls, or sports injuries—we provide rapid-response trauma care to minimize complications and support full recovery.",
    },
    {
      title: "Pelvic & Hip Injuries",
      description:
        "We treat complex pelvic fractures and hip trauma with expert surgical care, especially important for maintaining mobility in older adults.",
    },
    {
      title: "Stress Fractures",
      description:
        "These tiny cracks from overuse can grow worse if ignored. We diagnose early and support healing with rest, bracing, and modified activity.",
    },
  ];

  return (
    <motion.main
      className="mx-auto mt-12 max-w-6xl px-4 py-10 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.section
        className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center"
        variants={staggerContainer}
      >
        <motion.div className="space-y-4" variants={fadeInRight}>
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight" variants={fadeInUp}>
            Joint Replacement Surgery
          </motion.h1>
          <motion.p className="text-xl text-gray-700" variants={fadeInUp}>
            Move Freely Again – Expert Surgery for Pain‑Free Living
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Bookbutton />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInRight}>
          <Image
            src="/images/services/joint-replacement.png"
            alt="Happy patient walking after joint replacement"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Details Sections */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 items-start px-4 sm:px-6"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInLeft}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            What You're Feeling
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Achy knees. Stiff hips. Joints that grind, pop, or scream when you try to move...
          </p>
        </motion.div>

        <motion.div variants={fadeInRight}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            How We Fix It
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            With precision joint replacement surgery, we swap out your damaged joint surfaces...
          </p>
        </motion.div>

        <motion.div
          className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
          variants={fadeInUp}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4" variants={fadeInUp}>
            Our Treatment Approach
          </motion.h2>
          <motion.p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto" variants={fadeInUp}>
            You’re not just another set of X-rays. We tailor your joint care journey...
          </motion.p>
          <motion.ul className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto" variants={staggerContainer}>
            {[
              "Pre-surgery planning that’s personal, not cookie-cutter",
              "Implants chosen to match your activity level and anatomy",
              "Minimally invasive techniques for quicker recovery",
              "Home-friendly rehab that fits your lifestyle",
              "Ongoing support to keep you on track and feeling strong",
              "Simple, straight-up communication—no medical jargon overload",
            ].map((item, index) => (
              <motion.li key={index} variants={fadeInUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
          variants={fadeInUp}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4" variants={fadeInUp}>
            What You Can Expect
          </motion.h2>
          <motion.p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto" variants={fadeInUp}>
            The results speak louder than pain ever could...
          </motion.p>
          <motion.ul className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto" variants={staggerContainer}>
            {[
              "Way less pain—sometimes gone entirely",
              "Freedom to walk, bend, sit, and stand with ease",
              "Restful sleep without that dull ache",
              "More independence and fewer doctor visits",
              "Confidence in movement and daily life",
              "A renewed sense of strength, stability, and joy",
              "Care that feels human, not robotic",
            ].map((item, index) => (
              <motion.li key={index} variants={fadeInUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      <ConditionWeTreat conditions={conditions} />

      <motion.section className="mb-10" variants={fadeInUp}>
        <motion.h3 className="text-2xl font-semibold mb-2" variants={fadeInUp}>
          Why Patients Trust Us
        </motion.h3>
        <motion.p variants={fadeInUp}>
          Dr. Jagdish Singh Charan brings over 15 years of experience. Every consult is a conversation...
        </motion.p>
      </motion.section>

      <ServiceFeq faqs={faqs} />
    </motion.main>
  );
}
