import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Custom Stairs",
    material: "Wood & Steel",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F4EFE6" }}>
      {/* Subtle architectural grain */}
      <div className="absolute inset-0 grain opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Editorial Info & Paterson Atelier details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta font-semibold mb-2 h-4">
                  04 · Atelier Consultation
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-[#2B1D19] leading-[1.12]">
                  Let's build your <em className="italic text-terracotta font-normal">vision.</em>
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#2B1D19]/75 leading-relaxed">
                Whether you're an architect designing a floating centerpiece, a builder needing wholesale stair supplies, or a homeowner seeking custom railings, our craftsmen are ready to collaborate.
              </p>

              {/* Direct Phone Highlight */}
              <div className="pt-4 border-t border-espresso/15">
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#2B1D19]/60 font-semibold mb-1">
                  Direct Atelier Desk
                </div>
                <a
                  href="tel:+12012821005"
                  className="inline-block font-display text-3xl sm:text-4xl font-semibold tracking-tight text-espresso hover:text-terracotta transition-colors"
                >
                  (201) 282-1005
                </a>
              </div>
            </div>

            {/* Atelier Info Card */}
            <div className="mt-8 rounded-3xl border border-espresso/15 bg-white p-6 sm:p-7 shadow-soft space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin size={18} className="text-terracotta mt-0.5 shrink-0" />
                <div className="text-sm text-[#2B1D19]">
                  <div className="font-semibold text-espresso">Paterson Atelier & Millwork</div>
                  <div className="text-[#2B1D19]/70 text-xs mt-0.5">295 River Street, Paterson, NJ 07524</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock size={18} className="text-terracotta mt-0.5 shrink-0" />
                <div className="text-sm text-[#2B1D19]">
                  <div className="font-semibold text-espresso">Hours of Operation</div>
                  <div className="text-[#2B1D19]/70 text-xs mt-0.5">Mon–Fri: 7:00 AM – 5:00 PM · Saturday by appointment</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail size={18} className="text-terracotta mt-0.5 shrink-0" />
                <div className="text-sm text-[#2B1D19]">
                  <div className="font-semibold text-espresso">Email Inquiries</div>
                  <div className="text-[#2B1D19]/70 text-xs mt-0.5">info@blakasupplies.com</div>
                </div>
              </div>

              <div className="pt-3 border-t border-espresso/10">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=295+River+Street+Paterson+NJ+07524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-terracotta hover:text-espresso"
                >
                  Open in Google Maps <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-3xl border border-espresso/15 bg-white p-8 sm:p-10 shadow-soft h-full flex flex-col justify-between">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="my-auto py-16 text-center space-y-4"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-espresso">
                    Inquiry Received
                  </h3>
                  <p className="mx-auto max-w-md text-sm text-[#2B1D19]/75 leading-relaxed">
                    Thank you, {form.name || "valued client"}. Our Paterson engineering team will review your project details and respond within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-espresso/20 px-6 py-2.5 font-mono text-[11px] uppercase tracking-wider text-espresso hover:bg-espresso hover:text-linen transition-colors"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-terracotta font-semibold mb-2 h-4">
                      Project Consultation
                    </div>
                    <h3 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-espresso leading-[1.12]">
                      Send Us a Message
                    </h3>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso/70 mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-espresso/20 bg-linen/50 px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso/70 mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-espresso/20 bg-linen/50 px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso/70 mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(201) 000-0000"
                        className="w-full rounded-xl border border-espresso/20 bg-linen/50 px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso/70 mb-2 font-medium">
                        Scope of Project
                      </label>
                      <select
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="w-full rounded-xl border border-espresso/20 bg-linen/50 px-4 py-3 text-sm text-espresso focus:border-terracotta focus:bg-white focus:outline-none transition-colors"
                      >
                        <option>Custom Floating Stairs</option>
                        <option>Curved & Spiral Staircase</option>
                        <option>Architectural Glass Railings</option>
                        <option>Steel & Cable Railings</option>
                        <option>Contractor Wholesale Supplies</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-espresso/70 mb-2 font-medium">
                      Project Details & Dimensions
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your architectural plans, timeline, location, or materials..."
                      className="w-full rounded-xl border border-espresso/20 bg-linen/50 px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-espresso px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] font-semibold text-linen hover:bg-terracotta transition-all shadow-md hover:shadow-lg"
                  >
                    Submit Inquiry <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
