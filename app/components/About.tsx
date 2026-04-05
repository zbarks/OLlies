"use client";
import { useEffect, useRef } from "react";
import { Dog, Users, Star, MapPin } from "lucide-react";

const stats = [
  { value: "110", label: "Capacity", icon: Users },
  { value: "3",   label: "Rooms",    icon: MapPin },
  { value: "4.8", label: "Rating",   icon: Star },
];

const tags = [
  "Live Sport", "Golf Sim", "DJ Nights", "Live Music",
  "Private Hire", "Dog Friendly", "Student Deals", "Bar & Kitchen",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual side */}
          <div className="reveal relative h-[480px]">
            {/* Brick-wall textured panel */}
            <div
              className="absolute inset-0 border border-white/5 overflow-hidden"
              aria-hidden="true"
              style={{
                background: `
                  repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.025) 30px, rgba(255,255,255,0.025) 31px),
                  repeating-linear-gradient(90deg, transparent, transparent 62px, rgba(255,255,255,0.025) 62px, rgba(255,255,255,0.025) 63px),
                  linear-gradient(160deg, #141414 0%, #0a0a0a 100%)
                `,
              }}
            >
              {/* Red glow in corner */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#DC2626]/5 blur-3xl" />
            </div>

            {/* Stats card */}
            <div className="absolute bottom-8 inset-x-8 bg-black/80 border border-white/10 backdrop-blur-sm p-5 flex justify-around">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center">
                  <Icon size={14} className="text-[#DC2626] mx-auto mb-2" aria-hidden="true" />
                  <div
                    className="text-3xl text-[#FBBF24]"
                    style={{ fontFamily: "'Russo One', sans-serif" }}
                    aria-label={`${value} ${label}`}
                  >
                    {value}
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Corner accent */}
            <div
              className="absolute top-6 right-6 w-20 h-20 border-2 border-[#DC2626] flex flex-col items-center justify-center text-center"
              aria-label="Established 2022, Edinburgh"
            >
              <span className="text-[8px] tracking-widest uppercase text-[#DC2626]">EST.</span>
              <span className="text-xl text-white" style={{ fontFamily: "'Russo One', sans-serif" }}>22</span>
              <span className="text-[7px] tracking-widest uppercase text-[#DC2626]">EDI</span>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="reveal text-[10px] tracking-[0.3em] uppercase text-[#DC2626] mb-4 font-semibold">
              Who We Are
            </p>
            <h2
              className="reveal text-[clamp(2.8rem,5vw,4.5rem)] leading-none text-white mb-6"
              style={{ fontFamily: "'Russo One', sans-serif" }}
            >
              GO UNDERGROUND.<br />
              <span className="text-[#FBBF24]">GET LOUD.</span>
            </h2>
            <p className="reveal text-white/55 mb-4">
              Tucked beneath Dublin Street Social in Edinburgh's Georgian New Town, Ollie's is the city's most electric underground sports bar. Named after the McShane family's beloved golden Labrador — good boy, gone but never forgotten.
            </p>
            <p className="reveal text-white/55 mb-8">
              Three rooms of exposed brick, full bar and kitchen, surround sound, massive screens for every match, and Scotland's sickest TrackMan golf simulator. Whether it's a quiet pint or a massive night out — Ollie's delivers.
            </p>

            {/* Dog nod */}
            <div className="reveal flex items-start gap-3 mb-8 p-4 border border-white/5 bg-white/[0.02]">
              <Dog size={18} className="text-[#FBBF24] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-white/40 italic">
                Named after a very good Labrador who lived to 16. Dog-friendly too — bring yours.
              </p>
            </div>

            {/* Tags */}
            <ul className="reveal flex flex-wrap gap-2" role="list" aria-label="What Ollie's offers">
              {tags.map((t) => (
                <li
                  key={t}
                  className="text-[10px] tracking-[0.15em] uppercase border border-white/10 hover:border-[#DC2626]/50 hover:text-white/80 text-white/40 px-3 py-1.5 transition-colors duration-200"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
