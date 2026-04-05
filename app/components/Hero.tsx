"use client";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle grid (OLED dark mode + vibrant block style)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let w = canvas.width  = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const cols = Math.floor(w / 60) + 2;
    const rows = Math.floor(h / 60) + 2;

    const dots = Array.from({ length: cols * rows }, (_, i) => ({
      x: (i % cols) * 60,
      y: Math.floor(i / cols) * 60,
      r: Math.random() * 0.8 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.005,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 1;
      dots.forEach((d) => {
        const pulse = Math.sin(t * d.speed + d.phase);
        const alpha = 0.08 + pulse * 0.06;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,38,38,${alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
      aria-label="Ollie's The Bunker — Edinburgh's underground sports bar"
    >
      {/* Dot grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Red diagonal slash accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute right-0 top-0 w-[45vw] h-full opacity-[0.03]"
          style={{ background: "linear-gradient(135deg, transparent 40%, #DC2626 40%)" }}
        />
      </div>

      {/* Bottom edge red glow */}
      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent opacity-60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Location badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-white/10 bg-white/[0.03]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#DC2626] live-dot"
            aria-hidden="true"
          />
          <span className="text-xs tracking-[0.25em] uppercase text-white/50">
            26B Dublin Street · Edinburgh New Town
          </span>
        </div>

        {/* Main title — Skill: large type 32px+, Russo One */}
        <h1 className="leading-none mb-4">
          <span
            className="block text-[clamp(5rem,18vw,15rem)] tracking-tight text-white"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            OLLIE'S
          </span>
          <span
            className="block text-[clamp(1.5rem,5vw,4.5rem)] tracking-[0.3em] text-[#DC2626] glow-red"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            THE BUNKER
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-6 text-[clamp(0.95rem,1.8vw,1.2rem)] text-white/50 tracking-wide font-light max-w-xl mx-auto">
          Edinburgh's underground sports bar — beneath the street, above the rest.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#events"
            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#EF4444] text-white text-xs tracking-[0.15em] uppercase font-semibold px-8 py-4 transition-colors duration-200"
            style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
          >
            What's On
          </a>
          <a
            href="#golf"
            className="inline-flex items-center gap-2 border border-[#FBBF24]/40 hover:border-[#FBBF24] text-[#FBBF24] text-xs tracking-[0.15em] uppercase font-semibold px-8 py-4 transition-colors duration-200"
          >
            Book Golf Sim
          </a>
          <a
            href="#hire"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white text-xs tracking-[0.15em] uppercase font-semibold px-8 py-4 transition-colors duration-200"
          >
            Private Hire
          </a>
        </div>

        {/* Hours strip */}
        <div className="mt-12 inline-flex gap-6 text-xs text-white/30 tracking-widest uppercase divide-x divide-white/10">
          <span className="pr-6">Mon — Closed</span>
          <span className="px-6">Tue–Sat 12pm–Late</span>
          <span className="pl-6">Sun 12pm–8pm</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
        <ChevronDown size={16} className="text-white/20 animate-bounce" />
      </div>
    </section>
  );
}
