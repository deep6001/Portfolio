import React from "react";
import PageTransition from "./PageTransition";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Actually, I'll just use <span> with tailwind classes for badges since I didn't see Badge component.
import {
    Github,
    Linkedin,
    Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Deep from "../assets/Deep.jpg";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};



const experience = [
    {
        role: "Full Stack Developer",
        company: "Freelance",
        period: "2024 - Present",
        description: "Building modern web applications for various clients using React, Next.js, and Node.js.",
    },
    {
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2023 - 2024",
        description: "Developed and maintained responsive user interfaces, improving site performance by 30%.",
    },
    // Add more as needed
];

function About() {
    return (
        <PageTransition>
            <motion.div
                className="space-y-12 py-8 relative"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

                {/* Hero Section */}
                <motion.section variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <img
                            src={Deep}
                            alt="Profile"
                            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-neutral-800 shadow-2xl"
                        />
                    </div>

                    <div className="text-center md:text-left space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
                            Hi, I'm Deep
                        </h1>
                        <h2 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-medium">
                            Full Stack Developer
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed">
                            I craft digital experiences that are not only functional but also widely visually appealing.
                            Passionate about modern web technologies and building scalable applications.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start pt-2">
                            <Link to="/contact">
                                <Button className="rounded-full px-6 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all">
                                    Let's Talk
                                </Button>
                            </Link>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                    <Github className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                    <Linkedin className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="mailto:contact@example.com">
                                <Button variant="outline" size="icon" className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                    <Mail className="w-5 h-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.section>
            </motion.div>
        </PageTransition>
    );
}

export default About;