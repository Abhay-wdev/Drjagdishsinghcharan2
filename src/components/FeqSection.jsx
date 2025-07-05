"use client";

import { useState } from "react";
import { MdQuestionAnswer } from "react-icons/md";

const faqs = [
  {
    question: "What is minimally invasive spine surgery?",
    answer: "Minimally invasive spine surgery involves smaller incisions and specialized tools, which help reduce tissue damage, pain, and recovery time compared to traditional open surgery."
  },
  {
    question: "How long does joint replacement recovery take?",
    answer: "The recovery time for joint replacement surgery typically ranges from 6 weeks to several months, depending on the type of joint, the patient’s health, and rehabilitation progress."
  },
  {
    question: "Do you treat pediatric orthopedic conditions?",
    answer: "Yes, we provide orthopedic care for both children and adults, including treatments for fractures, developmental disorders, and congenital conditions in young patients."
  },
  {
    question: "What are signs I need to see a spine specialist?",
    answer: "Common signs include chronic back or neck pain, numbness or tingling in the limbs, muscle weakness, or difficulty walking or maintaining balance."
  },
  {
    question: "What is arthroscopic surgery?",
    answer: "Arthroscopic surgery is a minimally invasive procedure that uses a small camera and instruments to diagnose and treat joint problems with less pain and faster recovery."
  },
  {
    question: "Do you offer treatment for arthritis?",
    answer: "Yes, we offer personalized arthritis management plans, including medications, physical therapy, lifestyle guidance, and surgical options when necessary."
  },
  {
    question: "Can you help with bone infections like Bone TB?",
    answer: "Absolutely. We specialize in diagnosing and treating bone infections such as Bone TB using a combination of medical therapy, surgical care, and long-term follow-up."
  }
];


export default function FeqSection() {
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (index) =>
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

  return (
    <section className="py-12 ">
      <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl px-8 pb-8">
      <div className="  text-[#333] flex justify-center py-7 px-5">
      <div
        className="max-w-full text-center"
        role="region"
        aria-labelledby="faq-title"
        aria-describedby="faq-desc"
      >
        {/* Icon */}
      
      <center><div className="text-blue-700 text-6xl">
      <MdQuestionAnswer />
</div></center> 
        

        {/* Title */}
        <h1
          id="faq-title"
          className="text-3xl pt-10 font-bold text-blue-800 mb-3 select-none"
        >
          Frequently Asked Questions
        </h1>

        {/* Description */}
        <p
          id="faq-desc"
          className="text-base text-[#444c59] leading-relaxed max-w-2xl mx-auto select-none"
        >
          Find answers to common questions about our urology services. Can't
          find what you're looking for? Contact us directly.
        </p>
      </div>
    </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaqs.includes(i);
            return (
              <div key={i} className=" rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-4 text-left text-black hover:text-blue-700 cursor-pointer flex justify-between items-center font-medium text-lg"
                >
                  {faq.question}
                  <span
                    className={`transition-transform duration-300 text-xl ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden px-4 ${
                    isOpen ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <p className="text-[17px] text-gray-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
