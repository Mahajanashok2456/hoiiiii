"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MessageSection() {
  const messages = [
    "Heyyyyyyyyy, it’s your birthdayyyyy!",
    "Happyyyyyyy birthdayyyyyyyyy!",
    "Happy birthday to the prettiest girl I’ve ever seen in my existence 🥹🤌",
    "Wishing you immense joy, love, and a life full of beautiful memories ahead, budddyyyyy!!",
    "I just wanted to say... your eyes are like pearls.",
    "Whenever I see them, they shine and speak everything I’ve always wanted to hear.",
    "And your smile... it feels like a cool breeze, full of joy, just like a little kiddo’s happiness 🥹🤌",
    "Your shine spreads such an amazing energy everywhere, and your aura feels so positive.",
    "You’re the one I’d call the definition of a perfect girl....",
    "Happy birthday to the prettiest, cutest, beautifullest gurllllll 🤌🤌...",
    "anddd say love uu Rajii ❤️",
    "I miss her 😂🙂↔️"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 2.5, // Emotional timing
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2 } },
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="glass max-w-4xl w-full p-8 md:p-16 rounded-[40px] text-center md:text-left space-y-8 relative"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300/20 blur-3xl rounded-full z-[-1]" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-300/20 blur-3xl rounded-full z-[-1]" />
        
        {messages.map((text, i) => (
          <motion.p
            key={i}
            variants={item}
            className={`text-xl md:text-3xl leading-relaxed font-light ${
              i >= messages.length - 2 ? "text-pink-600 font-medium" : "text-gray-700"
            }`}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
