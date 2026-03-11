import { Link } from "react-router-dom";
import { Linkedin, Instagram, MessageCircle, MapPin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Programs", href: "/#programs" },
  { label: "Faculty", href: "/#faculty" },
  { label: "Partnerships", href: "/#partnerships" },
  { label: "Contact", href: "/#contact" },
  { label: "Book a Free Call", href: "/#contact" },
];

const centerLinks = [
  { label: "Collaborative Intelligence", href: "/collaborative-intelligence" },
  { label: "Blockchain & Web3", href: "/blockchain" },
  { label: "Data Engineering / Big Data", href: "/data-science" },
  { label: "Health & Wellness", href: "/health-wellness" },
  { label: "Close Protection Officer", href: "/close-protection" },
  { label: "Sales & Marketing", href: "/sales-marketing" },
];

const Footer = () => {
  return (
    <footer className="relative">
      {/* Orange top border */}
      <div className="h-1 bg-gradient-to-r from-[hsl(18,72%,42%)] to-[hsl(32,90%,50%)]" />

      <div className="bg-[hsl(220,30%,8%)] text-[hsl(220,10%,80%)]">
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Column 1 — Brand */}
            <div className="space-y-4 sm:space-y-5">
              <Link to="/" className="inline-block">
                <span className="text-2xl font-sans font-bold text-white tracking-tight">
                  Ocean<span className="text-gradient-cq">GTA</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,65%)]">
                Transforming Teams. Elevating Leaders. Changing the World.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/ocean-global-training-academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[hsl(32,90%,50%)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/oceangta?igsh=cjd5bDE4cWk0aGkx&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[hsl(32,90%,50%)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="text-[hsl(32,90%,50%)] font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5">
                Quick Links
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[hsl(220,10%,65%)] hover:text-[hsl(32,90%,50%)] transition-colors inline-block min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Centers of Excellence */}
            <div>
              <h4 className="text-[hsl(32,90%,50%)] font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5">
                Centers of Excellence
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {centerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[hsl(220,10%,65%)] hover:text-[hsl(32,90%,50%)] transition-colors inline-block min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact Us */}
            <div>
              <h4 className="text-[hsl(32,90%,50%)] font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5">
                Contact Us
              </h4>

              {/* Dubai HQ */}
              <div className="mb-5">
                <p className="text-white font-semibold text-sm mb-1.5">🌍 Global Headquarters</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-[hsl(32,90%,50%)] mt-0.5 shrink-0" />
                    <span className="text-[hsl(220,10%,65%)]">
                      #336, Seasons Community, JVC,<br />Dubai, United Arab Emirates
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={16} className="text-[hsl(32,90%,50%)] shrink-0" />
                    <a href="mailto:business@oceangta.com" className="text-[hsl(220,10%,65%)] hover:text-[hsl(32,90%,50%)] transition-colors">
                      business@oceangta.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* India Office */}
              <div>
                <p className="text-white font-semibold text-sm mb-1.5">🇮🇳 India Office</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-[hsl(32,90%,50%)] mt-0.5 shrink-0" />
                    <span className="text-[hsl(220,10%,65%)]">
                      4th Floor, The Galaxy Hotel,<br />Behind 32nd Milestone, off NH 8,<br />Sector 15, Gurugram, Haryana — 122001, India
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[hsl(220,10%,50%)]">
            <p>© {new Date().getFullYear()} OceanGTA. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="hover:text-[hsl(32,90%,50%)] cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-white/20">|</span>
              <span className="hover:text-[hsl(32,90%,50%)] cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
