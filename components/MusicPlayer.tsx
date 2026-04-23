"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Music2 } from "lucide-react";

export default function MusicPlayer({ autoPlayTrigger }: { autoPlayTrigger: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
      setIsPlaying(true);
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808f30302.mp3"
        loop
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="w-14 h-14 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-pink-500 shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
            >
              <Music2 className="w-6 h-6 animate-pulse" />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
            >
              <Music className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-16 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-pink-600 whitespace-nowrap border border-white/50"
        >
          Playing Sweet Melody...
        </motion.div>
      )}
    </div>
  );
}
