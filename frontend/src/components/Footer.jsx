"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Deep Patel
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
              Full-stack developer passionate about building scalable,
              performant, and impactful digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-md font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-black transition"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Mail size={16} />
                pateldeep120404@gmail.com
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Phone size={16} />
                +91 8866193944
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <MapPin size={16} />
                Navsari,Gujarat,India
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/deep6001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-black transition dark:hover:text-white"
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/deep-patel-51074531a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-black transition dark:hover:text-white"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Deep Patel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
