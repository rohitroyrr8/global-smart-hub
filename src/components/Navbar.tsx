import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const programLinks = [
  { label: "Collaborative Intelligence", href: "/collaborative-intelligence" },
  { label: "Blockchain & Web3", href: "/blockchain" },
  { label: "Data Engineering / Big Data", href: "/data-science" },
  { label: "Health & Wellness", href: "/health-wellness" },
  { label: "Close Protection Officer", href: "/close-protection" },
  { label: "Sales & Marketing", href: "/sales-marketing" },
];

const navLinks = [
  { label: "Programs", href: "/#programs" },
  { label: "Faculty", href: "/#faculty" },
  { label: "Partnerships", href: "/#partnerships" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const isActive = (href: string) => location.pathname === href;
  const isLightPage = location.pathname === "/sales-marketing";

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "gradient-ocean shadow-lg backdrop-blur-md"
          : isLightPage
            ? "bg-gradient-to-b from-black/15 to-transparent"
            : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className={`text-xl sm:text-2xl font-sans font-bold tracking-tight ${
            !scrolled && isLightPage ? "text-[hsl(220,30%,8%)]" : "text-primary-foreground"
          }`}>
            Ocean<span className={!scrolled && isLightPage ? "text-[hsl(32,90%,50%)]" : "text-gradient-cq"}>GTA</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                !scrolled && isLightPage
                  ? "text-[hsl(220,30%,8%)]/80 hover:text-[hsl(220,30%,8%)]"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Centers of Excellence Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${
                !scrolled && isLightPage
                  ? "text-[hsl(220,30%,8%)]/80 hover:text-[hsl(220,30%,8%)]"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Centers of Excellence
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-3 w-64 rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
                >
                  <div className="py-2">
                    {programLinks.map((p) => (
                      <Link
                        key={p.label}
                        to={p.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-5 py-3 text-sm font-medium transition-colors ${
                          isActive(p.href)
                            ? "bg-accent/10 text-accent"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                  <div className="h-1 gradient-cq" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20would%20like%20to%20book%20a%20free%20call.%20Please%20share%20available%20times."
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cq text-accent-foreground px-4 xl:px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap min-h-[44px] flex items-center"
          >
            Book a Free Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center ${
            !scrolled && isLightPage ? "text-[hsl(220,30%,8%)]" : "text-primary-foreground"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden gradient-ocean border-t border-primary-foreground/10 max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col px-4 sm:px-6 py-4 gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-base font-medium py-3 min-h-[48px] flex items-center"
                >
                  {l.label}
                </Link>
              ))}

              {/* Mobile Centers of Excellence */}
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center justify-between text-primary-foreground/80 hover:text-primary-foreground text-base font-medium py-3 min-h-[48px]"
              >
                Centers of Excellence
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col gap-0 pl-4 border-l-2 border-accent/40"
                  >
                    {programLinks.map((p) => (
                      <Link
                        key={p.label}
                        to={p.href}
                        onClick={() => setMobileOpen(false)}
                        className={`text-sm font-medium py-2.5 min-h-[44px] flex items-center transition-colors ${
                          isActive(p.href)
                            ? "text-accent"
                            : "text-primary-foreground/70 hover:text-primary-foreground"
                        }`}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20would%20like%20to%20book%20a%20free%20call.%20Please%20share%20available%20times."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="gradient-cq text-accent-foreground px-5 py-3 rounded-md text-sm font-semibold text-center mt-2 min-h-[48px] flex items-center justify-center"
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
