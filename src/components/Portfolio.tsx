import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const portfolioImages = [
  { id: 1, img: "/images/hero-perfect-stairs-railing.jpg", alt: "Bespoke Floating Wood Staircase with Glass Railing" },
  { id: 2, img: "/images/stair-floating.jpg", alt: "Cantilevered Hardwood Floating Stairs" },
  { id: 3, img: "/images/stair-glass.jpg", alt: "Starphire Frameless Glass Railing" },
  { id: 4, img: "/images/hero-pexels-1190902.jpg", alt: "Modern Architectural Staircase with Crystal Glass" },
  { id: 5, img: "/images/stair-curved.jpg", alt: "Custom Curved Architectural Stairs" },
  { id: 6, img: "/images/installation.jpg", alt: "Precision Stair and Railing Installation" },
  { id: 7, img: "/images/hero-custom-wood-stair.jpg", alt: "Open Concept Hardwood Floating Staircase" },
  { id: 8, img: "/images/hero-pexels-spiral-16971936.jpg", alt: "Custom Sculptural Spiral Staircase" },
  { id: 9, img: "/images/hero-blaka-staircase-13005094.jpg", alt: "Hardwood Staircase with Custom Railing" },
  { id: 10, img: "/images/hero-modern-wood-metal-30667839.jpg", alt: "Architectural Hardwood Stairs with Stainless Steel Railing" },
];

interface PortfolioProps {
  limit?: number;
  title?: string;
  asSlider?: boolean;
}

export default function Portfolio({ limit = 6, title = "Our Portfolio", asSlider = true }: PortfolioProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const images = portfolioImages.slice(0, limit);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [images]);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="portfolio" className="relative py-20 md:py-28 text-linen overflow-hidden" style={{ backgroundColor: "#6B302C" }}>
      <div className="absolute inset-0 grain opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Heading & Slider Controls */}
        <div className="mb-10 sm:mb-12 border-b border-white/15 pb-6 flex items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass-light font-semibold mb-2">
              Curated Works
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-linen">
              {title}
            </h2>
          </div>

          {/* Slider Prev / Next Navigation Arrows */}
          {asSlider && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-linen transition-all hover:bg-white/25 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-linen transition-all hover:bg-white/25 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {asSlider ? (
          /* Horizontal Slider Track */
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            data-lenis-prevent
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImg(item.img)}
                className="group relative flex-none w-[78vw] sm:w-[50vw] md:w-[38vw] lg:w-[30vw] aspect-[4/3] snap-start cursor-pointer overflow-hidden rounded-2xl bg-black/20 shadow-lg border border-white/10 transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        ) : (
          /* Pure Image Grid */
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                onClick={() => setSelectedImg(item.img)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-black/5 shadow-soft aspect-[4/3]"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} alt="Portfolio Detail" className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}