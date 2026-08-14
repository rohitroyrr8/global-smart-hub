import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: 1000, suffix: "+", label: "Professionals Trained" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 6, suffix: "", label: "Continents" },
  { value: 95, suffix: "%", label: "Career Impact" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-foreground">
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const handleScrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("send-inquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle warm texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--sun-orange)/0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--ocean-teal)/0.08),transparent_45%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-border shadow-sm">
            <div className="w-2 h-2 rounded-full gradient-cq" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-foreground/70">
              Professional Certification Course
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.1] mb-4 sm:mb-6 text-foreground">
            Empowering Global Excellence through{" "}
            <span className="text-gradient-cq">Collaborative Intelligence</span>{" "}
            & Elite Training
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            Global Institutional Ally · Serving 50+ Nations Across 6 Continents · South East Asian HRD-Certified Excellence
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-16 sm:mb-20">
            <Link
              to="/collaborative-intelligence"
              className="gradient-cq text-accent-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-md font-semibold text-center hover:opacity-90 transition-opacity min-h-[48px] flex items-center justify-center"
            >
              Explore Our Programs
            </Link>
            <button
              onClick={handleScrollToInquiry}
              className="border border-foreground/30 text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-md font-semibold text-center hover:bg-foreground/5 transition-colors min-h-[48px] flex items-center justify-center"
            >
              Rewire Your Team
            </button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur border border-border rounded-xl p-4 sm:p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 shadow-sm"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-xs sm:text-sm text-foreground/50 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
