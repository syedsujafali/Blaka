import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, XIcon, TikTokIcon } from "@/components/SocialIcons";
import { cn } from "@/utils/cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Stairs", href: "/stairs" },
  { label: "Railings", href: "/railings" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
        document.documentElement.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* 1. TOP UTILITY BAR (Permanent Dark Atelier Brown with Original Brand Social Logos) */}
      <div className="bg-[#231713] text-linen/90 border-b border-white/10 py-1.5 sm:py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 text-xs font-mono">
          {/* Left: Paterson Atelier Location & Phone */}
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-wider text-brass-light font-medium truncate">
              <MapPin size={11} className="text-brass shrink-0" /> <span className="truncate">295 RIVER ST, PATERSON, NJ</span>
            </span>
            <span className="text-white/30 hidden xs:inline">•</span>
            <a
              href="tel:+12012821005"
              className="hidden xs:inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-linen/90 hover:text-brass-light transition-colors whitespace-nowrap"
            >
              <Phone size={11} className="text-brass shrink-0" /> (201) 282-1005
            </a>
          </div>

          {/* Right: Official Social Media Icons with Original Colors */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <span className="hidden md:inline text-[9px] uppercase tracking-[0.2em] text-linen/70 mr-1 font-semibold">
              FOLLOW US:
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1 rounded-md transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-md" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1 rounded-md transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <FacebookIcon className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-md" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="p-1 rounded-md transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <XIcon className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-md" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-1 rounded-md transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <TikTokIcon className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-md" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR (Permanent Solid Linen with Crisp Espresso Branding & Links) */}
      <div className="bg-[#EFE9DF] border-b border-espresso/15 py-3 transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
          {/* Brand Logo Lockup (Responsive for 320px to 4K) */}
          <Link to="/" className="group flex items-center gap-2.5 sm:gap-4 shrink-0">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#3B231D] group-hover:text-terracotta transition-colors leading-none">
              BLAKA
            </span>
            <div className="h-6 sm:h-7 w-px bg-[#3B231D]/25" />
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.24em] font-medium text-[#3B231D]/80 leading-[1.3]">
              CUSTOM STAIRS<br />& SUPPLIES
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
            {navLinks.map((n) => {
              const isActive = location.pathname === n.href;
              return (
                <Link
                  key={n.label}
                  to={n.href}
                  className={cn(
                    "group relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors py-1 whitespace-nowrap",
                    isActive
                      ? "text-espresso font-bold"
                      : "text-espresso/75 hover:text-espresso font-medium"
                  )}
                >
                  {n.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full px-5 lg:px-6 py-2.5 font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.18em] transition-all md:inline-flex bg-espresso text-linen hover:bg-terracotta shadow-sm hover:shadow shrink-0"
          >
            Contact <ArrowUpRight size={13} />
          </Link>

          {/* Mobile toggle button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/25 text-espresso hover:bg-espresso/5 active:bg-espresso/10 transition-colors md:hidden shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer (Refined Architectural Menu with Lenis isolation) */}
        {open && (
          <div
            data-lenis-prevent
            className="border-t border-espresso/10 bg-[#FAF7F2] px-6 py-6 shadow-xl backdrop-blur-xl md:hidden max-h-[calc(100vh-105px)] overflow-y-auto overscroll-contain touch-pan-y"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((n) => {
                const isActive = location.pathname === n.href;
                return (
                  <Link
                    key={n.label}
                    to={n.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-2 border-b border-espresso/5 font-display text-2xl transition-colors",
                      isActive ? "text-terracotta font-semibold" : "text-espresso hover:text-terracotta"
                    )}
                  >
                    <span>{n.label}</span>
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-terracotta" />
                    ) : (
                      <ArrowUpRight size={16} className="text-espresso/30" />
                    )}
                  </Link>
                );
              })}

              <div className="border-t border-espresso/15 pt-5 mt-2 flex flex-col gap-4">
                <a
                  href="tel:+12012821005"
                  className="flex items-center gap-2.5 font-mono text-sm font-semibold text-espresso"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brass/20 text-terracotta">
                    <Phone size={14} />
                  </div>
                  (201) 282-1005
                </a>
                
                <div className="flex items-center gap-2 text-xs font-mono text-espresso/70">
                  <MapPin size={13} className="text-terracotta shrink-0" />
                  <span>295 River St, Paterson, NJ 07524</span>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/60">Follow:</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1">
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1">
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="p-1">
                    <XIcon className="h-5 w-5" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-1">
                    <TikTokIcon className="h-5 w-5" />
                  </a>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-espresso py-3.5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-linen shadow-md hover:bg-terracotta transition-colors flex items-center justify-center gap-2"
                >
                  Request a Quote <ArrowUpRight size={14} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}