"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 800); // Allow fade-out animation to complete
          }, 600);
          return 100;
        }
        // Smoothly increase progress
        const diff = Math.random() * 8 + 4;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory text-sage-900 luxury-border"
        >
          {/* Decorative Corner Flowers (SVG) */}
          <div className="absolute top-4 left-4 w-24 h-24 text-gold-300 opacity-20 pointer-events-none rotate-0">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 C30,10 60,30 70,70 C50,60 20,40 0,0 Z M0,0 C10,30 30,60 70,70 C60,50 40,20 0,0 Z" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 w-24 h-24 text-gold-300 opacity-20 pointer-events-none -rotate-90">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 C30,10 60,30 70,70 C50,60 20,40 0,0 Z M0,0 C10,30 30,60 70,70 C60,50 40,20 0,0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 w-24 h-24 text-gold-300 opacity-20 pointer-events-none rotate-90">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 C30,10 60,30 70,70 C50,60 20,40 0,0 Z M0,0 C10,30 30,60 70,70 C60,50 40,20 0,0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 w-24 h-24 text-gold-300 opacity-20 pointer-events-none rotate-180">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 C30,10 60,30 70,70 C50,60 20,40 0,0 Z M0,0 C10,30 30,60 70,70 C60,50 40,20 0,0 Z" />
            </svg>
          </div>

          {/* Central Rotating Mandala */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 md:w-40 md:h-40 text-gold-400 opacity-80 mb-8"
          >
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="45" strokeDasharray="2,2" />
              <circle cx="50" cy="50" r="38" />
              {/* Petals */}
              {[...Array(12)].map((_, i) => (
                <path
                  key={i}
                  d="M50,12 C55,25 45,25 50,50 C45,25 55,25 50,12"
                  transform={`rotate(${i * 30} 50 50)`}
                />
              ))}
              <circle cx="50" cy="50" r="10" fill="currentColor" className="opacity-20" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Names */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-serif-elegant text-4xl md:text-5xl lg:text-6xl text-gold-600 tracking-wider text-center font-light mb-4"
          >
            Sheetal <span className="text-3xl md:text-4xl font-sans font-light text-sage-400">&</span> Varun
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xs uppercase tracking-[0.25em] text-sage-600 font-medium mb-12"
          >
            The Union of Two Hearts
          </motion.p>

          {/* Progress Bar Container */}
          <div className="relative w-64 h-[2px] bg-sage-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-gold-400"
            />
          </div>

          <span className="mt-3 text-xs tracking-widest text-gold-600 font-medium">
            {Math.round(progress)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
