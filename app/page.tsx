import Nav     from "./components/Nav";
import Hero    from "./components/Hero";
import Ticker  from "./components/Ticker";
import About   from "./components/About";
import Golf    from "./components/Golf";
import Menu    from "./components/Menu";
import Events  from "./components/Events";
import Hire    from "./components/Hire";
import Hours   from "./components/Hours";
import Contact from "./components/Contact";
import Footer  from "./components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#FBBF24] focus:text-black focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Ticker />
        <About />
        <Golf />
        <Menu />
        <Events />
        <Hire />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
