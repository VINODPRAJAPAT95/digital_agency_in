import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  "Web Development", "Mobile App Development", "Software Development", "Graphic Design",
  "Logo Design", "UI/UX & Product Design", "Digital Marketing", "Lead Generation",
  "Social Media Management", "SEO Services", "E-commerce Development", "Custom CRM Development"
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const isActive = (path) => loc.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.webp" alt="Digital Agency India" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display font-bold text-lg hidden sm:block">
              <span className="text-gradient">Digital Agency</span>
              <span className="text-white"> India</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {[["Home", "/"], ["Projects", "/projects"], ["Careers", "/careers"], ["FAQs", "/faqs"], ["Contact", "/contact"]].map(([label, path]) => (
              <Link key={path} to={path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(path) ? "text-primary" : "text-gray-300"}`}>
                {label}
              </Link>
            ))}
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary ${loc.pathname === "/services" ? "text-primary" : "text-gray-300"}`}>
                Services <span className={`transition-transform ${dropOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              {dropOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass rounded-xl p-3 shadow-xl shadow-black/40 border border-white/10">
                  {serviceLinks.map((s) => (
                    <Link key={s} to="/services" className="block px-3 py-2 text-sm text-gray-300 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                      {s}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link to="/contact" className="btn-primary text-sm">Get Free Consultation</Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-white">
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden glass rounded-xl mb-4 p-4">
            {[["Home", "/"], ["Services", "/services"], ["Projects", "/projects"], ["Careers", "/careers"], ["FAQs", "/faqs"], ["Contact", "/contact"]].map(([label, path]) => (
              <Link key={path} to={path} onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                {label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn-primary text-sm mt-3 w-full text-center block">
              Get Free Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
