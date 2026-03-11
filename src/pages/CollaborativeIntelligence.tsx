import { motion } from "framer-motion";
import cqHero from "@/assets/cq-hero.jpg";
import cqChallenge from "@/assets/cq-challenge.jpg";
import cqConcept from "@/assets/cq-concept.jpg";
import cqDay1 from "@/assets/cq-day1.jpg";
import cqDay2 from "@/assets/cq-day2.jpg";
import cqBenefitsBg from "@/assets/cq-benefits-bg.jpg";
import cqOutcomes from "@/assets/cq-outcomes.jpg";
import cqTrainerVasu from "@/assets/trainer-vasu.jpg";
import {
  Layers, Heart, Target, Handshake, Sparkles, FileCheck,
  Brain, Users, ShieldCheck, ArrowRight, CheckCircle2,
  Headphones, MessageSquare, BookOpen, PlayCircle, Link2, Zap,
  ChevronRight, ArrowLeft, Star, Award, Globe,
  Building2, Landmark, GraduationCap, Hospital, Rocket, Globe2,
  TrendingUp, Quote, BarChart3, ChevronDown, AlertTriangle,
  Lightbulb, Frown, FlaskConical, Trophy, Calendar, MapPin,
  ArrowDown, Microscope
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── CountUp hook for stats ── */
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return { count, ref };
};

/* ── Animated stat card ── */
const AnimatedStatCard = ({ stat, label, source, index }: { stat: string; label: string; source: string; index: number }) => {
  // Try to extract a number for animation
  const numMatch = stat.match(/^(\d+)/);
  const num = numMatch ? parseInt(numMatch[1]) : null;
  const prefix = stat.match(/^[^0-9]*/)?.[0] || "";
  const suffix = num !== null ? stat.replace(/^[^0-9]*\d+/, "") : "";
  const { count, ref } = useCountUp(num || 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:shadow-lg hover:border-[hsl(var(--rust-orange))]/20 transition-all duration-300"
    >
      <div className="text-3xl md:text-4xl font-sans font-extrabold text-[hsl(var(--rust-orange))] mb-2">
        {num !== null ? `${prefix}${count}${suffix}` : stat}
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{label}</p>
      <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/60">{source}</span>
    </motion.div>
  );
};

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

