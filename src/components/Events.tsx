"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun, Music, Crown, GlassWater, Clock, MapPin, Calendar, Gem } from "lucide-react";

interface WeddingEvent {
  title: string;
  icon: any;
  date: string;
  time: string;
  venue: string;
  desc: string;
  styleClass: string; // custom color styles
}

export default function Events() {
  const events: WeddingEvent[] = [
    {
      title: "Mehendi Ceremony",
      icon: Sparkles,
      date: "Sunday, July 5, 2026",
      time: "6:00 PM onwards",
      venue: "Home",
      desc: "An evening of green shades, intricate henna art, and traditional folk rhythms. Join us as the bride gets her hands adorned with henna in a warm home setting.",
      styleClass: "bg-sage-50 border-sage-200 text-sage-900",
    },
    {
      title: "The Royal Engagement",
      icon: Gem,
      date: "Monday, July 6, 2026",
      time: "7:00 PM onwards",
      venue: "Veertapasvi Bhavan",
      desc: "An evening of formal ring exchanges, soft instrumental music, and family blessings. Let's celebrate the official locking of our hearts.",
      styleClass: "bg-gold-50 border-gold-200 text-sage-900",
    },
    {
      title: "Sangeet Night",
      icon: Music,
      date: "Monday, July 6, 2026",
      time: "8:00 PM onwards",
      venue: "Veertapasvi Bhavan",
      desc: "An elegant night of sparkling lights, royal glitz, and spectacular dance performances by friends and family. Let's feast, toast, and dance the night away.",
      styleClass: "glass-card-dark border-gold-500/20 text-gold-100",
    },
    {
      title: "Haldi Celebration",
      icon: Sun,
      date: "Monday, July 6, 2026",
      time: "9:30 PM onwards",
      venue: "Veertapasvi Bhavan",
      desc: "Bursting with sunny yellow marigolds, laughter, and a touch of golden turmeric blessings. Prepare for a playful shower of rose water and colorful petals.",
      styleClass: "bg-gold-50 border-gold-200 text-sage-900",
    },
    {
      title: "The Royal Wedding",
      icon: Crown,
      date: "Tuesday, July 7, 2026",
      time: "8:00 AM onwards",
      venue: "Veertapasvi Bhavan",
      desc: "The sacred vows of love, under a royal mandap decorated with blush garden roses and ivory jasmine. Witness the beginning of our beautiful forever.",
      styleClass: "bg-ivory border-gold-300/40 text-sage-900 shadow-[0_10px_35px_rgba(215,184,109,0.12)]",
    },
    {
      title: "Grand Reception",
      icon: GlassWater,
      date: "Tuesday, July 7, 2026",
      time: "12:00 PM onwards",
      venue: "Veertapasvi Bhavan",
      desc: "A delightful afternoon reception under the beautiful day skies. Join us for a royal celebratory lunch, family blessings, and premium royal celebrations.",
      styleClass: "bg-blush-50 border-blush-200 text-sage-900",
    },
  ];

  return (
    <section id="events" className="py-24 bg-sage-50/50 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-[30%] right-[-100px] w-64 h-64 opacity-5 text-sage-500 pointer-events-none rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50,5 L50,95 M5,50 L95,50" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-2 block">
            The Celebration
          </span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl text-sage-900 tracking-wide font-light">
            Wedding Ceremonies
          </h2>
          <p className="text-xs text-sage-500 mt-2 tracking-widest uppercase">
            Join Us in Witnessing the Magic
          </p>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* Symmetrical Events Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {events.map((event, idx) => {
            const Icon = event.icon;
            const isDark = event.styleClass.includes("dark");

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.8 }}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-2xl border flex flex-col justify-between relative shadow-md transition-all duration-300 group ${event.styleClass
                  }`}
              >
                {/* Decorative border layout for high-end luxury feel */}
                <div className={`absolute inset-2 border rounded-xl pointer-events-none transition-all duration-300 group-hover:inset-3 ${isDark ? "border-gold-300/10" : "border-gold-300/30"
                  }`} />

                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-sm ${isDark ? "bg-gold-500/10 border-gold-500/20 text-gold-300" : "bg-white border-gold-300/30 text-gold-500"
                      }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[8px] uppercase tracking-[0.25em] font-semibold border px-2 py-0.5 rounded-full ${isDark ? "border-gold-500/30 text-gold-300" : "border-gold-300/35 text-gold-500"
                      }`}>
                      Ceremony {idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif-elegant text-2xl tracking-wide font-light mb-3">
                    {event.title}
                  </h3>
                  <p className={`text-xs font-light leading-relaxed mb-6 ${isDark ? "text-gold-200/70" : "text-sage-600"
                    }`}>
                    {event.desc}
                  </p>
                </div>

                {/* Event details block */}
                <div className={`flex flex-col gap-2.5 pt-6 border-t ${isDark ? "border-gold-500/15" : "border-gold-300/20"
                  }`}>
                  <div className="flex items-center gap-3">
                    <Calendar className={`w-4 h-4 ${isDark ? "text-gold-400" : "text-gold-500"}`} />
                    <span className="text-xs font-medium tracking-wide">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className={`w-4 h-4 ${isDark ? "text-gold-400" : "text-gold-500"}`} />
                    <span className="text-xs font-medium tracking-wide">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${isDark ? "text-gold-400" : "text-gold-500"}`} />
                    <span className="text-xs font-light tracking-wide">{event.venue}</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
