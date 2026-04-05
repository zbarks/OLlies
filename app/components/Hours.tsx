const hours = [
  { day: "Monday",    time: "Closed",     closed: true },
  { day: "Tue – Sat", time: "12pm – Late", closed: false },
  { day: "Sunday",    time: "12pm – 8pm",  closed: false },
];

export default function Hours() {
  return (
    <section aria-label="Opening hours" className="bg-[#DC2626] py-0">
      <div className="max-w-7xl mx-auto px-6">
        <dl className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-black/10">
          {hours.map(({ day, time, closed }) => (
            <div key={day} className="flex flex-col items-center justify-center py-6 px-4 text-center">
              <dt className="text-[9px] tracking-[0.25em] uppercase text-black/50 font-bold mb-1">{day}</dt>
              <dd
                className={`text-xl leading-tight ${closed ? "opacity-30" : "text-black"}`}
                style={{ fontFamily: "'Russo One', sans-serif" }}
              >
                {time}
              </dd>
            </div>
          ))}
          {/* Address */}
          <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
            <dt className="text-[9px] tracking-[0.25em] uppercase text-black/50 font-bold mb-1">Address</dt>
            <dd className="text-sm font-bold text-black leading-tight">
              26B Dublin St<br />Edinburgh EH3 6NN
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
