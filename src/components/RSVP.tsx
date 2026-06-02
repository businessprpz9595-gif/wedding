"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitRSVP } from "@/lib/supabase";
import { Sparkles, CheckCircle2, User, Users, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

interface RSVPProps {
  initialGuestName: string | null;
}

export default function RSVP({ initialGuestName }: RSVPProps) {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [attendeesCount, setAttendeesCount] = useState(1);
  const [wishes, setWishes] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Prepopulate guest name if available
  useEffect(() => {
    if (initialGuestName) {
      setName(initialGuestName);
    }
  }, [initialGuestName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (attending === null) return;

    setLoading(true);

    const result = await submitRSVP({
      guest_name: name,
      attending,
      attendees_count: attending ? attendeesCount : 0,
      wishes: wishes.trim(),
    });

    setLoading(false);
    if (result.success) {
      setSuccess(true);
      
      // Burst canvas confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#f5eedc", "#ff9da6", "#5f7a68"],
      });
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-sage-50/30 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute bottom-12 left-[-60px] w-48 h-48 opacity-10 text-sage-600 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" fill="none" />
        </svg>
      </div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-2 block">
            RSVP Online
          </span>
          <h2 className="font-serif-elegant text-4xl text-sage-900 tracking-wide font-light">
            Will You Celebrate With Us?
          </h2>
          <p className="text-xs text-sage-500 mt-2 tracking-wide font-light max-w-sm mx-auto">
            Kindly respond by November 30, 2026 so we can prepare your royal welcome.
          </p>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* RSVP Card Form */}
        <div className="glass-card rounded-3xl border border-gold-300/30 shadow-xl overflow-hidden relative luxury-border p-8 md:p-10">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Guest Name input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-sage-600 font-bold flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-gold-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="glass-input px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                {/* Attendance radio buttons */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-widest text-sage-600 font-bold">
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setAttending(true)}
                      className={`py-3.5 rounded-xl border text-sm font-medium tracking-wide transition-all cursor-pointer ${
                        attending === true
                          ? "bg-sage-600 border-sage-600 text-white shadow-md shadow-sage-600/10"
                          : "bg-white/40 border-gold-300/30 hover:border-gold-400 text-sage-800"
                      }`}
                    >
                      Happily Yes!
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending(false)}
                      className={`py-3.5 rounded-xl border text-sm font-medium tracking-wide transition-all cursor-pointer ${
                        attending === false
                          ? "bg-blush-600 border-blush-600 text-white shadow-md shadow-blush-600/10"
                          : "bg-white/40 border-gold-300/30 hover:border-gold-400 text-sage-800"
                      }`}
                    >
                      Regretfully No
                    </button>
                  </div>
                </div>

                {/* Attendees Count select (visible if attending) */}
                <AnimatePresence>
                  {attending === true && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-2 overflow-hidden"
                    >
                      <label className="text-[10px] uppercase tracking-widest text-sage-600 font-bold flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-gold-500" />
                        Number of Attendees
                      </label>
                      <select
                        value={attendeesCount}
                        onChange={(e) => setAttendeesCount(Number(e.target.value))}
                        className="glass-input px-4 py-3 rounded-xl text-sm cursor-pointer appearance-none bg-white/40"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num} className="bg-ivory text-sage-900">
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Wishes textarea */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-sage-600 font-bold flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-gold-500" />
                    Warm Wishes & Message
                  </label>
                  <textarea
                    rows={4}
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                    placeholder="Write a warm note of love and blessings..."
                    className="glass-input px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading || attending === null}
                  className={`w-full py-4 rounded-xl text-xs uppercase tracking-[0.25em] font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    attending === null
                      ? "bg-sage-300 cursor-not-allowed shadow-none"
                      : "bg-gold-gradient hover:opacity-95 shadow-gold-500/10 hover:shadow-gold-500/20 active:scale-[0.99]"
                  }`}
                >
                  {loading ? (
                    <span className="animate-pulse">Submitting RSVP...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-white" />
                      Send RSVP Response
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mb-6 shadow-inner animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <h3 className="font-serif-elegant text-2xl text-sage-900 tracking-wide font-light mb-2">
                  Thank You, {name}!
                </h3>
                
                <p className="text-xs text-sage-600 max-w-xs leading-relaxed font-light mb-6">
                  {attending
                    ? `Your RSVP is confirmed! We can't wait to celebrate under the beautiful palace skies with you.`
                    : `We are sorry you won't be able to join us, but we truly appreciate your warm wishes and blessings.`}
                </p>
                
                <div className="w-12 h-[1px] bg-gold-300 mb-4" />
                
                <p className="text-[9px] uppercase tracking-widest text-gold-600 font-semibold">
                  Sheetal & Varun
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
