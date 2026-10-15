import { motion } from "framer-motion";
import { Package, Wrench, Ruler } from "lucide-react";

const items = [
  { name: "Wrought Iron Balusters", desc: "Twisted, straight & knuckle profiles. Powder-coated.", icon: Package, tag: "Trade" },
  { name: "Newel Posts", desc: "Box, turned & fluted. Oak, poplar, maple.", icon: Ruler, tag: "Millwork" },
  { name: "Brackets & Rosettes", desc: "Decorative brackets, volutes, easing curves.", icon: Wrench, tag: "Hardware" },
  { name: "Handrails", desc: "Profiled handrails in oak, walnut, pine.", icon: Ruler, tag: "Millwork" },
  { name: "Glass Clips & Standoffs", desc: "Stainless standoffs, clamps, channel systems.", icon: Package, tag: "Glass" },
  { name: "Cable & Fittings", desc: "316 SS cable, tensioners, posts, terminations.", icon: Wrench, tag: "Cable" },
];

export default function Supplies() {
  return (
    <section id="supplies" className="bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta">
              Trade Portal
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
              Stair Supplies for <em className="italic text-terracotta">Contractors</em>
            </h2>
          </div>
          <p className="max-w-md text-sm text-espresso/60">
            Wholesale balusters, newel posts, brackets, handrails and hardware for
            builders, remodelers and architects. Bulk pricing, fast Paterson pickup.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-3xl border border-espresso/10 bg-wash p-6 transition-all hover:border-brass hover:shadow-soft"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-espresso text-linen transition-colors group-hover:bg-brass group-hover:text-steel">
                  <it.icon size={18} />
                </div>
                <span className="rounded-full bg-emerald/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald">
                  {it.tag}
                </span>
              </div>
              <h3 className="font-display text-xl text-espresso">{it.name}</h3>
              <p className="mt-2 text-sm text-espresso/60">{it.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-espresso/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-espresso/40">
                  In Stock
                </span>
                <button className="font-mono text-[10px] uppercase tracking-[0.18em] text-brass hover:text-terracotta">
                  Request Quote →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-espresso p-8 text-center text-linen md:flex-row md:justify-between md:text-left">
          <div>
            <div className="font-display text-2xl">Trade Account Pricing</div>
            <div className="text-sm text-linen/60">Net-30 for verified contractors · Volume discounts</div>
          </div>
          <a
            href="#estimator"
            className="rounded-full bg-brass px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-steel transition-all hover:bg-brass-light"
          >
            Open Trade Account ↗
          </a>
        </div>
      </div>
    </section>
  );
}