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
  const particleArray = React.useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.2,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 10 + 10,
      })),
    [],
  );

  const heartArray = React.useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        scale: Math.random() * 0.5 + 0.5,
        rotate: Math.random() * 360,
        driftX: Math.random() * 140 - 70,
        driftY: Math.random() * 120 - 60,
        duration: Math.random() * 14 + 12,
        delay: Math.random() * 8,
        fontSize: Math.random() * 20 + 10,
      })),
    [],
  );

  if (!isMounted)
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-100" />
    );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Floating Particles */}
      {particleArray.map((p) => (
        <motion.div
          key={`p-${p.id}`}
          initial={{
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            scale: p.scale,
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

      {/* Floating Teddies */}
      {heartArray.map((h) => (
        <motion.div
          key={`h-${h.id}`}
          initial={{
            left: h.left,
            top: h.top,
            opacity: 0,
            scale: h.scale,
            rotate: h.rotate,
          }}
          animate={{
            x: [0, h.driftX, h.driftX * -0.5, 0],
            y: [0, h.driftY * -0.6, h.driftY, 0],
            opacity: [0, 0.65, 0.35, 0],
            rotate: [h.rotate, h.rotate + 180, h.rotate + 360],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: h.delay,
          }}
          className="absolute text-pink-200 select-none"
          style={{ fontSize: h.fontSize }}
        >
          <span
            className="select-none"
            style={{
              fontSize: Math.max(12, Math.round(h.fontSize)),
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            🧸
          </span>
        </motion.div>
      ))}

      {/* Subtle Sparkles Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
    </div>
  );
}