/* ── FAQ Item ── */
const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card rounded-xl border border-border/50 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left gap-4 hover:bg-muted/30 transition-colors"
      >
        <span className="font-sans font-bold text-sm text-foreground">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const CollaborativeIntelligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
        <img src={cqHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(160,65,0,0.82) 0%, rgba(100,35,0,0.90) 100%)' }} />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--sun-orange))] opacity-20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--rust-orange))] opacity-20 blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-white text-xs tracking-widest uppercase font-bold mb-5 border" style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(255,255,255,0.4)' }}>
              Internationally Certified Program — A Game Changer
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans text-white leading-tight" style={{ fontWeight: 800, textShadow: '0px 2px 8px rgba(0,0,0,0.4)' }}>
              Collaborative Intelligence{" "}
              <span className="text-white">(CQ)</span>
            </h1>
            <p className="text-white text-lg md:text-xl mt-5 max-w-2xl leading-relaxed" style={{ fontWeight: 500, textShadow: '0px 1px 6px rgba(0,0,0,0.5)' }}>
              The Missing Link to High-Performance Teams — A transformational 2-day program that rewires team chemistry and unlocks peak collaborative performance.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: Star, label: "2-Day Intensive" },
                { icon: Award, label: "Certification" },
                { icon: Globe, label: "Global Framework" },
                { icon: Users, label: "All Levels" },
              ].map((t) => (
                <span key={t.label} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.40)', border: '1px solid rgba(255,255,255,0.5)' }}>
                  <t.icon className="w-4 h-4 text-white" /> {t.label}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/#send-inquiry"
                className="inline-block px-10 py-4 rounded-xl text-lg text-center hover:opacity-90 transition-opacity min-h-[48px]"
                style={{ background: '#FFFFFF', color: '#0A1628', fontWeight: 700, boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
              >
                Rewire Your Team
              </Link>
              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20am%20interested%20in%20the%20CQ%20Training%20for%20my%20team.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-xl text-lg text-center text-white hover:opacity-90 transition-all min-h-[48px]"
                style={{ background: '#0A1628', fontWeight: 700, boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
              >
                Book a Discovery Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── ENHANCEMENT 1: Google Research Banner ──── */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-[hsl(var(--rust-orange))]" />
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase font-bold text-[hsl(var(--rust-orange))]">Backed by Science</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-white">The World's Biggest Research Confirms It</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                emoji: "🔬",
                title: "Google Project Aristotle",
                text: "Google studied 180+ teams over 2 years in Project Aristotle — the largest team research in corporate history. Their #1 finding: Psychological Safety — the ability to speak, trust and connect — is the SINGLE most critical factor in team success. This is exactly what CQ builds.",
                source: "Google Project Aristotle, 2014",
              },
              {
                emoji: "🎓",
                title: "Harvard Business School",
                text: "Amy Edmondson of Harvard Business School found that psychologically safe teams are more willing to speak up, share ideas and advance innovation. Only 47% of employees worldwide work in psychologically safe environments.",
                source: "Harvard Business School / Ipsos Research",
              },
              {
                emoji: "🧠",
                title: "Neuroscience Proof",
                text: "Brain research using neural scanning technology proves that teams with high group identification literally develop synchronized brain activity — thinking more in sync, making better decisions and performing at higher collective levels.",
                source: "Frontiers in Neuroscience, 2025",
              },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[hsl(var(--rust-orange))]/30 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{col.emoji}</span>
                <h3 className="font-sans font-bold text-lg text-white mb-3">{col.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{col.text}</p>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[hsl(var(--rust-orange))]/80">{col.source}</span>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-center mt-10 text-lg md:text-xl font-sans font-bold text-[hsl(var(--rust-orange))]">
            "CQ doesn't just feel right — science proves it works."
          </motion.p>
        </div>
      </section>

      {/* ──── ENHANCEMENT 2: Upgraded Challenge Section ──── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">The Challenge</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-foreground">Why Smart Teams Still Fail to Sync</h2>
          </motion.div>

          {/* 3 Bold Problem Cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                emoji: "⚠️",
                accent: "border-red-500/50 bg-red-500/5",
                accentDot: "bg-red-500",
                title: "THE CURRENT REALITY",
                text: "Companies invest billions in IQ and EQ training every year — hiring the smartest, most emotionally aware people they can find.",
              },
              {
                emoji: "😔",
                accent: "border-border bg-muted/50",
                accentDot: "bg-muted-foreground",
                title: "THE PAINFUL GAP",
                text: "Yet silos persist. Friction grows. Smart, nice people still fail to work as one. Individual excellence never becomes collective power.",
              },
              {
                emoji: "💡",
                accent: "border-[hsl(var(--rust-orange))]/50 bg-[hsl(var(--rust-orange))]/5",
                accentDot: "bg-[hsl(var(--rust-orange))]",
                title: "THE ROOT CAUSE",
                text: "The missing ingredient was never intelligence or emotion. It was the chemistry between people — the invisible force that turns a group into a unified team.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`rounded-2xl border-2 p-8 shadow-sm ${card.accent}`}
              >
                <span className="text-3xl mb-4 block">{card.emoji}</span>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${card.accentDot}`} />
                  <h4 className="font-sans text-xs font-extrabold tracking-widest uppercase text-foreground">{card.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Dramatic statement */}
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-xl md:text-3xl font-sans font-bold text-foreground">
              That invisible force has a name. It's called{" "}
              <span className="text-[hsl(var(--rust-orange))]">CQ</span>.
            </p>
          </motion.div>

          {/* Challenge image + existing content side by side */}
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
            <motion.div {...fadeUp} className="rounded-xl overflow-hidden shadow-lg">
              <img src={cqChallenge} alt="Team facing communication challenges" className="w-full h-full object-cover" style={{ borderRadius: '12px' }} />
            </motion.div>
          </motion.div>

          {/* ──── ENHANCEMENT 3: Upgraded Synergy Formula ──── */}
          <motion.div {...fadeUp} className="mt-14 max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div {...fadeUp} className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
                <img src={cqConcept} alt="Team breakthrough celebration" className="w-full h-full object-cover" style={{ borderRadius: '12px' }} />
              </motion.div>
              <div className="order-1 md:order-2">
                <blockquote className="text-lg md:text-xl font-sans italic text-foreground leading-relaxed border-l-4 border-[hsl(var(--rust-orange))] pl-6">
                  "CQ magically rewires the chemistry of team members, transforming a working group into a unified entity."
                  <footer className="mt-4 text-sm not-italic text-muted-foreground">— G. Vasu Thevan, CQ Founder</footer>
                </blockquote>
                <div className="mt-6">
                  <h4 className="font-sans font-bold text-lg text-foreground mb-3">The Core Concept</h4>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    CQ is the latest discovery in team development — a transformational program that shifts the working chemistry of team members. The goal: to make team members more open, understanding, cooperative, forgiving, and trusting within a short period.
                  </p>

                  {/* Enhanced Synergy Formula */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 flex-wrap">
                    {[
                      { label: "IQ", sub: "Intellectual", color: "from-blue-500 to-blue-600", shadow: "shadow-blue-500/30", icon: Brain },
                      { label: "EQ", sub: "Emotional", color: "from-green-500 to-green-600", shadow: "shadow-green-500/30", icon: Heart },
                      { label: "VQ", sub: "Value", color: "from-purple-500 to-purple-600", shadow: "shadow-purple-500/30", icon: ShieldCheck },
                      { label: "CQ", sub: "Collaborative", color: "from-[hsl(var(--rust-orange))] to-[hsl(var(--sun-orange))]", shadow: "shadow-[hsl(var(--rust-orange))]/40", icon: Users, large: true },
                    ].map((s, i) => (
                      <div key={s.label} className="flex items-center gap-2 sm:gap-3">
                        <div className={`relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br ${s.color} shadow-lg ${s.shadow} text-white ${s.large ? "w-16 h-16 md:w-20 md:h-20" : "w-14 h-14"}`}>
                          <s.icon className={`${s.large ? "w-5 h-5" : "w-4 h-4"}`} />
                          <span className={`font-extrabold tracking-wide ${s.large ? "text-sm" : "text-xs"}`}>{s.label}</span>
                          {s.large && (
                            <span className="absolute -bottom-6 text-[10px] font-bold text-[hsl(var(--rust-orange))] whitespace-nowrap">← The Missing Link</span>
                          )}
                        </div>
                        {i < 3 && <span className="text-foreground font-extrabold text-lg hidden sm:inline">+</span>}
                        {i < 3 && <ArrowDown className="w-4 h-4 text-foreground sm:hidden" />}
                      </div>
                    ))}
                    <span className="text-foreground font-extrabold text-lg mt-4 sm:mt-0">=</span>
                    <span className="font-sans font-extrabold text-xl px-4 py-2 rounded-xl bg-gradient-to-r from-[hsl(var(--rust-orange))] to-[hsl(var(--sun-orange))] text-white shadow-lg mt-4 sm:mt-0">
                      Total Synergy
                    </span>
                  </div>
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
              <img src={cqDay1} alt="Team alignment strategy workshop" className="w-full h-64 md:h-80 object-cover shadow-lg" style={{ borderRadius: '12px' }} />
            </motion.div>
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
              <img src={cqDay2} alt="Team trust building workshop" className="w-full h-64 md:h-80 object-cover shadow-lg" style={{ borderRadius: '12px' }} />
            </motion.div>
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

      {/* ──── ENHANCEMENT 4: Trainer Spotlight ──── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div {...fadeUp} className="rounded-xl overflow-hidden shadow-2xl">
              <img src={cqTrainerVasu} alt="G. Vasu Thevan — CQ Master Trainer" className="w-full h-full object-cover object-top" style={{ borderRadius: '12px' }} />
            </motion.div>

            {/* Right: Content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--rust-orange))]/10 text-[hsl(var(--rust-orange))] text-xs tracking-widest uppercase font-bold mb-5 border border-[hsl(var(--rust-orange))]/20">
                Meet Your Trainer
              </span>
              <h2 className="text-2xl md:text-4xl font-sans font-bold text-foreground mb-1">G. Vasu Thevan</h2>
              <p className="text-sm font-semibold text-[hsl(var(--rust-orange))] mb-4">Founder & Master Trainer — Collaborative Intelligence (CQ)</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                G. Vasu Thevan is a transformational coach, corporate consultant and the visionary founder of the Collaborative Intelligence (CQ) framework. With 30+ years of experience, he has coached CEOs, top management and cross-functional teams across Southeast Asia and beyond. He is the author of nearly 20 training manuals covering leadership, emotional intelligence, conflict resolution and human performance. His CQ framework — born from a profound 2005 breakthrough experience — has transformed how organizations build trust, reduce friction and unlock collective potential. Vasu is widely respected as one of Asia's most sought-after organizational transformation experts and a solution guide to corporations globally.
              </p>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { emoji: "🏆", label: "30+ Years Experience" },
                  { emoji: "🌍", label: "Southeast Asia Master Trainer" },
                  { emoji: "🏛️", label: "Government & Fortune 500 Clients" },
                  { emoji: "📜", label: "CQ Framework Founder & Author" },
                ].map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-xs font-semibold text-foreground">
                    <span>{badge.emoji}</span> {badge.label}
                  </span>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote className="text-base md:text-lg font-sans italic text-[hsl(var(--rust-orange))] leading-relaxed border-l-4 border-[hsl(var(--rust-orange))] pl-5">
                "CQ magically rewires the chemistry of team members, transforming a working group into a unified entity."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── Immersive Methodology ──── */}
      <section className="py-20 md:py-24 bg-background">
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
      <section className="py-20 md:py-24 bg-muted/30">
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
            <motion.div {...fadeUp} className="rounded-xl overflow-hidden shadow-lg">
              <img src={cqOutcomes} alt="Team celebrating achievement" className="w-full h-full object-cover" style={{ borderRadius: '12px' }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──── Who Benefits from CQ ──── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img src={cqBenefitsBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-white/50">Who Benefits from CQ?</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-white">Industries That Need CQ Most</h2>
            <p className="text-white/70 mt-2 max-w-2xl mx-auto text-sm leading-relaxed">
              Collaborative Intelligence transforms team dynamics across every sector — from boardrooms to hospitals.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Building2, title: "Corporates & MNCs", desc: "Cross-functional teams, sales & operations, leadership cohorts, and project teams gain faster alignment, reduced friction, and measurable output gains. CQ rewires competitive silos into collaborative units." },
              { icon: Landmark, title: "Government & Public Sector", desc: "Departments dealing with inter-agency coordination, policy execution, and citizen-facing teams benefit from CQ's \"Dependency Agreements\" and shared goal-setting frameworks — transforming bureaucratic friction into unified public service delivery." },
              { icon: GraduationCap, title: "Universities & Academic Institutions", desc: "Faculty departments, student leadership bodies, and administrative teams gain tools for psychological safety and relationship-first culture — critical for academic excellence and institutional harmony." },
              { icon: Hospital, title: "Healthcare & Hospital Systems", desc: "Multi-disciplinary medical teams (doctors, nurses, admin) need seamless collaboration under pressure. CQ installs empathetic communication and conflict reset tools that save lives and reduce burnout." },
              { icon: Rocket, title: "Startups & Scale-ups", desc: "Fast-growth teams often fracture under pressure. CQ creates the \"Oneness\" mindset that keeps founding teams and growing workforces aligned through change." },
              { icon: Globe2, title: "International & Multicultural Teams", desc: "Global teams across time zones, cultures, and languages benefit from CQ's sincerity-first framework and unconditional relationship model — turning diversity into genuine synergy." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:shadow-xl hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--rust-orange))]/20 flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--rust-orange))]/30 transition-colors">
                  <item.icon className="w-7 h-7 text-[hsl(var(--rust-orange))]" />
                </div>
                <h4 className="font-sans text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── ENHANCEMENT 5: Urgency Section ──── */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-[hsl(var(--rust-orange))]" />
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">⚡</span> Next CQ Batch — Limited Seats Available
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Each CQ cohort is deliberately kept small to ensure maximum transformation. Seats fill weeks in advance. Organizations and institutions are advised to confirm early.
              </p>
              <div className="space-y-3">
                {[
                  { emoji: "🔴", text: "Batch Size: Limited for Maximum Impact" },
                  { emoji: "📅", text: "Confirmation Required in Advance" },
                  { emoji: "🌍", text: "Participants Joining from India, UAE & Southeast Asia" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-lg">{item.emoji}</span>
                    <span className="text-white/80 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20reserve%20seats%20for%20the%20CQ%20Training%20for%20my%20team.%20Please%20share%20upcoming%20batch%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg text-center text-white font-bold bg-[hsl(var(--rust-orange))] hover:opacity-90 transition-all shadow-xl min-h-[48px]"
              >
                Reserve Your Team's Seats
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg text-center text-white font-bold border-2 border-white hover:bg-white/10 transition-all min-h-[48px]"
              >
                Send Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── ENHANCEMENT 6: Global Statistics (with 2 new stats) ──── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">Global Research</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-foreground">The Global Case for Collaborative Intelligence</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm leading-relaxed">
              The world's leading research institutions prove what we teach — collaboration isn't optional, it's the ultimate competitive advantage.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {[
              { stat: "86%", label: "of business leaders say lack of collaboration is the #1 cause of workplace failure", source: "Fierce Inc." },
              { stat: "5×", label: "more likely to be high-performing — companies with strong collaborative cultures", source: "i4cp" },
              { stat: "$1T+", label: "lost annually by U.S. companies due to poor communication & collaboration", source: "Gallup" },
              { stat: "64%", label: "longer focus time for employees engaged in collaborative work vs. solo", source: "Stanford University" },
              { stat: "20–25%", label: "productivity boost from effective collaboration practices", source: "McKinsey & Company" },
              { stat: "50%", label: "lower turnover in companies that foster genuine teamwork and trust", source: "Gallup Research" },
              { stat: "87%", label: "of the time, teams make better decisions than individuals", source: "Harvard Business Review" },
              { stat: "Only 20%", label: "of executives believe their teams are truly high-performing", source: "Gartner Research" },
              { stat: "$18.2B", label: "global collaboration tools market size in 2024", source: "Industry Research" },
              { stat: "70%", label: "of organizational change initiatives fail — collaboration breakdown is a top reason", source: "McKinsey & Company" },
              { stat: "#1", label: "Psychological safety is the single most critical factor in team performance — studied across 180+ teams over 2 years", source: "Google Project Aristotle" },
              { stat: "47%", label: "Only 47% of employees worldwide work in psychologically safe environments", source: "Ipsos Global Research / Harvard Business School" },
            ].map((item, i) => (
              <AnimatedStatCard key={i} stat={item.stat} label={item.label} source={item.source} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── ENHANCEMENT 7: World Leaders Quote Wall (with new quote) ──── */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--ocean-deep))]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[hsl(var(--rust-orange))] opacity-10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[hsl(var(--sun-orange))] opacity-10 blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-white/50">The World is Talking</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-white">World Leaders on Collaboration</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { quote: "The only viable path forward is to connect leaders across sectors, regions, ideologies and generations to make sense of global challenges and move the world forward together.", author: "World Economic Forum", role: "Institutional Framework, Davos" },
              { quote: "Only when all sides treat each other with sincerity and work in the same direction can there be a stronger foundation of trust and more fruits of cooperation.", author: "H.E. Li Qiang", role: "Premier of China, Davos 2024" },
              { quote: "We all agree that only by coordinating our actions can we stop the devastation… Bringing together countries with competing interests is hard work — but cooperation is vital.", author: "John Kerry", role: "Former U.S. Secretary of State, WEF" },
              { quote: "The disjointed global response to COVID-19 showed cooperation cannot be taken for granted, even when our interests are shared.", author: "World Economic Forum", role: "Global Cooperation Report 2023" },
              { quote: "Given the rise in humanitarian catastrophes and wars, you need to find a way to collaborate — or face the consequences.", author: "Dr. Comfort Ero", role: "President & CEO, Crisis Group, WEF 2025" },
              { quote: "No single person, company, or country can tackle global challenges alone. Collaboration is not a choice — it is the only path forward.", author: "António Guterres", role: "Secretary-General, United Nations" },
              
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[hsl(var(--rust-orange))] mb-4 opacity-60" />
                <p className="text-white/90 text-sm leading-relaxed italic mb-5">"{item.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-bold text-sm">{item.author}</p>
                  <p className="text-white/50 text-xs">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">FAQ</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-foreground">Got Questions? We've Got Answers.</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { q: "What exactly is Collaborative Intelligence (CQ)?", a: "CQ is a structured, experiential intelligence framework that trains teams to shift from competitive or siloed behavior to genuine, trust-based collaboration. Unlike soft-skills workshops, CQ works at the level of team chemistry — rewiring how people feel about and respond to each other at work. It sits at the intersection of behavioral psychology, team dynamics, and mindset transformation." },
              { q: "How is CQ different from team-building activities or EQ training?", a: "Team-building activities are often one-time fun events with no lasting impact. EQ trains individuals emotionally. CQ is unique because it works at the team system level — transforming group dynamics, setting structural agreements, and building a collective \"oneness\" mindset that survives the pressure of real work. Results are felt within Day 1 and designed to last." },
              { q: "Who should attend this program?", a: "CQ is designed for ALL levels — from frontline staff to C-suite executives. It works best when cross-functional or cross-departmental groups attend together, because the transformation happens in the room, between real people who actually work with each other. Both new teams and long-standing teams benefit significantly." },
              { q: "Can this program be customized for our industry or organization?", a: "Yes. While the core CQ framework remains consistent, Ocean GTA tailors the examples, case studies, role-plays, and dependency agreements to your specific organizational context — whether you're in healthcare, government, education, manufacturing, or services. Contact us to discuss a bespoke design." },
              { q: "What results can we realistically expect after 2 days?", a: "Participants consistently report immediate shifts in how they relate to teammates. Within 2 days, teams experience: reduced interpersonal friction, clearer role agreements, shared language for conflict resolution, and a concrete Action Plan. Organizational outcomes — including reduced silos, improved morale, and better cross-team performance — typically show within 30–60 days post-program." },
              { q: "Is there post-program support or certification?", a: "Yes. Participants receive CQ Certification upon completion. Additionally, Ocean GTA provides follow-up tools including CQ Busters & Boosters frameworks, action plan templates, and optional refresher sessions to sustain the transformation and embed CQ into your organizational culture." },
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── ENHANCEMENT 8: Upgraded Final CTA ──── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--rust-orange))]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white opacity-10 blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">Ready to Rewire Your Team?</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-6 leading-relaxed">
              Join organizations across Asia who have transformed their team dynamics with CQ. Start your journey today.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
              {[
                "Internationally Certified Program",
                "30+ Years Master Trainer Experience",
                "Trusted Across 50+ Nations",
              ].map((text) => (
                <span key={text} className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-white" /> {text}
                </span>
              ))}
            </div>

            {/* Urgency line */}
            <p className="text-white font-bold text-base mb-10 flex items-center justify-center gap-2">
              <span className="text-lg">⚡</span> Limited seats per batch — confirm your team's place today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#send-inquiry"
                className="inline-flex items-center justify-center bg-white text-foreground px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-xl min-h-[48px]"
              >
                Start the Transformation
              </Link>
              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20discuss%20the%20CQ%20program%20for%20my%20organization."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all min-h-[48px]"
              >
                Talk to Us on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollaborativeIntelligence;
