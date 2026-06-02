"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Heart, User } from "lucide-react";

export default function CoupleStory() {
  return (
    <section id="story" className="py-24 bg-ivory relative overflow-hidden">
      {/* Decorative Floral Ornaments */}
      <div className="absolute top-12 left-0 w-36 h-36 opacity-10 text-sage-600 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M0,50 Q25,25 50,0 Q25,50 0,50 Z M50,100 Q75,75 100,50 Q75,100 50,100 Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-2 block">
            Meet the Couple
          </span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl text-sage-900 tracking-wide font-light">
            Bride & Groom
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* BRIDE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-3xl border border-gold-300/30 shadow-lg relative flex flex-col items-center text-center luxury-border bg-white/70 backdrop-blur-md transition-all duration-300 group"
          >
            {/* Corner Decorative Borders */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold-400/40 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold-400/40 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold-400/40 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold-400/40 rounded-br-lg" />

            {/* Photo Container */}
            <div className="relative p-2 bg-white border border-gold-300/40 rounded-full shadow-md w-56 h-56 md:w-60 md:h-60 overflow-hidden shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/bride.png"
                  alt="Bride Sheetal"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "center 15%" }}
                  sizes="(max-w-768px) 100vw, 240px"
                />
              </div>
            </div>

            {/* Title / Name */}
            <div className="mt-8 mb-6 flex flex-col items-center">
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold-600 font-semibold mb-1">
                The Bride
              </span>
              <h3 className="font-serif-elegant text-3xl text-sage-900 tracking-wide font-light">
                Sheetal
              </h3>
              <div className="flex items-center gap-2 mt-2 text-gold-500">
                <Heart className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>

            {/* Details Block */}
            <div className="w-full flex flex-col gap-5 pt-6 border-t border-gold-300/20">
              
              {/* Parentage details */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4 text-gold-600" />
                  <span className="text-[9px] uppercase tracking-widest text-sage-500 font-bold">
                    Parentage
                  </span>
                </div>
                <p className="text-sm text-sage-800 leading-relaxed font-light">
                  Daughter of Mrs. Veda & Mr. Hiralal Habib
                </p>
              </div>

              {/* Education details */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-gold-600" />
                  <span className="text-[9px] uppercase tracking-widest text-sage-500 font-bold">
                    Education & Profession
                  </span>
                </div>
                <p className="text-sm text-sage-800 leading-relaxed font-light font-sans-clean">
                  M.B.A <br />
                  <span className="text-xs text-sage-500 italic">Assistant Manager</span>
                </p>
              </div>

            </div>
          </motion.div>

          {/* GROOM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-3xl border border-gold-300/30 shadow-lg relative flex flex-col items-center text-center luxury-border bg-white/70 backdrop-blur-md transition-all duration-300 group"
          >
            {/* Corner Decorative Borders */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold-400/40 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold-400/40 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold-400/40 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold-400/40 rounded-br-lg" />

            {/* Photo Container */}
            <div className="relative p-2 bg-white border border-gold-300/40 rounded-full shadow-md w-56 h-56 md:w-60 md:h-60 overflow-hidden shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/groom_v3.png"
                  alt="Groom Varun"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transform: "scale(1.2)", transformOrigin: "42% 30%" }}
                  sizes="(max-w-768px) 100vw, 240px"
                />
              </div>
            </div>

            {/* Title / Name */}
            <div className="mt-8 mb-6 flex flex-col items-center">
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold-600 font-semibold mb-1">
                The Groom
              </span>
              <h3 className="font-serif-elegant text-3xl text-sage-900 tracking-wide font-light">
                Varun
              </h3>
              <div className="flex items-center gap-2 mt-2 text-gold-500">
                <Heart className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>

            {/* Details Block */}
            <div className="w-full flex flex-col gap-5 pt-6 border-t border-gold-300/20">
              
              {/* Parentage details */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4 text-gold-600" />
                  <span className="text-[9px] uppercase tracking-widest text-sage-500 font-bold">
                    Parentage
                  </span>
                </div>
                <p className="text-sm text-sage-800 leading-relaxed font-light">
                  Son of Mrs. Sandhya & Mr. Shivaji Trimal
                </p>
              </div>

              {/* Education details */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-gold-600" />
                  <span className="text-[9px] uppercase tracking-widest text-sage-500 font-bold">
                    Education & Profession
                  </span>
                </div>
                <p className="text-sm text-sage-800 leading-relaxed font-light font-sans-clean">
                  C.A <br />
                  <span className="text-xs text-sage-500 italic">Manager Group Controlling</span>
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
