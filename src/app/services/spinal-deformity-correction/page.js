"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ConditionWeTreat from "@/components/ConditionWeTreat";
import ServiceFeq from "@/components/ServiceFeq";
import Bookbutton from "@/components/Bookbutton";
export default function Home() {
  const spinalDeformityConditions = [
    {
      title: "Scoliosis",
      description:
        "A sideways curve of the spine that can worsen with age or growth. Our team offers both surgical and non-surgical treatments—including spinal fusion and minimally invasive correction—to restore alignment and function.",
    },
    {
      title: "Kyphosis",
      description:
        "Excessive forward rounding of the back that can cause a hunched posture and back pain. Surgical correction helps straighten the spine and reduce pain, especially in severe or progressive cases.",
    },
    {
      title: "Lordosis (Swayback)",
      description:
        "An exaggerated inward curve of the lower back that can cause discomfort and postural issues. Corrective surgery can restore balance and reduce strain on spinal joints.",
    },
    {
      title: "Flatback Syndrome",
      description:
        "Loss of the natural lumbar curve leads to difficulty standing upright and chronic fatigue. Surgical realignment helps restore proper curvature and improve quality of life.",
    },
    {
      title: "Neuromuscular Scoliosis",
      description:
        "Spinal curvature caused by muscular or neurological conditions like cerebral palsy or muscular dystrophy. Our approach includes customized surgical planning and multidisciplinary care.",
    },
    {
      title: "Congenital Spine Deformities",
      description:
        "Spinal abnormalities present from birth can lead to severe curvature as a child grows. We offer early interventions and corrective procedures to support healthy spinal development.",
    },
  ];
  const spinalDeformityFaqs = [
    {
      q: "What is spinal deformity correction surgery?",
      a: "It's a surgical procedure to realign and stabilize the spine when it's abnormally curved, such as in scoliosis, kyphosis, or other structural issues. The goal is to improve posture, relieve pain, and prevent future complications.",
    },
    {
      q: "When is surgery necessary for spinal deformities?",
      a: "Surgery is usually considered when the curve is severe, progressive, or causing pain, breathing issues, or mobility problems—and when bracing or therapy is no longer effective.",
    },
    {
      q: "How long is the recovery after spinal deformity correction?",
      a: "Most patients stay in the hospital for 3–7 days and begin walking within a few days. Full recovery—including a return to normal activities—typically takes 3–6 months with physical therapy.",
    },
    {
      q: "Will I be able to walk after the surgery?",
      a: "Yes. In most cases, patients begin walking within a day or two after surgery with help from our care team. We’ll guide your rehab step by step.",
    },
    {
      q: "Are there risks involved?",
      a: "Like any surgery, there are risks—such as infection, bleeding, or nerve injury—but in the hands of experienced surgeons, spinal deformity correction is generally very safe and highly effective.",
    },
    {
      q: "Can adults have spinal deformity correction too?",
      a: "Absolutely. While many cases are treated during adolescence, adults with worsening curves, pain, or posture issues can benefit greatly from surgery. Every case is evaluated individually.",
    },
    {
      q: "Will I need rods or implants in my spine?",
      a: "Yes, most correction procedures involve metal rods, screws, or plates to support and hold your spine in the correct position while it heals and fuses properly.",
    },
  ];

  return (
   <motion.main
  className="mx-auto mt-12 max-w-6xl px-4 py-10 text-gray-800"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Hero Section */}
  <motion.section
    className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center mt-12 mb-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.div
      className="space-y-4 z-20"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Spinal Deformity&nbsp;Correction
      </h1>
      <p className="text-xl text-gray-700">
        Realigning the spine, restoring balance, and relieving chronic pain
        through advanced surgical care.
      </p>
      <Bookbutton />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Image
        src="/images/services/spinal-deformity.png"
        alt="Patient standing tall after spinal correction surgery"
        width={600}
        height={400}
        className="rounded-4xl shadow-lg  object-cover"
      />
    </motion.div>
  </motion.section>

  {/* Problem & Solution */}
  <motion.section
    className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 items-start px-4 sm:px-6"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
        What You're Feeling
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Chronic back pain, uneven posture, shoulder height differences...
      </p>
    </div>

    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
        How We Fix It
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Through advanced spinal correction surgery, we carefully realign...
      </p>
    </div>

    <motion.div
      className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
        Our Treatment Approach
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
        Spinal correction isn’t a one-size-fits-all fix...
      </p>
      <ul className="text-gray-700 text-base space-y-3 max-w-3xl mx-auto">
        <li>• In-depth diagnostics using X-rays...</li>
        <li>• Clear breakdowns of your spinal curve...</li>
        <li>• Surgical plans that prioritize...</li>
        <li>• Post-op rehab...</li>
        <li>• Regular follow-ups...</li>
        <li>• Support for your emotional...</li>
      </ul>
    </motion.div>

    <motion.div
      className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
        What You Can Expect
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
        Real results. Real relief. This isn’t just about straighter spines...
      </p>
      <ul className="text-gray-700 text-base space-y-3 max-w-3xl mx-auto">
        <li>• Better posture and balance</li>
        <li>• Reduced pain and stiffness</li>
        <li>• Greater confidence...</li>
        <li>• Improved lung and organ function...</li>
        <li>• Less fatigue and more energy...</li>
        <li>• Renewed independence...</li>
        <li>• Backed by a team that’s with you...</li>
      </ul>
    </motion.div>
  </motion.section>

  {/* Static sections (or animate as needed) */}
  <ConditionWeTreat conditions={spinalDeformityConditions} />

  <motion.section
    className="mb-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-semibold mb-2">Why Patients Trust Us</h3>
    <p>
      Dr. Jagdish Singh Charan brings over 15 years of experience...
    </p>
  </motion.section>

  <ServiceFeq faqs={spinalDeformityFaqs} />
</motion.main>

  );
}
