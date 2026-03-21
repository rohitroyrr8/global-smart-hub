import { motion } from "framer-motion";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUpNumber from "@/components/CountUpNumber";
import salesHero from "@/assets/sales-hero.jpg";
import salesTrainer from "@/assets/trainer-taco.jpg";

const WHATSAPP_LINK = "https://wa.me/919232118685?text=Hi%20OceanGTA!%20I%20want%20to%20know%20more%20about%20the%20Advanced%20Sales%20%26%20Marketing%20training.%20Please%20share%20details.";
const WHATSAPP_RESERVE = "https://wa.me/919232118685?text=Hi%20OceanGTA!%20I%20want%20to%20reserve%20my%20seat%20for%20the%20Advanced%20Sales%20%26%20Marketing%20training.%20Please%20share%20batch%20dates%20and%20pricing.";

const tickerItems = [
  "353% Average ROI of World-Class Sales Training 🔥",
  "70% of Salespeople Have Zero Formal Training ⚡",
  "$23.6 Billion Global Sales Training Market in 2025",
  "50% Higher Revenue with Continuous Training 📈",
  "AI Sales Teams Close 35% Bigger Deals",
  "Only 28% of a Rep's Week is Spent Actually Selling",
  "84% Miss Quota Without Proper Training",
  "Challenger Sale = #1 Ranked Global Sales Methodology by Gartner 🏆",
];

const shockingStats = [
  { number: 70, suffix: "%", label: "of salespeople worldwide have NO formal sales training", source: "RAIN Group 2024" },
  { number: 84, suffix: "%", label: "of sales training is forgotten within 3 months — without reinforcement", source: "" },
  { number: 23.6, suffix: "B", prefix: "$", label: "Global Sales Training market — growing at 10.4% CAGR", source: "" },
  { number: 353, suffix: "%", label: "Average ROI when companies DO invest in world-class training", source: "" },
];

const methodologies = [
  { num: "01", title: "The Challenger Sale", desc: "Ranked #1 global sales methodology by Gartner. Stop responding to what customers ask — start teaching them what they don't know. Challenge their thinking. Control the conversation. Win more deals.", used: "Microsoft, ADP, Dow Jones" },
  { num: "02", title: "Consultative Selling", desc: "The most trusted B2B framework globally. Diagnose before prescribing. Build trust that outlasts any competitor's discount.", used: "Korn Ferry, RAIN Group, Oracle" },
  { num: "03", title: "Sandler Selling System", desc: "50+ year proven methodology. Teaches reps to ask tougher questions, qualify relentlessly, and never chase unqualified prospects. Built on behavioral psychology.", used: "Sandler Network — 30,000 clients globally" },
  { num: "04", title: "Value-Based Selling", desc: "Never compete on price again. Learn to quantify and communicate business value so powerfully that price becomes irrelevant. The language of CFOs, CEOs and Board-level decision makers.", used: "SAP, Salesforce, HubSpot" },
  { num: "05", title: "Neuro-Marketing & Buyer Psychology", desc: "Understand the 6 psychological triggers that drive every buying decision. Apply behavioral economics, cognitive biases and emotional intelligence to influence buyers ethically and powerfully.", used: "Cialdini, Kahneman, Harvard Business Research" },
  { num: "06", title: "AI-Powered Selling (2025)", desc: "Teams using AI close 35% bigger deals — Highspot 2025. By 2027, 95% of seller research will start with AI. Learn exactly how to use AI tools for prospecting, personalization, and deal acceleration.", used: "Gartner, McKinsey, Salesforce 2025" },
];

const formatCards = [
  {
    emoji: "🏢",
    title: "Live In-Person Intensive",
    borderColor: "border-t-[hsl(32,90%,50%)]",
    items: [
      { label: "Format", value: "2-Day Offline Workshop" },
      { label: "Location", value: "India (Gurugram / Your City)" },
      { label: "Batch Size", value: "Max 30 People" },
      { label: "Experience", value: "Live role plays · Deal simulations · Peer networking · Printed workbook" },
      { label: "Best For", value: "Sales teams, corporates, entrepreneurs wanting full immersion" },
      { label: "Certificate", value: "International Certification" },
      { label: "Energy Level", value: "🔥🔥🔥🔥🔥" },
    ],
    btnLabel: "Book In-Person Seat",
    btnClass: "bg-[hsl(32,90%,50%)] hover:bg-[hsl(32,90%,45%)] text-white",
  },
  {
    emoji: "💻",
    title: "Live Online Workshop",
    borderColor: "border-t-[hsl(220,20%,12%)]",
    items: [
      { label: "Format", value: "2-Day Live Virtual Program" },
      { label: "Platform", value: "Zoom Live Classroom" },
      { label: "Batch Size", value: "Limited for interaction" },
      { label: "Experience", value: "Breakout rooms · Live Q&A · Digital workbook · Recorded sessions" },
      { label: "Best For", value: "Professionals across India and globally" },
      { label: "Certificate", value: "International Certification" },
      { label: "Energy Level", value: "🔥🔥🔥🔥" },
    ],
    btnLabel: "Book Online Seat",
    btnClass: "bg-foreground hover:bg-foreground/90 text-background",
  },
];

