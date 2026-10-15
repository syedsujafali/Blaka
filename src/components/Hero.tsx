import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const metrics = [
  { v: "25+", l: "Years Craftsmanship" },
  { v: "1,200+", l: "Installations" },
  { v: "Paterson, NJ", l: "Atelier & Millwork" },
  { v: "Tri-State", l: "NJ · NYC · CT" },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-espresso text-linen flex flex-col justify-end">
      {/* 1. FULL-WIDTH BACKDROP IMAGE WITH FOCUSED CONTRAST OVERLAY */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/images/hero-pexels-luxury-18877287.jpg"
          alt="BLAKA Architectural Staircase"
          className="h-full w-full object-cover object-center brightness-[0.95] contrast-[1.02]"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          loading="eager"
        />
        {/* Crisp Readability Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        <div className="absolute inset-0 grain opacity-10 pointer-events-none" />
      </div>

      {/* 2. MAIN HERO CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-16 md:px-8 lg:pt-40">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Atelier Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brass animate-ping" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass-light font-medium">
              Paterson Atelier · Est. 1999 · Custom Stairs
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="font-display text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[1.14] text-white drop-shadow-md"
          >
            <span className="block tracking-tight">Sculptural Stairs,</span>
            <span className="block mt-1 italic font-normal tracking-normal text-brass-light">
              Engineered to Transcend.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-6 max-w-xl text-base font-light leading-relaxed text-linen/90 md:text-lg"
          >
            We design, fabricate, and install architectural floating, cantilevered, and structural steel staircases across New Jersey, NYC, and the Tri-State.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#estimator"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-steel shadow-glow transition-all duration-300 hover:bg-brass-light hover:scale-105"
            >
              Commission Build
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-linen backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/60"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-6 sm:grid-cols-4"
          >
            {metrics.map((m) => (
              <div key={m.l} className="space-y-0.5">
                <div className="font-display text-2xl font-bold text-white md:text-3xl">
                  {m.v}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-linen/60">
                  {m.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. SUBTLE ARCHITECTURAL MARQUEE TICKER AT BOTTOM */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md py-3 text-linen">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {[
                "Cantilevered & Floating",
                "Laser-Cut Steel Stringers",
                "Starphire Low-Iron Glass",
                "Kiln-Dried Hardwoods",
                "Curved & Spiral Geometry",
                "Commercial Supply Division",
                "Paterson, NJ Workshop",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12 font-mono text-[10px] uppercase tracking-[0.26em] text-linen/70">
                  {t}
                  <span className="text-brass">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}