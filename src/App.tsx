import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-20 bg-background/90 backdrop-blur-md border-b border-border-main flex items-center justify-between px-8 md:px-12 pointer-events-auto">
      <nav className="hidden md:flex flex-1 items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium">
        <Link to="/" className="text-text-main hover:text-gold transition-colors">House</Link>
        <Link to="/menu" className="text-text-main hover:text-gold transition-colors">Menu</Link>
      </nav>
      <div className="flex-1 md:flex-none text-center">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-gold font-light uppercase">
          Cozina Marray
        </Link>
      </div>
      <nav className="hidden md:flex flex-1 items-center justify-end gap-8 text-[10px] uppercase tracking-[0.3em] font-medium">
        <Link to="/about" className="text-text-main hover:text-gold transition-colors">Experience</Link>
        <Link to="/contacts" className="text-text-main hover:text-gold transition-colors">Contact</Link>
        <Link to="/contacts" className="border border-gold text-gold rounded-none px-6 py-2 hover:bg-gold hover:text-background transition-colors block ml-4">
          Reservations
        </Link>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border-main mt-auto">
      <div className="bg-background py-16 px-12 grid grid-cols-1 md:grid-cols-4 gap-16 max-w-7xl mx-auto">
        <div className="md:col-span-2 space-y-6">
          <h3 className="font-serif text-2xl text-gold font-light tracking-[0.2em] uppercase">Cozina Marray</h3>
          <p className="text-[#999] text-sm max-w-sm leading-relaxed tracking-wide">
            Good food cooked just for you. Mastered by fire and seasoned with heritage.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6 font-semibold">Location</h4>
          <address className="not-italic text-[#999] text-sm space-y-2 leading-relaxed">
            <p>123 Heritage Way</p>
            <p>Ginatilan, Cebu</p>
            <p>Philippines</p>
          </address>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6 font-semibold">Hours</h4>
          <div className="text-[#999] text-sm space-y-2 leading-relaxed">
            <p>Mon - Sun: 7:00 AM - 10:00 PM</p>
            <p>Morning Cafe: 7:00 AM - 2:00 PM</p>
            <p>Evening Bar: 4:00 PM - 10:00 PM</p>
          </div>
        </div>
      </div>
      <div className="h-14 border-t border-border-main flex items-center justify-between px-12 text-[9px] uppercase tracking-[0.2em] text-[#555] bg-background">
        <div>&copy; {new Date().getFullYear()} Cozina Marray — All Rights Reserved</div>
        <div className="flex gap-6">
          <span>London</span>
          <span>&bull;</span>
          <span>Paris</span>
          <span>&bull;</span>
          <span>New York</span>
        </div>
        <div className="text-gold cursor-pointer hidden md:block">Inquire Now</div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-gold selection:text-background">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
