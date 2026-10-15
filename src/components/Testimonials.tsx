import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    q: "Blaka turned our vague idea into a staircase that is now the centerpiece of the house. The steel work is flawless.",
    name: "Marc D.",
    role: "Homeowner · Summit, NJ",
  },
  {
    q: "As an architect, I need fabricators who read drawings. Blaka reads them, improves them, and delivers on time.",
    name: "Elena R.",
    role: "Principal Architect · NYC",
  },
  {
    q: "Their trade supply pricing and pickup speed keep our projects moving. Best stair shop in the Tri-State.",
    name: "James T.",
    role: "General Contractor · Bergen County",
  },
  {
    q: "The floating walnut treads feel like sculpture. Guests stop and stare every single time.",
    name: "Priya S.",
    role: "Interior Designer · Short Hills, NJ",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);

  return (
    <section id="story" className="bg-espresso py-24 text-linen md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass-light">
              Social Proof & Atelier Story
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
              Trusted by architects, <em className="italic text-brass-light">builders & homeowners</em>
            </h2>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={16} className="fill-brass text-brass" />
            ))}
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-linen/60">
              5.0 · Google Reviews
            </span>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-linen/10 bg-steel/40 p-8">
              <div className="font-display text-2xl leading-snug text-linen">
                "A workshop where steel meets soul."
              </div>
              <p className="mt-4 text-sm leading-relaxed text-linen/60">
                Founded in 1999 in Paterson, NJ, Blaka began as a one-man metal shop.
                Today it is a full atelier — laser cutting, CNC millwork, glass
                fabrication and finishing under one roof. Every staircase is
                designed, built and installed by the same hands.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brass/20" />
                <div>
                  <div className="font-display text-base">Blaka Family</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-linen/50">
                    Atelier · Paterson, NJ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative min-h-[260px] rounded-3xl border border-linen/10 bg-steel/40 p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="font-display text-2xl leading-snug text-linen md:text-3xl">
                    "{reviews[i].q}"
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-brass/30" />
                    <div>
                      <div className="font-display text-base">{reviews[i].name}</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-linen/50">
                        {reviews[i].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 right-6 flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 text-linen hover:bg-linen/10"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 text-linen hover:bg-linen/10"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1 flex-1 rounded-full transition-all ${k === i ? "bg-brass" : "bg-linen/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}