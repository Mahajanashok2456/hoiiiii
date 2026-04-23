"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

export default function MemoryGallery() {
  const photos = [
    { id: 1, rotate: -5, delay: 0.1, label: "Beautiful Moments", src: "/memories/1682017689658.jpg" },
    { id: 2, rotate: 3, delay: 0.2, label: "Pure Happiness", src: "/memories/1684348697474.png" },
    { id: 3, rotate: -2, delay: 0.3, label: "Unforgettable", src: "/memories/1684348697529.png" },
    { id: 4, rotate: 6, delay: 0.4, label: "That Radiant Smile", src: "/memories/1684348697609.png" },
    { id: 5, rotate: -4, delay: 0.5, label: "Pure Magic", src: "/memories/1684348697635.png" },
    { id: 6, rotate: 2, delay: 0.1, label: "The Prettiest Soul", src: "/memories/1684348697661.png" },
    { id: 7, rotate: -3, delay: 0.2, label: "Sweet Memories", src: "/memories/1684348697737.jpg" },
    { id: 8, rotate: 4, delay: 0.3, label: "Joyful Times", src: "/memories/1684348697747.jpg" },
    { id: 9, rotate: -6, delay: 0.4, label: "Lovely Day", src: "/memories/1690106396016.jpg" },
    { id: 10, rotate: 5, delay: 0.5, label: "Sparkling Eyes", src: "/memories/1690195119671.jpg" },
    { id: 11, rotate: -2, delay: 0.1, label: "Best Moments", src: "/memories/1690613244971.jpg" },
    { id: 12, rotate: 3, delay: 0.2, label: "Pure Joy", src: "/memories/1692974372949.jpg" },
    { id: 13, rotate: -5, delay: 0.3, label: "Always Smiling", src: "/memories/1698045891813.jpg" },
    { id: 14, rotate: 6, delay: 0.4, label: "Precious", src: "/memories/1698083930331.jpg" },
    { id: 15, rotate: -4, delay: 0.5, label: "Dreamy", src: "/memories/1698127886105.jpg" },
    { id: 16, rotate: 2, delay: 0.1, label: "Charming", src: "/memories/1698127886250.jpg" },
    { id: 17, rotate: -3, delay: 0.2, label: "Radiant", src: "/memories/1698127886263.jpg" },
    { id: 18, rotate: 4, delay: 0.3, label: "Golden Moments", src: "/memories/IMG-20240314-WA0006.jpg" },
    { id: 19, rotate: -6, delay: 0.4, label: "Cute Vibes", src: "/memories/IMG-20240314-WA0007.jpg" },
    { id: 20, rotate: 5, delay: 0.5, label: "Beautiful Soul", src: "/memories/IMG-20240314-WA0008.jpg" },
    { id: 21, rotate: -2, delay: 0.1, label: "Timeless", src: "/memories/IMG-20240712-WA0024.jpg" },
    { id: 22, rotate: 3, delay: 0.2, label: "Stunning", src: "/memories/IMG-20240817-WA0002.jpg" },
    { id: 23, rotate: -5, delay: 0.3, label: "Heartwarming", src: "/memories/IMG-20241214-WA0004.jpg" },
    { id: 24, rotate: 6, delay: 0.4, label: "Elegant", src: "/memories/IMG-20241214-WA0005.jpg" },
    { id: 25, rotate: -4, delay: 0.5, label: "Adorable", src: "/memories/IMG-20241214-WA0006(1).jpg" },
    { id: 26, rotate: 2, delay: 0.1, label: "Magical", src: "/memories/IMG-20241225-WA0045.jpg" },
    { id: 27, rotate: -3, delay: 0.2, label: "Special Day", src: "/memories/IMG-20250129-WA0001.jpg" },
    { id: 28, rotate: 4, delay: 0.3, label: "Bright Smile", src: "/memories/IMG-20250815-WA0037.jpg" },
    { id: 29, rotate: -6, delay: 0.4, label: "Infinite Joy", src: "/memories/IMG-20250815-WA0044.jpg" },
    { id: 30, rotate: 5, delay: 0.5, label: "Cherished", src: "/memories/IMG_20231113_110036_549.jpg" },
    { id: 31, rotate: -2, delay: 0.1, label: "Captured Love", src: "/memories/Screenshot_20240908-005527 (1).png" },
    { id: 32, rotate: 3, delay: 0.2, label: "Sweet Smile", src: "/memories/Screenshot_20240909-204422 (1).png" },
    { id: 33, rotate: -5, delay: 0.3, label: "Perfect Moment", src: "/memories/Screenshot_20241222-172311.png" },
    { id: 34, rotate: 6, delay: 0.4, label: "Simply Beautiful", src: "/memories/Snapchat-1526457906.jpg" },
    { id: 35, rotate: -4, delay: 0.5, label: "Lovely Aura", src: "/memories/Snapchat-304043027.jpg" },
    { id: 36, rotate: 2, delay: 0.1, label: "Radiating Love", src: "/memories/Snapchat-357812789.jpg" },
    { id: 37, rotate: -3, delay: 0.2, label: "Soulful", src: "/memories/Snapchat-616854401.jpg" },
    { id: 38, rotate: 4, delay: 0.3, label: "Forever Shine", src: "/memories/Snapchat-95042059.jpg" },
  ];

  return (
    <div className="relative z-10 min-h-screen py-24 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-pink-500 mb-4">
          Treasured Memories
        </h2>
        <p className="text-pink-400 text-lg italic">Every moment with you is a gift ✨</p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 50, scale: 0.8, rotate: photo.rotate * 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: photo.rotate }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: photo.delay, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="polaroid-frame group cursor-pointer"
          >
            <div className="relative aspect-[4/5] bg-pink-50 overflow-hidden rounded-sm mb-4">
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-pink-200">
                  <svg
                    className="w-20 h-20 opacity-40 group-hover:scale-110 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-100/20 to-transparent" />
            </div>
            <p className="font-display text-sm md:text-base text-gray-500 text-center italic truncate px-2">
              {photo.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
