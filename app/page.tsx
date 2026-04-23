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
    
    // Confetti Burst
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

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
              scale: 2, 
              opacity: 0,
              filter: "blur(20px)",
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <HeroSection onOpen={handleOpenSurprise} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <MessageSection />
            <MemoryGallery />
            <FinalScene />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Flash Overlay */}
      <AnimatePresence>
        {isOpened && !showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, times: [0, 0.5, 1] }}
            className="fixed inset-0 z-[100] bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>
    </main>
  );
}
