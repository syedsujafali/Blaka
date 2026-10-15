import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Hammer, Ruler, CheckCircle2 } from "lucide-react";
import Anatomy from "@/components/Anatomy";
import Testimonials from "@/components/Testimonials";

export default function About() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Editorial Header */}
      <section className="bg-linen pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta font-semibold">
              The Paterson Atelier · Since 1999
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight text-espresso md:text-6xl lg:text-7xl">
              A family business where <em className="italic text-terracotta">steel meets soul.</em>
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-espresso/80">
              For more than 25 years, BLAKA Custom Stairs & Supplies has operated from Paterson, New Jersey, crafting sculptural staircases and supplying trade components to the most demanding architects, custom builders, and homeowners across the Tri-State.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="bg-wash border-y border-espresso/10 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
                <img
                  src="/images/workshop.jpg"
                  alt="Blaka Paterson Workshop"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block glass rounded-2xl p-5 border border-white/60 shadow-soft max-w-xs">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-terracotta font-semibold">
                  Workshop Floor
                </div>
                <div className="font-display text-lg text-espresso mt-1">295 River Street</div>
                <div className="font-mono text-[10px] text-espresso/60">Paterson, New Jersey 07524</div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-terracotta font-semibold">
                Our Heritage
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-espresso">
                From artisan woodwork to state-of-the-art metalcraft.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-espresso/75">
                We believe a staircase is never just a way between floors. It is the architectural anchor of the home. By combining traditional joinery with precision laser cutting and low-iron architectural glass, we eliminate intermediaries.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-espresso/10">
                <div className="p-4 rounded-2xl bg-linen border border-espresso/10">
                  <Hammer size={18} className="text-terracotta mb-2" />
                  <div className="font-display text-xl font-bold text-espresso">In-House Milling</div>
                  <div className="text-xs text-espresso/60 mt-1">Kiln-dried hardwoods selected for grain and structural stability.</div>
                </div>
                <div className="p-4 rounded-2xl bg-linen border border-espresso/10">
                  <Ruler size={18} className="text-terracotta mb-2" />
                  <div className="font-display text-xl font-bold text-espresso">Laser Tolerance</div>
                  <div className="text-xs text-espresso/60 mt-1">Structural steel plate laser-cut to ±0.5mm tolerances.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <Anatomy />

      {/* Reviews & Social Proof */}
      <Testimonials />

      {/* Bottom CTA */}
      <section className="bg-espresso py-20 text-linen text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-medium">
            Ready to collaborate on your next build?
          </h2>
          <p className="mt-4 text-sm text-linen/70 leading-relaxed">
            Whether you need trade supplies or a full turnkey sculptural staircase, our Paterson team is ready.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-brass px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-steel hover:bg-brass-light transition-all shadow-glow"
            >
              Contact Atelier <ArrowUpRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
