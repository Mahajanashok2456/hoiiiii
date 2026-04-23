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

  // Use fixed arrays to avoid re-renders or mismatches
  const particleArray = React.useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.2,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 10 + 10
  })), []);

  const heartArray = React.useMemo(() => Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    scale: Math.random() * 0.5 + 0.5,
    rotate: Math.random() * 360,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 10,
    fontSize: Math.random() * 20 + 10
  })), []);

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
      {particleArray.map((p) => (
        <motion.div
          key={`p-${p.id}`}
          initial={{ 
            left: p.left, 
            top: p.top,
            opacity: p.opacity,
            scale: p.scale
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [p.opacity, 0.8, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-pink-300 rounded-full blur-[1px]"
        />
      ))}

      {/* Floating Hearts */}
      {heartArray.map((h) => (
        <motion.div
          key={`h-${h.id}`}
          initial={{ 
            left: h.left, 
            top: "110%",
            opacity: 0,
            scale: h.scale,
            rotate: h.rotate
          }}
          animate={{
            top: "-10%",
            opacity: [0, 0.6, 0],
            rotate: [h.rotate, h.rotate + 360],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            ease: "linear",
            delay: h.delay
          }}
          className="absolute text-pink-200 select-none"
          style={{ fontSize: h.fontSize }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Subtle Sparkles */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
    </div>
  );
}
