"use client";

import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Sarvajanik College of Engineering and Technology",
    details: "CGPA: 8.6",
    duration: "2021 – 2025",
  },
  {
    title: "Grade 12 (GSEB)",
    institution: "AB School, Chikhali",
    details: "Percentage: 89%",
    duration: "2020 – 2021",
  },
  {
    title: "Grade 10 (GSEB)",
    institution: "AB School, Chikhali",
    details: "Percentage: 88%",
    duration: "2018 – 2019",
  },
];

function Education() {
  return (
    <section className="mt-24">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12"
      >
        Education
      </motion.h2>

      <div className="relative">

        {/* SVG Animated Line */}
        <svg
          className="absolute left-3 top-0 h-full"
          width="2"
          viewBox="0 0 2 500"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="1"
            y1="0"
            x2="1"
            y2="500"
            stroke="#d4d4d4"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>

        {/* Timeline Items */}
        <div className="space-y-16 pl-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[43.5px] top-2 h-4 w-4 rounded-full bg-black dark:bg-white" />

              {/* Content */}
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-neutral-600 text-sm">
                {item.institution}
              </p>

              <p className="text-neutral-500 text-sm">
                {item.details}
              </p>

              <span className="text-neutral-400 text-xs">
                {item.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
