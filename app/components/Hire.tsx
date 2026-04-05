"use client";
import { useEffect, useRef } from "react";
import { Users, LayoutGrid, Monitor, Volume2, ChefHat, PoundSterling, ChevronRight } from "lucide-react";

const specs = [
  { icon: Users,         title: "Up to 110 guests",       sub: "Standing capacity" },
  { icon: LayoutGrid,    title: "3 rooms + dance floor",   sub: "Flexible multi-zone layout" },
  { icon: Monitor,       title: "2 large digital screens", sub: "Plus projector & flatscreen TV" },
  { icon: Volume2,       title: "Surround sound",          sub: "Full bar & in-house chefs" },
  { icon: ChefHat,       title: "Catering available",      sub: "Vegan, veggie & GF options" },
  { icon: PoundSterling, title: "From £200 hire fee",      sub: "Min. spend from £1,000" },
];

export default function Hire() {
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
    <section id="hire" ref={ref} className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient red glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DC2626]/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="reveal text-[10px] tracking-[0.3em] uppercase text-[#DC2626] mb-4 font-semibold">
              Private Hire
            </p>
            <h2
              className="reveal text-[clamp(2.8rem,5vw,4.5rem)] leading-none text-white mb-6"
              style={{ fontFamily: "'Russo One', sans-serif" }}
            >
              THE WHOLE<br />
              <span className="text-[#FBBF24]">BUNKER.</span><br />
              ALL YOURS.
            </h2>
            <p className="reveal text-white/55 mb-10">
              Take over Edinburgh's most atmospheric underground venue. Three rooms, dance floor, full bar and kitchen — Ollie's is built for nights that become stories people tell for years.
            </p>

            {/* Specs grid */}
            <ul
              className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
              role="list"
              aria-label="Private hire features"
            >
              {specs.map(({ icon: Icon, title, sub }) => (
                <li
                  key={title}
                  className="flex items-start gap-3 p-4 border border-white/5 bg-white/[0.02] hover:border-[#DC2626]/20 transition-colors duration-200"
                >
                  <Icon size={16} className="text-[#FBBF24] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">{title}</p>
                    <p className="text-xs text-white/35 mt-0.5">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="reveal flex flex-wrap gap-3">
              <a
                href="mailto:info@dublinstreetsocial.com"
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#EF4444] text-white text-xs tracking-[0.15em] uppercase font-bold px-8 py-4 transition-colors duration-200"
              >
                Enquire Now
                <ChevronRight size={14} aria-hidden="true" />
              </a>
              <a
                href="tel:01315630403"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-xs tracking-[0.15em] uppercase font-semibold px-8 py-4 transition-all duration-200"
              >
                Call 0131 563 0403
              </a>
            </div>
          </div>

          {/* Floor plan visual */}
          <div className="reveal relative" role="img" aria-label="Ollie's venue floor plan — main room, bar room, and dance floor">
            <div className="border border-white/5 p-6 space-y-3">
              {/* Main room */}
              <div className="border border-[#DC2626]/20 bg-[#DC2626]/5 p-6 text-center hover:bg-[#DC2626]/[0.08] transition-colors duration-200">
                <div
                  className="text-xl text-white mb-1"
                  style={{ fontFamily: "'Russo One', sans-serif" }}
                >
                  MAIN ROOM
                </div>
                <div className="text-xs text-[#DC2626] tracking-widest uppercase">60 standing · Full sound system</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Bar room */}
                <div className="border border-[#FBBF24]/15 bg-[#FBBF24]/5 p-5 text-center hover:bg-[#FBBF24]/[0.08] transition-colors duration-200">
                  <div
                    className="text-base text-white mb-1"
                    style={{ fontFamily: "'Russo One', sans-serif" }}
                  >
                    BAR ROOM
                  </div>
                  <div className="text-[10px] text-[#FBBF24]/70 tracking-widest uppercase">Private bar</div>
                </div>
                {/* Dance floor */}
                <div className="border border-white/8 bg-white/[0.02] p-5 text-center hover:bg-white/[0.04] transition-colors duration-200">
                  <div
                    className="text-base text-white mb-1"
                    style={{ fontFamily: "'Russo One', sans-serif" }}
                  >
                    DANCE FLOOR
                  </div>
                  <div className="text-[10px] text-white/30 tracking-widest uppercase">Mirror walls</div>
                </div>
              </div>

              {/* Golf sim */}
              <div className="border border-emerald-500/15 bg-emerald-500/5 p-4 text-center hover:bg-emerald-500/[0.08] transition-colors duration-200">
                <div
                  className="text-base text-white mb-1"
                  style={{ fontFamily: "'Russo One', sans-serif" }}
                >
                  THE BUNKER · GOLF SIM
                </div>
                <div className="text-[10px] text-emerald-400/70 tracking-widest uppercase">TrackMan · Bookable bays</div>
              </div>

              {/* Exclusive badge */}
              <div className="mt-4 text-center py-3 border-t border-white/5">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/25">
                  Exclusive · Private · Not shared
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
