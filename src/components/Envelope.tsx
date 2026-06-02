"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";
import confetti from "canvas-confetti";

interface EnvelopeProps {
  guestName: string | null;
  onOpened: () => void;
}

export default function Envelope({ guestName, onOpened }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    // Trigger canvas confetti
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      // Beautiful gold and pink confetti
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ["#d4af37", "#f5eedc", "#ff9da6"] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ["#d4af37", "#f5eedc", "#ff9da6"] });
    }, 250);

    // Envelope opening sequence timing
    setTimeout(() => {
      setIsOpened(true);
      setTimeout(onOpened, 1200); // Give time for full reveal transition
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-sage-900 overflow-hidden px-4 md:px-0">
      {/* Soft floating background particles/stars */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gold-200 rounded-full animate-ping"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-[650px] aspect-[4/3] relative perspective-1000 flex items-center justify-center">
        {/* ENVELOPE BACK & SIDES */}
        <motion.div
          animate={isOpening ? { scale: 0.95 } : { scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full bg-sage-800 rounded-lg shadow-2xl relative flex items-center justify-center border border-gold-300/20 preserve-3d"
        >
          {/* Inner card pocket lining */}
          <div className="absolute inset-2 bg-sage-700/80 rounded-md border border-gold-300/10 flex flex-col justify-center items-center">
            {/* Elegant Floral background outline inside the envelope */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center">
              <svg className="w-48 h-48 text-gold-200" fill="currentColor" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M50,10 L50,90 M10,50 L90,50" stroke="currentColor" />
              </svg>
            </div>
          </div>

          {/* INNER CARD SLIDING OUT */}
          <motion.div
            initial={{ y: 0, scale: 0.95 }}
            animate={
              isOpening
                ? { y: -180, scale: 1.02, zIndex: 10 }
                : { y: 0, scale: 0.95, zIndex: 1 }
            }
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="absolute w-[94%] h-[90%] bg-ivory rounded-md shadow-lg p-6 md:p-10 flex flex-col justify-between items-center text-center luxury-border"
          >
            {/* Header floral ornament */}
            <div className="text-gold-500 w-24 h-6 opacity-80">
              <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M10,10 C30,-5 70,-5 90,10 M30,10 C45,0 55,0 70,10" />
                <circle cx="50" cy="8" r="3" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-sage-500 font-semibold">
                Wedding Invitation
              </span>
              <h2 className="font-serif-elegant text-3xl md:text-4xl text-sage-900 tracking-wide">
                Sheetal & Varun
              </h2>
              <div className="w-12 h-[1px] bg-gold-300 mx-auto my-1" />
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold-600 font-medium">
                Save the Date
              </p>
            </div>

            {/* Personalized Guest Welcome Inside */}
            <div className="my-2 min-h-[50px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {guestName ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                  >
                    <p className="font-serif-elegant text-sage-600 italic text-base md:text-lg">
                      Dear {guestName},
                    </p>
                    <p className="text-xs text-sage-500 tracking-wide max-w-[280px] mx-auto mt-1">
                      You are warmly invited to celebrate this magical union with us.
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    className="text-xs text-sage-500 tracking-wider max-w-[280px] leading-relaxed"
                  >
                    We request the honor of your presence as we write the first chapter of our forever.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <p className="text-xs font-semibold tracking-widest text-sage-700">
                JULY 7, 2026
              </p>
              <p className="text-[10px] tracking-wider text-sage-500">
                VEERTAPASVI BHAVAN, SOLAPUR
              </p>
            </div>

            {/* Footer floral ornament */}
            <div className="text-gold-500 w-24 h-6 opacity-80 rotate-180">
              <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M10,10 C30,-5 70,-5 90,10 M30,10 C45,0 55,0 70,10" />
                <circle cx="50" cy="8" r="3" fill="currentColor" />
              </svg>
            </div>
          </motion.div>

          {/* FRONT LOWER TRIANGLES */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Left triangle */}
            <div
              className="absolute left-0 bottom-0 top-0 w-1/2 bg-sage-800 border-r border-sage-700 shadow-md"
              style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
            />
            {/* Right triangle */}
            <div
              className="absolute right-0 bottom-0 top-0 w-1/2 bg-sage-800 border-l border-sage-700 shadow-md"
              style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
            />
            {/* Bottom triangle overlap */}
            <div
              className="absolute left-0 right-0 bottom-0 h-[60%] bg-sage-900/90 border-t border-gold-300/10 shadow-lg"
              style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
            />
          </div>

          {/* ENVELOPE TOP FLAP */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-0 h-[50%] bg-sage-900 border-b border-gold-300/15 origin-top preserve-3d"
            style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
          >
            {/* Back of Flap (visible when open) */}
            <div className="absolute inset-0 bg-sage-800 border-t border-gold-300/20 backface-hidden rotate-x-180" />
          </motion.div>

          {/* WAX SEAL (CLICK TO OPEN) */}
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute z-40 flex flex-col items-center gap-4 mt-8"
              >
                {/* Gold glowing circle button with wax seal feel */}
                <button
                  onClick={handleOpen}
                  className="w-16 h-16 rounded-full bg-gold-gradient border-2 border-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 text-sage-900"
                >
                  <MailOpen className="w-7 h-7 text-sage-900" />
                </button>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-gold-300 font-semibold">
                    Open Invitation
                  </p>
                  <p className="text-[8px] text-sage-300 tracking-widest mt-1 opacity-70">
                    CLICK WAX SEAL TO REVEAL
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
