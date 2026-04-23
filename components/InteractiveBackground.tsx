"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const particles = Array.from({ length: 30 });
  const hearts = Array.from({ length: 15 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-100" />;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-200/30 blur-[100px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-100/30 blur-[100px] rounded-full"
      />

      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={`p-${i}`}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [null, "-20%", null],
            opacity: [null, 0.8, null],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-pink-300 rounded-full blur-[1px]"
        />
      ))}

      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <motion.div
          key={`h-${i}`}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%",
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 360
          }}
          animate={{
            y: "-10%",
            opacity: [0, 0.6, 0],
            rotate: [null, Math.random() * 360 + 180],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute text-pink-200 select-none"
          style={{ fontSize: Math.random() * 20 + 10 }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Subtle Sparkles */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
    </div>
  );
}
