import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  LayoutGroup,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import deep from '../assets/Deep.jpg'
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar({ scrollRef }) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const active = hovered ?? location.pathname;

  // 🔹 Framer Motion scroll tracking
  const { scrollY } = useScroll({
    container: scrollRef, // 👈 important
  });
  console.log("scrollY", scrollY)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10); // scroll threshold
  });

  return (
    <motion.nav
      animate={{
        width: scrolled ? "92%" : "100%",
        y: scrolled ? 20 : 0, // top-20 ≈ 80px
        borderRadius: scrolled ? "2.5rem" : "0rem",
        boxShadow: scrolled
          ? "0 10px 30px rgba(0,0,0,0.08)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className="pointer-events-auto mx-auto border-b px-6 py-3 bg-white dark:bg-black/50 dark:border-white/10"
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center overflow-hidden">
          <img src={deep} alt="logo" className="w-full h-full object-cover" />
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <LayoutGroup>
            <div className="relative hidden md:flex gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative px-4 py-2"
                >
                  {active === item.href && (
                    <motion.div
                      layout
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md bg-neutral-200 dark:bg-neutral-800"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 text-gray-700 dark:text-gray-200">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </LayoutGroup>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} className="text-gray-700" /> : <Sun size={20} className="text-white" />}
          </button>

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: {
                opacity: 0,
                height: 0,
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
              show: {
                opacity: 1,
                height: "auto",
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="md:hidden overflow-hidden"
          >
            <LayoutGroup>
              <motion.div className="flex flex-col gap-2 mt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="relative px-4 py-2 block"
                    >
                      {location.pathname === item.href && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                        />
                      )}
                      <span className="relative z-10 text-gray-700 dark:text-gray-200">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </LayoutGroup>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;
