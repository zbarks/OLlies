"use client";
import { useEffect, useRef } from "react";
import { Music, Disc3, Tv2, Mic2, PartyPopper, Briefcase } from "lucide-react";

const events = [
  {
    icon: Tv2,
    title: "Live Sport",
    desc: "Big screens for every big match. Rugby, football, all of it — Ollie's is where Edinburgh watches.",
    tag: "Ongoing",
    accent: "#DC2626",
  },
  {
    icon: Music,
    title: "Live Music Nights",
    desc: "Local and touring acts take the stage. Real music, no pretension, just a great night.",
    tag: "Weekly",
    accent: "#FBBF24",
  },
  {
    icon: Disc3,
    title: "DJ Nights",
    desc: "Resident and guest DJs keeping the floor moving till late. Proper system, proper vibes.",
    tag: "Weekly",
    accent: "#8B5CF6",
  },
  {
    icon: Mic2,
    title: "Comedy Nights",
    desc: "Underground laughs to match the underground bar. Scotland's best stand-ups, down the stairs.",
    tag: "Monthly",
    accent: "#F59E0B",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    desc: "Birthdays, hen/stag dos, engagements — book the whole Bunker and make it entirely yours.",
    tag: "Bookable",
    accent: "#EC4899",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Team nights, client entertaining, product launches. The most interesting corporate venue in Edinburgh.",
    tag: "Bookable",
    accent: "#06B6D4",
  },
];

export default function Events() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
      { threshold: 0.1 }
    );
    els.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 60}ms`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="events" ref={ref} className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-[10px] tracking-[0.3em] uppercase text-[#DC2626] mb-4 font-semibold">
            What's On
          </p>
          <h2
            className="reveal text-[clamp(2.8rem,5vw,4.5rem)] leading-none text-white"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            NIGHTS WORTH<br />
            <span className="text-[#FBBF24]">REMEMBERING.</span>
          </h2>
        </div>

        {/* Events grid */}
        <ul
          className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label="Events at Ollie's"
        >
          {events.map(({ icon: Icon, title, desc, tag, accent }) => (
            <li
              key={title}
              className="border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] p-6 flex flex-col gap-4 hover:border-white/10 transition-all duration-250 group relative overflow-hidden"
              style={{ ["--accent" as string]: accent }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-2">
                <div
                  className="w-10 h-10 flex items-center justify-center border flex-shrink-0 transition-colors duration-200"
                  style={{ borderColor: `${accent}30`, background: `${accent}0a` }}
                >
                  <Icon size={18} style={{ color: accent }} aria-hidden="true" />
                </div>
                <span
                  className="text-[9px] tracking-widest uppercase border px-2 py-1 flex-shrink-0"
                  style={{ color: accent, borderColor: `${accent}30`, background: `${accent}0a` }}
                >
                  {tag}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Instagram CTA */}
        <div className="reveal mt-16 border border-white/5 bg-[#0a0a0a] p-8 text-center">
          <p className="text-white/40 text-sm mb-5">
            Follow <strong className="text-white">@ollieseventspace</strong> for upcoming lineups & announcements
          </p>
          <a
            href="https://www.instagram.com/ollieseventspace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-xs tracking-[0.15em] uppercase font-semibold px-8 py-4 transition-all duration-200"
            aria-label="Follow Ollie's on Instagram (opens in new tab)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
