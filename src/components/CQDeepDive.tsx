import { motion } from "framer-motion";
import {
  Layers, Heart, Target, Handshake, Sparkles, FileCheck,
  Brain, Users, ShieldCheck, ArrowRight, CheckCircle2,
  Headphones, MessageSquare, BookOpen, PlayCircle, Link2, Zap,
  ChevronRight
} from "lucide-react";

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
  <motion.div {...fadeUp} className="flex gap-4 p-4 rounded-xl bg-background/60 backdrop-blur border border-border/50 hover:shadow-lg transition-shadow">
    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-serif font-bold text-lg ${orange ? "bg-[hsl(var(--rust-orange))] text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
      {m.num}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-serif text-base font-bold text-foreground">{m.title}</h4>
      <ul className="mt-1.5 space-y-1">
        {m.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
            <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-[hsl(var(--rust-orange))]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

/* ════════════════════════════════════════════════ */
const CQDeepDive = () => {
  return (
    <section id="cq" className="relative overflow-hidden">
      {/* ──── 1. Hero / Intro ──── */}
      <div className="gradient-cq py-20 md:py-28 relative">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[hsl(var(--sun-orange))] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[hsl(var(--rust-orange))] opacity-20 blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-foreground/20 text-accent-foreground text-xs tracking-widest uppercase font-bold mb-4">
              Flagship Program — A Game Changer
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-accent-foreground leading-tight">
              Collaborative Intelligence <span className="text-gradient-teal">(CQ)</span>
            </h2>
            <p className="text-accent-foreground/90 text-lg md:text-xl mt-4">
              The Missing Link to High-Performance Teams
            </p>
          </motion.div>

          {/* The Gap */}
          <motion.div {...fadeUp} className="mt-14 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-serif text-xl text-accent-foreground mb-4">Why Smart Teams Still Fail to Sync</h3>
              <div className="space-y-4 text-sm text-accent-foreground/80">
                <div>
                  <p className="font-bold text-accent-foreground">The Current Landscape:</p>
                  <p>Companies invest heavily in Intellectual Intelligence (IQ) and Emotional Intelligence (EQ).</p>
                </div>
                <div>
                  <p className="font-bold text-accent-foreground">The Gap:</p>
                  <p>Despite high individual potential, silos and friction persist. Smart and nice people often fail to collaborate effectively.</p>
                </div>
                <div>
                  <p className="font-bold text-accent-foreground">The Insight:</p>
                  <p>Collaboration & team cohesiveness is inevitably the competitive edge of today in the corporate world.</p>
                </div>
              </div>
            </div>

            {/* CQ Bridge Diagram */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-center">
              <h3 className="font-serif text-lg text-accent-foreground mb-6">The Missing Link</h3>
              <div className="flex items-end justify-center gap-3 w-full">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-accent-foreground/20 flex items-center justify-center">
                    <span className="font-serif text-lg text-accent-foreground font-bold">IQ</span>
                  </div>
                  <span className="text-[10px] text-accent-foreground/60 mt-1">Intellect</span>
                </div>
                <div className="flex flex-col items-center -mt-6">
                  <div className="w-24 h-28 rounded-xl bg-[hsl(var(--rust-orange))] flex items-center justify-center shadow-lg shadow-[hsl(var(--rust-orange))]/40 relative">
                    <span className="font-serif text-xl text-white font-bold">CQ</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-accent-foreground/60 rotate-90 my-1" />
                  <span className="text-[10px] text-accent-foreground font-semibold">Bridge to Peak Performance</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-accent-foreground/20 flex items-center justify-center">
                    <span className="font-serif text-lg text-accent-foreground font-bold">EQ</span>
                  </div>
                  <span className="text-[10px] text-accent-foreground/60 mt-1">Emotion</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CQ Definition + Synergy Formula */}
          <motion.div {...fadeUp} className="mt-14 max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <blockquote className="text-lg md:text-xl font-serif italic text-accent-foreground leading-relaxed">
                "CQ magically rewires the chemistry of team members, transforming a working group into a unified entity."
                <footer className="mt-3 text-sm not-italic text-accent-foreground/60">— G. Vasu Thevan, CQ Founder</footer>
              </blockquote>
              <div>
                <h4 className="font-serif text-base text-accent-foreground mb-2">The Core Concept</h4>
                <p className="text-sm text-accent-foreground/80 mb-4">
                  CQ is the latest discovery in team development — a transformational program that shifts the working chemistry of team members. The goal: to make team members more open, understanding, cooperative, forgiving, and trusting within a short period.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {synergyFormula.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div className="w-12 h-12 rounded-lg bg-accent-foreground/15 flex flex-col items-center justify-center">
                        <s.icon className="w-4 h-4 text-accent-foreground" />
                        <span className="text-xs font-extrabold tracking-wide text-accent-foreground">{s.label}</span>
                      </div>
                      {i < synergyFormula.length - 1 && <span className="text-accent-foreground font-extrabold text-lg">+</span>}
                    </div>
                  ))}
                  <span className="text-accent-foreground font-extrabold text-lg">=</span>
                  <span className="text-gradient-cq font-serif font-extrabold text-xl px-2">Total Synergy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ──── 2. Two-Day Curriculum ──── */}
      <div className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          {/* Flight Path Header */}
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-bold text-muted-foreground">Two-Day Strategic Intervention</span>
            <h3 className="text-2xl md:text-4xl font-serif mt-3 text-foreground">Transformation Journey</h3>
            <p className="text-muted-foreground mt-2 text-sm">Trainer: Vasudev &nbsp;|&nbsp; Duration: 2 Days &nbsp;|&nbsp; Audience: All Levels (Cross-Functional)</p>

            {/* Phase pills */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-sm">01</div>
                <span className="text-sm font-semibold text-foreground">Phase 01</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[hsl(var(--rust-orange))]" />
              <div className="flex items-center gap-2 bg-[hsl(var(--rust-orange))]/10 rounded-full px-5 py-2">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--rust-orange))] text-white flex items-center justify-center font-serif font-bold text-sm">02</div>
                <span className="text-sm font-semibold text-foreground">Phase 02</span>
              </div>
            </div>
          </motion.div>

          {/* Day 1 */}
          <div className="mb-16">
            <motion.div {...fadeUp} className="mb-6">
              <h4 className="text-xl md:text-2xl font-serif text-foreground">
                Day 1: The Mechanics of Alignment
              </h4>
              <p className="text-sm text-muted-foreground">Building the Foundation: Structural Tools for High-Performance Teams</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {day1.map((m) => <ModuleCard key={m.num} m={m} />)}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <motion.div {...fadeUp} className="mb-6">
              <h4 className="text-xl md:text-2xl font-serif text-foreground">
                Day 2: The Mindset of Oneness
              </h4>
              <p className="text-sm text-muted-foreground">Cultivating Connection: Psychological Safety and Long-Term Continuity</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {day2.map((m) => <ModuleCard key={m.num} m={m} orange />)}
            </div>
          </div>
        </div>
      </div>

      {/* ──── 3. Immersive Methodology ──── */}
      <div className="py-20 md:py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-serif text-foreground">An Immersive Methodology</h3>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
              Blending experiential learning and multi-sensory engagement to ensure deep learning.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {methodology.map((m) => (
              <motion.div key={m.title} {...fadeUp} className="bg-background rounded-2xl p-6 border border-border/50 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--rust-orange))]/10 flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-7 h-7 text-[hsl(var(--rust-orange))]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-foreground mb-1">{m.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ──── 4. Transformation Outcomes ──── */}
      <div className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">Transformation Outcomes</h3>
              <p className="text-sm text-muted-foreground mb-6">Tangible benefits for the organization.</p>
              <div className="space-y-4">
                {outcomes.map((o) => (
                  <div key={o.title} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(var(--rust-orange))] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">{o.title}</p>
                      <p className="text-xs text-muted-foreground">{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/50 bg-muted/30 p-8 flex flex-col items-center justify-center text-center">
              <Zap className="w-16 h-16 text-[hsl(var(--rust-orange))] mb-4" />
              <p className="font-serif text-xl text-foreground">From Working Group</p>
              <ArrowRight className="w-5 h-5 text-[hsl(var(--rust-orange))] my-2 rotate-90" />
              <p className="font-serif text-xl text-gradient-cq font-bold">To Unified Entity</p>
              <p className="text-xs text-muted-foreground mt-3 max-w-xs">
                CQ rewires team chemistry in just 2 days — creating lasting bonds, trust, and collaborative excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CQDeepDive;
