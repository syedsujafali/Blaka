import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Portfolio from "@/components/Portfolio";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION (Full Grand Architectural Viewport with Bottom Marquee) */}
      <section id="top" className="relative min-h-[92vh] lg:min-h-[96vh] xl:min-h-screen w-full overflow-hidden bg-[#FBF9F5] flex flex-col justify-center pb-20 pt-16">
        {/* Backdrop Image - Positioned right to show stairs & railing */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/images/hero-perfect-stairs-railing.jpg"
            alt="BLAKA Bespoke Architectural Floating Stairs with Glass & Brass Railing"
            className="h-full w-full object-cover object-center -scale-x-100"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            loading="eager"
          />
          {/* Soft white backdrop protection: stronger on mobile where the background image fills the screen, smoothly fading to transparent on larger screens so stairs & railing stay vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5]/95 via-[#FBF9F5]/80 via-60% md:via-[#FBF9F5]/45 md:via-30% to-transparent" />
          <div className="absolute inset-0 grain opacity-5 pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 lg:pt-16 pb-12">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="font-display text-[clamp(2.5rem,6.5vw,5.8rem)] font-normal leading-[1.12] sm:leading-[1.16] tracking-tight text-[#3B231D]"
            >
              <span className="block mb-1">Custom</span>
              <span className="block mb-1">stairs &</span>
              <span className="block italic text-[#6B302C] font-normal">railings.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="mt-5 sm:mt-6 max-w-md text-base sm:text-lg font-medium sm:font-normal leading-[1.65] sm:leading-[1.75] text-[#111827] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
            >
              Traditional woodwork, modern glass and steel designs, and stair supplies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.45 }}
              className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#3B231D] px-7 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FBF9F5] shadow-md transition-all duration-300 hover:bg-[#6B302C] hover:scale-105"
              >
                Request Quote
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-[#3B231D]/25 bg-white/70 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#3B231D] backdrop-blur-md transition-all hover:bg-white hover:border-[#3B231D]/50"
              >
                Explore Story <ArrowDown size={14} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Marquee Ticker - Perfectly Pinned at Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-black/10 bg-[#231713]/90 backdrop-blur-md py-2.5 text-linen">
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
                  "295 River St, Paterson NJ",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-12 font-mono text-[10px] uppercase tracking-[0.26em] text-linen/75">
                    {t}
                    <span className="text-brass">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (Dark Terracotta Atelier: #6B302C) */}
      <section id="about" className="relative py-24 md:py-32 text-linen overflow-hidden" style={{ backgroundColor: "#6B302C" }}>
        <div className="absolute inset-0 grain opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass-light font-semibold">
                01 · About Us
              </div>
              <h2 className="font-display text-5xl sm:text-6xl leading-tight text-linen md:text-5xl lg:text-6xl">
                A family business where <em className="italic text-brass-light font-normal">steel meets soul.</em>
              </h2>
              <p className="text-lg text-linen/80 leading-relaxed">
                Founded in 1999 in Paterson, NJ, Blaka began as a dedicated metalsmithing and stair company. Today, our 295 River Street workshop unites CNC millwork, laser cutting, glass fabrication, and finishing under one roof.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15">
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft border border-white/15">
                <img
                  src="/images/workshop.jpg"
                  alt="Blaka Paterson Workshop"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (Light Architectural Paper / Linen: #F4EFE6) */}
      <section id="services" className="relative py-24 md:py-32 text-[#2B1D19] overflow-hidden" style={{ backgroundColor: "#F4EFE6" }}>
        <div className="absolute inset-0 grain opacity-10 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          {/* Section Header */}
          <div className="mb-14 border-b border-espresso/15 pb-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta font-semibold mb-3">
              02 · Our Services
            </div>
            <h2 className="w-full font-display text-[clamp(1.75rem,7.5vw,6.2rem)] font-normal leading-none tracking-tight sm:tracking-wide text-espresso flex flex-nowrap items-center justify-between whitespace-nowrap gap-2 sm:gap-6 md:gap-8">
              <span>Wood</span>
              <span className="text-terracotta/60 font-light text-[0.7em]">·</span>
              <span className="italic text-terracotta font-normal">Glass</span>
              <span className="text-terracotta/60 font-light text-[0.7em]">·</span>
              <span>Steel</span>
            </h2>
          </div>

          {/* 3 Services Cards Grid with Real Visuals (Compact Height) */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Service 01: Custom Stairs */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-espresso/15 bg-white shadow-soft transition-all duration-300 hover:border-terracotta hover:-translate-y-1">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src="/images/stair-floating.jpg"
                    alt="Custom Staircase Fabrication"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5 pb-2">
                  <h3 className="font-display text-xl font-semibold text-espresso">
                    Custom Staircases
                  </h3>
                  <p className="mt-1.5 text-xs text-espresso/70 leading-relaxed">
                    Bespoke floating, cantilevered, curved, and straight-run structural stairs.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-3 border-t border-espresso/5">
                <Link
                  to="/stairs"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-terracotta hover:text-espresso"
                >
                  Explore Staircases <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>

            {/* Service 02: Architectural Railings */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-espresso/15 bg-white shadow-soft transition-all duration-300 hover:border-terracotta hover:-translate-y-1">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src="/images/stair-glass.jpg"
                    alt="Architectural Railing Systems"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5 pb-2">
                  <h3 className="font-display text-xl font-semibold text-espresso">
                    Railing Systems
                  </h3>
                  <p className="mt-1.5 text-xs text-espresso/70 leading-relaxed">
                    Frameless Starphire low-iron glass, structural laser-cut steel, and marine cable.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-3 border-t border-espresso/5">
                <Link
                  to="/railings"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-terracotta hover:text-espresso"
                >
                  Explore Railing Systems <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>

            {/* Service 03: Contractor Supplies */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-espresso/15 bg-white shadow-soft transition-all duration-300 hover:border-terracotta hover:-translate-y-1">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src="/images/workshop.jpg"
                    alt="Contractor Stair Supplies"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5 pb-2">
                  <h3 className="font-display text-xl font-semibold text-espresso">
                    Trade & Supplies
                  </h3>
                  <p className="mt-1.5 text-xs text-espresso/70 leading-relaxed">
                    Wholesale wrought iron balusters, box newel posts, hardware, and treads for builders.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-3 border-t border-espresso/5">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-terracotta hover:text-espresso"
                >
                  Contractor Catalog <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. RAILINGS SYSTEM SECTION (Warm Stone: #E8E2D8) */}


      {/* 6. PORTFOLIO SHOWCASE SECTION (Signature Terracotta / Wine: #6B302C) */}
      <section id="portfolio" className="relative">
        <Portfolio />
      </section>




      {/* 8. CONTACT & CONSULTATION SECTION */}
      <ContactSection />
    </div>
  );
}
