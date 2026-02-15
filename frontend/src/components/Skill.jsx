import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPython,
  SiTensorflow,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaPython,
} from "react-icons/fa";

import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { icons } from "lucide-react";

const skills = [
  // Frontend
  { name: "React", icon: FaReact, color: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-neutral-700 dark:text-neutral-300" },
  { name: "REST APIs", icon: FaDatabase, color: "text-neutral-600 dark:text-neutral-400" },
  { name: "python", icon: FaPython, color: "text-yellow-600 dark:text-neutral-400" },

  // Databases
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "SQL", icon: FaDatabase, color: "text-indigo-500" },

  // Tools
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "Docker", icon: FaDocker, color: "text-sky-600" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
];


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  },
};

function Skill() {
  return (
    <section className="mt-20 relative">
      {/* Title */}

      <DottedGlowBackground />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 dark:text-white"
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              variants={item}
              className="flex flex-col items-center text-center"
            >
              {/* Circle */}
              <div
                className="w-16 h-16 p-3 rounded-full border dark:border-neutral-800
                           flex items-center justify-center
                           bg-white dark:bg-neutral-900 hover:shadow-lg
                           transition duration-300 overflow-hidden"
              >
                <Icon className={`text-3xl w-full h-full ${skill.color}`} />
              </div>

              {/* Name */}
              <span className="mt-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Skill;
