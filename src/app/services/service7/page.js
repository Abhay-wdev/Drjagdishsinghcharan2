"use client";
import { useState } from "react";
import Image from "next/image";
import ConditionWeTreat from "@/components/ConditionWeTreat";
import ServiceFeq from "@/components/ServiceFeq";

export default function Home() {
  const faqs = [
    {
      q: "When should I consider arthroscopy or sports injury care?",
      a: "If you’ve had joint pain, swelling, or instability that doesn’t improve with rest, rehab, or medications, you may need arthroscopy to diagnose or treat the problem directly.",
    },
    {
      q: "Is arthroscopy a major surgery?",
      a: "Nope! Arthroscopy is minimally invasive—it uses tiny incisions, a camera, and precision tools to fix problems inside your joint without cutting open the whole area.",
    },
    {
      q: "How long is the recovery?",
      a: "Recovery varies based on the procedure, but many people return to work or light activities within 1–2 weeks, and sports in 4–12 weeks with proper rehab.",
    },
    {
      q: "Will I need physical therapy?",
      a: "Absolutely—PT is crucial to regain strength, motion, and stability. It’s the playbook for a safe and strong return to activity.",
    },
    {
      q: "Is sports injury care only for athletes?",
      a: "Not at all. Whether you're a weekend warrior or just twisted your knee getting off the couch, we treat everyone with the same expert care.",
    },
  ];

  const conditions = [
    {
      title: "Meniscus Tears",
      description:
        "We treat cartilage injuries in the knee using arthroscopy to remove or repair the tear and restore smooth movement.",
    },
    {
      title: "Ligament Injuries (ACL, MCL, etc.)",
      description:
        "From ACL reconstructions to partial tears, we guide you through surgical repair and a full rehab plan to get you back in the game.",
    },
    {
      title: "Shoulder Dislocations & Labral Tears",
      description:
        "We stabilize unstable shoulders and repair torn labrums so you can throw, lift, and live without fear of it popping out again.",
    },
    {
      title: "Rotator Cuff Injuries",
      description:
        "For torn or inflamed shoulder tendons, we use arthroscopy to clean, repair, and restore strength and range of motion.",
    },
    {
      title: "Cartilage Restoration",
      description:
        "We offer advanced techniques to repair or regrow cartilage for long-term joint health in active individuals.",
    },
  ];

  return (
    <main className="mx-auto mt-12  max-w-5xl px-4 py-10 text-gray-800">
      <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Arthroscopy & Sports Injury Care
          </h1>
          <p className="text-xl text-gray-700">
            Swift, Specialized Recovery for Athletes and Active Lifestyles
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg">
            Book Your Consultation
          </button>
        </div>

        <Image
          src="/images/services/arthritis.png"
          alt="Athlete receiving arthroscopic treatment"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 items-start px-4 sm:px-6">
        {/* What's Going On */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            What You're Feeling
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Achy knees. Stiff hips. Joints that grind, pop, or scream when you
            try to move. Whether it’s from arthritis, injury, or plain old
            wear-and-tear, joint pain can quietly take over your life—stealing
            your steps, your sleep, and your spark.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            How We Fix It
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            With precision joint replacement surgery, we swap out your damaged
            joint surfaces for smooth, strong implants that bring back comfort
            and motion. Our modern, muscle-sparing techniques help you heal
            faster, move better, and get back to doing what you love—without the
            limp.
          </p>
        </div>

        {/* Our Treatment Approach */}
        <div className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
            Our Treatment Approach
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
            You’re not just another set of X-rays. We tailor your joint care
            journey to your goals—whether that’s walking the dog, dancing at
            your kid’s wedding, or just getting through the day without pain.
          </p>
          <ul className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto">
            <li>• Pre-surgery planning that’s personal, not cookie-cutter</li>
            <li>• Implants chosen to match your activity level and anatomy</li>
            <li>• Minimally invasive techniques for quicker recovery</li>
            <li>• Home-friendly rehab that fits your lifestyle</li>
            <li>• Ongoing support to keep you on track and feeling strong</li>
            <li>
              • Simple, straight-up communication—no medical jargon overload
            </li>
          </ul>
        </div>

        {/* Benefits of Our Care */}
        <div className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
            What You Can Expect
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
            The results speak louder than pain ever could. With joint
            replacement done right, here’s what patients often notice:
          </p>
          <ul className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto">
            <li>• Way less pain—sometimes gone entirely</li>
            <li>• Freedom to walk, bend, sit, and stand with ease</li>
            <li>• Restful sleep without that dull ache</li>
            <li>• More independence and fewer doctor visits</li>
            <li>• Confidence in movement and daily life</li>
            <li>• A renewed sense of strength, stability, and joy</li>
            <li>• Care that feels human, not robotic</li>
          </ul>
        </div>
      </section>

      {/* <section className="flex flex-wrap justify-center gap-4 mb-10">
        <Image
          src="/arthroscopy-action.jpg"
          width={600}
          height={400}
          alt="Surgeon performing knee arthroscopy"
          className="rounded-xl shadow-md"
        />
        <Image
          src="/rehab-training.jpg"
          width={600}
          height={400}
          alt="Athlete doing rehabilitation exercises"
          className="rounded-xl shadow-md"
        />
      </section> */}

      <ConditionWeTreat conditions={conditions} />

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Why Patients Trust Us</h3>
        <p>
          Dr. Jagdish Singh Charan brings over 15 years of experience. Every
          consult is a conversation, not a lecture. Our clinic offers
          cutting-edge techniques, same-day discharges, and a support team that
          truly cares.
        </p>
      </section>
      {/* FAQs */}
      <ServiceFeq faqs={faqs} />
    </main>
  );
}
