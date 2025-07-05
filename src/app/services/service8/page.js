"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ConditionWeTreat from "@/components/ConditionWeTreat";
import ServiceFeq from "@/components/ServiceFeq";
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
    <>
      <main className="mx-auto mt-12  max-w-5xl px-4 py-10 text-gray-800">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Fracture & Trauma Care
            </h1>
            <p className="text-xl text-gray-700">
              Swift Recovery Starts Here – Expert Treatment for Bone Injuries
              and Accidents
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg">
              Book Your Consultation
            </button>
          </div>

          <Image
            src="/images/services/fracture.jpg" // make sure this image exists!
            alt="Patient receiving expert fracture care after injury"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </section>

        {/* Problem & Solution */}
       <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 items-start px-4 sm:px-6">
  {/* What's Going On */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
      What You're Dealing With
    </h2>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
      Falls, car accidents, sports injuries—sometimes life hits hard and
      hits fast. Bone fractures, dislocations, or spinal trauma can
      leave you immobile, in pain, and unsure what comes next. It’s not
      just an injury—it’s an interruption to everything.
    </p>
  </div>

  {/* Solution */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
      How We Fix It
    </h2>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
      Our trauma care team specializes in stabilizing, aligning, and
      healing broken bones with speed and precision. Whether it’s
      surgical fixation, spinal stabilization, or post-op rehab, we’re
      here to restore what was lost—and help you move forward,
      literally.
    </p>
  </div>

  {/* Our Treatment Approach */}
  <div className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
      Our Treatment Approach
    </h2>
    <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
      Every injury is different, so our approach flexes to fit your
      needs. We combine surgical skill, trauma experience, and hands-on
      recovery planning to rebuild strength and get you back in motion.
    </p>
    <ul className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto">
      <li>• Immediate assessment and imaging to understand the full injury</li>
      <li>• Advanced surgical or non-surgical options to fix the fracture</li>
      <li>• Pain management that won’t leave you foggy or dependent</li>
      <li>• Rehab plans that grow with you—step by step</li>
      <li>• Bone-strengthening strategies for long-term resilience</li>
      <li>• Support for trauma-related anxiety or fear of reinjury</li>
    </ul>
  </div>

  {/* Benefits of Our Care */}
  <div className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
      What You Can Expect
    </h2>
    <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
      Recovery takes work—but the right care makes it worth it. Our
      patients often tell us they feel:
    </p>
    <ul className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto">
      <li>• Faster healing and return to activity</li>
      <li>• Reduced risk of long-term mobility issues</li>
      <li>• Confidence in using the injured limb or area again</li>
      <li>• Better sleep and less reliance on pain meds</li>
      <li>• Improved bone strength and stability</li>
      <li>• Peace of mind knowing they’re supported</li>
      <li>• Hope for getting back to the life they love</li>
    </ul>
  </div>
</section>


        <ConditionWeTreat conditions={conditions} />

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">Why Patients Trust Us</h3>
          <p>
            Dr. Jagdish Singh Charan brings over 15 years of experience. Every
            consult is a conversation, not a lecture. Our clinic offers
            cutting-edge techniques, same-day discharges, and a support team
            that truly cares.
          </p>
        </section>

        {/* FAQs */}
        <ServiceFeq faqs={faqs} />
      </main>
    </>
  );
}
