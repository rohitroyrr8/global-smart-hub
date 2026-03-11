import { motion } from "framer-motion";
import cqHero from "@/assets/cq-hero.jpg";
import cqChallenge from "@/assets/cq-challenge.jpg";
import cqConcept from "@/assets/cq-concept.jpg";
import cqDay1 from "@/assets/cq-day1.jpg";
import cqDay2 from "@/assets/cq-day2.jpg";
import cqBenefitsBg from "@/assets/cq-benefits-bg.jpg";
import cqOutcomes from "@/assets/cq-outcomes.jpg";
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
              <span className="text-gradient-teal">(CQ)</span>
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
                to="/#contact"
                className="inline-block px-10 py-4 rounded-xl text-lg text-center hover:opacity-90 transition-opacity"
                style={{ background: '#FFFFFF', color: '#0A1628', fontWeight: 700, boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
              >
                Rewire Your Team
              </Link>
              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20am%20interested%20in%20the%20CQ%20Training%20for%20my%20team.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-xl text-lg text-center text-white hover:opacity-90 transition-all"
                style={{ background: '#0A1628', fontWeight: 700, boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
              >
                Book a Discovery Call
              </a>
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

            {/* Challenge Image - RIGHT side */}
            <motion.div {...fadeUp} className="rounded-xl overflow-hidden shadow-lg">
              <img src={cqChallenge} alt="Team facing communication challenges" className="w-full h-full object-cover" style={{ borderRadius: '12px' }} />
            </motion.div>
          </motion.div>

          {/* CQ Definition + Synergy Formula */}
          <motion.div {...fadeUp} className="mt-14 max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Concept Image - LEFT side */}
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
            {/* Outcomes Image - RIGHT side */}
            <motion.div {...fadeUp} className="rounded-xl overflow-hidden shadow-lg">
              <img src={cqOutcomes} alt="Team celebrating achievement" className="w-full h-full object-cover" style={{ borderRadius: '12px' }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──── Who Benefits from CQ ──── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background image with dark overlay */}
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

      {/* ──── Global Statistics ──── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">Global Research</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold mt-3 text-foreground">The Global Case for Collaborative Intelligence</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm leading-relaxed">
              The world's leading research institutions prove what we teach — collaboration isn't optional, it's the ultimate competitive advantage.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
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
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:shadow-lg hover:border-[hsl(var(--rust-orange))]/20 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-sans font-extrabold text-[hsl(var(--rust-orange))] mb-2">{item.stat}</div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.label}</p>
                <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/60">{item.source}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── World Leaders Quote Wall ──── */}
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
              { quote: "Collaboration is not a skill you learn — it is a chemistry you build. When team members stop competing for significance and start contributing to a shared identity, ordinary people produce extraordinary results.", author: "G. Vasu Thevan", role: "Trainer, OceanGTA" },
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

      {/* ──── Final CTA ──── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--rust-orange))]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white opacity-10 blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">Ready to Rewire Your Team?</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
              Join organizations across Asia who have transformed their team dynamics with CQ. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-block bg-white text-foreground px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-xl"
              >
                Start the Transformation
              </Link>
              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20discuss%20the%20CQ%20program%20for%20my%20organization."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
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
