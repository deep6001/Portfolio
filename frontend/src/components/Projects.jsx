"use client";

import React from "react";
import { motion } from "framer-motion";
import iphone from "../assets/iphone.png";
import sorting from '../assets/Algoanimate.png'
import tshirt from "../assets/tshirt.png";
import mongochatbot from '../assets/Mongochatbot.png'
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ExternalLinkIcon, Github } from "lucide-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

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
  SiGooglegemini,
  SiThreedotjs,
  SiFramer,
} from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";


const skills = [
  // Frontend
  { id: 1, name: "React", image: <FaReact className="text-sky-500 w-full h-full p-2" /> },
  { id: 2, name: "Next.js", image: <SiNextdotjs className="text-black dark:text-white w-full h-full p-2" /> },
  { id: 3, name: "JavaScript", image: <SiJavascript className="text-yellow-400 w-full h-full p-2" /> },
  { id: 4, name: "HTML", image: <SiHtml5 className="text-orange-500 w-full h-full p-2" /> },
  { id: 5, name: "CSS", image: <SiCss3 className="text-blue-500 w-full h-full p-2" /> },
  { id: 6, name: "Tailwind", image: <SiTailwindcss className="text-cyan-500 w-full h-full p-2" /> },

  // Backend
  { id: 7, name: "Node.js", image: <FaNodeJs className="text-green-500 w-full h-full p-2" /> },
  { id: 8, name: "Express", image: <SiExpress className="text-neutral-700 dark:text-neutral-300 w-full h-full p-2" /> },
  { id: 9, name: "REST APIs", image: <FaDatabase className="text-neutral-600 dark:text-neutral-400 w-full h-full p-2" /> },

  // Databases
  { id: 10, name: "MongoDB", image: <SiMongodb className="text-emerald-500 w-full h-full p-2" /> },
  { id: 11, name: "MySQL", image: <SiMysql className="text-blue-600 w-full h-full p-2" /> },
  { id: 12, name: "SQL", image: <FaDatabase className="text-indigo-500 w-full h-full p-2" /> },

  // Tools
  { id: 13, name: "Git", image: <FaGitAlt className="text-orange-600 w-full h-full p-2" /> },
  { id: 14, name: "Docker", image: <FaDocker className="text-sky-600 w-full h-full p-2" /> },
  { id: 15, name: "Firebase", image: <SiFirebase className="text-yellow-500 w-full h-full p-2" /> },
];

const projects = [
  {
    title: "T-shirt Design Web App",
    description:
      "A web application for designing custom t-shirts with a user-friendly interface and real-time preview.",
    tech: [
      { id: 1, name: "React", image: <FaReact className="text-sky-500 w-full h-full p-2" /> },
      { id: 2, name: "Node.js", image: <FaNodeJs className="text-green-500 w-full h-full p-2" /> },
      { id: 3, name: "MongoDB", image: <SiMongodb className="text-emerald-500 w-full h-full p-2" /> },
      { id: 4, name: "Three.js", image: <SiThreedotjs className="text-blue-500 w-full h-full p-2" /> }
    ],
    image: tshirt,
    github: "https://github.com/deep6001/T-shirt-Design",
    live: "https://tshirtdesign1.netlify.app/",
  },
  {
    title: "MongoDB Chatbot",
    description:
      "A chatbot that use Mongodb retrieving  data, providing intelligent responses based on user input.",
    tech: [
      { id: 1, name: "React", image: <FaReact className="text-sky-500 w-full h-full p-2" /> },
      { id: 2, name: "Node.js", image: <FaNodeJs className="text-green-500 w-full h-full p-2" /> },
      { id: 3, name: "MongoDB", image: <SiMongodb className="text-emerald-500 w-full h-full p-2" /> },
      { id: 4, name: "Gemini API", image: <SiGooglegemini className="text-blue-500 w-full h-full p-2" /> }
    ],
    image: mongochatbot,
    github: "https://github.com/deep6001/MongoDb-Chatbot",
    live: "",
  },
  {
    title: "Iphone Landing Page",
    description:
      "A scalable social platform for connecting users with posts, likes, and comments.",
    tech: [
      { id: 1, name: "React", image: <FaReact className="text-sky-500 w-full h-full p-2" /> },
      { id: 2, name: "Tailwind", image: <SiTailwindcss className="text-cyan-500 w-full h-full p-2" /> },
      { id: 3, name: "Three.js", image: <SiThreedotjs className="text-blue-500 w-full h-full p-2" /> },
      { id: 4, name: "Framer Motion", image: <SiFramer className="text-purple-500 w-full h-full p-2" /> }
    ],
    image: iphone,
    github: "https://github.com/deep6001/iphone-landing-page",
    live: "https://iphoneland.netlify.app/",
  },
  {
    title: "Sorting Visuliser",
    description:
      "A web application for sorting algorithms visualization with a user-friendly interface and real-time preview.",
    tech: [
      { id: 1, name: "React", image: <FaReact className="text-sky-500 w-full h-full p-2" /> },
      { id: 2, name: "Tailwind", image: <SiTailwindcss className="text-cyan-500 w-full h-full p-2" /> },
      { id: 3, name: "Framer Motion", image: <SiFramer className="text-purple-500 w-full h-full p-2" /> }
    ],
    image: sorting,
    github: "",
    live: "https://algoanimate.netlify.app/",
  }
];

function Projects() {
  return (
    <section className="mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-neutral-500 mt-2">
          A selection of projects showcasing my development experience.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden rounded-2xl border hover:shadow-xl transition duration-300">

              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-conatin"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <CardContent className="py-1 pb-2 px-6 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-row items-center  mb-10 w-full">
                  <AnimatedTooltip items={project.tech} />
                </div>



                {/* Actions */}
                <div className="mt-auto flex items-center gap-6">
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-neutral-700 hover:text-black dark:hover:text-white transition"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>

                  {project.live && <motion.a
                    whileHover={{ x: 4 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-neutral-700 dark:hover:text-white hover:text-black transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-10">
        <Link to="/projects">
          <Button
            variant="outline"
            className="group px-6 py-2.5 rounded-xl border-neutral-300 
                 hover:border-neutral-900 dark:hover:border-white
                 hover:bg-neutral-900 hover:text-white
                 transition-all duration-300 flex items-center gap-2"
          >
            See All Projects
            <ExternalLinkIcon
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </Link>
      </div>

    </section>
  );
}

export default Projects;
