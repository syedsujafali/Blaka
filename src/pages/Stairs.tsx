import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Portfolio from "@/components/Portfolio";
import { ArrowUpRight, Compass, Shield, Sparkles } from "lucide-react";

export default function Stairs() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Editorial Header */}
      <section className="bg-linen pb-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta font-semibold">
              <Sparkles size={12} className="text-terracotta" />
              Bespoke Staircase Architecture
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight text-espresso md:text-6xl lg:text-7xl">
              Traditional woodwork, open treads & <em className="italic text-terracotta">modern steel.</em>
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-espresso/80">
              Explore our full portfolio of floating, cantilevered, curved, and architectural stair installations completed across New Jersey, New York City, and Connecticut.
            </p>
          </div>

          {/* Quick Categories Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Floating Treads", sub: "Hidden wall anchors & plate steel" },
              { title: "Curved & Helical", sub: "Bespoke radiuses & continuous rails" },
              { title: "Steel Stringers", sub: "Laser-cut mono & dual stringers" },
              { title: "Hardwood Millwork", sub: "Kiln-dried walnut, oak & pine" },
            ].map((cat) => (
              <div key={cat.title} className="p-5 rounded-2xl border border-espresso/15 bg-wash">
                <div className="font-display text-lg font-bold text-espresso">{cat.title}</div>
                <div className="text-xs text-espresso/60 mt-1">{cat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Portfolio Gallery Showcase */}
      <Portfolio />

      {/* Estimator Integration */}
      <section className="bg-wash py-20 border-t border-espresso/15 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta font-semibold">
            Custom Stair Consultation
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-espresso">
            Have a project blueprint or site dimensions?
          </h2>
          <p className="mt-3 text-sm text-espresso/70 leading-relaxed">
            Send us your architectural elevations or schedule an on-site consultation with our Paterson team.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-espresso px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-linen hover:bg-terracotta transition-all shadow-soft"
            >
              Request Stair Proposal <ArrowUpRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
