"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Envelope from "@/components/Envelope";
import HeroSection from "@/components/HeroSection";
import CoupleStory from "@/components/CoupleStory";
import Countdown from "@/components/Countdown";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";

import Venue from "@/components/Venue";
import MusicPlayer from "@/components/MusicPlayer";

export default function WeddingInvitationContent() {
  const searchParams = useSearchParams();
  const guest = (searchParams && searchParams.get("guest")) || "Guest";

  const [isLoading, setIsLoading] = useState(true);
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-ivory select-none">
      {/* 1. Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Invitation Envelope Opening Animation */}
      {!isLoading && !isEnvelopeOpened && (
        <Envelope
          guestName={guest}
          onOpened={() => {
            setIsEnvelopeOpened(true);
            setPlayMusic(true); // Safely trigger background ambient audio play
          }}
        />
      )}

      {/* 3. Main Digital Wedding Invitation Experience */}
      {isEnvelopeOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative min-h-screen w-full flex flex-col"
        >
          {/* Ambient Music Player */}
          <MusicPlayer playRequested={playMusic} />

          {/* Core Invitation Sections */}
          <HeroSection guestName={guest} />

          <CoupleStory />

          <Countdown />

          <Events />

          <Gallery />


          <Venue />

          {/* Premium Luxury Footer */}
          <footer className="py-12 bg-sage-900 border-t border-gold-500/25 relative overflow-hidden text-center">
            {/* Inner background decorative overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
              <svg className="w-64 h-64 text-gold-300" fill="currentColor" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M50,10 C60,30 90,50 50,90 C10,50 40,30 50,10 Z" fill="none" />
              </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">

              {/* Footer Ornaments */}
              <div className="text-gold-400 w-16 h-4 opacity-75">
                <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M30,10 C45,0 55,0 70,10" />
                  <circle cx="50" cy="8" r="2.5" fill="currentColor" />
                </svg>
              </div>

              <h2 className="font-serif-elegant text-2xl md:text-3xl text-gold-100 tracking-wider font-light">
                Sheetal & Varun
              </h2>

              <p className="text-[10px] tracking-[0.25em] text-gold-400 font-semibold uppercase">
                #SheetalWedsVarun
              </p>

              <div className="w-12 h-[1px] bg-gold-400/30 my-2" />

              <p className="text-[10px] text-sage-300 font-light tracking-wide max-w-xs leading-relaxed">
                Thank you for being part of our story. We look forward to celebrating this beautiful union with you.
              </p>

              <p className="text-[9px] text-sage-500 tracking-widest mt-4">

              </p>

            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
