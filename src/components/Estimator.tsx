import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Upload, ArrowRight, ArrowLeft } from "lucide-react";

const types = ["Straight", "L-Shape", "Floating", "Spiral", "U-Shape"];
const rails = ["Glass", "Steel", "Brass", "Cable", "Wood"];

export default function Estimator() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<string | null>(null);
  const [rail, setRail] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", timeline: "", notes: "" });

  const total = 3;

  return (
    <section id="estimator" className="bg-wash py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta">
            Project Estimator
          </div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Start your <em className="italic text-terracotta">bespoke build</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-espresso/60">
            Three quick steps. We'll respond within one business day with a
            preliminary scope and ballpark.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 flex items-center gap-2">
          {Array.from({ length: total }).map((_, k) => (
            <div key={k} className="flex flex-1 items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-[11px] transition-all ${
                  step > k + 1
                    ? "bg-brass text-steel"
                    : step === k + 1
                    ? "bg-espresso text-linen"
                    : "bg-espresso/10 text-espresso/40"
                }`}
              >
                {step > k + 1 ? <Check size={14} /> : k + 1}
              </div>
              {k < total - 1 && (
                <div className={`h-0.5 flex-1 transition-all ${step > k + 1 ? "bg-brass" : "bg-espresso/10"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-linen p-8 shadow-soft md:p-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-2xl text-espresso">Step 1 · Staircase Type</h3>
                <p className="mt-1 text-sm text-espresso/60">Select the configuration that best matches your space.</p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`rounded-2xl border p-5 text-left transition-all ${
                        type === t
                          ? "border-brass bg-brass/10"
                          : "border-espresso/10 hover:border-espresso/40"
                      }`}
                    >
                      <div className="font-display text-lg text-espresso">{t}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-2xl text-espresso">Step 2 · Railing System</h3>
                <p className="mt-1 text-sm text-espresso/60">Choose your railing aesthetic.</p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {rails.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRail(r)}
                      className={`rounded-2xl border p-5 text-left transition-all ${
                        rail === r
                          ? "border-brass bg-brass/10"
                          : "border-espresso/10 hover:border-espresso/40"
                      }`}
                    >
                      <div className="font-display text-lg text-espresso">{r}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-2xl text-espresso">Step 3 · Location, Timeline & Files</h3>
                <p className="mt-1 text-sm text-espresso/60">Tell us where and when, and upload blueprints or site photos.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl border border-espresso/15 bg-wash px-4 py-3 text-sm outline-none focus:border-brass"
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-xl border border-espresso/15 bg-wash px-4 py-3 text-sm outline-none focus:border-brass"
                  />
                  <input
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="rounded-xl border border-espresso/15 bg-wash px-4 py-3 text-sm outline-none focus:border-brass"
                  />
                  <input
                    placeholder="Project Location (City, State)"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="rounded-xl border border-espresso/15 bg-wash px-4 py-3 text-sm outline-none focus:border-brass"
                  />
                  <select
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    className="rounded-xl border border-espresso/15 bg-wash px-4 py-3 text-sm outline-none focus:border-brass sm:col-span-2"
                  >
                    <option value="">Desired Timeline</option>
                    <option>ASAP (0-4 weeks)</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6+ months</option>
                  </select>
                  <textarea
                    placeholder="Notes / scope details"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className="rounded-xl border border-espresso/15 bg-wash px-4 py-3 text-sm outline-none focus:border-brass sm:col-span-2"
                  />
                </div>
                <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-espresso/20 bg-wash px-4 py-6 text-sm text-espresso/60 hover:border-brass">
                  <Upload size={16} />
                  Upload blueprints or site photos (optional)
                  <input type="file" multiple className="hidden" />
                </label>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-espresso/60 disabled:opacity-30"
            >
              <ArrowLeft size={14} /> Back
            </button>
            {step < total ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={step === 1 && !type}
                className="flex items-center gap-2 rounded-full bg-espresso px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-linen transition-all hover:bg-terracotta disabled:opacity-40"
              >
                Continue <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={() => alert("Thank you! We'll be in touch within one business day.")}
                className="flex items-center gap-2 rounded-full bg-brass px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-steel transition-all hover:bg-brass-light"
              >
                Submit Inquiry ↗
              </button>
            )}
          </div>
        </div>

        {/* Summary chip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-espresso/60">
          {type && <span className="rounded-full bg-linen px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]">Type: {type}</span>}
          {rail && <span className="rounded-full bg-linen px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]">Rail: {rail}</span>}
          <span className="rounded-full bg-linen px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]">Direct: (201) 282-1005</span>
        </div>
      </div>
    </section>
  );
}