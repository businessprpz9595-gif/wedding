"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";

interface HeroSectionProps {
  guestName: string | null;
}

export default function HeroSection({ guestName }: HeroSectionProps) {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; scale: number; rotate: number }>>([]);

  useEffect(() => {
    // Generate flower petals for ambient background floating animation
    const tempPetals = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      delay: Math.random() * 10,  // seconds
      duration: Math.random() * 15 + 10, // seconds
      scale: Math.random() * 0.6 + 0.4,
      rotate: Math.random() * 360,
    }));
    setPetals(tempPetals);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Premium plain colored soft pink / blush garden background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush-50 via-blush-100 to-blush-200 z-[1]" />

      {/* Floating Flower Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -50, x: `${petal.left}vw`, rotate: petal.rotate, opacity: 0 }}
            animate={{ 
              y: "110vh", 
              x: [`${petal.left}vw`, `${petal.left + (petal.id % 2 === 0 ? 8 : -8)}vw`, `${petal.left}vw`],
              rotate: petal.rotate + 360, 
              opacity: [0, 0.8, 0.8, 0] 
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-6 h-6 text-blush-400 opacity-60"
            style={{ scale: petal.scale }}
          >
            {/* SVG representation of a rose petal */}
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2 C17.5,2 22,6.5 22,12 C22,18 17,22 12,22 C5,22 2,17 2,12 C2,6.5 6.5,2 12,2 Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl h-full flex-grow mt-12">
        
        {/* Luxury top floral line separator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-gold-500 w-36 h-8 mb-6"
        >
          <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0,10 H35 M65,10 H100 M35,10 C45,0 55,0 65,10" />
            <circle cx="50" cy="10" r="3" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Guest Personalized greeting at very top */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-gold-400/30 bg-white/50 backdrop-blur-md text-sage-800 text-xs md:text-sm font-medium tracking-[0.2em] uppercase shadow-sm"
          >
            Dear {guestName}, You Are Warmly Invited
          </motion.div>
        )}

        {/* Small subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-sage-700 font-bold mb-3"
        >
          Together with their Families, Invite You to Celebrate
        </motion.p>

        {/* Main Title: Sheetal & Varun */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="font-serif-elegant text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-sage-900 tracking-wider font-light flex flex-col md:block items-center"
        >
          <span className="text-sage-900 font-serif-elegant">Sheetal</span>
          <span className="font-sans text-4xl sm:text-5xl md:text-6xl text-gold-500 font-light mx-4 my-2 md:my-0 select-none block md:inline">&</span>
          <span className="text-sage-900 font-serif-elegant">Varun</span>
        </motion.h1>

        {/* Decorative middle border */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.8, width: 80 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="h-[1px] bg-gold-400 my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="font-serif-elegant text-lg md:text-2xl text-sage-700 tracking-wider font-light max-w-xl mb-12 italic leading-relaxed"
        >
          "Two souls, one romantic path, forever under the floral skies."
        </motion.p>

        {/* Quick details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center items-center text-sage-800 text-xs md:text-sm tracking-widest font-semibold"
        >
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-gold-600" />
            <span>JULY 7, 2026</span>
          </div>
          <div className="w-[1px] h-4 bg-gold-400/40 hidden sm:block" />
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-gold-600" />
            <span>VEERTAPASVI BHAVAN, SOLAPUR</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-sage-700 font-bold">
          Scroll to Begin
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
