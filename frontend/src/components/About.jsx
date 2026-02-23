import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Deep from "../assets/Deep.jpg";
import PageTransition from "./PageTransition";

function About() {
    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center px-6 
                      bg-white text-neutral-900 
                      dark:bg-transparent dark:text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl w-full space-y-10"
                >
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-6">
                        {/* <img
                            src={Deep}
                            alt="Deep"
                            className="w-20 h-20 rounded-full object-cover 
                         ring-1 ring-black/10 dark:ring-white/10"
                        /> */}

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                Hi, I'm{" "}
                                <span className="text-violet-600 dark:text-violet-400">
                                    Deep
                                </span>
                            </h1>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="space-y-4 leading-relaxed 
                          text-neutral-700 dark:text-neutral-300">
                        <p>
                            I build modern web applications focused on performance,
                            scalability, and clean user experience.
                        </p>

                        <p>
                            My stack includes React, Node.js, MongoDB, and modern UI
                            technologies. I enjoy turning complex ideas into simple,
                            intuitive digital products.
                        </p>

                        <p>
                            I’m always learning, experimenting, and improving — both in
                            development and system design.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {[
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Express",
                            "Tailwind CSS",
                            "Three.js",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="text-xs px-3 py-1 rounded-full
                           bg-black/5 border border-black/10 text-neutral-700
                           dark:bg-white/5 dark:border-white/10 dark:text-neutral-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* CTA + Social */}
                    <div className="flex items-center gap-4 pt-2">
                        <Link to="/contact">
                            <Button className="rounded-full px-6 
                                 bg-violet-600 hover:bg-violet-700 
                                 dark:bg-violet-500 dark:hover:bg-violet-600">
                                Contact Me
                            </Button>
                        </Link>

                        <a href="https://github.com/deep6001" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 text-neutral-500 hover:text-black 
                                 dark:text-neutral-400 dark:hover:text-white transition" />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 text-neutral-500 hover:text-black 
                                   dark:text-neutral-400 dark:hover:text-white transition" />
                        </a>

                        <a href="mailto:contact@deep.dev">
                            <Mail className="w-5 h-5 text-neutral-500 hover:text-black 
                               dark:text-neutral-400 dark:hover:text-white transition" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
}

export default About;