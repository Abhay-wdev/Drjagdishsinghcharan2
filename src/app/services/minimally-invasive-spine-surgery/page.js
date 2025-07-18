"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ConditionWeTreat from "@/components/ConditionWeTreat";
import ServiceFeq from "@/components/ServiceFeq";
import Bookbutton from "@/components/Bookbutton";
const minimallyInvasiveConditions = [
  {
    title: "Herniated Discs",
    description:
      "When a spinal disc pushes out and presses on nerves, it can cause severe back or leg pain. We use tiny incisions and specialized tools to remove the damaged disc portion and relieve pressure—without the long recovery of open surgery.",
  },
  {
    title: "Spinal Stenosis",
    description:
      "This condition narrows the spinal canal, compressing nerves and causing pain or numbness. Minimally invasive decompression creates more room for your nerves while preserving healthy tissue and speeding up recovery.",
  },
  {
    title: "Degenerative Disc Disease",
    description:
      "As discs wear down with age, pain and stiffness can follow. MISS techniques help remove or stabilize damaged discs with less muscle disruption, helping you bounce back faster.",
  },
  {
    title: "Sciatica",
    description:
      "When the sciatic nerve is pinched, pain shoots down your leg. MISS can relieve pressure with tiny tools, so you can walk and sleep comfortably again—without a big scar.",
  },
  {
    title: "Spinal Instability",
    description:
      "Conditions like spondylolisthesis can cause vertebrae to shift out of place. MISS fusion or stabilization procedures help realign your spine with less trauma and quicker recovery than traditional surgery.",
  },
  {
    title: "Compression Fractures",
    description:
      "Fractures from osteoporosis or trauma can be stabilized using minimally invasive cement injections (like kyphoplasty), restoring spine strength with minimal downtime.",
  },
];
const minimallyInvasiveSpineFaqs = [
  {
    q: "What is minimally invasive spine surgery (MISS)?",
    a: "It’s a modern surgical approach that uses small incisions, high-definition imaging, and specialized instruments to treat spine conditions with less pain, blood loss, and downtime than traditional open surgery.",
  },
  {
    q: "Am I a candidate for minimally invasive spine surgery?",
    a: "If you’ve tried rest, medication, and physical therapy without lasting relief, and imaging shows a clear problem (like a herniated disc or spinal stenosis), you might be a good candidate. A consultation can confirm it.",
  },
  {
    q: "What are the benefits of minimally invasive surgery?",
    a: "Smaller incisions, less blood loss, shorter hospital stays, quicker recovery, reduced scarring, and lower risk of infection. Basically: faster healing and fewer complications.",
  },
  {
    q: "Is the procedure painful?",
    a: "You'll be under anesthesia during the procedure, and most patients experience less post-op pain compared to open surgery. You'll also get a tailored pain management plan to keep you comfortable during recovery.",
  },
  {
    q: "How long is recovery after MISS?",
    a: "Most patients walk the same day and return to light activities within 2–4 weeks. Full recovery can take a few months depending on the procedure and how closely you follow rehab advice.",
  },
  {
    q: "Will I need physical therapy afterward?",
    a: "Yes! Guided PT is often part of recovery. It helps restore strength, flexibility, and ensures long-term results. We’ll guide you through every step.",
  },
  {
    q: "Are the results permanent?",
    a: "Many patients experience long-term or permanent relief. But like any surgery, outcomes depend on the condition being treated, your overall health, and post-surgery care.",
  },
];

export default function MinimallyInvasiveSpineSurgeryPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    document.title = "Minimally Invasive Spine Surgery | Dr. Manish Sharma";
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.10,
        delayChildren: 0.3,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      {/* HERO SECTION */}
      <motion.main
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="mx-auto mt-12 max-w-6xl px-4 py-10 text-gray-800"
      >
        {/* HERO SECTION */}
        <motion.section
          className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-4" variants={item}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              variants={item}
            >
              Minimally Invasive Spine Surgery
            </motion.h1>
            <motion.p className="text-xl text-gray-700" variants={item}>
              Advanced spine care with smaller cuts, less pain, and a faster
              path back to the life you love.
            </motion.p>
            <motion.div variants={item}>
              <Bookbutton />
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/services/miss.jpg"
              alt="Happy patient walking after joint replacement"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </motion.section>

        {/* INFO SECTIONS */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 items-start px-4 sm:px-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              What You're Feeling
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Nagging neck or back pain... it’s stopping you from living fully.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              How We Fix It
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              MISS is all about precision with less disruption...
            </p>
          </motion.div>

          <motion.div
            className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              We don’t believe in cookie-cutter care...
            </p>
            <motion.ul
              className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto"
              variants={container}
            >
              {[
                "Comprehensive imaging to target exactly what’s causing your pain",
                "Minimally invasive techniques to reduce scarring and trauma",
                "Smaller incisions mean less blood loss, faster healing",
                "Post-surgical plans that prioritize mobility and comfort",
                "Clear milestones to track your comeback step by step",
                "Accessible, real-world guidance every step of the way",
              ].map((text, idx) => (
                <motion.li key={idx} variants={item}>
                  • {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
              What You Can Expect
            </h2>
            <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              This isn’t just about getting back on your feet—it’s about
              reclaiming your freedom.
            </p>
            <motion.ul
              className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto"
              variants={container}
            >
              {[
                "Shorter hospital stays—or even same-day discharge",
                "Less post-op pain and fewer complications",
                "Faster return to daily routines, work, and workouts",
                "Smaller scars, but bigger results",
                "Improved mobility and reduced nerve symptoms",
                "More confidence in your body’s strength and movement",
                "Support from a care team that actually has your back—literally",
              ].map((text, idx) => (
                <motion.li key={idx} variants={item}>
                  • {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.section>

        {/* STATIC SECTIONS WITH FADE */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <ConditionWeTreat conditions={minimallyInvasiveConditions} />
        </motion.div>

        <motion.section
          className="mb-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-2">Why Patients Trust Us</h3>
          <p>Dr. Jagdish Singh Charan brings over 15 years of experience...</p>
        </motion.section>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <ServiceFeq faqs={minimallyInvasiveSpineFaqs} />
        </motion.div>
      </motion.main>
    </>
  );
}
