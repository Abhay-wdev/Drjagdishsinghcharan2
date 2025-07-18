"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import ConditionWeTreat from "@/components/ConditionWeTreat";
import ServiceFeq from "@/components/ServiceFeq";
import Bookbutton from "@/components/Bookbutton";

export default function Home() {
    const discReplacementConditions = [
    {
      title: "Degenerative Disc Disease",
      description:
        "When spinal discs wear down from aging or injury, they lose height and shock absorption—causing stiffness, nerve irritation, and chronic pain. Disc replacement restores cushioning and natural movement.",
    },
    {
      title: "Herniated Discs",
      description:
        "A disc that slips or ruptures can compress nearby nerves, leading to sharp pain, numbness, or weakness. If the damage is severe, replacing the disc can relieve pressure while maintaining mobility.",
    },
    {
      title: "Cervical Disc Herniation",
      description:
        "A bulging or torn disc in the neck can press on spinal nerves, sending pain down your arms. Cervical disc replacement removes the problem disc and inserts a motion-preserving implant to relieve pain and keep flexibility.",
    },
    {
      title: "Lumbar Disc Herniation",
      description:
        "Herniated discs in the lower back can cause intense leg pain (sciatica). When conservative care fails, lumbar disc replacement may relieve symptoms without fusing your spine.",
    },
    {
      title: "Failed Disc Surgery",
      description:
        "If previous spine surgery didn’t relieve your symptoms, disc replacement can offer a second chance—especially when fusion has caused additional stress on nearby spinal segments.",
    },
    {
      title: "Adjacent Segment Disease",
      description:
        "After a spinal fusion, discs above or below the fused area can break down from added stress. Disc replacement can treat the worn disc while preserving movement and preventing a domino effect.",
    },
  ];

  /* ───────────────  DISC REPLACEMENT FAQS  ─────────────── */

  const discReplacementFaqs = [
    {
      q: "What exactly is disc replacement surgery?",
      a: "The surgeon removes a damaged spinal disc and inserts a man‑made implant that mimics a healthy disc’s height and motion—so your spine keeps bending and twisting instead of being locked in place.",
    },
    {
      q: "How is it different from spinal fusion?",
      a: "Fusion bolts two bones together, sacrificing motion to stop pain. Disc replacement preserves motion, which often means quicker recovery, less stress on nearby levels, and a more natural feel.",
    },
    {
      q: "Am I a good candidate?",
      a: "You’re likely a candidate if one or two discs are the main pain generators, you have no major facet‑joint arthritis or instability, and you’ve tried non‑surgical options for at least a few months.",
    },
    {
      q: "How long does the artificial disc last?",
      a: "Current research shows modern implants holding strong well past 15–20 years. Think of it like a hip or knee replacement—built to go the distance.",
    },
    {
      q: "What’s the recovery time?",
      a: "Most patients walk the same day, drive in about a week, return to desk work in 1–2 weeks, and hit the gym (smartly) in 6–8 weeks—depending on your exact job and fitness level.",
    },
    {
      q: "Will I lose flexibility?",
      a: "Nope—that’s the point. An artificial disc is designed to keep your neck or back moving almost like factory‑fresh hardware.",
    },
    {
      q: "Is the surgery safe?",
      a: "Yes. Complication rates are low, especially in experienced hands. We monitor nerves in real time and use X‑ray guidance to place the implant precisely.",
    },
    {
      q: "Is disc replacement covered by insurance?",
      a: "Many insurers now cover cervical disc replacements. Lumbar coverage varies by plan. Our team checks your benefits and secures pre‑authorization before surgery day.",
    },
    {
      q: "When can I get back to sports or heavy lifting?",
      a: "Light cardio in a couple of weeks, strength training around two months, and contact sports after your post‑op imaging clears you—usually three months or so.",
    },
  ];

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        {/* Hero Section */}
        <motion.section
          className="grid md:grid-cols-2 mt-12 sm:grid-cols-1 gap-8 items-center"
          initial={{ opacity: 0, x:-50 }}
        animate={{ opacity: 1, y: 0 ,x:0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Disc Replacement Surgery
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image
              src="/images/services/disk-replacement.png"
              alt="Patient recovering after disk replacement surgery"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:row-span-2"
          >
            <p className="mb-6 w-auto">
              Tired of living with chronic back or neck pain that just won't
              quit? Disc replacement surgery offers a motion-preserving
              alternative to spinal fusion. We help restore movement, reduce
              pain, and get you back to doing what you love — without the
              stiffness and limitations.
            </p>
            <Bookbutton />
          </motion.div>
        </motion.section>

        {/* What Is It Section */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-2">
            What is Disc Replacement Surgery?
          </h3>
          <p>
            Disc replacement surgery involves removing a worn or damaged spinal
            disc and replacing it with an artificial one designed to mimic
            natural movement. Unlike traditional spinal fusion, which locks two
            bones together, disc replacement keeps your spine flexible — helping
            you move more freely with less long-term impact.
          </p>
        </motion.section>

        {/* What's Going On + How We Fix It + 2 Blue Boxes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 items-start px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              What You're Feeling
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Persistent neck or lower back pain. Stiffness that won’t quit...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              How We Fix It
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Disc Replacement Surgery removes the damaged disc and replaces it...
            </p>
          </motion.div>

          <motion.div
            className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              Every spine is different. That’s why we start with a thorough assessment...
            </p>
            <ul className="text-gray-700 text-base space-y-3 max-w-3xl mx-auto">
              <li>• Advanced imaging to pinpoint which disc is the culprit</li>
              <li>• Minimally invasive techniques for faster healing</li>
              <li>• Motion-preserving implants built to last</li>
              <li>• Personalized rehab plans to regain flexibility and strength</li>
              <li>• Clear, jargon-free communication every step of the way</li>
              <li>• Emphasis on lifestyle adjustments that support long-term spine health</li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full md:col-span-2 bg-gray-50 border-l-4 border-blue-500 rounded-3xl py-10 px-4 sm:px-6 mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
              What You Can Expect
            </h2>
            <p className="text-base sm:text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              Disc replacement surgery can be a game-changer. Here’s what many of our
              patients experience...
            </p>
            <ul className="text-gray-700 text-base space-y-3 max-w-3xl mx-auto">
              <li>• Reduced or eliminated neck or back pain</li>
              <li>• Improved range of motion and spine flexibility</li>
              <li>• Faster recovery compared to spinal fusion</li>
              <li>• Fewer long-term complications and follow-ups</li>
              <li>• Increased energy and comfort in daily movement</li>
              <li>• Lower dependence on pain medications</li>
              <li>• Freedom to get back to the life you love</li>
            </ul>
          </motion.div>
        </section>

        {/* Conditions (already animated with hover inside the component) */}
        <ConditionWeTreat conditions={discReplacementConditions} />

        {/* Trust Section */}
        <motion.section
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-2">Why Patients Trust Us</h3>
          <p>
            Dr. Jagdish Singh Charan brings over 15 years of experience...
          </p>
        </motion.section>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ServiceFeq faqs={discReplacementFaqs} />
        </motion.div>
      </main>
    </>
  );
}
