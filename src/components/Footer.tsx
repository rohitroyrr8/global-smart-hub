const Footer = () => {
  return (
    <footer className="gradient-ocean py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-sans font-bold text-primary-foreground tracking-tight">
              Ocean<span className="text-gradient-cq">GTA</span>
            </span>
            <p className="text-xs text-primary-foreground/50 mt-1">
              Ocean Global Training Academy
            </p>
            <p className="text-xs text-primary-foreground/50 mt-2">
              335, Seasons Community, JVC, Dubai
            </p>
            <a href="mailto:business@oceangta.com" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              business@oceangta.com
            </a>
          </div>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <a href="#programs" className="hover:text-primary-foreground transition-colors">Programs</a>
            <a href="#cq" className="hover:text-primary-foreground transition-colors">CQ Framework</a>
            <a href="#faculty" className="hover:text-primary-foreground transition-colors">Faculty</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} OceanGTA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
