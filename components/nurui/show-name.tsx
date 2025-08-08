"use client";

import { easeInOut, motion } from "framer-motion";

export default function NameShowcase() {
  return (
    <motion.div className="flex items-center justify-center h-full w-full"  >
      <motion.h1
        initial={{ opacity: 0, y: -100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 3.5,
          ease: easeInOut, 
        }}
        className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-silver-400 via-gray-300 to-silver-500 drop-shadow-lg"
      >
        I'm Praveen
      </motion.h1>
    </motion.div>
  );
}
