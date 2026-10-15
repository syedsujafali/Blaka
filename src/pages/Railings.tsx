import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MaterialSwitcher from "@/components/MaterialSwitcher";
import { ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

export default function Railings() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Editorial Header */}
      <section className="bg-linen pb-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta font-semibold">
              <Sparkles size={12} className="text-terracotta" />
              Details, Finishes & Barrier Architecture
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight text-espresso md:text-6xl lg:text-7xl">
              Clear glass, slender steel & <em className="italic text-terracotta">decorative iron.</em>
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-espresso/80">
              Details that follow the shape of your stairs. Every railing system is custom engineered to code in our Paterson workshop with concealed anchors and seamless joints.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Railings System Switcher */}
      <MaterialSwitcher />

      {/* Code Compliance & Safety */}
      <section className="bg-espresso py-20 text-linen">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "IRC / IBC Certified",
                desc: "Engineered to withstand minimum 200 lb concentrated loads and 50 lb/linear foot uniform loads.",
              },
              {
                title: "Starphire Low-Iron",
                desc: "Clarity without green edge tint. 1/2\" to 3/4\" tempered safety glass polished to museum standards.",
              },
              {
                title: "Concealed Fastening",
                desc: "Hidden base shoes, fascia standoffs, and welded sub-plates ensure clean lines with zero visible bolts.",
              },
            ].map((f) => (
              <div key={f.title} className="p-8 rounded-3xl border border-linen/15 bg-steel/50">
                <ShieldCheck size={24} className="text-brass mb-3" />
                <h3 className="font-display text-2xl font-bold text-linen">{f.title}</h3>
                <p className="mt-2 text-sm text-linen/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brass px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-steel hover:bg-brass-light transition-all shadow-glow"
            >
              Consult With Our Railing Engineers <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
