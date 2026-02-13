import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

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
      <div className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Elite professionals collaborating" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-ocean opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,35%,8%)] via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-card">
            <div className="w-2 h-2 rounded-full gradient-cq" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70">
              Professional Certification Course
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 text-primary-foreground">
            Empowering Global Excellence through{" "}
            <span className="text-gradient-cq">Collaborative Intelligence</span>{" "}
            & Elite Training
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
            Global Institutional Ally · Serving 50+ Nations Across 6 Continents · South East Asian HRD-Certified Excellence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a
              href="#programs"
              className="gradient-teal text-primary-foreground px-8 py-4 rounded-md font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Explore Our Programs
            </a>
            <a
              href="#cq"
              className="gradient-cq text-accent-foreground px-8 py-4 rounded-md font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Transform Your Team (CQ)
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-sm text-primary-foreground/50 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
