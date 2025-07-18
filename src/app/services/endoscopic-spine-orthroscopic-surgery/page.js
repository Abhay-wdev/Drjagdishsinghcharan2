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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const conditions = [
    {
      title: "Herniated Discs",
      description:
        "When the cushion between your vertebrae slips or ruptures, it can press on nerves and cause serious pain. We offer surgical treatments like microdiscectomy to remove the damaged disc material and relieve pressure.",
    },
    {
      title: "Spinal Stenosis",
      description:
        "This narrowing of the spinal canal can cause pain, numbness, or weakness. Our decompression procedures make more space for your nerves and get you moving comfortably again.",
    },
    {
      title: "Degenerative Disc Disease",
      description:
        "As discs wear down over time, the bones in your spine can grind together, causing chronic pain. Surgical options can stabilize or replace the worn discs for long-term relief.",
    },
    {
      title: "Scoliosis & Spinal Deformities",
      description:
        "We correct abnormal spine curves that cause pain or impair function, using advanced surgical techniques with a focus on safety and mobility.",
    },
    {
      title: "Sciatica",
      description:
        "When a spinal issue compresses your sciatic nerve, pain can shoot down your leg. Surgery can relieve pressure and help you walk, sit, and sleep without agony.",
    },
    {
      title: "Spine Fractures & Injuries",
      description:
        "Whether from trauma or osteoporosis, we treat spinal fractures with stabilization procedures that support healing and reduce future risk.",
    },
  ];
  const faqs = [
    {
      q: "What is endoscopic spine surgery?",
      a: "It’s a minimally invasive procedure that uses a tiny camera and tools through a small incision to treat spine problems like herniated discs or pinched nerves. Less cutting, faster healing, and minimal scarring.",
    },
    {
      q: "How is it different from traditional spine surgery?",
      a: "Traditional surgery usually involves large incisions, more tissue damage, and longer recovery. Endoscopic surgery uses small incisions and precise tools to reduce pain, blood loss, and downtime.",
    },
    {
      q: "What is arthroscopic surgery?",
      a: "It’s a keyhole surgery for joints (like the knee, shoulder, or hip). A small camera (arthroscope) and instruments are inserted through tiny cuts to diagnose and treat joint problems like torn cartilage or ligaments.",
    },
    {
      q: "Is recovery faster with endoscopic or arthroscopic surgery?",
      a: "Yes! Because the surgeries are minimally invasive, recovery time is usually shorter compared to open surgery. Most people go home the same day and return to normal activities much quicker.",
    },
    {
      q: "Are these procedures safe?",
      a: "When performed by experienced surgeons, yes—they’re very safe. In fact, there's often less risk of infection or complications compared to traditional open surgeries.",
    },
    {
      q: "How soon can I get back to work or daily activities?",
      a: "Many patients return to desk jobs in 1–2 weeks. Heavy lifting or physical jobs might need a few more weeks, depending on your healing and what was repaired.",
    },
    {
      q: "Is it covered by insurance?",
      a: "In most cases, yes—but coverage depends on your plan and the reason for the surgery. We’ll help you verify insurance and handle the paperwork for pre-authorization.",
    },
    {
      q: "Will the pain go away completely?",
      a: "For many patients, yes or significantly. The goal is to relieve nerve pressure or joint damage causing the pain. Every case is different, but outcomes are often life-changing.",
    },
  ];
  return (
    <motion.main
      className="mx-auto mt-12  max-w-6xl px-4 py-10 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 mt-12 sm:grid-cols-1 gap-8 items-center">
        <motion.div className="space-y-4" variants={fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold  leading-tight">
            Endoscopic Spine & Arthroscopic Surgery
          </h1>
          <p className="text-xl text-gray-700">
            You don’t have to live with pain like it’s your new normal. Whether
            your spine aches every time you bend, or your joints crack like old
            vinyl, we’re here with surgical solutions that are sharp, subtle,
            and life-changing.
          </p>
          <Bookbutton />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Image
            src="/images/services/endoscopic-spine.jpeg"
            alt="Happy patient walking after joint replacement"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      <motion.div variants={fadeInUp} className="row-span-2 w-full ">
        <h3 className="text-2xl font-semibold mb-2 w-auto">
          What is Endoscopic & Arthroscopic Surgery?
        </h3>
        <p>
          Endoscopic Spine Surgery uses a tiny camera and precision tools to fix
          spinal issues — no large cuts, no long recoveries. Arthroscopic
          Surgery brings that same magic to your joints — knees, shoulders,
          hips, and ankles — healing what hurts through keyhole incisions and
          surgical finesse.
        </p>
      </motion.div>
      {/* Details Sections */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 items-start px-4 sm:px-6 w-full"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            What's Causing the Pain?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Conditions like herniated discs, spinal stenosis, and nerve
            compression can turn simple movements into daily battles. When rest,
            medication, or therapy no longer cut it, the pain can take over your
            routine—and your peace of mind.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            What's Causing the Pain?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Conditions like herniated discs, spinal stenosis, and nerve
            compression can turn simple movements into daily battles. When rest,
            medication, or therapy no longer cut it, the pain can take over your
            routine—and your peace of mind.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
            Our Approach to Endoscopic Spine Surgery
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
            Every spine is different, so we tailor our approach to your unique
            condition and lifestyle. Here’s how we guide you through recovery
            from first visit to full mobility.
          </p>
          <ul className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto">
            <li> Thorough imaging and diagnosis before we recommend surgery</li>
            <li>Minimally invasive procedures with small incisions</li>
            <li>
              {" "}
              Precision tools and camera-guided technique to avoid nerve damage
            </li>
            <li> Same-day discharge in most cases—no long hospital stays</li>
            <li>
              {" "}
              Step-by-step rehab support to help you regain movement safely
            </li>
            <li>
              Regular follow-ups to track your healing and answer questions
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
            What You’ll Gain
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
            Endoscopic spine surgery isn’t just about fixing the problem—it’s
            about giving you your life back. Here’s what you can expect:
          </p>
          <ul className="text-base text-gray-700 space-y-3 max-w-3xl mx-auto">
            <li>Minimal scarring and less blood loss</li>
            <li>Faster return to work and daily activities</li>
            <li>Reduced risk of complications and infections</li>
            <li>Better long-term pain relief and mobility</li>
            <li>No overnight stay for most patients</li>
            <li>One-on-one care from a team that actually listens</li>
          </ul>
        </motion.div>
      </motion.section>

      <ConditionWeTreat conditions={conditions} />

      <motion.section className="mb-10" variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-2">Why Patients Trust Us</h3>
        <p>
          Dr. Jagdish Singh Charan brings over 15 years of experience. Every
          consult is a conversation, not a lecture. Our clinic offers
          cutting-edge techniques, same-day discharges, and a support team that
          truly cares.
        </p>
      </motion.section>

      <ServiceFeq faqs={faqs} />
    </motion.main>
  );
}
