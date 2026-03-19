import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft, Brain, Users, Lightbulb, Target, Zap, Globe,
  Briefcase, GraduationCap, Building2, TrendingUp, Mic,
  Heart, Shield, Cpu, Sparkles, Award, BookOpen, Clock,
  ChevronDown, MessageSquare, Rocket, BarChart3, Network,
  Home, Stethoscope, Landmark, University, PieChart,
  Pill, Bot, Activity, Scale, School, UserCircle, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUpNumber from "@/components/CountUpNumber";

import heroImg from "@/assets/hai-hero.jpg";
import missionImg from "@/assets/hai-mission.jpg";
import womenSummitImg from "@/assets/hai-women-summit.jpg";
import healthcareImg from "@/assets/hai-healthcare.jpg";
import governmentImg from "@/assets/hai-government.jpg";
import homemakerImg from "@/assets/hai-homemaker.jpg";
import humanRobotImg from "@/assets/hai-human-robot.jpg";
import literacyImg from "@/assets/hai-literacy.jpg";
import governanceImg from "@/assets/hai-governance.jpg";
import stageBg from "@/assets/speaking-stage-bg.jpg";

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

/* ─── Scrolling Marquee ─── */
const Marquee = () => {
  const items = "Students • Teachers • Homemakers • Doctors • Entrepreneurs • Government Officers • Corporate Teams • University Leaders • Policy Makers • Women Leaders • ";
  return (
    <div className="overflow-hidden py-4 bg-[hsl(0,0%,5%)] border-t border-white/10">
      <motion.div
        className="flex whitespace-nowrap text-sm tracking-widest text-white/40 font-medium uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span className="mr-4">{items}{items}</span>
      </motion.div>
    </div>
  );
};

/* ─── Audience Cards ─── */
const audienceCards = [
  { icon: GraduationCap, title: "School & College Students", desc: "Discover how AI shapes your future career before it even begins" },
  { icon: BookOpen, title: "Teachers & Educators", desc: "Transform how you teach with AI tools designed for the classroom" },
  { icon: Home, title: "Homemakers", desc: "Use AI to manage smarter, learn faster, and earn from home" },
  { icon: Stethoscope, title: "Healthcare Professionals", desc: "How AI diagnoses, predicts, and transforms patient outcomes" },
  { icon: Landmark, title: "Government Officers & Administrators", desc: "Lead AI-powered governance for faster, fairer public service" },
  { icon: Lightbulb, title: "Entrepreneurs & Founders", desc: "Build smarter businesses with AI as your most powerful team member" },
  { icon: BarChart3, title: "Corporate Professionals", desc: "Stay irreplaceable and 10x more productive with AI skills" },
  { icon: University, title: "University Leaders & Researchers", desc: "Shape AI-ready institutions and future workforce programs" },
];

/* ─── Healthcare boxes ─── */
const healthcareBoxes = [
  { icon: Brain, title: "AI Diagnostics", text: "AI now detects cancer, heart disease, and eye conditions faster and more accurately than traditional methods. Doctors using AI diagnostics catch diseases years earlier." },
  { icon: PieChart, title: "Predictive Healthcare", text: "AI predicts which patients are at highest risk before symptoms appear — enabling prevention rather than just treatment." },
  { icon: Pill, title: "Personalized Treatment", text: "AI analyzes individual patient data to recommend the exact treatment plan most likely to work for that specific person." },
  { icon: Bot, title: "Hospital Efficiency", text: "AI manages patient scheduling, reduces waiting times, optimizes staff deployment, and cuts administrative workload by up to 40%." },
  { icon: Heart, title: "Mental Health & AI", text: "AI tools support mental health diagnosis, therapy assistance, and 24/7 emotional support — especially critical for underserved communities." },
  { icon: Shield, title: "Ethics in Medical AI", text: "Who is responsible when AI makes a wrong diagnosis? How do we ensure medical AI is fair across gender, race, and income? These questions demand trained advocates." },
];

