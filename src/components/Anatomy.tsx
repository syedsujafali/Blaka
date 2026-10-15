import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Ruler, Shield } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Structural Stringers",
    sub: "Laser-cut powder-coated steel",
    desc: "Engineered from A36 steel plate, laser-cut to ±0.5mm tolerance, then powder-coated in matte black or custom RAL. Hidden mounting, zero visible fasteners.",
    icon: Layers,
  },
  {
    n: "02",
    title: "Precision Millwork",
    sub: "Kiln-dried hardwoods",
    desc: "Treads milled from kiln-dried stock to 6-8% moisture, edge-glued, sanded to 220 grit, finished with hardwax oil or conversion varnish.",
    icon: Ruler,
  },
  {
    n: "03",
    title: "Custom Railing Systems",
    sub: "Glass clips, posts, cable hardware",
    desc: "Frameless Starphire glass, brushed brass spindles, or 316 marine cable — engineered to IRC/IBC code with concealed anchoring.",
    icon: Shield,
  },
];

export default function Anatomy() {
  return (
    <section id="anatomy" className="bg-wash py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16 max-w-2xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta">
            The Anatomy
          </div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            How a Blaka staircase is <em className="italic text-terracotta">engineered</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl bg-linen p-8 shadow-soft transition-all hover:-translate-y-2"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
                  {s.n}
                </span>
                <s.icon size={22} className="text-espresso/40 transition-colors group-hover:text-terracotta" />
              </div>
              <h3 className="font-display text-2xl text-espresso">{s.title}</h3>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-espresso/50">
                {s.sub}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-espresso/70">{s.desc}</p>
              <div className="mt-6 h-1 w-0 bg-brass transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Before/After slider */}
        <BeforeAfter />
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <div className="mt-20">
      <div className="mb-6 flex items-end justify-between">
        <h3 className="font-display text-2xl text-espresso md:text-3xl">
          Workshop fabrication → Finished installation
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-espresso/50">
          Drag to compare
        </span>
      </div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-soft select-none">
        <img src="/images/installation.jpg" alt="Finished" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src="/images/workshop.jpg" alt="Workshop" className="h-full w-full object-cover" />
        </div>
        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-brass-light"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brass-light text-steel shadow-glow">
            ⇆
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
        <div className="absolute left-4 top-4 rounded-full bg-steel/70 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-linen backdrop-blur">
          Workshop
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-steel/70 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-linen backdrop-blur">
          Installed
        </div>
      </div>
    </div>
  );
}