"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about",  label: "About" },
  { href: "#golf",   label: "The Golf Sim" },
  { href: "#menu",   label: "Menu" },
  { href: "#events", label: "Events" },
  { href: "#hire",   label: "Private Hire" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none" aria-label="Ollie's The Bunker — home">
          <span
            className="text-2xl tracking-widest text-white"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            OLLIE'S
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#FBBF24] mt-0.5">
            The Bunker
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase font-semibold bg-[#DC2626] hover:bg-[#EF4444] text-white px-5 py-2.5 transition-colors duration-200"
              style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
            >
              Find Us
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-black/98 border-b border-white/5"
        >
          <ul className="flex flex-col px-6 py-4 gap-1" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block py-3 text-sm tracking-widest uppercase text-white/60 hover:text-white border-b border-white/5 transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={close}
                className="block text-center py-3 text-sm tracking-widest uppercase font-semibold bg-[#DC2626] hover:bg-[#EF4444] text-white transition-colors duration-200"
              >
                Find Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
