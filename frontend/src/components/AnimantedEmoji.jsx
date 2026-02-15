import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedEmoji({ filledCount, resetTrigger }) {
  const getEmoji = () => {
    if (filledCount === 0) return "🙂";
    if (filledCount === 1) return "😊";
    if (filledCount === 2) return "😄";
    if (filledCount >= 3) return "🤩";
  };

  return (
    <div className="flex justify-center mb-6 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={getEmoji()}
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-7xl select-none"
        >
          {getEmoji()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedEmoji;
