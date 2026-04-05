const items = [
  "Live Sport", "DJ Nights", "Golf Simulator", "Live Music",
  "Private Hire", "Comedy Nights", "Edinburgh New Town", "Open Late",
];

export default function Ticker() {
  const repeated = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-3"
      aria-label="What's on at Ollie's"
    >
      <div className="flex gap-12 animate-ticker whitespace-nowrap" aria-hidden="true">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            <span
              className="text-xs tracking-[0.2em] uppercase font-semibold text-white/40"
              style={{ fontFamily: "'Russo One', sans-serif" }}
            >
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#DC2626] flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
