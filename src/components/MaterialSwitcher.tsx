import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles, Layers, Sliders } from "lucide-react";

interface RailingSystem {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  img: string;
  specs: { label: string; val: string }[];
  idealFor: string;
  priceLevel: string;
}

const systems: RailingSystem[] = [
  {
    id: "glass",
    name: "Frameless Starphire Glass",
    tagline: "Ultra-Clear Minimalist Barrier",
    desc: "1/2\" heavy tempered Starphire architectural glass engineered with concealed base shoes or precision stainless standoffs. Maximum light transmission and floating openness.",
    img: "/images/stair-glass.jpg",
    specs: [
      { label: "Glass Type", val: "1/2\" Low-Iron Tempered Starphire" },
      { label: "Mounting", val: "Concealed Base Channel / Standoffs" },
      { label: "Handrail Option", val: "Fascia-mount Brass / Cap Rail" },
      { label: "Code", val: "IBC / IRC 200lb concentrated load" },
    ],
    idealFor: "Modern open-concept residences & penthouse lofts",
    priceLevel: "Premium Atelier",
  },
  {
    id: "steel",
    name: "Laser-Cut Structural Steel",
    tagline: "Industrial Architectural Monolith",
    desc: "A36 carbon structural steel laser-cut into bespoke geometric profiles, stringers, or plate balusters. Finished in super-matte industrial architectural powder coat.",
    img: "/images/stair-floating.jpg",
    specs: [
      { label: "Material", val: "1/4\" - 3/8\" A36 Structural Plate" },
      { label: "Finish", val: "Matte Black Powder Coat / Raw Wax" },
      { label: "Fabrication", val: "CNC Laser-Cut & TIG Welded" },
      { label: "Mounting", val: "Sub-floor structural anchoring" },
    ],
    idealFor: "Cantilevered staircases & architectural statement homes",
    priceLevel: "Bespoke Structural",
  },
  {
    id: "brass",
    name: "Artisan Brushed Brass",
    tagline: "Living Metallic Elegance",
    desc: "Solid brass bar stock individually machined, hand-brushed, and protected with microcrystalline wax or left raw to develop a rich organic patina over decades.",
    img: "/images/stair-curved.jpg",
    specs: [
      { label: "Composition", val: "Solid C360 Alloy Architectural Brass" },
      { label: "Finish", val: "Hand-Brushed Satin / Living Patina" },
      { label: "Spindle Spacing", val: "Strict 3.75\" Code Spacing" },
      { label: "Integration", val: "Threaded invisible bottom anchors" },
    ],
    idealFor: "Curved staircases, classical estates & historic townhouses",
    priceLevel: "Luxury Craft",
  },
  {
    id: "cable",
    name: "Marine Tension Cable",
    tagline: "Nautical Grade Clean Lines",
    desc: "Type 316 marine-grade stainless steel cables pre-tensioned with internal turnbuckles into slender powder-coated posts. Unobstructed sightlines and crisp horizontal geometry.",
    img: "/images/installation.jpg",
    specs: [
      { label: "Cable Wire", val: "1/8\" 316 Stainless 1x19 Strand" },
      { label: "Tensioners", val: "Concealed end-fittings in post" },
      { label: "Post Profile", val: "2\"x2\" Hollow Structural Steel" },
      { label: "Maintenance", val: "Zero-sag lifetime tension hardware" },
    ],
    idealFor: "Contemporary homes, loft balconies & exterior transitions",
    priceLevel: "Modern Standard",
  },
];

export default function MaterialSwitcher() {
  const [active, setActive] = useState<RailingSystem>(systems[0]);

  return (
    <section id="materials" className="relative py-28 text-espresso md:py-36 overflow-hidden" style={{ backgroundColor: "#E8E2D8" }}>
      {/* Subtle architectural grid motif */}
      <div className="absolute inset-0 grain opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-espresso/15 pb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold">
              <Sparkles size={12} className="text-terracotta" />
              Railing Engineering Division
            </div>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-espresso md:text-6xl">
              Architectural <em className="italic text-terracotta font-normal">Railings</em> & Systems
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-espresso/70">
            Every railing is engineered and code-certified in our Paterson shop. Choose a system below to inspect architectural specifications, mounting details, and material finishes.
          </p>
        </div>

        {/* Tab System Selector */}
        <div className="mb-10 flex flex-wrap gap-3">
          {systems.map((s, idx) => {
            const isSelected = active.id === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`group flex items-center gap-3 rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  isSelected
                    ? "bg-espresso text-linen shadow-soft scale-[1.02]"
                    : "border border-espresso/15 bg-white/50 text-espresso/70 hover:border-espresso/40 hover:bg-white/80 hover:text-espresso"
                }`}
              >
                <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold ${
                  isSelected ? "bg-brass text-steel" : "bg-espresso/10 text-espresso/60"
                }`}>
                  0{idx + 1}
                </span>
                <span>{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Presentation Deck */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left: Large High-Resolution Architectural Spec Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-espresso shadow-soft sm:aspect-[16/11]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.img}
                  alt={active.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Spec Pill on Image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-brass-light font-semibold">
                    Certified Installation
                  </div>
                  <div className="font-display text-2xl font-bold text-linen md:text-3xl">
                    {active.name}
                  </div>
                  <div className="font-mono text-[10px] text-linen/75 mt-0.5">
                    {active.idealFor}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/20 bg-espresso/70 px-4 py-2.5 backdrop-blur-md">
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-linen/60">Tier</div>
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-brass-light">
                    {active.priceLevel}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Spec Sheet & Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-terracotta font-medium">
                <Sliders size={11} /> {active.tagline}
              </div>
              <h3 className="mt-3 font-display text-3xl font-medium text-espresso md:text-4xl">
                {active.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso/75">
                {active.desc}
              </p>
            </div>

            {/* Spec Matrix Table */}
            <div className="rounded-2xl border border-espresso/15 bg-white/60 p-5 shadow-sm divide-y divide-espresso/10">
              <div className="flex items-center gap-2 pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-espresso/60 font-semibold">
                <Layers size={13} className="text-terracotta" /> Engineering Specifications
              </div>
              {active.specs.map((sp) => (
                <div key={sp.label} className="py-2.5 flex items-center justify-between text-xs gap-3">
                  <span className="font-mono uppercase tracking-[0.14em] text-espresso/60 text-[10px]">
                    {sp.label}
                  </span>
                  <span className="font-medium text-espresso text-right">
                    {sp.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Code compliance note */}
            <div className="flex items-center gap-3 text-xs text-espresso/70">
              <ShieldCheck size={18} className="text-terracotta shrink-0" />
              <span>Full compliance with NJ Uniform Construction Code & NYC Building Code standards.</span>
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <a
                href="#estimator"
                className="group flex w-full items-center justify-between rounded-full bg-espresso px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-linen transition-all duration-300 hover:bg-terracotta shadow-soft"
              >
                <span>Request {active.name} Quote</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-brass-light" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}