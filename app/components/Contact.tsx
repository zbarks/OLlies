"use client";
import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div>
            <p className="reveal text-[10px] tracking-[0.3em] uppercase text-[#DC2626] mb-4 font-semibold">
              Get In Touch
            </p>
            <h2
              className="reveal text-[clamp(2.8rem,5vw,4.5rem)] leading-none text-white mb-8"
              style={{ fontFamily: "'Russo One', sans-serif" }}
            >
              COME DOWN.<br />
              <span className="text-[#FBBF24]">WE'LL SORT YOU.</span>
            </h2>

            <address className="not-italic">
              <ul className="reveal flex flex-col gap-3" role="list" aria-label="Contact details">
                <li>
                  <a
                    href="tel:01315630403"
                    className="flex items-start gap-4 p-4 border border-white/5 bg-[#0a0a0a] hover:border-[#DC2626]/30 hover:bg-[#DC2626]/5 transition-all duration-200 group"
                    aria-label="Call Ollie's: 0131 563 0403"
                  >
                    <div className="w-9 h-9 border border-white/10 group-hover:border-[#DC2626]/40 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <Phone size={15} className="text-white/40 group-hover:text-[#DC2626] transition-colors duration-200" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-white/30 mb-0.5">Call Us</p>
                      <p className="text-sm font-semibold text-white">0131 563 0403</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@dublinstreetsocial.com"
                    className="flex items-start gap-4 p-4 border border-white/5 bg-[#0a0a0a] hover:border-[#FBBF24]/30 hover:bg-[#FBBF24]/5 transition-all duration-200 group"
                    aria-label="Email Ollie's: info@dublinstreetsocial.com"
                  >
                    <div className="w-9 h-9 border border-white/10 group-hover:border-[#FBBF24]/40 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <Mail size={15} className="text-white/40 group-hover:text-[#FBBF24] transition-colors duration-200" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-white/30 mb-0.5">Email</p>
                      <p className="text-sm font-semibold text-white">info@dublinstreetsocial.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4 p-4 border border-white/5 bg-[#0a0a0a]">
                    <div className="w-9 h-9 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} className="text-white/40" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-white/30 mb-0.5">Address</p>
                      <p className="text-sm font-semibold text-white">
                        26B Dublin Street<br />
                        Edinburgh, EH3 6NN
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-4 p-4 border border-white/5 bg-[#0a0a0a]">
                    <div className="w-9 h-9 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Navigation size={15} className="text-white/40" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-white/30 mb-0.5">Getting Here</p>
                      <p className="text-sm text-white/50 leading-relaxed">
                        5 min walk from St Andrew's Square<br />
                        10 min from Waverley Station
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </address>

            {/* Social links */}
            <div className="reveal flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/ollieseventspace"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/10 hover:border-white/25 text-white/40 hover:text-white text-xs tracking-widest uppercase px-5 py-3 transition-all duration-200"
                aria-label="Ollie's Instagram (opens in new tab)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/dublinstreetsocial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/10 hover:border-white/25 text-white/40 hover:text-white text-xs tracking-widest uppercase px-5 py-3 transition-all duration-200"
                aria-label="Dublin Street Social Facebook (opens in new tab)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="reveal">
            <div
              className="aspect-square border border-white/5 relative overflow-hidden flex flex-col items-center justify-center gap-5 text-center p-8"
              style={{
                background: `
                  repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.025) 39px, rgba(255,255,255,0.025) 40px),
                  repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.025) 39px, rgba(255,255,255,0.025) 40px),
                  #0a0a0a
                `,
              }}
              role="img"
              aria-label="Map location: 26B Dublin Street, Edinburgh EH3 6NN"
            >
              <div className="absolute inset-0 bg-[#DC2626]/3 blur-3xl" aria-hidden="true" />

              {/* Pin */}
              <div className="relative z-10 w-14 h-14 bg-[#DC2626] flex items-center justify-center pulse-glow">
                <MapPin size={24} className="text-white" aria-hidden="true" />
              </div>

              <div className="relative z-10">
                <p
                  className="text-base text-white mb-1"
                  style={{ fontFamily: "'Russo One', sans-serif" }}
                >
                  OLLIE'S — THE BUNKER
                </p>
                <p className="text-sm text-white/40">26B Dublin Street</p>
                <p className="text-sm text-white/40">Edinburgh EH3 6NN</p>
              </div>

              <a
                href="https://maps.google.com/?q=26B+Dublin+Street+Edinburgh+EH3+6NN"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#EF4444] text-white text-xs tracking-[0.15em] uppercase font-bold px-6 py-3 transition-colors duration-200"
                aria-label="Open directions in Google Maps (opens in new tab)"
              >
                Get Directions
                <Navigation size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
