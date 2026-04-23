"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce), (max-width: 768px)",
    );
    const updateMode = () => setIsLightMode(mediaQuery.matches);
    updateMode();
    mediaQuery.addEventListener("change", updateMode);

    return () => {
      mediaQuery.removeEventListener("change", updateMode);
    };
  }, []);

  const particleCount = isLightMode ? 12 : 24;
  const teddyCount = isLightMode ? 6 : 12;

  // Use fixed arrays to avoid re-renders or mismatches
  const particleArray = React.useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.2,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 12 + 12,
      })),
    [particleCount],
  );

  const heartArray = React.useMemo(
    () =>
      Array.from({ length: teddyCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        scale: Math.random() * 0.5 + 0.5,
        rotate: Math.random() * 360,
        driftX: Math.random() * 100 - 50,
        driftY: Math.random() * 90 - 45,
        duration: Math.random() * 16 + 14,
        delay: Math.random() * 8,
        fontSize: Math.random() * 14 + 10,
      })),
    [teddyCount],
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
            y: [0, -70, 0],
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
            x: [0, h.driftX, 0],
            y: [0, h.driftY, 0],
            opacity: [0, 0.55, 0],
            rotate: [h.rotate, h.rotate + 180],
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
      {!isLightMode && (
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
      )}
    </div>
  );
}
