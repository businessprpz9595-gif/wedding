"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  playRequested: boolean;
}

export default function MusicPlayer({ playRequested }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    const audio = new Audio("/audio/ambient.webm");
    audio.loop = true;
    audioRef.current = audio;

    // Cleanup audio on unmount
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // When playRequested changes to true, trigger play
  useEffect(() => {
    if (playRequested && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.log("Autoplay blocked by browser. Awaiting user interaction.", err);
        });
    }
  }, [playRequested]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.error("Audio playback failed:", err);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip for first-time instruction */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="hidden md:block bg-ivory text-sage-900 border border-gold-300 text-xs px-3 py-1.5 rounded-full shadow-md font-medium tracking-wide"
          >
            Play "Sunehra" 🎵
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Audio Button */}
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gold-600 border border-gold-300 shadow-lg cursor-pointer transition-all duration-300 hover:border-gold-500"
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Visualizer bars */}
            <div className="flex items-end gap-[2px] h-3 w-4 justify-center">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying ? [4, 12, 4] : 4,
                  }}
                  transition={{
                    duration: 0.8 + i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-[2px] bg-gold-500 rounded-full"
                />
              ))}
            </div>
            <Volume2 className="absolute top-[6px] right-[6px] w-2.5 h-2.5 text-gold-400 opacity-60" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-sage-500" />
        )}
      </motion.button>
    </div>
  );
}
