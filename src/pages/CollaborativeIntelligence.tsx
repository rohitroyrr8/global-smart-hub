import { motion } from "framer-motion";
import {
  Layers, Heart, Target, Handshake, Sparkles, FileCheck,
  Brain, Users, ShieldCheck, ArrowRight, CheckCircle2,
  Headphones, MessageSquare, BookOpen, PlayCircle, Link2, Zap,
  ChevronRight, ArrowLeft, Star, Award, Globe,
  Building2, Landmark, GraduationCap, Hospital, Rocket, Globe2,
  TrendingUp, Quote, BarChart3, ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Day 1 modules ── */
const day1 = [
  {
    num: "01", icon: Brain, title: "Understanding CQ",
    bullets: [
      "Defining the hidden cost of Low CQ in the workplace",
      'Establishing the "Power of Sincerity" as the non-negotiable baseline for interaction',
    ],
  },
  {
    num: "02", icon: Handshake, title: "Dependency Agreements",
    bullets: [
      "Identifying necessary dependencies for cross-functional teamwork",
      "Aligning work agreements and setting order to eliminate role ambiguity",
    ],
  },
  {
    num: "03", icon: Target, title: "Strategic Positioning",
    bullets: [
      'The Shift: Moving from "Competitive Positioning" to "Collaborative Positioning"',
      'Harnessing the "Power of Unified Intention" to set shared collaborative goals',
    ],
  },
  {
    num: "04", icon: MessageSquare, title: "Conflict Management",
    bullets: [
      'The "CQ Break Process": Resetting dynamics under pressure',
      'Mastering Empathetic Communication and "Seek to be understood" exercises',
    ],
  },
];

/* ── Day 2 modules ── */
const day2 = [
  {
    num: "05", icon: Sparkles, title: "Collective Positivity",
    bullets: [
      "Harnessing the 'Power of the Mind' to influence team atmosphere",
      "Techniques for collective positive thinking to empower High CQ",
    ],
  },
  {
    num: "06", icon: Link2, title: "The Rewiring Process",
    bullets: [
      "Connecting Beyond Work: Seeing co-workers as people first",
      "Understanding the 'Power of Oneness' to break down silos",
    ],
  },
  {
    num: "07", icon: Heart, title: "Relationship Building",
    bullets: [
      "Moving toward unconditional relationships within the team",
      "Experiencing and 'Feeling the Oneness' in daily interactions",
    ],
  },
  {
    num: "08", icon: FileCheck, title: "Sustainability & Action",
    bullets: [
      "CQ Busters & Boosters: Using the 'Power of Appreciation' and 'Power of Forgiveness'",
      "Closing: Creation of a concrete 'Action Plan' to implement behaviors immediately",
    ],
  },
];

/* ── Methodology items ── */
const methodology = [
  { icon: Headphones, title: "Mind Tools & Music", desc: "Utilizing therapeutic music to access deeper levels of reflection and relaxation." },
  { icon: MessageSquare, title: "Interactive Dialogue", desc: "Role Playing, Group Discussions, and live presentations to practice new skills." },
  { icon: BookOpen, title: "Reflective Exercises", desc: "Guided introspection to connect personal behaviors with team outcomes." },
  { icon: PlayCircle, title: "Multimedia Case Studies", desc: "Audio and video integration to illustrate complex scenarios." },
];

/* ── Transformation outcomes ── */
const outcomes = [
  { title: "High Team Spirit", desc: "Achieve excellent teamwork with a common focus." },
  { title: "Frictionless Performance", desc: "Push staff performance without negatively affecting relationships." },
  { title: "Harmonious Culture", desc: "Create a positive working environment where trust prevails." },
  { title: "Goal Achievement", desc: "Collaborate effectively toward desired organizational goals." },
  { title: "Synergy", desc: "Maximize the strengths and potential of all members." },
];

/* ── Synergy formula items ── */
const synergyFormula = [
  { label: "IQ", sub: "Intellectual", icon: Brain },
  { label: "EQ", sub: "Emotional", icon: Heart },
  { label: "VQ", sub: "Value", icon: ShieldCheck },
  { label: "CQ", sub: "Collaborative", icon: Users },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

/* ── Module card ── */
const ModuleCard = ({ m, orange }: { m: typeof day1[0]; orange?: boolean }) => (
  <motion.div {...fadeUp} className="flex gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:border-border transition-all duration-300 group">
    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-sans font-bold text-lg shadow-lg ${orange ? "bg-[hsl(var(--rust-orange))] text-white shadow-[hsl(var(--rust-orange))]/30" : "bg-primary text-primary-foreground shadow-primary/30"}`}>
      {m.num}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-sans text-base font-bold text-foreground group-hover:text-primary transition-colors">{m.title}</h4>
      <ul className="mt-2 space-y-1.5">
        {m.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
            <ChevronRight className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-[hsl(var(--rust-orange))]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const CollaborativeIntelligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-cq" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--sun-orange))] opacity-20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--rust-orange))] opacity-20 blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-accent-foreground/70 hover:text-accent-foreground mb-8 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-foreground/20 text-accent-foreground text-xs tracking-widest uppercase font-bold mb-5">
              Flagship Program — A Game Changer
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-accent-foreground leading-tight">
              Collaborative Intelligence{" "}
              <span className="text-gradient-teal">(CQ)</span>
            </h1>
            <p className="text-accent-foreground/90 text-lg md:text-xl mt-5 max-w-2xl leading-relaxed">
              The Missing Link to High-Performance Teams — A transformational 2-day program that rewires team chemistry and unlocks peak collaborative performance.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: Star, label: "2-Day Intensive" },
                { icon: Award, label: "Certification" },
                { icon: Globe, label: "Global Framework" },
                { icon: Users, label: "All Levels" },
              ].map((t) => (
                <span key={t.label} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-foreground/10 text-accent-foreground text-sm font-medium border border-accent-foreground/20 backdrop-blur-sm">
                  <t.icon className="w-4 h-4" /> {t.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── The Gap / Why CQ ──── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">The Challenge</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-foreground">Why Smart Teams Still Fail to Sync</h2>
          </motion.div>

          <motion.div {...fadeUp} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <div className="space-y-6 text-sm text-muted-foreground">
                <div>
                  <p className="font-bold text-foreground text-base mb-1">The Current Landscape</p>
                  <p className="leading-relaxed">Companies invest heavily in Intellectual Intelligence (IQ) and Emotional Intelligence (EQ).</p>
                </div>
                <div>
                  <p className="font-bold text-foreground text-base mb-1">The Gap</p>
                  <p className="leading-relaxed">Despite high individual potential, silos and friction persist. Smart and nice people often fail to collaborate effectively.</p>
                </div>
                <div>
                  <p className="font-bold text-foreground text-base mb-1">The Insight</p>
                  <p className="leading-relaxed">Collaboration & team cohesiveness is inevitably the competitive edge of today in the corporate world.</p>
                </div>
              </div>
            </div>

            {/* CQ Bridge Diagram */}
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col items-center justify-center shadow-sm">
              <h3 className="font-sans font-bold text-lg text-foreground mb-8">The Missing Link</h3>
              <div className="flex items-end justify-center gap-4 w-full">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center border border-border">
                    <span className="font-sans text-lg text-foreground font-bold">IQ</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">Intellect</span>
                </div>
                <div className="flex flex-col items-center -mt-8">
                  <div className="w-24 h-28 rounded-xl bg-[hsl(var(--rust-orange))] flex items-center justify-center shadow-xl shadow-[hsl(var(--rust-orange))]/30 relative">
                    <span className="font-sans text-2xl text-white font-bold">CQ</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90 my-2" />
                  <span className="text-xs text-foreground font-semibold">Bridge to Peak Performance</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center border border-border">
                    <span className="font-sans text-lg text-foreground font-bold">EQ</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">Emotion</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CQ Definition + Synergy Formula */}
          <motion.div {...fadeUp} className="mt-14 max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <blockquote className="text-lg md:text-xl font-sans italic text-foreground leading-relaxed border-l-4 border-[hsl(var(--rust-orange))] pl-6">
                "CQ magically rewires the chemistry of team members, transforming a working group into a unified entity."
                <footer className="mt-4 text-sm not-italic text-muted-foreground">— G. Vasu Thevan, CQ Founder</footer>
              </blockquote>
              <div>
                <h4 className="font-sans font-bold text-lg text-foreground mb-3">The Core Concept</h4>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  CQ is the latest discovery in team development — a transformational program that shifts the working chemistry of team members. The goal: to make team members more open, understanding, cooperative, forgiving, and trusting within a short period.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {synergyFormula.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div className="w-14 h-14 rounded-xl bg-muted border border-border flex flex-col items-center justify-center">
                        <s.icon className="w-4 h-4 text-foreground" />
                        <span className="text-xs font-extrabold tracking-wide text-foreground">{s.label}</span>
                      </div>
                      {i < synergyFormula.length - 1 && <span className="text-foreground font-extrabold text-lg">+</span>}
                    </div>
                  ))}
                  <span className="text-foreground font-extrabold text-lg">=</span>
                  <span className="font-sans font-extrabold text-xl px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">Total Synergy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── Two-Day Curriculum ──── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">Two-Day Strategic Intervention</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-foreground">Transformation Journey</h2>
            <p className="text-muted-foreground mt-2 text-sm">Trainer: Vasudev &nbsp;|&nbsp; Duration: 2 Days &nbsp;|&nbsp; Audience: All Levels (Cross-Functional)</p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2.5">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-sans font-bold text-sm">01</div>
                <span className="text-sm font-semibold text-foreground">Phase 01</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[hsl(var(--rust-orange))]" />
              <div className="flex items-center gap-2 bg-[hsl(var(--rust-orange))]/10 rounded-full px-6 py-2.5">
                <div className="w-9 h-9 rounded-full bg-[hsl(var(--rust-orange))] text-white flex items-center justify-center font-sans font-bold text-sm">02</div>
                <span className="text-sm font-semibold text-foreground">Phase 02</span>
              </div>
            </div>
          </motion.div>

          {/* Day 1 */}
          <div className="mb-16">
            <motion.div {...fadeUp} className="mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">D1</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-foreground">Day 1: The Mechanics of Alignment</h3>
                  <p className="text-sm text-muted-foreground">Building the Foundation: Structural Tools for High-Performance Teams</p>
                </div>
              </div>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5">
              {day1.map((m) => <ModuleCard key={m.num} m={m} />)}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <motion.div {...fadeUp} className="mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--rust-orange))] text-white flex items-center justify-center font-bold text-sm">D2</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-foreground">Day 2: The Mindset of Oneness</h3>
                  <p className="text-sm text-muted-foreground">Cultivating Connection: Psychological Safety and Long-Term Continuity</p>
                </div>
              </div>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5">
              {day2.map((m) => <ModuleCard key={m.num} m={m} orange />)}
            </div>
          </div>
        </div>
      </section>

      {/* ──── Immersive Methodology ──── */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">How We Deliver</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-foreground">An Immersive Methodology</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm leading-relaxed">
              Blending experiential learning and multi-sensory engagement to ensure deep learning.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {methodology.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-7 border border-border/50 text-center hover:shadow-xl hover:border-border transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--rust-orange))]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[hsl(var(--rust-orange))]/20 transition-colors">
                  <m.icon className="w-8 h-8 text-[hsl(var(--rust-orange))]" />
                </div>
                <h4 className="font-sans text-sm font-bold text-foreground mb-2">{m.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Transformation Outcomes ──── */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">Results</span>
              <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-foreground mb-2">Transformation Outcomes</h2>
              <p className="text-sm text-muted-foreground mb-8">Tangible benefits for the organization.</p>
              <div className="space-y-5">
                {outcomes.map((o) => (
                  <div key={o.title} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[hsl(var(--rust-orange))] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">{o.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border bg-muted/30 p-10 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-20 h-20 rounded-full bg-[hsl(var(--rust-orange))]/10 flex items-center justify-center mb-6">
                <Zap className="w-10 h-10 text-[hsl(var(--rust-orange))]" />
              </div>
              <p className="font-sans font-bold text-2xl text-foreground">From Working Group</p>
              <ArrowRight className="w-6 h-6 text-[hsl(var(--rust-orange))] my-3 rotate-90" />
              <p className="font-sans text-2xl text-gradient-cq font-bold">To Unified Entity</p>
              <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
                CQ rewires team chemistry in just 2 days — creating lasting bonds, trust, and collaborative excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-cq" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[hsl(var(--sun-orange))] opacity-20 blur-[80px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-accent-foreground mb-5">Ready to Elevate Your CQ?</h2>
            <p className="text-accent-foreground/80 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              Join our flagship Collaborative Intelligence program and transform how your teams collaborate and perform.
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-accent-foreground text-primary px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollaborativeIntelligence;