/* ─── Government focus areas ─── */
const govCards = [
  { icon: Building2, title: "Smart City Administration", text: "AI for traffic, utilities, waste management, and citizen services" },
  { icon: Scale, title: "AI Policy & Regulation", text: "Understanding AI laws — India DPDPA, EU AI Act, UN AI Governance frameworks" },
  { icon: School, title: "AI in Public Education", text: "Transforming government schools and universities with AI literacy programs" },
  { icon: Users, title: "Women in Government + AI", text: "Training women officers to lead AI implementation — creating more inclusive and ethical governance" },
];

/* ─── Training programs ─── */
const programRows = [
  {
    heading: "For Students, Teachers & Young Learners",
    cards: [
      { title: "Future of Work With AI", desc: "Preparing students for careers that don't exist yet — using AI as their greatest career advantage", badge: "Schools & Colleges", format: "Workshop | Seminar | Online" },
      { title: "AI Literacy for the Next Generation", desc: "Giving teachers the tools and knowledge to bring AI education into every classroom — regardless of resources", badge: "Teachers & Educators", format: "Training | Certification" },
      { title: "Human Creativity in the AI Age", desc: "Teaching students that AI amplifies human creativity — art, writing, problem solving, innovation all enhanced", badge: "Students All Ages", format: "Workshop | Online" },
    ],
  },
  {
    heading: "For Professionals & Organizations",
    cards: [
      { title: "AI Productivity & Automation", desc: "How every professional can use AI to do more, earn more, and work smarter — in any industry", badge: "All Professionals", format: "1-Day | 6-Week Program" },
      { title: "Human-AI Collaboration at Work", desc: "Building teams where humans and AI work together seamlessly — more output, better decisions, higher performance", badge: "Corporate Teams", format: "Corporate Workshop" },
      { title: "AI for Business Decision-Making", desc: "How entrepreneurs and leaders use AI for strategy, market research, customer insights, and competitive advantage", badge: "Founders & Leaders", format: "Intensive | Online" },
    ],
  },
  {
    heading: "For Government, Healthcare & Policy",
    cards: [
      { title: "AI for Government & Administration", desc: "Training public servants, officers, and administrators to implement AI in governance ethically and effectively", badge: "Government Officers", format: "Workshop | Institutional" },
      { title: "AI in Healthcare Leadership", desc: "For doctors, nurses, hospital administrators — understanding AI diagnostics, patient data, and ethical medical AI", badge: "Healthcare Professionals", format: "Seminar | Workshop" },
      { title: "Responsible AI & Ethics", desc: "For organizations, institutions, and policy groups — AI bias, fairness, transparency, data privacy, and governance frameworks", badge: "Institutions & Policy", format: "Consultation | Workshop" },
    ],
  },
];

/* ─── Speaking topics ─── */
const speakingTopics = [
  "The Future Relationship Between Humans and Artificial Intelligence",
  "Women Leading the AI Revolution — Why Gender Equality in AI Matters",
  "AI Ethics & Responsible Governance — A Framework for Nations",
  "AI Literacy as a Human Right — Leaving No One Behind",
  "The Human Side of AI — Creativity, Trust, and the Irreplaceable Human Edge",
];

/* ─── Global stats ─── */
const globalStats = [
  { value: 1.8, suffix: "B+", label: "People globally have used AI tools" },
  { value: 39, suffix: "%", label: "Of professional skills will transform by 2030 — WEF Future of Jobs Report" },
  { value: 170, suffix: "M", label: "New jobs created by AI — for those who are ready" },
  { value: 22, suffix: "%", label: "Only 22% of AI professionals globally are women" },
  { value: 74, suffix: "%", label: "Workers using AI at work — but only 33% received proper training" },
  { value: 50, suffix: "+", label: "Nations where OceanGTA delivers professional training programs" },
];

