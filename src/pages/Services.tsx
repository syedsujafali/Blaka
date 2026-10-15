import { Link } from "react-router-dom";
import Supplies from "@/components/Supplies";
import { Hammer, Truck, Box, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Editorial Header */}
      <section className="bg-linen pb-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta font-semibold mb-3">
              Full Services & Trade Supply
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[1.05] tracking-tight text-espresso">
              <span className="block">Wood.</span>
              <span className="block italic text-terracotta">Glass.</span>
              <span className="block">Steel.</span>
            </h1>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-espresso/80 max-w-2xl">
              Two primary operations under one Paterson roof: turnkey bespoke fabrication & installation for high-end residential projects, and direct wholesale stair supply for contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Two Service Pillars Layout (matching original site) */}
      <section className="bg-wash border-y border-espresso/15 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Pillar 01: Turnkey Custom Stairs */}
            <div className="rounded-3xl border border-espresso/15 bg-linen p-8 md:p-12 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">01 · Turnkey Fabrication</span>
                  <Hammer size={20} className="text-espresso/50" />
                </div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl text-espresso font-semibold">
                  Stairs & Railings
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-espresso/70">
                  Custom stairs and railings built to suit your architectural plans, from traditional woodwork to modern floating glass and steel monoliths.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-espresso/80">
                  {[
                    "Architectural design consultation & site laser measurement",
                    "CNC beam & tread fabrication in kiln-dried hardwoods",
                    "TIG-welded structural steel stringers & laser-cut carriages",
                    "Full white-glove Tri-State installation by our own craftsmen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-terracotta mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 pt-6 border-t border-espresso/10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-espresso hover:text-terracotta"
                >
                  Request Project Consultation <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 02: Contractor Stair Supplies */}
            <div className="rounded-3xl border border-espresso/15 bg-linen p-8 md:p-12 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">02 · Trade Supply Division</span>
                  <Box size={20} className="text-espresso/50" />
                </div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl text-espresso font-semibold">
                  Stair Supplies
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-espresso/70">
                  Stair components and hardware for residential projects, renovations, and new construction. Wholesale pricing and immediate Paterson pickup.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-espresso/80">
                  {[
                    "Wrought iron balusters, scrolls, knuckles & satin finishes",
                    "Solid hardwood treads, risers, skirt boards & profiled handrails",
                    "Box newel posts, turned posts, volutes, and starting steps",
                    "Stainless steel glass clamps, base channels, and tension cable kits",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-terracotta mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 pt-6 border-t border-espresso/10">
                <a
                  href="tel:+12012821005"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-espresso hover:text-terracotta"
                >
                  Call Trade Desk: (201) 282-1005 <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Supplies Catalog Grid */}
      <Supplies />

      {/* Contractor Account Banner */}
      <section className="bg-espresso py-16 text-linen">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Builder & Trade Accounts</h3>
            <p className="mt-1 text-sm text-linen/70">Volume discounts, material staging, and local Tri-State job site delivery.</p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-brass px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-steel hover:bg-brass-light transition-all shadow-glow"
          >
            Inquire For Trade Pricing ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
