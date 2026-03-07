import { motion } from "framer-motion";
import { Brain, Shield, Database, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Brain,
    title: "Collaborative Intelligence (CQ)",
    tag: "FLAGSHIP",
    description:
      "The Missing Link to High-Performance Teams. Rewiring team chemistry through the formula: IQ + EQ + VQ + CQ = Total Synergy.",
    highlights: ["2-Day Intensive", "Cross-Functional Teams", "Fortune 500 & Government"],
    gradient: "gradient-cq",
    textGradient: "text-gradient-cq",
    link: "",
  },
  {
    icon: Shield,
    title: "Close Protection & Tactical Operations",
    tag: "ELITE SECURITY",
    description:
      "Elite Security for VVIPs & Diplomatic Corps. 10-day intensive program for Close Protection Officers (CPO) and Defensive Driving Excellence.",
    highlights: ["10-Day Intensive", "CPO Certification", "Defensive Driving", "VVIP Escort"],
    gradient: "gradient-teal",
    textGradient: "text-gradient-teal",
    link: "",
  },
  {
    icon: Database,
    title: "Blockchain & Web3",
    tag: "INNOVATION",
    description:
      "Master decentralized technologies, smart contracts, and enterprise blockchain for government digital initiatives.",
    highlights: ["2-Day Intensive", "Smart Contracts", "Enterprise Blockchain"],
    gradient: "gradient-cq",
    textGradient: "text-gradient-cq",
    link: "/blockchain",
  },
  {
    icon: Database,
    title: "Data Science & Engineering",
    tag: "INNOVATION",
    description:
      "Scalable data pipelines, machine learning, and AI-powered analytics for digital transformation.",
    highlights: ["2-Day Intensive", "ML & AI", "Big Data"],
    gradient: "gradient-teal",
    textGradient: "text-gradient-teal",
    link: "/data-science",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    tag: "WELLNESS",
    description:
      "Holistic program blending Ayurveda, preventive care, yoga, and nutrition for complete well-being.",
    highlights: ["Ayurveda", "Yoga", "Corporate Wellness"],
    gradient: "gradient-ocean",
    textGradient: "text-gradient-teal",
    link: "/health-wellness",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PillarsSection = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-accent">
            Training Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold mt-3 text-foreground">
            Pillars of Excellence
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Government-certified programs designed to empower leaders, protect dignitaries, and drive digital innovation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((p) => {
            const CardWrapper = p.link ? Link : 'div';
            const wrapperProps = p.link ? { to: p.link } : {};
            return (
              <motion.div
                key={p.title}
                variants={item}
              >
                <CardWrapper
                  {...wrapperProps as any}
                  className={`group relative rounded-xl border border-border bg-card p-8 hover:shadow-xl transition-shadow duration-300 overflow-hidden block h-full ${p.link ? 'cursor-pointer' : ''}`}
                >
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${p.gradient}`} />

                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${p.gradient} mb-6`}>
                    <p.icon className="w-6 h-6 text-accent-foreground" />
                  </div>

                  <span className="text-[10px] tracking-widest uppercase font-bold text-accent">
                    {p.tag}
                  </span>

                  <h3 className={`text-xl font-sans font-bold mt-2 mb-3 ${p.textGradient}`}>{p.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <span className="mt-4 inline-block text-sm font-semibold text-accent group-hover:underline">
                      Learn More →
                    </span>
                  )}
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
