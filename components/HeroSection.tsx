"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpen: () => void;
}

export default function HeroSection({ onOpen }: HeroSectionProps) {
  const floatingHearts = React.useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.floor(Math.random() * 18) + 12,
        driftX: Math.random() * 160 - 80,
        driftY: Math.random() * 140 - 70,
        rotate: Math.random() * 40 - 20,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.35 + 0.2,
      })),
    [],
  );

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Romantic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-16 left-4 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 bg-pink-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-4 sm:right-10 w-52 h-52 sm:w-80 sm:h-80 bg-rose-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute"
            initial={{
              left: heart.left,
              top: heart.top,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              x: [0, heart.driftX, heart.driftX * -0.4, 0],
              y: [0, heart.driftY * -0.3, heart.driftY, 0],
              rotate: [
                heart.rotate,
                heart.rotate + 18,
                heart.rotate - 12,
                heart.rotate,
              ],
              opacity: [0, heart.opacity, heart.opacity * 0.7, 0],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: heart.delay,
            }}
          >
            <span
              className="select-none"
              style={{ fontSize: heart.size, lineHeight: 1 }}
              aria-hidden="true"
            >
              🧸
            </span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center mb-10 md:mb-16 relative z-10 max-w-4xl"
      >
        {/* Main Title */}
        <motion.h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 bg-clip-text text-transparent mb-6 leading-tight">
          hoiiiiii its your birthdayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy,
          <br />
          <span className="text-3xl sm:text-4xl md:text-6xl block mt-2 text-romantic">
            Praneethaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 🤌
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl text-pink-600 font-light italic leading-relaxed max-w-2xl mx-auto px-2"
        >
          A celebration of the most beautiful soul I know
        </motion.p>

        <div className="h-8 mt-8" />
      </motion.div>

      {/* Romantic Open Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative group z-10"
      >
        <motion.button
          onClick={onOpen}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 50px rgba(255, 77, 109, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative max-w-[92vw] px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 text-white font-bold text-lg sm:text-2xl md:text-3xl rounded-full glow-button transition-all duration-500 flex items-center gap-3 sm:gap-4 overflow-hidden shadow-2xl"
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-200%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Teddy Icon */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className="text-2xl sm:text-3xl select-none"
              aria-hidden="true"
            >
              🧸
            </span>
          </motion.div>

          <span className="relative z-10 tracking-wide">Open</span>

          {/* Sparkles */}
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 opacity-80" />
        </motion.button>
      </motion.div>
    </div>
  );
}
