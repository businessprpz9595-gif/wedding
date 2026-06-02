"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date("2026-07-07T08:00:00"); // Wedding date
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const calculateTime = () => {
      const difference = +targetDate - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <div className="w-full py-16 bg-sage-50 relative overflow-hidden">
      {/* Background Floral Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg className="w-96 h-96 text-sage-950" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M50,10 C60,30 90,50 50,90 C10,50 40,30 50,10 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Title */}
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-2">
          Countdown to the Big Day
        </span>
        <h2 className="font-serif-elegant text-3xl md:text-4xl text-sage-900 text-center tracking-wide mb-8">
          The Magic Begins In
        </h2>

        {/* Counter cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-2xl">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="glass-card flex flex-col items-center py-6 md:py-8 rounded-xl border border-gold-300/30 shadow-md relative overflow-hidden group hover:border-gold-400 transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500" />
              
              {/* Value with flip/fade-in animation */}
              <span className="font-serif-elegant text-4xl md:text-5xl lg:text-6xl text-sage-900 font-light tracking-tight mb-2 group-hover:text-gold-600 transition-colors duration-300">
                {String(unit.value).padStart(2, "0")}
              </span>
              
              {/* Unit label */}
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-sage-500 font-semibold">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
