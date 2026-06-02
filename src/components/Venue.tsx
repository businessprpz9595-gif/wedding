"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Calendar } from "lucide-react";

export default function Venue() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.8797!2d75.8906!3d17.6685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db6b2fee27b9%3A0x9ec5832a348f69fe!2sShri+Veertapasvi+Sanskrutik+Bhavan!5e0!3m2!1sen!2sin!4v1716800000000!5m2!1sen!2sin";
  const directionsUrl = "https://maps.app.goo.gl/4NeKDPMLzovvXT2A7?g_st=ic";

  return (
    <section id="venue" className="py-24 bg-ivory relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-12 right-0 w-36 h-36 opacity-10 text-sage-600 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,0 C75,25 75,75 50,100 C25,75 25,25 50,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-2 block">
            The Location
          </span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl text-sage-900 tracking-wide font-light">
            Venue
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* Map and Details Block */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12 flex flex-col justify-between"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-gold-300/30 shadow-lg relative h-full flex flex-col justify-between luxury-border">

              <div>
                <span className="text-[9px] uppercase tracking-widest text-gold-600 font-bold mb-1.5 block">

                </span>
                <h3 className="font-serif-elegant text-3xl text-sage-900 tracking-wide font-light mb-6">
                  Veertapasvi Bhavan, Solapur
                </h3>

                {/* Vertical detail points */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sage-50 border border-gold-300/35 flex items-center justify-center text-gold-600 shadow-sm shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-sage-500 font-bold mb-0.5">
                        Address
                      </p>
                      <p className="text-xs text-sage-800 leading-relaxed font-light font-sans-clean">
                        102c, Bhavani Hospital Rd, Bhavani Peth, Solapur, Maharashtra 413002
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sage-50 border border-gold-300/35 flex items-center justify-center text-gold-600 shadow-sm shrink-0">
                      <Calendar className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-sage-500 font-bold mb-0.5">
                        Key Ceremonies
                      </p>
                      <p className="text-xs text-sage-800 leading-relaxed font-light">
                        All main celebrations including Engagement, Sangeet, Haldi, Wedding and Reception will be hosted here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Navigation button */}
              <div className="mt-8 pt-6 border-t border-gold-300/25">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gold-gradient text-white text-xs uppercase tracking-[0.25em] font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Navigation className="w-4 h-4 text-white" />
                  Get Google Maps Directions
                </a>
              </div>

            </div>
          </motion.div>

          {/* Embedded Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-7/12 aspect-[16/10] md:aspect-[16/9] lg:aspect-auto rounded-3xl overflow-hidden border border-gold-300/35 shadow-lg relative min-h-[350px]"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Veertapasvi Bhavan"
              className="absolute inset-0 w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
