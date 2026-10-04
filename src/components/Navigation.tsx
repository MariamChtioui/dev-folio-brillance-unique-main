
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: "smooth" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  const navItems = [
    { name: "Accueil", href: "/#hero" },
    { name: "À propos", href: "/#about" },
    { name: "Formation", href: "/#formation" },
    { name: "Expérience", href: "/#experience" },
    { name: "Projets", href: "/#projects" },
    { name: "Compétences", href: "/#skills" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`portfolio-nav fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-amber-950/10 border-b border-amber-200/50" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/#hero" aria-label="Mariam Chtioui, accueil" className="brand-mark">
            <span className="brand-monogram">M<span>C</span></span>
            <span className="brand-dot" aria-hidden="true">.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="nav-links hidden lg:flex space-x-3 lg:space-x-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
            className="text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="nav-toggle lg:hidden text-gray-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="nav-mobile lg:hidden bg-white/95 border border-amber-200 backdrop-blur-sm rounded-lg mt-2 mb-4 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
