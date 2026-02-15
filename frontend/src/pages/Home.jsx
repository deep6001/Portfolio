import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Experience from "../components/Experince";
import Skill from "../components/Skill";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "./Contact";
import PageTransition from "../components/PageTransition";
import { useAnalytics } from "@/hooks/useAnalytics";

function Home() {
  const { trackClick } = useAnalytics();

  return (
    <PageTransition>
      <section className="min-h-[calc(200vh-64px)] flex flex-col gap-4 px-4">
        <div className="max-w-xl flex flex-col gap-6">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold leading-tight tracking-tight"
          >
            Hello there! <br />
            I’m <span className="text-neutral-500">Deep Patel</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 text-sm  sm:text-xl  md:text-lg max-w-md"
          >
            I’m a <span className="font-semibold text-neutral-900 bg-neutral-200/70 px-2.5 py-1 rounded-md whitespace-nowrap">
              Full-stack developer
            </span> who loves building scalable products
            and web apps Using <span className="font-semibold text-neutral-900 bg-neutral-200/70 px-2.5  py-1 rounded-md whitespace-nowrap">MERN Stack</span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex items-center gap-4 mt-2"
          >
            <a
              href="https://github.com/deep6001"
              onClick={() => trackClick('home_github', 'social_link')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/deep-patel-51074531a/"
              onClick={() => trackClick('home_linkedin', 'social_link')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border hover:bg-neutral-100 transition"
            >
              <Linkedin size={20} />
            </a>



            <a
              href="./resume.pdf"
              onClick={() => trackClick('home_resume', 'download')}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 
               bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-medium"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <Experience />

        <Skill />

        <Projects />

        <Education />

        <Contact />

      </section>
    </PageTransition>

  );
}

export default Home;
