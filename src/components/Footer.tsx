import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ChevronDown } from "lucide-react";
import { InstagramIcon, FacebookIcon, XIcon, TikTokIcon } from "@/components/SocialIcons";
import { cn } from "@/utils/cn";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="relative overflow-hidden pt-12 pb-10 md:pt-20 md:pb-16 text-linen border-t border-white/20" style={{ backgroundColor: "#6B302C" }}>
      <div className="absolute inset-0 grain opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-12 items-start">
          {/* Col 1: Brand (Always visible) */}
          <div className="md:col-span-5 border-b border-white/10 pb-6 md:border-b-0 md:pb-0">
            <Link to="/" className="inline-block group">
              <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-linen transition-colors duration-300 group-hover:text-brass-light md:text-5xl">
                BLAKA
              </span>
            </Link>
            <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brass-light">
              Custom Stairs & Supplies · Paterson, NJ
            </p>
            <p className="mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-linen/70">
              A family business founded in 1999. Traditional woodwork, modern glass and steel designs, and architectural stair supplies for New Jersey and the Tri-State area.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="tel:+12012821005"
                className="inline-flex items-center gap-2 rounded-full bg-brass px-4 sm:px-5 py-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-steel font-semibold transition-all hover:bg-brass-light"
              >
                <Phone size={13} /> (201) 282-1005
              </a>
            </div>
          </div>

          {/* Col 2: The Workshop (Dropdown on mobile, open on md+) */}
          <div className="md:col-span-3 border-b border-white/10 pb-4 md:border-b-0 md:pb-0">
            <button
              onClick={() => toggleSection("workshop")}
              className="w-full flex items-center justify-between py-1 text-left md:pointer-events-none"
              aria-expanded={openSection === "workshop"}
            >
              <span className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.24em] text-brass-light font-semibold">
                The Workshop
              </span>
              <span className="md:hidden text-brass-light transition-transform duration-200">
                <ChevronDown size={16} className={cn("transition-transform", openSection === "workshop" && "rotate-180")} />
              </span>
            </button>
            <div className={cn("mt-4 space-y-3 text-xs sm:text-sm text-linen/75", openSection !== "workshop" && "hidden md:block")}>
              <address className="space-y-3 not-italic">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="mt-0.5 text-brass shrink-0" />
                  <span>295 River Street<br />Paterson, NJ 07524</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={15} className="mt-0.5 text-brass shrink-0" />
                  <span>Mon–Fri: 7:00 AM – 5:00 PM<br />Saturday by appointment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail size={15} className="mt-0.5 text-brass shrink-0" />
                  <span>info@blakasupplies.com</span>
                </div>
              </address>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=295+River+Street+Paterson+NJ+07524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brass hover:text-brass-light border-b border-brass/40 pb-0.5"
                >
                  Get directions <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation (Dropdown on mobile, open on md+) */}
          <div className="md:col-span-2 border-b border-white/10 pb-4 md:border-b-0 md:pb-0">
            <button
              onClick={() => toggleSection("explore")}
              className="w-full flex items-center justify-between py-1 text-left md:pointer-events-none"
              aria-expanded={openSection === "explore"}
            >
              <span className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.24em] text-brass-light font-semibold">
                Explore
              </span>
              <span className="md:hidden text-brass-light transition-transform duration-200">
                <ChevronDown size={16} className={cn("transition-transform", openSection === "explore" && "rotate-180")} />
              </span>
            </button>
            <div className={cn("mt-4", openSection !== "explore" && "hidden md:block")}>
              <ul className="space-y-2.5 text-linen/70 font-mono text-xs uppercase tracking-wider">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Stairs", href: "/stairs" },
                  { name: "Railings", href: "/railings" },
                  { name: "Services", href: "/services" },
                  { name: "Contact", href: "/contact" },
                ].map((n) => (
                  <li key={n.name}>
                    <Link to={n.href} className="hover:text-brass-light transition-colors block py-0.5">
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Service Area & Socials (Dropdown on mobile, open on md+) */}
          <div className="md:col-span-2 border-b border-white/10 pb-4 md:border-b-0 md:pb-0">
            <button
              onClick={() => toggleSection("service")}
              className="w-full flex items-center justify-between py-1 text-left md:pointer-events-none"
              aria-expanded={openSection === "service"}
            >
              <span className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.24em] text-brass-light font-semibold">
                Service Area
              </span>
              <span className="md:hidden text-brass-light transition-transform duration-200">
                <ChevronDown size={16} className={cn("transition-transform", openSection === "service" && "rotate-180")} />
              </span>
            </button>
            <div className={cn("mt-4 space-y-4", openSection !== "service" && "hidden md:block")}>
              <p className="text-xs sm:text-sm leading-relaxed text-linen/70">
                New Jersey · New York City · Connecticut · Long Island · Westchester
              </p>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-brass-light font-medium mb-2.5">
                  Connect With Us
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-xl bg-black/40 p-2 transition-all duration-200 hover:scale-110 active:scale-95 border border-white/15"
                  >
                    <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-xl bg-black/40 p-2 transition-all duration-200 hover:scale-110 active:scale-95 border border-white/15"
                  >
                    <FacebookIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="rounded-xl bg-black/40 p-2 transition-all duration-200 hover:scale-110 active:scale-95 border border-white/15"
                  >
                    <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="rounded-xl bg-black/40 p-2 transition-all duration-200 hover:scale-110 active:scale-95 border border-white/15"
                  >
                    <TikTokIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-linen/50">
          <div>© {new Date().getFullYear()} BLAKA Custom Stairs & Supplies. All rights reserved.</div>
          <div>295 River St, Paterson, NJ · (201) 282-1005</div>
        </div>
      </div>
    </footer>
  );
}