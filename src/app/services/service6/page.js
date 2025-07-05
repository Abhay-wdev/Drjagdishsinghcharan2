"use client";
import Image from "next/image";
import ConditionWeTreat from "@/components/ConditionWeTreat";
import ServiceFeq from "@/components/ServiceFeq";

export default function Home() {
  const faqs = [
    {
      q: "When should I consider joint replacement surgery?",
      a: "If joint pain is affecting your ability to walk, climb stairs, or do daily tasks—even with medication or therapy—it might be time to explore joint replacement.",
    },
    {
      q: "Will I be in pain after the surgery?",
      a: "You’ll have some discomfort at first, but pain relief begins almost immediately. Most patients say post-op pain is nothing compared to the constant pain they had before surgery.",
    },
    {
      q: "How long is the recovery time?",
      a: "Most patients are up and walking the same day or next, and return to most activities in 6 to 12 weeks. Full recovery and strength may take a few months.",
    },
    {
      q: "Will I need physical therapy?",
      a: "Yes—PT is essential. It strengthens your new joint, improves flexibility, and ensures long-lasting results.",
    },
    {
      q: "Are joint replacements safe and durable?",
      a: "Modern joint replacements are very safe and can last 15–20 years or more with proper care.",
    },
  ];

  const conditions = [
    {
      title: "Hip Arthritis",
      description:
        "We treat advanced hip arthritis that limits your walking, sitting, or sleeping. Our hip replacement surgeries are designed to restore comfort and mobility.",
    },
    {
      title: "Knee Osteoarthritis",
      description:
        "For worn-out knee joints that cause pain with every step, we offer total and partial knee replacements to relieve stiffness and restore function.",
    },
    {
      title: "Shoulder Joint Damage",
      description:
        "When rotator cuff injuries or arthritis damage your shoulder, we provide replacement options that reduce pain and restore upper body strength.",
    },
    {
      title: "Post-Traumatic Joint Damage",
      description:
        "Previous fractures or joint injuries can cause lasting pain and instability. We perform reconstruction or replacement to bring back smooth motion.",
    },
    {
      title: "Rheumatoid or Inflammatory Arthritis",
      description:
        "We help patients with autoimmune arthritis regain joint function through tailored surgical solutions that reduce inflammation and pain.",
    },
  ];

  return (
    <main className="mx-auto mt-12  max-w-5xl px-4 py-10 text-gray-800">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2  sm:grid-cols-1 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold  leading-tight">
            Joint Replacement Surgery
          </h1>
          <p className="text-xl text-gray-700">
            Move Freely Again – Expert Surgery for Pain‑Free Living
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg">
            Book Your Consultation
          </button>
        </div>

        <Image
          src="/images/services/joint-replacement.png"
          alt="Happy patient walking after joint replacement"
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
      <li> Pre-surgery planning that’s personal, not cookie-cutter</li>
      <li> Implants chosen to match your activity level and anatomy</li>
      <li> Minimally invasive techniques for quicker recovery</li>
      <li> Home-friendly rehab that fits your lifestyle</li>
      <li> Ongoing support to keep you on track and feeling strong</li>
      <li> Simple, straight-up communication—no medical jargon overload</li>
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
      <li> Way less pain—sometimes gone entirely</li>
      <li> Freedom to walk, bend, sit, and stand with ease</li>
      <li> Restful sleep without that dull ache</li>
      <li> More independence and fewer doctor visits</li>
      <li> Confidence in movement and daily life</li>
      <li> A renewed sense of strength, stability, and joy</li>
      <li> Care that feels human, not robotic</li>
    </ul>
  </div>
</section>

{/* 
      Secondary Image
      <section className="flex justify-center">
        <Image
          src="/images/joint-team.jpg"
          alt="Surgical team performing joint replacement"
          width={700}
          height={450}
          className="rounded-2xl shadow-lg object-cover"
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
