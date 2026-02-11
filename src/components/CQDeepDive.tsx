import { motion } from "framer-motion";
import { Layers, Heart, Target, Handshake, Sparkles, FileCheck } from "lucide-react";

const day1 = [
  { icon: Layers, title: "Understanding CQ", desc: "Defining the hidden cost of Low CQ in the workplace" },
  { icon: Handshake, title: "Dependency Agreements", desc: "Aligning cross-functional work agreements to eliminate role ambiguity" },
  { icon: Target, title: "Strategic Positioning", desc: "Moving from Competitive to Collaborative Positioning" },
  { icon: FileCheck, title: "Conflict Management", desc: "The CQ Break Process — resetting dynamics under pressure" },
];

const day2 = [
  { icon: Sparkles, title: "Collective Positivity", desc: "Harnessing the Power of the Mind to influence team atmosphere" },
  { icon: Heart, title: "Relationship Building", desc: "Moving toward unconditional relationships within the team" },
  { icon: Layers, title: "CQ Busters & Boosters", desc: "Power of Appreciation and Power of Forgiveness" },
  { icon: FileCheck, title: "Action Plan", desc: "Concrete plan to implement collaborative behaviors immediately" },
];

const CQDeepDive = () => {
  return (
    <section id="cq" className="py-24 gradient-cq relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[hsl(var(--sun-orange))] opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[hsl(var(--rust-orange))] opacity-20 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase font-bold text-accent-foreground/70">
            Flagship Program
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 text-accent-foreground">
            A Game Changer: Why Smart Teams Still Fail
          </h2>
          <p className="text-accent-foreground/80 mt-4 max-w-2xl mx-auto">
            IQ (Intellectual) + EQ (Emotional) + VQ (Value) + CQ (Collaborative) = <strong>Total Synergy</strong>
          </p>
        </motion.div>

        {/* Two-day grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Day 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center text-accent-foreground font-serif font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-serif text-xl text-accent-foreground">The Architecture of Collaboration</h3>
                <p className="text-xs text-accent-foreground/60">Day 1 — Structure & Alignment</p>
              </div>
            </div>
            <div className="space-y-4">
              {day1.map((d) => (
                <div key={d.title} className="flex gap-3">
                  <d.icon className="w-5 h-5 text-accent-foreground/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-accent-foreground">{d.title}</p>
                    <p className="text-xs text-accent-foreground/60">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center text-accent-foreground font-serif font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-serif text-xl text-accent-foreground">The Psychology of Oneness</h3>
                <p className="text-xs text-accent-foreground/60">Day 2 — Mindset & Connection</p>
              </div>
            </div>
            <div className="space-y-4">
              {day2.map((d) => (
                <div key={d.title} className="flex gap-3">
                  <d.icon className="w-5 h-5 text-accent-foreground/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-accent-foreground">{d.title}</p>
                    <p className="text-xs text-accent-foreground/60">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-serif italic text-accent-foreground leading-relaxed">
            "CQ magically rewires the chemistry of team members, transforming a working group into a unified entity."
          </p>
          <footer className="mt-4 text-sm text-accent-foreground/60 font-medium">
            — G. Vasu Thevan, CQ Founder
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default CQDeepDive;
