import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Edunet Foundation",
    duration: "Jul 2023 – Aug 2023",
    role: "AI Trainee",
    points: [
      "Completed training on Artificial Intelligence with Cloud Computing under the AI Shaksam Program.",
      "Led a team of 5 members to develop an age and gender detection system using AI techniques.",
      "Built and trained CNN models using TensorFlow for accurate predictions.",
      "Integrated AI models into a web application for real-time inference using Flask and React.",
    ],
  },
  {
    company: "Jemisty Info Solution LLP",
    duration: "Jan 2025 – Jun 2025",
    role: "Web Developer Intern",
    points: [
      "Developed an automated report generation tool using React and Node.js.",
      "Converted Nessus and WinAudit outputs into structured, professional reports.",
      "Reduced manual reporting effort by over 90%.",
      "Improved application performance by 5× through image and font optimization.",
    ],
  },
  {
    company: "Letmegrab",
    duration: "Sept 2025 – Nov 2025",
    role: "Software Developer",
    points: [
      "Built a Task Monitoring and Management System to improve team collaboration and workflow visibility.",
      "Resolved 200+ backend bugs, significantly improving system stability and user experience.",
      "Optimized database queries, reducing API response time from 17 seconds to under 2 seconds.",
      "Implemented Role-Based Access Control (RBAC) for secure user management.",
      "Developed a dynamic notification system allowing admins to manage users and notification rules.",
    ],
  },
];

function Experience() {
  return (
    <section className="mt-10 ">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-neutral-200 pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dot */}
            <span className="absolute -left-[32px] top-2 h-4 w-4 rounded-full bg-neutral-900 dark:bg-neutral-100" />

            {/* Content */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {exp.role} · {exp.company}
                </h3>
                <span className="text-sm text-neutral-500">
                  {exp.duration}
                </span>
              </div>

              <ul className="list-disc pl-5 text-neutral-600 text-sm space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
