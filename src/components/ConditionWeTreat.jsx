"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ConditionWeTreat({ conditions }) {
  return (
    <section className="w-full py-12 px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Conditions We Treat
      </motion.h2>

      <div className="space-y-10 max-w-5xl mx-auto ">
        {conditions.map((condition, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full border-l-blue-500 border-l-4 p-4 bg-blue-50 rounded-3xl cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 w-full">
              {condition.title}
            </h3>
            <p className="text-base text-gray-600 w-full">
              {condition.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
