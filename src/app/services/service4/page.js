"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ConditionWeTreat from "@/components/ConditionWeTreat";
import ServiceFeq from "@/components/ServiceFeq";
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
    <main className="mx-auto mt-12  max-w-6xl px-4 py-10 text-gray-800">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center mt-12 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Spinal Deformity&nbsp;Correction
          </h1>
          <p className="text-xl text-gray-700">
            Realigning the spine, restoring balance, and relieving chronic pain
            through advanced surgical care.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg">
            Book Your Consultation
          </button>
        </div>

        <Image
          src="/images/services/spinal-deformity.png"
          alt="Patient standing tall after spinal correction surgery"
          width={600}
          height={400}
          className="rounded-4xl shadow-lg -z-10 object-cover"
        />
      </section>

      {/* Problem & Solution */}
     <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 items-start px-4 sm:px-6">
  {/* What's Going On */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
      What You're Feeling
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
      Chronic back pain, uneven posture, shoulder height differences, or
      even difficulty breathing — spinal deformities like scoliosis or
      kyphosis don’t just affect your appearance, they limit how you live.
      When bracing and exercises no longer work, it’s time for a smarter fix.
    </p>
  </div>

  {/* Solution */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
      How We Fix It
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
      Through advanced spinal correction surgery, we carefully realign
      your spine, relieve pressure on nerves, and stabilize weakened
      areas. Our goal? A straighter, stronger back that supports your
      life—not limits it.
    </p>
  </div>

  {/* Our Treatment Approach */}
  <div className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
      Our Treatment Approach
    </h2>
    <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
      Spinal correction isn’t a one-size-fits-all fix. That’s why we work
      hand-in-hand with you to create a customized plan built around your
      goals, comfort, and lifestyle.
    </p>
    <ul className="text-gray-700 text-base space-y-3 max-w-3xl mx-auto">
      <li>• In-depth diagnostics using X-rays, MRI, and physical assessments</li>
      <li>• Clear breakdowns of your spinal curve, what’s causing it, and how we fix it</li>
      <li>• Surgical plans that prioritize function and mobility</li>
      <li>• Post-op rehab built around movement, posture, and daily habits</li>
      <li>• Regular follow-ups to fine-tune your recovery</li>
      <li>• Support for your emotional and physical well-being through every step</li>
    </ul>
  </div>

  {/* Benefits of Our Care */}
  <div className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
      What You Can Expect
    </h2>
    <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
      Real results. Real relief. This isn’t just about straighter
      spines—it’s about stronger lives. Here’s what patients often share
      post-surgery:
    </p>
    <ul className="text-gray-700 text-base space-y-3 max-w-3xl mx-auto">
      <li>• Better posture and balance</li>
      <li>• Reduced pain and stiffness</li>
      <li>• Greater confidence in movement and appearance</li>
      <li>• Improved lung and organ function (especially in severe curves)</li>
      <li>• Less fatigue and more energy for everyday life</li>
      <li>• Renewed independence and mobility</li>
      <li>• Backed by a team that’s with you the whole way</li>
    </ul>
  </div>
</section>


      <ConditionWeTreat conditions={spinalDeformityConditions} />

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Why Patients Trust Us</h3>
        <p>
          Dr. Jagdish Singh Charan brings over 15 years of experience. Every
          consult is a conversation, not a lecture. Our clinic offers
          cutting-edge techniques, same-day discharges, and a support team that
          truly cares.
        </p>
      </section>
      {/* Second full‑width image */}
      <ServiceFeq faqs={spinalDeformityFaqs} />
      {/* FAQs */}
    </main>
  );
}
