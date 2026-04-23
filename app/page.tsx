"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import MemoryGallery from "@/components/MemoryGallery";
import FinalScene from "@/components/FinalScene";
import InteractiveBackground from "@/components/InteractiveBackground";
import CursorGlow from "@/components/CursorGlow";
import MusicPlayer from "@/components/MusicPlayer";

export default function BirthdayPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpenSurprise = () => {
    setIsOpened(true);

    // Romantic Confetti Burst (pink and rose tones)
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 40,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      colors: [
        "#ff4d6d",
        "#ff758f",
        "#c9184a",
        "#ffb3c1",
        "#ffccd5",
        "#ff8fa3",
      ],
    };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 60 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        disableForReducedMotion: true,
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        disableForReducedMotion: true,
      });
    }, 250);

    // Extra sparkle burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 120,
        origin: { x: 0.5, y: 0.6 },
        colors: ["#fff", "#ffccd5"],
        shapes: ["circle", "square"],
        disableForReducedMotion: true,
      });
    }, 800);

    // Cinematic Transition Sequence
    setTimeout(() => {
      setShowContent(true);
    }, 1500);
  };

  return (
    <main className="relative min-h-screen selection:bg-pink-200 selection:text-pink-900">
      <CursorGlow />
      <InteractiveBackground />
      <MusicPlayer autoPlayTrigger={isOpened} />

      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div
            key="hero"
            exit={{
              scale: 2.5,
              opacity: 0,
              filter: "blur(30px) brightness(2)",
              transition: { duration: 1.8, ease: "easeInOut" },
            }}
          >
            <HeroSection onOpen={handleOpenSurprise} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="relative"
          >
            <MessageSection />
            <MemoryGallery />
            <FinalScene />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Romantic Flash Overlay - softer pink */}
      <AnimatePresence>
        {isOpened && !showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, times: [0, 0.5, 1] }}
            className="fixed inset-0 z-[100] bg-pink-100 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </main>
  );
}
