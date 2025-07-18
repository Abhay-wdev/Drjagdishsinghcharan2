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
    q: "When should I consider spine surgery?",
    a: "If your back or neck pain has lasted more than six weeks, isn’t improving with rest, therapy, or medication, or you’re noticing leg weakness or bladder/bowel issues, it’s time for a surgical consult.",
  },
  {
    q: "Will I be in a lot of pain after surgery?",
    a: "Thanks to minimally‑invasive techniques, many people experience less pain than they expect. You’ll get a personalized pain‑management plan the moment you wake up.",
  },
  {
    q: "How long is the recovery time?",
    a: "Most patients are walking the same day, doing light activities within two weeks, and back to normal life in 6–12 weeks—depending on the exact procedure and how closely you follow rehab advice.",
  },
  {
    q: "Will I need physical therapy?",
    a: "Absolutely—it’s the secret sauce. Guided PT helps rebuild strength, flexibility, and confidence so your results stick for good.",
  },
  {
    q: "Is spine surgery safe?",
    a: "Every surgery carries some risk, but in experienced hands using modern tools, the complication rate is low and the success rate is high.",
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
      <motion.section
        className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center"
        variants={staggerContainer}
      >
        <motion.div className="space-y-4" variants={fadeInLeft}>
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight" variants={fadeInUp}>
            Spine Surgery
          </motion.h1>
          <motion.p className="text-xl text-gray-700" variants={fadeInUp}>
            Relief for Back and Neck Pain Through Expert, Personalized Care
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Bookbutton />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInRight}>
          <Image
            src="/images/services/spine.jpg"
            alt="Happy patient walking after joint replacement"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </motion.section>

      <motion.section className="grid grid-cols-1 gap-10 mt-16 mb-16 items-start" variants={staggerContainer}>
        <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
          <motion.div className="w-full" variants={fadeInLeft}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              What You're Feeling
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Herniated discs, spinal stenosis, and nerve compression can make everyday movements—like tying your shoes or getting out of bed—feel like a battle. When rest, therapy, and meds stop helping, pain can start calling the shots.
            </p>
          </motion.div>

          <motion.div className="w-full" variants={fadeInRight}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              How We Fix It
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Our minimally invasive spine surgery relieves pressure on nerves, strengthens weak spots, and restores proper alignment. It’s all about getting you back to moving freely, sleeping soundly, and living on your own terms.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="w-full col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-12 px-6 mt-8" variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Our Treatment Approach
          </h2>
          <p className="text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
            We work side-by-side with you to build a care plan that fits your life—not the other way around. Everything we do is practical, personal, and focused on results that last.
          </p>
          <motion.ul className="text-gray-700 space-y-3 max-w-3xl mx-auto list-none list-inside" variants={staggerContainer}>
            {["Regular check-ins to track your recovery and make adjustments", "Clear, simple explanations of what’s happening and why", "Medication plans that are easy to follow", "Everyday lifestyle tweaks to reduce stress on your spine", "Realistic, step-by-step goals you can stick to", "Support and education for both you and your family"].map((item, index) => (
              <motion.li key={index} variants={fadeInUp}>{item}</motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="w-full col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-12 px-6" variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            What You Can Expect
          </h2>
          <p className="text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
            When you stick with your recovery plan, the payoff is real. Here’s what our patients often tell us they experience:
          </p>
          <motion.ul className="text-gray-700 space-y-3 max-w-3xl mx-auto list-none list-inside" variants={staggerContainer}>
            {["Fewer ER visits and urgent care panics", "Less pain, more control over your day-to-day life", "More energy to do what you love", "Lower reliance on medications over time", "A stronger, more mobile spine", "Confidence in managing your own recovery", "Care from specialists who actually listen"].map((item, index) => (
              <motion.li key={index} variants={fadeInUp}>{item}</motion.li>
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
          Dr. Jagdish Singh Charan brings over 15 years of experience. Every consult is a conversation, not a lecture. Our clinic offers cutting-edge techniques, same-day discharges, and a support team that truly cares.
        </motion.p>
      </motion.section>

      <ServiceFeq faqs={faqs} />
    </motion.main>
  );
}
