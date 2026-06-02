"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  widthClass: string;
  heightClass: string;
}

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      src: "/images/prewedding_1.png",
      alt: "Traditional Promenade",
      caption: "Hand in Hand, Heart to Heart",
      widthClass: "col-span-1",
      heightClass: "aspect-[3/4]",
    },
    {
      src: "/images/prewedding_2.png",
      alt: "Historic Whispers",
      caption: "Leaning on Love",
      widthClass: "col-span-1",
      heightClass: "aspect-[3/4]",
    },
    {
      src: "/images/prewedding_3.png",
      alt: "Vintage Journey",
      caption: "Riding into Forever",
      widthClass: "col-span-1",
      heightClass: "aspect-[4/3]",
    },
    {
      src: "/images/prewedding_4.png",
      alt: "Classic Romance",
      caption: "Together is our Favorite Place",
      widthClass: "col-span-1",
      heightClass: "aspect-[3/4]",
    },
    {
      src: "/images/prewedding_5.png",
      alt: "Meadow Serenades",
      caption: "Back to Back, Always",
      widthClass: "col-span-1",
      heightClass: "aspect-[4/3]",
    },
    {
      src: "/images/prewedding_6.png",
      alt: "Banyan Tree Embrace",
      caption: "Under the Canopy of Love",
      widthClass: "col-span-1",
      heightClass: "aspect-[4/3]",
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx === null) return;
    setActiveIdx((activeIdx + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx === null) return;
    setActiveIdx((activeIdx - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-2 block">
            Pre-Wedding Memories
          </span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl text-sage-900 tracking-wide font-light">
            Our Gallery
          </h2>
          <div className="w-16 h-[1px] bg-gold-300 mx-auto mt-4" />
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {images.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.8 }}
              onClick={() => setActiveIdx(idx)}
              className="break-inside-avoid relative bg-white p-2 rounded-2xl border border-gold-300/20 shadow-md overflow-hidden group cursor-pointer w-full mb-6 inline-block"
            >
              <div className={`relative w-full overflow-hidden rounded-xl ${img.heightClass}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 400px"
                />
                
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-sage-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gold-300 font-semibold mb-1">
                      {img.alt}
                    </p>
                    <h4 className="font-serif-elegant text-lg text-white font-light">
                      {img.caption}
                    </h4>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIdx(null)}
              className="fixed inset-0 z-50 bg-sage-950/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveIdx(null)}
                className="absolute top-6 right-6 z-55 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-6 z-55 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-6 z-55 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Lightbox Frame */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[80vh] aspect-[4/3] w-full rounded-2xl overflow-hidden border border-gold-400/25 bg-sage-900 shadow-2xl p-2 cursor-default"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={images[activeIdx].src}
                    alt={images[activeIdx].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                
                {/* Lightbox Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-sage-950/80 backdrop-blur-md border border-gold-300/10 p-4 rounded-xl text-center">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400 font-semibold mb-1 block">
                    {images[activeIdx].alt}
                  </span>
                  <p className="font-serif-elegant text-white text-base tracking-wide font-light">
                    {images[activeIdx].caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
