import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft, Brain, Users, Lightbulb, Target, Zap, Globe,
  Briefcase, GraduationCap, Building2, TrendingUp, Mic,
  Heart, Shield, Cpu, Sparkles, Award, BookOpen, Clock,
  ChevronDown, MessageSquare, Rocket, BarChart3, Network
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAModal from "@/components/CTAModal";
import CountUpNumber from "@/components/CountUpNumber";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import heroImg from "@/assets/human-ai-hero.jpg";
import globalBg from "@/assets/global-network-bg.jpg";
import stageBg from "@/assets/speaking-stage-bg.jpg";
import neelimaImg from "@/assets/trainer-neelima.jpg";

/* ─── Floating Particles ─── */
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 4 + 1,
          height: Math.random() * 4 + 1,
          background: `hsl(24 ${70 + Math.random() * 30}% ${50 + Math.random() * 20}% / ${0.15 + Math.random() * 0.3})`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -40 - Math.random() * 60, 0],
          x: [0, (Math.random() - 0.5) * 30, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut",
        }}
      />
    ))}
    {/* Circuit lines */}
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-px"
        style={{
          width: 60 + Math.random() * 120,
          background: `linear-gradient(90deg, transparent, hsl(24 80% 55% / 0.2), transparent)`,
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 100}%`,
          rotate: `${Math.random() * 360}deg`,
        }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 3 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 6,
        }}
      />
    ))}
  </div>
);

/* ─── Scroll-triggered fade-up wrapper ─── */
const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Slide from side wrapper ─── */
const SlideIn = ({ children, from = "left", delay = 0, className = "" }: { children: React.ReactNode; from?: "left" | "right"; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: from === "left" ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Data ─── */
const stats = [
  { value: 85, suffix: "%", label: "of C-suite executives say AI will significantly change their business within 3 years" },
  { value: 97, prefix: "$", suffix: "M", label: "Average cost of getting AI strategy wrong — poor adoption, wasted investment" },
  { value: 40, suffix: "%", label: "of workers will need reskilling in the next 3 years due to AI (World Economic Forum)" },
  { value: 10, suffix: "x", label: "ROI improvement when organizations combine human judgment with AI capabilities" },
];

const pillars = [
  {
    num: "01",
    icon: Brain,
    title: "Human Intelligence Amplified",
    desc: "Learn to harness AI as an extension of your cognitive abilities — not a replacement. Master the art of asking the right questions, structuring complex problems, and making high-stakes decisions that no machine can replicate.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "AI Fluency Without Code",
    desc: "Understand the capabilities, limitations, and strategic applications of AI without writing a single line of code. Build the vocabulary and mental models to lead AI-driven transformation in any industry.",
  },
  {
    num: "03",
    icon: Users,
    title: "Collaborative Intelligence",
    desc: "Master the emerging discipline of human-AI teaming — where diverse human perspectives amplify AI's pattern recognition to unlock breakthrough solutions that neither can achieve alone.",
  },
  {
    num: "04",
    icon: Shield,
    title: "Ethical AI Leadership",
    desc: "Navigate the complex ethical landscape of AI adoption. Learn frameworks for responsible AI governance, bias mitigation, and building trust in AI systems across your organization.",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Future-Proof Your Career",
    desc: "Position yourself at the intersection of human creativity and machine intelligence — the most valuable professional edge of the next decade. Build skills that appreciate in value as AI evolves.",
  },
];

const audience = [
  { icon: Briefcase, title: "C-Suite Executives & VPs", desc: "Leaders who need to make billion-dollar AI decisions with confidence and lead digital transformation." },
  { icon: Building2, title: "Entrepreneurs & Founders", desc: "Visionaries building the next generation of AI-augmented products, services, and business models." },
  { icon: GraduationCap, title: "Educators & Researchers", desc: "Academics shaping curriculum and research at the intersection of human cognition and AI systems." },
  { icon: TrendingUp, title: "Mid-Career Professionals", desc: "Ambitious professionals who refuse to be left behind — ready to become irreplaceable in the AI era." },
];

const programs = [
  { flagship: true, title: "The Human-AI Edge — Executive Masterclass", duration: "2-Day Immersive", desc: "An exclusive, high-intensity program for senior leaders. Covers strategic AI adoption, human-AI teaming frameworks, and ethical governance. Walk away with a personalized AI transformation roadmap." },
  { flagship: false, title: "AI Fluency for Teams", duration: "4-Week Program", desc: "Equip your entire team with AI literacy. Covers prompt engineering, AI tool evaluation, workflow automation, and collaborative intelligence principles." },
  { flagship: false, title: "Keynote & Workshop", duration: "Half / Full Day", desc: "Book Neelima for your conference, corporate retreat, or leadership summit. Customized talks and workshops on human-AI collaboration and the future of work." },
];

const speakingTopics = [
  "The Human-AI Edge: Why Human Intelligence Is Your Greatest Competitive Advantage",
  "Beyond Automation: Building Organizations Where Humans & AI Thrive Together",
  "The Ethics of AI: Navigating Bias, Trust, and Governance in the Age of Intelligence",
  "Future-Proofing Leadership: The Skills That AI Cannot Replace",
  "From Fear to Fluency: Transforming Your Team's Relationship with AI",
];

const faqs = [
  { q: "Do I need technical or coding knowledge?", a: "Absolutely not. The Human-AI Edge is designed for leaders, strategists, and professionals — not engineers. We focus on understanding, applying, and leading AI initiatives, not building them from scratch." },
  { q: "What makes this different from other AI programs?", a: "Most AI programs teach tools. We teach thinking. The Human-AI Edge focuses on the uniquely human capabilities that become MORE valuable as AI advances — critical thinking, ethical judgment, creative problem-solving, and collaborative intelligence." },
  { q: "Is this relevant for my industry?", a: "Yes. AI is transforming every industry — from healthcare and finance to education and government. Our frameworks are industry-agnostic and have been applied across 15+ sectors globally." },
  { q: "What outcomes can I expect?", a: "You'll leave with: a personalized AI transformation roadmap, frameworks for human-AI teaming, a network of forward-thinking leaders, and the confidence to lead AI adoption in your organization." },
  { q: "Can this be customized for my organization?", a: "Absolutely. We offer tailored executive programs, team workshops, and keynotes. Contact us to discuss your specific needs and objectives." },
  { q: "Who is Neelima and what are her credentials?", a: "Neelima is a globally recognized thought leader on human-AI collaboration. She has advised Fortune 500 companies, spoken at international summits, and trained thousands of executives across 20+ countries on the strategic intersection of human intelligence and AI." },
];

/* ─── Page Component ─── */
const HumanAIEdge = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background overflow-x-hidden"
    >
      <Navbar />

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-28 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 10%) 50%, hsl(24 60% 20%) 100%)",
          }}
          animate={{
            background: [
              "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 10%) 50%, hsl(24 60% 20%) 100%)",
              "linear-gradient(135deg, hsl(24 60% 20%) 0%, hsl(24 80% 35%) 50%, hsl(0 0% 10%) 100%)",
              "linear-gradient(135deg, hsl(0 0% 10%) 0%, hsl(24 60% 20%) 50%, hsl(24 80% 35%) 100%)",
              "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 10%) 50%, hsl(24 60% 20%) 100%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <Particles />
        <div className="absolute inset-0 bg-black/30" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left – text */}
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors text-sm">
                <ArrowLeft size={16} /> Back to Home
              </Link>

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-accent mb-4"
              >
                Flagship Program · By Neelima
              </motion.span>

              <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.08] tracking-tight">
                {"The Human-AI Edge".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                    className="inline-block mr-3"
                    style={{
                      background: "linear-gradient(135deg, #fff 30%, hsl(24 80% 60%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-white/70 mt-6 max-w-lg text-lg leading-relaxed font-light"
              >
                In the age of artificial intelligence, your most powerful asset isn't a machine — <strong className="text-white">it's you.</strong> Learn to combine human intelligence with AI capabilities to become the leader the future demands.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mt-10"
              >
                <motion.a
                  href="mailto:business@oceangta.com"
                  className="relative inline-flex items-center justify-center gradient-cq text-accent-foreground px-8 py-4 rounded-lg font-bold text-base min-h-[52px] overflow-hidden"
                  animate={{ boxShadow: ["0 0 20px hsl(24 80% 50% / 0.3)", "0 0 40px hsl(24 80% 50% / 0.6)", "0 0 20px hsl(24 80% 50% / 0.3)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Get Started Today
                </motion.a>
                <a
                  href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I'm%20interested%20in%20The%20Human-AI%20Edge%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors min-h-[52px]"
                >
                  Book a Free Call
                </a>
              </motion.div>
            </div>

            {/* Right – hero image with glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <motion.div
                className="absolute -inset-4 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 40px hsl(24 80% 50% / 0.2)",
                    "0 0 80px hsl(24 80% 50% / 0.4)",
                    "0 0 40px hsl(24 80% 50% / 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src={heroImg}
                alt="Professional working with AI holographic interface"
                className="rounded-2xl w-full object-cover shadow-2xl relative z-10"
                style={{ maxHeight: 480 }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ STATS ════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[hsl(0,0%,5%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(24_80%_50%/0.06),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <FadeUp className="text-center mb-12 sm:mb-16">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">The Reality</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold mt-3" style={{ background: "linear-gradient(135deg, #fff 40%, hsl(24 80% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Why The Human-AI Edge Matters
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <motion.div
                  className="text-center p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm group"
                  whileHover={{ y: -6, boxShadow: "0 0 30px hsl(24 80% 50% / 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-accent mb-4 tracking-tight">
                    <CountUpNumber end={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{s.label}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ 5 PILLARS ════════════════════════ */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-14 sm:mb-20">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">The Framework</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold mt-3 text-foreground">5 Pillars of The Human-AI Edge</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              A comprehensive framework that transforms how you think about, work with, and lead in the age of AI.
            </p>
          </FadeUp>

          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {pillars.map((p, i) => (
              <SlideIn key={p.num} from={i % 2 === 0 ? "left" : "right"} delay={0.1}>
                <div className="relative flex items-start gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-shadow group">
                  {/* Giant faded number */}
                  <span className="absolute top-2 right-4 text-[80px] sm:text-[120px] font-black text-accent/[0.06] leading-none select-none pointer-events-none">
                    {p.num}
                  </span>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl gradient-cq flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <p.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHO IS THIS FOR ════════════════════════ */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12 sm:mb-16">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">Audience</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold mt-3 text-foreground">Who Is This For?</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Designed for leaders who understand that the future belongs to those who can bridge human wisdom and machine intelligence.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {audience.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.1}>
                <motion.div
                  className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border group cursor-default"
                  whileHover={{
                    y: -8,
                    borderColor: "hsl(24 80% 50% / 0.5)",
                    boxShadow: "0 0 30px hsl(24 80% 50% / 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-cq mb-5"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ PHILOSOPHY ════════════════════════ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(24 40% 10%) 100%)" }}
          animate={{
            background: [
              "linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(24 40% 10%) 100%)",
              "linear-gradient(135deg, hsl(24 40% 10%) 0%, hsl(0 0% 6%) 100%)",
              "linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(24 40% 10%) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <FadeUp className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">The Philosophy</span>
            <div className="mt-10 sm:mt-14">
              <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap text-3xl sm:text-4xl md:text-5xl font-bold">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="text-white"
                >
                  Human
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
                  className="text-accent text-4xl sm:text-5xl"
                >
                  +
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                  className="text-white"
                >
                  AI
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.4, type: "spring" }}
                  className="text-accent text-4xl sm:text-5xl"
                >
                  =
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
                  style={{
                    background: "linear-gradient(135deg, hsl(24 80% 55%), hsl(24 90% 70%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Edge
                </motion.span>
              </div>
            </div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-10 sm:mt-14 text-lg sm:text-xl text-white/70 leading-relaxed font-light italic border-l-4 border-accent/40 pl-6 text-left"
            >
              "The future doesn't belong to artificial intelligence alone. It belongs to those who learn to pair the depth of human wisdom — empathy, ethics, creativity — with the scale and speed of AI. That intersection is where the real edge lives."
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="mt-4 text-accent font-semibold text-right"
            >
              — Neelima
            </motion.p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════ MEET NEELIMA ════════════════════════ */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            <FadeUp>
              <div className="relative group">
                {/* Animated ring */}
                <motion.div
                  className="absolute -inset-3 rounded-2xl border-2 border-accent/30"
                  animate={{ borderColor: ["hsl(24 80% 50% / 0.2)", "hsl(24 80% 50% / 0.5)", "hsl(24 80% 50% / 0.2)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={neelimaImg}
                    alt="Neelima — Human-AI Edge Program Lead"
                    className="w-full object-cover"
                    style={{ maxHeight: 500 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-xl">Neelima</p>
                    <p className="text-white/70 text-sm">Human-AI Edge Creator & Keynote Speaker</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">Your Guide</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">Meet Neelima</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Neelima is a globally recognized thought leader on Human-AI collaboration. With over 15 years of experience spanning technology leadership, executive education, and organizational transformation, she has trained thousands of leaders across 20+ countries.
                </p>
                <p>
                  Her unique approach bridges the gap between technical AI capabilities and human strategic thinking — making AI accessible, actionable, and ethical for leaders at every level.
                </p>
                <p>
                  She has been invited to speak at some of the world's most prestigious stages and has advised Fortune 500 companies on their AI transformation journeys.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {["20+ Countries", "5000+ Leaders Trained", "Fortune 500 Advisor", "TEDx Speaker"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full text-xs font-semibold border border-accent/30 text-accent bg-accent/5">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════ GLOBAL FACTS ════════════════════════ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={globalBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <FadeUp className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">Global Impact</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold mt-3" style={{ background: "linear-gradient(135deg, #fff 40%, hsl(24 80% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The AI Revolution Is Here
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Organizations that master human-AI collaboration will define the next era of business. Those that don't will be left behind.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { val: 300, suffix: "M+", label: "Jobs will be transformed by AI by 2030 (Goldman Sachs)" },
              { val: 15.7, suffix: "T", prefix: "$", label: "Expected contribution of AI to global economy by 2030 (PwC)", decimals: 1 },
              { val: 77, suffix: "%", label: "of companies are either using or exploring AI (McKinsey)" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                  <div className="text-4xl sm:text-5xl font-bold text-accent mb-3">
                    <CountUpNumber end={item.val} prefix={item.prefix} suffix={item.suffix} decimals={item.decimals} />
                  </div>
                  <p className="text-white/50 text-sm">{item.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ PROGRAMS ════════════════════════ */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12 sm:mb-16">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">Programs</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold mt-3 text-foreground">Choose Your Path</h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((prog, i) => (
              <FadeUp key={prog.title} delay={i * 0.12}>
                <motion.div
                  className="relative h-full p-6 sm:p-8 rounded-2xl border border-border bg-card group overflow-hidden"
                  whileHover={{
                    borderLeftWidth: 4,
                    borderLeftColor: "hsl(24 80% 50%)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {prog.flagship && (
                    <motion.span
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase gradient-cq text-accent-foreground"
                      animate={{ boxShadow: ["0 0 10px hsl(24 80% 50% / 0.3)", "0 0 20px hsl(24 80% 50% / 0.5)", "0 0 10px hsl(24 80% 50% / 0.3)"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Flagship
                    </motion.span>
                  )}
                  <span className="text-xs text-accent font-semibold tracking-wider uppercase">{prog.duration}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mt-3 mb-3 pr-16">{prog.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{prog.desc}</p>
                  <a
                    href="mailto:business@oceangta.com"
                    className="inline-block mt-6 text-sm font-semibold text-accent hover:underline"
                  >
                    Learn More →
                  </a>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ SPEAKING ════════════════════════ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={stageBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-[hsl(24_40%_15%/0.8)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">Keynotes & Workshops</span>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold mt-3 mb-8" style={{ background: "linear-gradient(135deg, #fff 40%, hsl(24 80% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Book Neelima for Your Event
              </h2>
            </FadeUp>

            <div className="space-y-4">
              {speakingTopics.map((topic, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] transition-colors">
                    <Mic className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm sm:text-base">{topic}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.5} className="mt-10 text-center">
              <a
                href="mailto:business@oceangta.com?subject=Speaking%20Inquiry%20-%20Neelima"
                className="inline-flex items-center justify-center gradient-cq text-accent-foreground px-8 py-4 rounded-lg font-bold text-base min-h-[52px]"
              >
                Invite Neelima to Speak
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FAQ ════════════════════════ */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12 sm:mb-16">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold mt-3 text-foreground">Frequently Asked Questions</h2>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <AccordionItem value={`faq-${i}`} className="border border-border rounded-xl px-5 sm:px-6 overflow-hidden bg-card">
                    <AccordionTrigger className="text-sm sm:text-base font-semibold text-foreground py-5 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </FadeUp>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FINAL CTA ════════════════════════ */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 8%) 100%)" }}
          animate={{
            background: [
              "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 8%) 100%)",
              "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(24 80% 35%) 100%)",
              "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 8%) 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <Particles />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              The Future Belongs to Those<br />
              <span style={{ background: "linear-gradient(135deg, hsl(24 80% 55%), hsl(24 90% 70%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Who Show Up for It.
              </span>
            </h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto text-lg font-light">
              Don't just adapt to AI. Lead it. The Human-AI Edge gives you the framework, the mindset, and the confidence to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <motion.a
                href="mailto:business@oceangta.com"
                className="inline-flex items-center justify-center gradient-cq text-accent-foreground px-10 py-4 rounded-lg font-bold text-lg min-h-[56px]"
                animate={{ boxShadow: ["0 0 20px hsl(24 80% 50% / 0.3)", "0 0 50px hsl(24 80% 50% / 0.6)", "0 0 20px hsl(24 80% 50% / 0.3)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Start Your Journey
              </motion.a>
              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I'm%20interested%20in%20The%20Human-AI%20Edge%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors min-h-[56px]"
              >
                Talk to Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
      <CTAModal open={modalOpen} onClose={() => setModalOpen(false)} whatsappUrl="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I'm%20interested%20in%20The%20Human-AI%20Edge%20program." />
    </motion.div>
  );
};

export default HumanAIEdge;