/* ─── Women & AI stats ─── */
const womenStats = [
  { number: "22%", text: "Only 22% of AI professionals globally are women — WEF 2024" },
  { number: "1 in 3", text: "Only 1 in 3 women in India have basic digital skills today" },
  { number: "2X", text: "Countries with women in AI leadership produce 2X more ethical AI policies" },
  { number: "2030", text: "UN Sustainable Development Goal — Gender equal digital access by 2030" },
];

/* ════════════════════════════════════════════════════ */
const HumanAIEdge = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[hsl(0,0%,6%)] overflow-x-hidden scroll-smooth"
    >
      <Navbar />

      {/* ══════════════ SECTION 1 — HERO ══════════════ */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        <motion.div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 6%) 50%, hsl(24 60% 20%) 100%)" }}
          animate={{
            background: [
              "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 6%) 50%, hsl(24 60% 20%) 100%)",
              "linear-gradient(135deg, hsl(24 60% 20%) 0%, hsl(24 80% 35%) 50%, hsl(0 0% 6%) 100%)",
              "linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(24 60% 20%) 50%, hsl(24 80% 35%) 100%)",
              "linear-gradient(135deg, hsl(24 80% 35%) 0%, hsl(0 0% 6%) 50%, hsl(24 60% 20%) 100%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <Particles />
        <div className="absolute inset-0 bg-black/30" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors text-sm">
                <ArrowLeft size={16} /> Back to Home
              </Link>

              <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.08] tracking-tight">
                {"AI Is Not The Future. It Is Right Now. And Everyone Deserves To Lead It.".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="inline-block mr-2 sm:mr-3"
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
                transition={{ delay: 1.8, duration: 0.6 }}
                className="text-white/70 mt-6 max-w-lg text-lg leading-relaxed font-light"
              >
                We train students, teachers, homemakers, professionals, doctors, entrepreneurs, and government officers — to harness Artificial Intelligence with confidence, purpose, and power.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.6 }}
                className="text-[hsl(24,80%,50%)] mt-4 text-sm font-medium"
              >
                From classrooms to boardrooms. From homes to policy halls. AI belongs to all of us.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mt-10"
              >
                <motion.a
                  href="#programs"
                  className="inline-flex items-center justify-center bg-[hsl(24,80%,36%)] text-white px-8 py-4 rounded-lg font-bold text-base min-h-[52px]"
                  animate={{ boxShadow: ["0 0 20px hsl(24 80% 50% / 0.3)", "0 0 40px hsl(24 80% 50% / 0.6)", "0 0 20px hsl(24 80% 50% / 0.3)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Explore All Programs
                </motion.a>
                <a
                  href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I'd%20like%20to%20book%20a%20session%20about%20The%20Human-AI%20Edge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors min-h-[52px]"
                >
                  Book a Session
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <motion.div
                className="absolute -inset-4 rounded-2xl"
                animate={{ boxShadow: ["0 0 40px hsl(24 80% 50% / 0.2)", "0 0 80px hsl(24 80% 50% / 0.4)", "0 0 40px hsl(24 80% 50% / 0.2)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img src={heroImg} alt="Diverse group of professionals working with technology" className="rounded-2xl w-full object-cover shadow-2xl relative z-10" style={{ maxHeight: 480 }} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <Marquee />

      {/* ══════════════ SECTION 2 — THE MISSION ══════════════ */}
      <section className="py-16 sm:py-24 bg-[hsl(30,20%,94%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <SlideIn from="left">
              <div className="relative">
                <div className="absolute -inset-3 border-2 border-[hsl(24,80%,36%)] rounded-2xl" />
                <img src={missionImg} alt="Mixed group of professionals in a training environment" className="rounded-2xl w-full object-cover relative z-10" style={{ maxHeight: 560 }} />
              </div>
            </SlideIn>

            <SlideIn from="right">
              <span className="text-xs tracking-[0.25em] uppercase font-bold text-[hsl(24,80%,36%)]">THE MISSION</span>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold mt-3 text-[hsl(0,0%,10%)] leading-tight">
                Every Person. Every Level.<br />AI Ready.
              </h2>
              <div className="mt-6 text-[hsl(0,0%,25%)] text-lg leading-relaxed space-y-4">
                <p>We live in a world where Artificial Intelligence is reshaping everything — how we work, how we learn, how governments serve citizens, how doctors heal patients, how businesses grow.</p>
                <p>But most AI education today is built only for coders and tech experts.</p>
                <p className="font-semibold text-[hsl(0,0%,10%)]">We believe that is wrong.</p>
                <p>A homemaker managing her family deserves to understand AI. A school teacher shaping young minds deserves AI tools. A government officer serving citizens deserves AI efficiency. A student with big dreams deserves AI skills before anyone else.</p>
                <p>OceanGTA's mission is to make AI accessible, practical, and empowering — for every single person, at every level, from Basic to Pro.</p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION 3 — WHO IS THIS FOR ══════════════ */}
      <section className="py-16 sm:py-24 bg-[hsl(0,0%,10%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white">This Is For YOU</h2>
            <p className="text-[hsl(24,80%,50%)] mt-4 max-w-2xl mx-auto text-lg">
              No technical background needed. No coding required. Whether you are a complete beginner or already working with AI — we have a path for you. Basic to Pro.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceCards.map((card, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  className="relative bg-[hsl(0,0%,12%)] rounded-2xl p-6 border border-white/5 group cursor-pointer overflow-hidden"
                  whileHover={{ y: -8, borderColor: "hsl(24, 80%, 36%)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[hsl(24,80%,36%)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <card.icon className="text-[hsl(24,80%,50%)] mb-4 group-hover:animate-pulse" size={32} />
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION 4 — WOMEN & AI ══════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left - rust orange */}
          <div className="bg-[hsl(24,80%,36%)] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <FadeUp>
              <img src={womenSummitImg} alt="Women in diverse professional roles standing together" className="rounded-xl mb-8 w-full object-cover" style={{ maxHeight: 280 }} />
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white leading-tight">
                Women Who Lead AI<br />Will Shape The World.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-6 text-white/90 text-base leading-relaxed space-y-3">
                <p>Today AI leadership is 85% male — not because women are less capable, but because women were not given the seat at the table early enough.</p>
                <p className="font-bold text-white">OceanGTA is here to change that.</p>
                <p>Our programs reach every woman — from homemaker to entrepreneur, from teacher to doctor, from local leader to head of state.</p>
                <p>When women lead AI the outcomes are more ethical, more inclusive, and more human.</p>
                <p className="font-bold text-white text-lg">This is not just training. This is a movement.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-2 mt-8">
                {["UN Women Aligned", "UNESCO AI Ethics", "WEF Future of Work", "G20 AI Principles", "Social Impact Certified"].map((b) => (
                  <span key={b} className="border border-white/40 text-white text-xs px-3 py-1.5 rounded-full font-medium">{b}</span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right - dark with stats */}
          <div className="bg-[hsl(0,0%,6%)] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-8">
              {womenStats.map((s, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl sm:text-5xl font-bold text-[hsl(24,80%,50%)] shrink-0 min-w-[100px]">{s.number}</span>
                    <p className="text-white/70 text-base leading-relaxed pt-2">{s.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION 5 — THREE CORE TOPICS ══════════════ */}
      <section className="py-16 sm:py-24 bg-[hsl(30,20%,94%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[hsl(0,0%,10%)]">Three Fields That Will Define The Future</h2>
            <p className="text-[hsl(0,0%,35%)] mt-4 max-w-2xl mx-auto text-lg">
              The global conversations happening in boardrooms, governments, and UN forums — and what they mean for you
            </p>
          </FadeUp>

          {/* Topic 1 */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <SlideIn from="left">
                <div className="relative">
                  <img src={humanRobotImg} alt="Two professionals discussing data on a laptop" className="rounded-2xl w-full object-cover shadow-lg" style={{ maxHeight: 400 }} />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_hsl(24,80%,50%,0.15)]" />
                </div>
              </SlideIn>
              <SlideIn from="right">
                <span className="inline-block bg-[hsl(24,80%,36%)] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">TOPIC 01</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[hsl(0,0%,10%)]">Human–AI Relationship & Trust</h3>
                <p className="text-[hsl(24,80%,36%)] font-medium mt-2 text-lg">The most important relationship of the 21st century</p>
                <div className="mt-4 text-[hsl(0,0%,25%)] text-base leading-relaxed space-y-3">
                  <p>As AI becomes part of every decision — in healthcare, education, finance, and governance — the most urgent question facing humanity is not 'what can AI do?' It is: 'How much should we trust it?'</p>
                  <p>This emerging field studies:</p>
                  <ul className="space-y-1 ml-4">
                    {["How humans build trust with AI systems", "How AI changes human decision-making", "Emotional interaction with AI assistants", "How AI companions affect relationships and mental health", "Human dependence on AI — where is the limit?", "Should AI ever make final decisions about human lives?"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[hsl(24,80%,36%)]">→</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 bg-[hsl(24,80%,36%)] text-white p-5 rounded-xl text-sm leading-relaxed">
                  <strong>Future questions that will define policy:</strong> Can we trust AI to diagnose diseases? Judge in courts? Run elections? Teach our children? We train organizations to answer these questions before they become crises.
                </div>
              </SlideIn>
            </div>
          </div>

          {/* Topic 2 */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <SlideIn from="left" className="order-2 lg:order-1">
                <span className="inline-block bg-[hsl(24,80%,36%)] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">TOPIC 02</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[hsl(0,0%,10%)]">AI Literacy & Education For Society</h3>
                <p className="text-[hsl(24,80%,36%)] font-medium mt-2 text-lg">The biggest education movement of our generation is here</p>
                <div className="mt-4 text-[hsl(0,0%,25%)] text-base leading-relaxed space-y-3">
                  <p>Right now, billions of people are living alongside AI — in their phones, their hospitals, their government services — without understanding it at all.</p>
                  <p>Governments and institutions globally are now demanding programs that teach:</p>
                  <ul className="space-y-1 ml-4">
                    {["AI basics for every citizen", "AI skills for working professionals", "AI awareness in schools and colleges", "Responsible and safe use of AI tools", "Digital literacy for women and underserved communities"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[hsl(24,80%,36%)]">→</span>{item}</li>
                    ))}
                  </ul>
                  <p className="font-semibold text-[hsl(0,0%,10%)]">This is not a luxury. This is survival in the AI era.</p>
                </div>
                <div className="mt-6 bg-[hsl(0,0%,10%)] text-white p-5 rounded-xl text-sm leading-relaxed">
                  From rural homemakers to urban executives — AI literacy is the great equalizer. Our mission is to make it reach everyone.
                </div>
              </SlideIn>
              <SlideIn from="right" className="order-1 lg:order-2">
                <img src={literacyImg} alt="Diverse group of learners in a classroom with tablets" className="rounded-2xl w-full object-cover shadow-lg" style={{ maxHeight: 400 }} />
              </SlideIn>
            </div>
          </div>

          {/* Topic 3 */}
          <div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <SlideIn from="left">
                <div className="relative">
                  <img src={governanceImg} alt="Government officials in a policy meeting" className="rounded-2xl w-full object-cover shadow-lg" style={{ maxHeight: 400 }} />
                </div>
              </SlideIn>
              <SlideIn from="right">
                <span className="inline-block bg-[hsl(24,80%,36%)] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">TOPIC 03</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[hsl(0,0%,10%)]">Responsible AI, Ethics & Governance</h3>
                <p className="text-[hsl(24,80%,36%)] font-medium mt-2 text-lg">Who controls the most powerful technology in human history?</p>
                <div className="mt-4 text-[hsl(0,0%,25%)] text-base leading-relaxed space-y-3">
                  <p>Artificial Intelligence is already making decisions that affect millions of people. Which loan gets approved. Which patient gets priority care. Which job application is shortlisted. The question is: is it doing this fairly?</p>
                  <ul className="space-y-1 ml-4">
                    {["AI bias and fairness — whose data is the AI trained on?", "Transparency — can we understand why AI makes a decision?", "Data privacy — who owns your information?", "Ethical decision-making with AI", "AI regulation frameworks (EU AI Act, India DPDPA, UNESCO Guidelines)", "Government accountability for AI use"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[hsl(24,80%,36%)]">→</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 bg-[hsl(24,80%,36%)] text-white p-5 rounded-xl text-sm leading-relaxed">
                  We train government officers, corporate leaders, and institutions to understand and implement responsible AI — before regulators force them to.
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION 6 — AI IN HEALTHCARE ══════════════ */}
      <section className="py-16 sm:py-24 bg-[hsl(0,0%,6%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white">AI in Healthcare</h2>
            <p className="text-[hsl(24,80%,50%)] mt-3 text-lg">Where Artificial Intelligence Saves Human Lives</p>
          </FadeUp>

          <FadeUp className="mb-10">
            <p className="text-white/70 text-center max-w-3xl mx-auto text-base leading-relaxed">
              Healthcare is the most powerful application of AI in human history. But doctors need to understand it. Nurses need to use it. Hospital administrators need to manage it. Patients need to trust it. OceanGTA bridges that gap — training healthcare professionals not just on AI tools, but on the human side of AI in medicine.
            </p>
          </FadeUp>

          <FadeUp className="mb-12">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={healthcareImg} alt="Medical professionals reviewing data on a tablet" className="w-full object-cover" style={{ maxHeight: 400 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(24,80%,36%,0.6)] to-transparent" />
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareBoxes.map((box, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  className="bg-[hsl(0,0%,10%)] p-6 rounded-2xl border border-white/5 group"
                  whileHover={{ borderColor: "hsl(24, 80%, 36%)", boxShadow: "0 0 25px hsl(24 80% 50% / 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <box.icon className="text-[hsl(24,80%,50%)] mb-4" size={28} />
                  <h4 className="text-white font-bold text-lg mb-2">{box.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{box.text}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="mt-12 bg-[hsl(24,80%,36%)] rounded-2xl p-8 text-center">
              <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
                OceanGTA doesn't replace your doctor.<br />
                We train your doctor's intelligence to work alongside AI.<br />
                <strong>The result? Better outcomes for every patient.</strong>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════ SECTION 7 — GOVERNMENT & POLICY ══════════════ */}
      <section className="py-16 sm:py-24 bg-[hsl(30,20%,94%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[hsl(0,0%,10%)]">AI in Government & Public Service</h2>
            <p className="text-[hsl(24,80%,50%)] mt-3 text-lg">When Government Uses AI Right, Every Citizen Wins</p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <SlideIn from="left">
              <div className="relative">
                <div className="absolute -inset-3 border-2 border-[hsl(24,80%,36%)] rounded-2xl" />
                <img src={governmentImg} alt="Government administrators working with technology in an office" className="rounded-2xl w-full object-cover relative z-10" style={{ maxHeight: 420 }} />
              </div>
            </SlideIn>

            <SlideIn from="right">
              <div className="text-[hsl(0,0%,25%)] text-base leading-relaxed space-y-4">
                <p>Governments globally are racing to adopt Artificial Intelligence — to deliver faster services, reduce corruption, improve decision-making, and serve citizens more efficiently.</p>
                <p>But there is a massive gap. Most government officers have never received a single hour of AI training.</p>
                <p>OceanGTA trains government employees, IAS officers, administrators, and public servants to:</p>
                <ul className="space-y-1 ml-4">
                  {["Understand AI capabilities and limitations", "Use AI tools for efficient governance", "Implement AI ethically in public service", "Recognize and prevent AI bias in government decisions", "Prepare departments for the AI era", "Engage with national and international AI policy frameworks"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[hsl(24,80%,36%)]">→</span>{item}</li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {govCards.map((card, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
                  <card.icon className="text-[hsl(24,80%,50%)] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-[hsl(0,0%,10%)] text-sm">{card.title}</h4>
                    <p className="text-[hsl(0,0%,40%)] text-xs mt-1 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="mt-12 bg-[hsl(0,0%,10%)] rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-white/60 text-sm mb-3">Recognized frameworks OceanGTA aligns with:</p>
              <p className="text-white font-medium text-sm">
                United Nations AI Governance &nbsp;|&nbsp; UNESCO AI Ethics &nbsp;|&nbsp; G20 Digital Economy &nbsp;|&nbsp; India National AI Strategy (NITI Aayog) &nbsp;|&nbsp; WEF Future of Government
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════ SECTION 8 — TRAINING PROGRAMS ══════════════ */}
      <section id="programs" className="py-16 sm:py-24 bg-[hsl(0,0%,6%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white">Training Programs</h2>
            <p className="text-[hsl(24,80%,50%)] mt-3 text-lg">For Every Person. Every Level. Every Goal.</p>
          </FadeUp>

          <FadeUp delay={0.1} className="mb-14">
            <div className="text-center">
              <span className="inline-block bg-[hsl(24,80%,36%)] text-white text-sm font-bold px-6 py-3 rounded-full">
                All programs available from Basic to Pro Level — designed for complete beginners to advanced practitioners
              </span>
            </div>
          </FadeUp>

          {programRows.map((row, ri) => (
            <div key={ri} className="mb-14 last:mb-0">
              <FadeUp>
                <h3 className="text-[hsl(24,80%,50%)] font-bold text-xl mb-6">{row.heading}</h3>
              </FadeUp>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {row.cards.map((card, ci) => (
                  <FadeUp key={ci} delay={ci * 0.1}>
                    <motion.div
                      className="bg-[hsl(0,0%,10%)] rounded-2xl p-6 border border-white/5 flex flex-col h-full group"
                      whileHover={{ borderLeftColor: "hsl(24, 80%, 36%)", borderLeftWidth: "4px" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[hsl(24,80%,50%)] text-xs font-bold uppercase tracking-wider mb-3">{card.badge}</span>
                      <h4 className="text-white font-bold text-lg mb-2">{card.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed flex-grow">{card.desc}</p>
                      <p className="text-white/40 text-xs mt-4">{card.format}</p>
                      <a
                        href={`https://wa.me/919319165254?text=Hi%20OceanGTA!%20I'm%20interested%20in%20the%20program%20'${encodeURIComponent(card.title)}'.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-[hsl(24,80%,50%)] text-sm font-semibold hover:underline"
                      >
                        Know More →
                      </a>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ SECTION 9 — FOR HOMEMAKERS ══════════════ */}
      <section className="py-16 sm:py-24 bg-[hsl(24,100%,96%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[hsl(0,0%,10%)]">Yes — This Is For You Too</h2>
            <p className="text-[hsl(24,80%,50%)] mt-3 text-lg">To Every Person At Home — AI Can Change Your Life</p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <SlideIn from="left">
              <img src={homemakerImg} alt="Person at home working on a laptop in a cozy setting" className="rounded-2xl w-full object-cover shadow-lg" style={{ maxHeight: 450 }} />
            </SlideIn>

            <SlideIn from="right">
              <div className="text-[hsl(0,0%,25%)] text-base leading-relaxed space-y-4">
                <p>You manage a home, raise children, support a family — and you do it every single day with intelligence, patience, and strength.</p>
                <p className="font-semibold text-[hsl(0,0%,10%)]">Now imagine adding AI to that power.</p>
                <p>AI can help you:</p>
                <ul className="space-y-1 ml-4">
                  {["Start a business from home", "Learn new skills and earn online", "Manage household budgets smarter", "Support your children's education", "Access health information instantly", "Build a professional identity online", "Teach yourself anything — in your own language, at your own pace"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[hsl(24,80%,36%)]">→</span>{item}</li>
                  ))}
                </ul>
                <p>You do not need a degree. You do not need coding. <strong className="text-[hsl(0,0%,10%)]">You just need to start.</strong></p>
                <p>OceanGTA has created programs specifically designed for people at home — simple, practical, in plain language, with real results.</p>
              </div>
              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I'm%20interested%20in%20learning%20AI%20from%20home."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-8 bg-[hsl(24,80%,36%)] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[hsl(24,80%,30%)] transition-colors"
              >
                I Want to Start
              </a>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION 10 — GLOBAL STATS ══════════════ */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[hsl(0,0%,6%)]">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white">The World Is Already Changing</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalStats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  className="text-center p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                  whileHover={{ y: -4, boxShadow: "0 0 30px hsl(24 80% 50% / 0.2)" }}
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[hsl(24,80%,50%)] mb-3 tracking-tight">
                    <CountUpNumber end={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{s.label}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION 11 — SPEAKING & RECOGNITION ══════════════ */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={stageBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(24,80%,20%,0.85)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white">Invite OceanGTA to Speak</h2>
            <p className="text-[hsl(24,80%,50%)] mt-3 text-lg">For Conferences | Universities | Government Events | International Forums</p>
          </FadeUp>

          <div className="max-w-2xl mx-auto mt-10 space-y-4">
            {speakingTopics.map((topic, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-white/10 backdrop-blur-sm border-l-4 border-[hsl(24,80%,50%)] text-left text-white px-6 py-4 rounded-r-xl text-base font-medium">
                  {topic}
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <p className="text-white/60 text-sm mt-8">
              Available for: Keynote | Panel Discussion | Workshop | Policy Dialogue | University Lecture | Government Training
            </p>
            <p className="text-white/40 text-xs mt-4 max-w-lg mx-auto">
              Aligned with: UN Women | UNESCO | WEF | G20 | ITU AI for Good | India AI Mission
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <a
              href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I'd%20like%20to%20book%20you%20for%20a%20speaking%20engagement%20at%20our%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 bg-[hsl(24,80%,36%)] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[hsl(24,80%,30%)] transition-colors"
            >
              Book OceanGTA for Your Event
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════ SECTION 12 — FINAL CTA ══════════════ */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(24 80% 25%) 50%, hsl(0 0% 6%) 100%)" }}
          animate={{
            background: [
              "linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(24 80% 25%) 50%, hsl(0 0% 6%) 100%)",
              "linear-gradient(135deg, hsl(24 80% 25%) 0%, hsl(0 0% 6%) 50%, hsl(24 80% 25%) 100%)",
              "linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(24 80% 25%) 50%, hsl(0 0% 6%) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The AI Era Is Here.<br />
              Every Person Deserves<br />
              To Lead It.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-[hsl(24,80%,50%)] text-xl sm:text-2xl font-bold mt-6">
              Not just understand it. Not just survive it. <span className="text-white">LEAD IT.</span>
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-white/60 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Join professionals, students, homemakers, doctors, teachers, and government officers across 50+ nations who are building their Human-AI Future with OceanGTA.
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <motion.a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20start%20my%20AI%20journey%20today."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[hsl(24,80%,36%)] text-white px-10 py-4 rounded-lg font-bold text-lg min-h-[56px]"
                animate={{ boxShadow: ["0 0 20px hsl(24 80% 50% / 0.3)", "0 0 50px hsl(24 80% 50% / 0.6)", "0 0 20px hsl(24 80% 50% / 0.3)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Start Your AI Journey Today
              </motion.a>
              <a
                href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I'd%20like%20to%20talk%20to%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors min-h-[56px]"
              >
                Talk to Our Team
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default HumanAIEdge;
