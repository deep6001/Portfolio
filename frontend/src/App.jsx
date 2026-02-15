import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";
import Home from "./pages/Home";
import { useEffect, useRef } from "react";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import ProjectsPage from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import { useAnalytics } from "./hooks/useAnalytics";

function App() {
  useAnalytics(); // Initialize tracking
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);


  return (
    <ThemeProvider>
      <div className="relative h-screen overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        {/* Background (NOT scrollable) */}
        <BackgroundRippleEffect />

        {/* Center Scrollable Container */}
        <div
          ref={scrollRef}
          className="relative max-w-4xl mx-auto z-10 bg-white dark:bg-black/30  border-x border-white/20 shadow-2xl h-full overflow-y-auto">

          {/* Sticky Navbar INSIDE scroll container */}
          <div className="sticky top-0 z-20 bg-transparent backdrop-blur-lg">
            <Navbar scrollRef={scrollRef} />
          </div>

          {/* Page Content */}
          <main className="p-6">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
