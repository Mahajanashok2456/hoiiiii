"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FinalScene() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-12"
      >
        <h2 className="text-4xl md:text-7xl font-display font-bold bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 bg-clip-text text-transparent glow-text">
          Stay happy, keep shining, <br /> and make every year legendary ✨
        </h2>
        
        <div className="flex justify-center gap-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="text-4xl"
          >
            🎂
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="text-4xl"
          >
            💖
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="text-4xl"
          >
            ✨
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <p className="text-pink-300 text-sm font-light tracking-widest uppercase">
            Designed for Praneetha with Love
          </p>
        </motion.div>
      </motion.div>

      <footer className="absolute bottom-8 left-0 right-0 px-4 text-center">
        <p className="text-gray-400 text-xs italic">
          This surprise message will be deleted within 12 hours ⏳
        </p>
      </footer>
    </div>
  );
}
