"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FinalScene() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 pb-24 sm:pb-28 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-8 sm:space-y-12 max-w-5xl px-2"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight font-display font-bold bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 bg-clip-text text-transparent glow-text">
          Stay happy, keep shining, <br /> and make every year legendary ✨
        </h2>

        <div className="flex justify-center gap-3 sm:gap-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="text-3xl sm:text-4xl"
          >
            🎂
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="flex items-center justify-center text-3xl sm:text-4xl text-pink-700"
          >
            <span
              className="text-2xl sm:text-3xl select-none"
              aria-hidden="true"
            >
              🧸
            </span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="text-3xl sm:text-4xl"
          >
            ✨
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 sm:mt-20"
        >
          <p className="text-pink-300 text-xs sm:text-sm font-light tracking-[0.2em] uppercase">
            Designed for Praneetha
          </p>
        </motion.div>
      </motion.div>

      <footer className="absolute bottom-4 sm:bottom-8 left-0 right-0 px-4 text-center">
        <p className="text-gray-400 text-xs italic">
          This website only opens a few times and deletes within 12 hours ⏳
        </p>
      </footer>
    </div>
  );
}