const day1Morning = [
  "The Psychology of Buying: How the brain actually makes decisions",
  "Challenger vs Consultative vs Value-Based — when each one wins",
  "Advanced Prospecting: Finding high-value leads globally",
  "The Perfect Discovery Call Framework",
];
const day1Afternoon = [
  "Objection Demolition: The 7 most dangerous objections destroyed",
  "Negotiation Masterclass — Win-Win frameworks from global dealmakers",
  "Live Role Play: Real deal simulations with feedback",
  "Evening Reflection: Personal Revenue Gap Analysis",
];
const day2Morning = [
  "Building a World-Class Personal & Corporate Brand",
  "Digital Marketing That Actually Converts — SEO, Social, Paid",
  "AI Marketing Tools: 544% ROI from automation — Oracle Research",
  "Building Sales Funnels that generate leads 24/7",
];
const day2Afternoon = [
  "Advanced LinkedIn & Social Selling for B2B",
  "Email Sequences that close deals while you sleep",
  "Your 90-Day Revenue Acceleration Action Plan",
  "Certification Ceremony & Global Network Welcome",
];

const whoIsThisFor = [
  { title: "You are in sales but your results have plateaued", desc: "You work hard but the numbers aren't growing. You need a global framework reset — not more motivation." },
  { title: "You own a business and want predictable revenue", desc: "You are tired of inconsistent sales. You want a system that generates revenue whether you show up or not." },
  { title: "You lead a sales or marketing team", desc: "Your team is talented but underperforming. You need a shared methodology and language that drives consistent results." },
  { title: "You are in marketing but campaigns aren't converting", desc: "Clicks but no customers. Likes but no leads. You need data-driven marketing strategy that actually fills the pipeline." },
  { title: "You want to future-proof your career with AI selling skills", desc: "AI is reshaping sales. By 2027, 95% of seller research starts with AI. Get ahead now — not after your competitors do." },
  { title: "You represent a corporate, PSU, bank or institution", desc: "Your sales or business development teams need a global upgrade. We offer custom corporate batches for teams of 20+." },
  { title: "You are an MBA student or fresh graduate", desc: "Textbooks don't teach closing. Get the real-world edge that lands premium jobs and fast-tracks global careers." },
];

