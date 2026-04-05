"use client";
import { useEffect, useRef } from "react";
import { Target, Trophy, Gift, Zap, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "TrackMan Technology",
    body: "Tour-grade ball tracking — the same tech the pros use. Every shot tracked, measured, perfected.",
  },
  {
    icon: Trophy,
    title: "Bookable Bays",
    body: "Reserve your session in advance. Solo, pairs, or a full squad — we've got you sorted.",
  },
  {
    icon: Gift,
    title: "Gift Vouchers from £50",
    body: "The perfect present. Downloadable, instantly delivered, forever valid.",
  },
  {
    icon: Zap,
    title: "Bar Service to Your Bay",
    body: "Drinks delivered while you play. Because why leave when you're on a roll?",
  },
];

export default function Golf() {
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
    <section id="golf" ref={ref} className="py-28 bg-black relative overflow-hidden">
      {/* Ambient green glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="reveal text-[10px] tracking-[0.3em] uppercase text-emerald-400 mb-4 font-semibold">
              The Bunker
            </p>
            <h2
              className="reveal text-[clamp(2.8rem,5vw,4.5rem)] leading-none text-white mb-6"
              style={{ fontFamily: "'Russo One', sans-serif" }}
            >
              TRACKMAN GOLF.<br />
              <span className="text-emerald-400">UNDERGROUND.</span>
            </h2>
            <p className="reveal text-white/55 mb-10">
              We brought Edinburgh's most advanced golf simulator underground. The Bunker features state-of-the-art TrackMan — tee up between rounds or make a full night of it. No dress code, full bar.
            </p>

            <ul className="reveal flex flex-col gap-4 mb-10" role="list">
              {features.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4 p-4 border border-white/5 hover:border-emerald-500/20 bg-white/[0.02] hover:bg-emerald-500/[0.03] transition-all duration-250 group">
                  <div className="w-10 h-10 border border-emerald-500/20 group-hover:border-emerald-400/40 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Icon size={18} className="text-emerald-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                    <p className="text-sm text-white/45">{body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="reveal inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs tracking-[0.15em] uppercase font-bold px-8 py-4 transition-colors duration-200"
            >
              Book a Simulator Session
              <ChevronRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Sim screen visual */}
          <div className="reveal flex items-center justify-center">
            <div
              className="relative w-full max-w-[460px] scanlines"
              role="img"
              aria-label="TrackMan golf simulator display showing ball flight data"
            >
              {/* Screen */}
              <div
                className="aspect-[16/10] border border-emerald-500/20 overflow-hidden relative"
                style={{ background: "linear-gradient(160deg, #051a09 0%, #020d04 100%)" }}
              >
                {/* Course */}
                <div className="absolute inset-0 flex items-end">
                  <div
                    className="w-full h-2/5"
                    style={{ background: "linear-gradient(to top, #14532d, #16a34a44, transparent)" }}
                  />
                </div>

                {/* Flag */}
                <div className="absolute bottom-[38%] right-[20%] text-2xl animate-float select-none" aria-hidden="true">⛳</div>

                {/* Ball arc */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 460 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M80 210 Q180 60 370 170"
                    stroke="rgba(52,211,153,0.5)"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    fill="none"
                  />
                  {/* Ball */}
                  <circle cx="80" cy="210" r="5" fill="white" filter="url(#ballGlow)" />
                  <defs>
                    <filter id="ballGlow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                </svg>

                {/* HUD overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-black/70 border-t border-emerald-500/10 px-4 py-3 flex justify-around">
                  {[["CARRY", "247 yds"], ["SPEED", "98 mph"], ["SPIN", "2,450 rpm"], ["ANGLE", "14.2°"]].map(([label, val]) => (
                    <div key={label} className="text-center">
                      <div className="text-[9px] tracking-widest uppercase text-emerald-400/60">{label}</div>
                      <div
                        className="text-sm text-white"
                        style={{ fontFamily: "'Russo One', sans-serif" }}
                      >{val}</div>
                    </div>
                  ))}
                </div>

                {/* Top bar */}
                <div className="absolute top-0 inset-x-0 bg-black/50 border-b border-emerald-500/10 px-4 py-2 flex items-center justify-between">
                  <span className="text-[9px] tracking-widest uppercase text-emerald-400">TrackMan · Hole 7</span>
                  <span className="flex items-center gap-1.5 text-[9px] text-emerald-400/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" aria-hidden="true" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Screen glow */}
              <div className="absolute -inset-4 bg-emerald-500/5 blur-2xl -z-10 rounded-none" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
