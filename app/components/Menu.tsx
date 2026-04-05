"use client";
import { useEffect, useRef } from "react";

const items = [
  {
    name: "Ollie's Beef Burger",
    desc: "Dual Scotch beef patties, crispy bacon, melted cheese. Edinburgh's answer to a proper burger.",
    tag: "Signature",
    tagColor: "text-[#FBBF24] border-[#FBBF24]/30 bg-[#FBBF24]/5",
  },
  {
    name: "Loaded Fries",
    desc: "Pulled pork, melted cheese, halloumi, all the garnishes. This is the one.",
    tag: "Fan Fave",
    tagColor: "text-[#DC2626] border-[#DC2626]/30 bg-[#DC2626]/5",
  },
  {
    name: "Cod Goujons",
    desc: "Golden battered cod strips with house tartare sauce. Crispy. Flaky. Sorted.",
    tag: "",
    tagColor: "",
  },
  {
    name: "Veggie Burger",
    desc: "Sweet potato and chickpea patty — packed with flavour, zero compromise.",
    tag: "Plant",
    tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  },
  {
    name: "Mac & Cheese Bon Bons",
    desc: "Fried mozzarella and cheddar bon bons. Gooey inside, crispy out. Addictive.",
    tag: "",
    tagColor: "",
  },
  {
    name: "Chicken Tenders",
    desc: "Crispy, juicy, perfectly seasoned strips. The classic, done absolutely right.",
    tag: "",
    tagColor: "",
  },
];

export default function Menu() {
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
    <section id="menu" ref={ref} className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-[10px] tracking-[0.3em] uppercase text-[#DC2626] mb-4 font-semibold">
            The Kitchen
          </p>
          <h2
            className="reveal text-[clamp(2.8rem,5vw,4.5rem)] leading-none text-white mb-4"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            PROPER FOOD.
          </h2>
          <p className="reveal text-white/40 text-sm tracking-widest uppercase">
            Everything £15 · No nonsense
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
          role="list"
          aria-label="Food menu"
        >
          {items.map(({ name, desc, tag, tagColor }) => (
            <li
              key={name}
              className="reveal bg-[#0a0a0a] p-7 flex flex-col gap-3 hover:bg-[#111] transition-colors duration-200 group"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-white leading-tight">{name}</h3>
                {tag && (
                  <span className={`text-[9px] tracking-widest uppercase border px-2 py-1 flex-shrink-0 ${tagColor}`}>
                    {tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-white/45 leading-relaxed flex-1">{desc}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span
                  className="text-2xl text-[#FBBF24] group-hover:text-[#FCD34D] transition-colors duration-200"
                  style={{ fontFamily: "'Russo One', sans-serif" }}
                  aria-label="£15"
                >
                  £15
                </span>
                <span className="text-[10px] text-white/25 tracking-widest uppercase">Add to order</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="reveal text-center mt-10 text-sm text-white/30 italic">
          Cocktails from £9 · Beers from £5 · Wine from £6.50 · Full bar menu available
        </p>
      </div>
    </section>
  );
}
