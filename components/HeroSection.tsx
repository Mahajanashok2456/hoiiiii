"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpen: () => void;
}

export default function HeroSection({ onOpen }: HeroSectionProps) {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-display font-bold text-pink-500 glow-text mb-4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Heyyyyy!! It’s your birthday ✨
        </motion.h1>
        <p className="text-pink-400 text-xl md:text-2xl font-light italic">
          Ready for a little magic, Praneetha?
        </p>
      </motion.div>

      <div className="relative group">
        {/* Cute Cartoon Character */}
        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-16 pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Cute Cat-like Head */}
            <circle cx="50" cy="50" r="40" fill="#F8BBD0" />
            {/* Ears */}
            <path d="M20 20 L40 30 L15 50 Z" fill="#F48FB1" />
            <path d="M80 20 L60 30 L85 50 Z" fill="#F48FB1" />
            {/* Eyes */}
            <circle cx="35" cy="45" r="5" fill="#333" />
            <circle cx="65" cy="45" r="5" fill="#333" />
            {/* Blush */}
            <circle cx="25" cy="55" r="6" fill="#F06292" opacity="0.4" />
            <circle cx="75" cy="55" r="6" fill="#F06292" opacity="0.4" />
            {/* Mouth */}
            <path d="M45 60 Q50 65 55 60" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>

        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-12 py-5 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold text-2xl rounded-full glow-button transition-all duration-300 flex items-center gap-3 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <Sparkles className="w-6 h-6" />
          Open Surprise
        </motion.button>
      </div>
    </div>
  );
}
