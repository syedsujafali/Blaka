import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Stairs from "@/pages/Stairs";
import Railings from "@/pages/Railings";
import PortfolioPage from "@/pages/PortfolioPage";
import Contact from "@/pages/Contact";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-linen text-espresso flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stairs" element={<Stairs />} />
          <Route path="/railings" element={<Railings />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}