const dataWallStats = [
  { number: 4.53, prefix: "$", suffix: "", label: "returned for every $1 invested in world-class sales training", source: "Sales Collective 2025", decimals: 2 },
  { number: 50, suffix: "%", label: "increase in net sales per rep from continuous training", source: "Industry Research", decimals: 0 },
  { number: 42, suffix: "%", label: "of companies saw direct revenue increase after implementing online training", source: "", decimals: 0 },
  { number: 35, suffix: "%", label: "bigger deals closed by AI-enabled sales teams", source: "Highspot 2025", decimals: 0 },
  { number: 20, suffix: "%", prefix: "10-", label: "revenue growth from improved marketing-sales alignment", source: "McKinsey 2024", decimals: 0 },
  { number: 79, suffix: "%", label: "of traditional sales training programs FAIL to produce lasting results", source: "Auto Interview AI Research", decimals: 0 },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const SalesMarketing = () => {
  const navigate = useNavigate();

  const goToInquiry = () => {
    navigate("/#send-inquiry");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* SECTION 1 — HERO (Split Screen) */}
      <section className="pt-20 md:pt-24 bg-[#F8F8F6]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[80vh] py-12 lg:py-20">
            {/* Left 60% */}
            <div className="lg:col-span-3">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors text-sm">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <motion.div {...fadeUp}>
                <span className="inline-block px-4 py-2 rounded-full bg-[hsl(32,90%,50%)]/10 text-[hsl(32,90%,50%)] text-xs font-bold tracking-wide mb-6">
                  🌍 International Trainer · Online & Offline · Globally Certified
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
                  Stop Selling.<br />
                  <span className="text-gradient-cq">Start Dominating.</span>
                </h1>
                <p className="text-muted-foreground mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
                  Master the Elite Sales & Marketing Frameworks used by Fortune 500 companies, top revenue teams and global market leaders — delivered by an International Trainer in India.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-lg bg-[hsl(32,90%,50%)] text-white font-bold text-sm hover:bg-[hsl(32,90%,45%)] transition-colors"
                  >
                    Claim Your Seat Now
                  </a>
                  <button
                    onClick={goToInquiry}
                    className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-lg border-2 border-foreground text-foreground font-bold text-sm hover:bg-foreground hover:text-background transition-colors"
                  >
                    Send Inquiry
                  </button>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  {["✅ 2-Day Power Intensive", "✅ Online & Offline Available", "✅ International Certification"].map((b) => (
                    <span key={b} className="text-sm font-medium text-foreground/80">{b}</span>
                  ))}
                </div>
              </motion.div>
            </div>
            {/* Right 40% */}
            <motion.div className="lg:col-span-2 relative" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img src={salesHero} alt="International sales trainer commanding a corporate audience" className="w-full h-[400px] lg:h-[520px] object-cover" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-foreground text-background px-5 py-3 rounded-xl shadow-lg">
                <span className="text-2xl font-black">50+</span>
                <span className="text-xs block text-background/70">Nations Trained</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SCROLLING TICKER STRIP */}
      <div className="bg-foreground py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-8 text-sm font-semibold">
              <span className="text-white">{item.split(/[🔥⚡📈🏆]/)[0]}</span>
              <span className="text-[hsl(32,90%,50%)]">{item.match(/[🔥⚡📈🏆]/)?.[0] || ""}</span>
              <span className="text-white/40 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* SECTION 3 — THE SHOCKING TRUTH */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">The Sales Crisis Nobody Talks About</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Global research exposes why most salespeople — and most companies — are leaving millions on the table every single year.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {shockingStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-xl p-6 sm:p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl sm:text-5xl font-black text-[hsl(32,90%,50%)]">
                  <CountUpNumber end={s.number} prefix={s.prefix || ""} suffix={s.suffix} decimals={s.number % 1 !== 0 ? 1 : 0} />
                </div>
                <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{s.label}</p>
                {s.source && <p className="text-xs text-muted-foreground mt-2">— {s.source}</p>}
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-12 bg-[hsl(32,90%,50%)]/10 rounded-xl p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg md:text-xl italic text-foreground font-medium leading-relaxed max-w-4xl mx-auto">
              "The question is not whether your team needs advanced sales training. The question is how much revenue you have already lost without it."
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WORLD-CLASS METHODOLOGIES */}
      <section className="py-16 sm:py-24 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">The World's Most Powerful Sales Frameworks — In One Room</h2>
            <p className="text-[hsl(32,90%,50%)] mt-4 text-base sm:text-lg font-medium">
              These are the methodologies Fortune 500 companies pay millions to implement. You get all of them in 2 days.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {methodologies.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="border border-white/10 rounded-xl p-6 sm:p-7 hover:border-[hsl(32,90%,50%)]/40 transition-colors bg-white/5"
              >
                <span className="text-3xl font-black text-[hsl(32,90%,50%)]">{m.num}</span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">{m.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">{m.desc}</p>
                <p className="text-xs text-[hsl(32,90%,50%)]/80 font-semibold">Used by: {m.used}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — TWO WAYS TO JOIN */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Choose Your Format. Same World-Class Result.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {formatCards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className={`border-2 border-border rounded-xl overflow-hidden ${card.borderColor} border-t-4`}
              >
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-black text-foreground mb-6">{card.emoji} {card.title}</h3>
                  <div className="space-y-3">
                    {card.items.map((item, j) => (
                      <div key={j} className="flex gap-3">
                        <span className="text-xs font-bold text-muted-foreground uppercase w-24 flex-shrink-0 pt-0.5">{item.label}</span>
                        <span className="text-sm text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center w-full min-h-[48px] px-6 py-3 rounded-lg font-bold text-sm transition-colors ${card.btnClass}`}
                  >
                    {card.btnLabel} <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — 2-DAY CURRICULUM (Horizontal Timeline) */}
      <section className="py-16 sm:py-24 bg-[hsl(220,20%,96%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">What You Will Master in 2 Power-Packed Days</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
            {/* Center line on desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-border" />

            {/* Day 1 */}
            <motion.div {...fadeUp} className="space-y-6">
              <div className="inline-block bg-foreground text-white px-5 py-2 rounded-lg font-black text-sm">DAY 1 — THE SCIENCE OF ELITE SELLING</div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <h4 className="text-sm font-bold text-[hsl(32,90%,50%)] mb-4">🌅 Morning</h4>
                <ul className="space-y-3">
                  {day1Morning.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/85">
                      <ChevronRight size={14} className="text-[hsl(32,90%,50%)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <h4 className="text-sm font-bold text-[hsl(32,90%,50%)] mb-4">🌆 Afternoon</h4>
                <ul className="space-y-3">
                  {day1Afternoon.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/85">
                      <ChevronRight size={14} className="text-[hsl(32,90%,50%)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div {...fadeUp} className="space-y-6">
              <div className="inline-block bg-[hsl(32,90%,50%)] text-white px-5 py-2 rounded-lg font-black text-sm">DAY 2 — THE ART OF MODERN MARKETING</div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <h4 className="text-sm font-bold text-foreground mb-4">🌅 Morning</h4>
                <ul className="space-y-3">
                  {day2Morning.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/85">
                      <ChevronRight size={14} className="text-[hsl(32,90%,50%)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <h4 className="text-sm font-bold text-foreground mb-4">🌆 Afternoon</h4>
                <ul className="space-y-3">
                  {day2Afternoon.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/85">
                      <ChevronRight size={14} className="text-[hsl(32,90%,50%)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHO IS THIS FOR (Bold Checklist) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">This Program Was Built For You If...</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-6">
            {whoIsThisFor.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex gap-4 sm:gap-6 items-start py-5 border-b border-border last:border-b-0"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[hsl(32,90%,50%)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — LIVE DATA WALL (Orange Background) */}
      <section className="py-16 sm:py-24 bg-[hsl(32,90%,50%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">The Numbers That Should Scare You Into Action</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {dataWallStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="text-3xl sm:text-4xl font-black text-white">
                  <CountUpNumber end={s.number} prefix={s.prefix || ""} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <p className="text-sm text-white/90 mt-2 leading-relaxed">{s.label}</p>
                {s.source && <p className="text-xs text-white/60 mt-1">— {s.source}</p>}
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="text-center text-white font-bold text-base sm:text-lg mt-12 max-w-3xl mx-auto">
            "The world's top companies don't leave revenue to chance. Neither should you."
          </motion.p>
        </div>
      </section>

      {/* SECTION 9 — TRAINER SPOTLIGHT (Magazine Style) */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-black text-foreground/[0.03] leading-none tracking-tighter">WORLD CLASS</span>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
            {/* Trainer Image */}
            <motion.div {...fadeUp} className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-[hsl(32,90%,50%)] overflow-hidden shadow-2xl">
                <img src={salesTrainer} alt="International Sales & Marketing Trainer" className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>
            {/* Content */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4">Your Trainer. Global Authority. Real Results.</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                An internationally recognized Sales & Marketing expert who has trained revenue professionals across 50+ nations — from Fortune 500 boardrooms in Singapore to government institutions in the Middle East and corporate enterprises across South Asia. Your trainer brings battle-tested, field-proven frameworks directly into the training room — not theory from a textbook, but methodology from real deals, real rejections, and real closings across global markets.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-bold text-foreground mb-8">
                <span>🌍 50+ Nations</span>
                <span className="text-border">|</span>
                <span>📜 Internationally Certified</span>
                <span className="text-border">|</span>
                <span>🏆 Fortune 500 & Govt Clients</span>
              </div>
              <blockquote className="text-base sm:text-lg italic text-[hsl(32,90%,50%)] font-medium border-l-4 border-[hsl(32,90%,50%)] pl-4">
                "Elite sellers are not born. They are trained — with the right framework, at the right intensity, by someone who has done it at the highest level."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] max-w-4xl mx-auto">
              Your Competition Is Getting Trained. <span className="text-gradient-cq">Right Now.</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-base sm:text-lg max-w-2xl mx-auto">
              Every batch fills fast. Online and offline seats are limited. The question is whether you will be in the room — or watching from outside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href={WHATSAPP_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[52px] px-8 py-4 rounded-lg bg-foreground text-background font-bold text-base hover:bg-foreground/90 transition-colors"
              >
                Claim My Seat on WhatsApp
              </a>
              <button
                onClick={goToInquiry}
                className="inline-flex items-center justify-center min-h-[52px] px-8 py-4 rounded-lg border-2 border-[hsl(32,90%,50%)] text-[hsl(32,90%,50%)] font-bold text-base hover:bg-[hsl(32,90%,50%)] hover:text-white transition-colors"
              >
                Send Detailed Inquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Marquee animation style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SalesMarketing;
