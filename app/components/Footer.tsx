export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5 text-center">
        {/* Logo */}
        <div>
          <p
            className="text-2xl tracking-widest text-white"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            OLLIE'S
          </p>
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#DC2626] mt-1">
            The Bunker · Edinburgh
          </p>
        </div>

        <p className="text-xs text-white/20 max-w-sm leading-relaxed">
          © 2025 Ollie's — The Bunker. 26B Dublin Street, Edinburgh EH3 6NN.<br />
          Part of{" "}
          <a
            href="https://dublinstreetsocial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors duration-200 underline"
          >
            Dublin Street Social
          </a>.
        </p>

        <p className="text-[10px] text-white/10 italic">Named after a very good dog.</p>
      </div>
    </footer>
  );
}
