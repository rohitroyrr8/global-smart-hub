import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Globe, Lock, Layers, Code, Zap, Clock, Users, Award, BookOpen, Target, ChevronDown, Briefcase, GraduationCap, Building2, Landmark, TrendingUp, Wallet, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAModal from "@/components/CTAModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const highlights = [
  { icon: Clock, label: "8-Week Program" },
  { icon: Users, label: "One-on-One Sessions" },
  { icon: Award, label: "Certification" },
  { icon: BookOpen, label: "Hands-on Labs" },
  { icon: Users, label: "Weekly Doubt Clearing" },
  { icon: Briefcase, label: "Industry Projects" },
];

const objectives = [
  "Understand the foundational architecture of blockchain and distributed ledger technology",
  "Develop practical skills in smart contract creation, deployment, and auditing",
  "Explore real-world applications of blockchain across government, finance, and enterprise",
  "Learn to evaluate and implement blockchain solutions for organizational digital transformation",
  "Gain proficiency in DeFi protocols, tokenomics, and digital asset management",
  "Master security best practices for building tamper-proof decentralized systems",
];

const curriculum = [
  {
    week: "Week 1–2",
    title: "Blockchain Foundations & Architecture",
    icon: Globe,
    topics: [
      "Distributed ledger technology & consensus mechanisms",
      "Public vs private blockchains",
      "Cryptographic primitives – hashing, digital signatures",
      "Ethereum architecture deep dive",
      "Setting up development environments",
    ],
  },
  {
    week: "Week 3",
    title: "Smart Contract Development",
    icon: Code,
    topics: [
      "Solidity programming fundamentals",
      "Writing, testing & deploying smart contracts",
      "Development frameworks – Hardhat, Truffle",
      "Gas optimization techniques",
      "Contract design patterns & best practices",
    ],
  },
  {
    week: "Week 4",
    title: "DeFi, Tokenomics & Digital Assets",
    icon: Layers,
    topics: [
      "DeFi protocol architecture – AMMs, lending, staking",
      "Token standards – ERC-20, ERC-721, ERC-1155",
      "Tokenomics design & valuation models",
      "NFT ecosystems & use cases",
      "Regulatory landscape for digital assets",
    ],
  },
  {
    week: "Week 5",
    title: "Security & Auditing",
    icon: Shield,
    topics: [
      "Common smart contract vulnerabilities",
      "Reentrancy, overflow & access control attacks",
      "Security audit methodology & tools",
      "Formal verification techniques",
      "Incident response & post-mortem analysis",
    ],
  },
  {
    week: "Week 6",
    title: "Enterprise Blockchain & Capstone",
    icon: Zap,
    topics: [
      "Hyperledger Fabric & R3 Corda for enterprise",
      "Government blockchain use cases – identity, land registry, voting",
      "AI + Blockchain integration for fintech",
      "Capstone project: end-to-end dApp development",
      "One-on-one mentorship & career roadmap",
    ],
  },
];

const learnings = [
  { icon: Code, title: "Build & Deploy Smart Contracts", desc: "Write production-grade Solidity contracts and deploy on Ethereum & Polygon networks." },
  { icon: Shield, title: "Conduct Security Audits", desc: "Identify vulnerabilities and perform comprehensive smart contract security audits." },
  { icon: Layers, title: "Architect DeFi Protocols", desc: "Design and implement decentralized finance applications with advanced tokenomics." },
  { icon: Building2, title: "Enterprise Solutions", desc: "Implement permissioned blockchain solutions for government and enterprise use cases." },
  { icon: Globe, title: "Build Decentralized Apps", desc: "Create full-stack dApps with modern Web3 front-end frameworks and IPFS storage." },
  { icon: Zap, title: "AI & Fintech Integration", desc: "Combine AI analytics with blockchain for next-gen financial technology solutions." },
];

const audience = [
  { icon: GraduationCap, title: "IT Professionals & Developers", desc: "Software engineers looking to transition into blockchain development and Web3." },
  { icon: Briefcase, title: "Entrepreneurs & Founders", desc: "Startup founders wanting to leverage blockchain for innovative business models." },
  { icon: Users, title: "Finance & Banking Professionals", desc: "Fintech professionals seeking to understand DeFi, digital assets, and CBDCs." },
  { icon: TrendingUp, title: "Career Changers & Tech Enthusiasts", desc: "Professionals from any background ready to upskill and tap into high-earning Web3 opportunities." },
];

const careers = [
  { icon: Code, title: "Blockchain Developer", salary: "$120k–$180k+/yr", desc: "Build smart contracts, dApps, and blockchain infrastructure. High demand across startups and enterprises." },
  { icon: Shield, title: "Security Auditor", salary: "$130k–$200k+/yr", desc: "Conduct smart contract audits and penetration testing. Critical role ensuring protocol safety." },
  { icon: TrendingUp, title: "DeFi Analyst", salary: "$100k–$160k+/yr", desc: "Analyze token economics, trading strategies, and protocol performance. Work with data-driven teams." },
  { icon: Briefcase, title: "Product Manager", salary: "$110k–$170k+/yr", desc: "Lead Web3 product strategy at protocols, exchanges, and fintech companies building next-gen solutions." },
  { icon: Lightbulb, title: "Startup Founder", salary: "$0–Unlimited", desc: "Build your own Web3 project. Access venture funding, grants, and community support for blockchain startups." },
  { icon: Wallet, title: "Freelance Consultant", salary: "$100–$500+/hr", desc: "Offer blockchain expertise as an independent consultant. Help enterprises adopt Web3 solutions." },
];

const faqs = [
  { q: "Do I need prior programming experience?", a: "Basic programming knowledge is helpful but not mandatory. The first two weeks cover foundational concepts, and our one-on-one sessions are tailored to your skill level." },
  { q: "What is the format of the program?", a: "The 8-week program includes live instructor-led sessions, hands-on labs, weekly assignments, one-on-one mentorship sessions, weekly doubt clearing sessions, and a capstone project. Sessions are conducted both online and in-person." },
  { q: "Will I receive a certification?", a: "Yes, upon successful completion of the program and capstone project, you will receive an industry-recognized OceanGTA Blockchain & Web3 Professional Certification." },
  { q: "What tools and platforms will I work with?", a: "You'll work with Ethereum, Polygon, Solidity, Hardhat, MetaMask, IPFS, Hyperledger Fabric, and various DeFi protocols during hands-on labs." },
  { q: "Is there post-program support?", a: "Absolutely. Graduates receive 3 months of mentorship access, alumni network membership, and priority access to advanced programs and industry events." },
  { q: "Can organizations enroll teams?", a: "Yes, we offer customized corporate and government cohorts. Contact us for group pricing and tailored curriculum options." },
];

const Blockchain = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-ocean opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--sun-orange)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 sm:mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs tracking-widest uppercase font-bold text-accent">Flagship Program · 8 Weeks</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3 text-primary-foreground leading-tight">
              Blockchain &<br />
              <span className="text-gradient-cq">Web3 Mastery</span>
            </h1>
            <p className="text-primary-foreground/70 mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
              A comprehensive 8-week intensive program with one-on-one mentorship, weekly doubt clearing sessions, hands-on labs, and industry certification — designed for professionals ready to master decentralized technologies and enterprise blockchain solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10"
          >
            {highlights.map((h) => (
              <div key={h.label} className="flex flex-col items-center gap-2 px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
                <h.icon className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground text-[10px] sm:text-xs font-semibold text-center">{h.label}</span>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10 sm:mt-12"
          >
            <a href="mailto:business@oceangta.com" className="inline-block border border-accent text-accent px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-accent/10 transition-colors min-h-[48px] text-center">
              Request a Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Course Overview / Learning Objectives */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Course Overview</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">Learning Objectives</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
              This program equips you with end-to-end blockchain expertise — from foundational concepts to enterprise deployment — through a structured, mentor-guided journey.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-cq flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-foreground" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-14 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Curriculum</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">8-Week Training Roadmap</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
              A carefully structured curriculum that takes you from blockchain fundamentals to building production-ready decentralized applications.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
            {curriculum.map((mod, i) => (
              <motion.div
                key={mod.week}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 sm:gap-5 p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-cq flex items-center justify-center flex-shrink-0">
                    <mod.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-accent">{mod.week}</span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5 sm:mt-1">{mod.title}</h3>
                  </div>
                </div>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {mod.topics.map((topic, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">▸</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Skills</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">What You Will Learn</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {learnings.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl border border-border bg-card p-5 sm:p-7 hover:shadow-lg transition-shadow group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-cq" />
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg gradient-cq mb-4 sm:mb-5">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-14 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Audience</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">Who Is This For?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
              This program is designed for ambitious professionals across industries who want to lead in the blockchain space.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {audience.map((a, i) => (
              <motion.div
                key={a.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full gradient-cq mb-3 sm:mb-5">
                  <a.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2">{a.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 Career Opportunities */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Career Growth</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">Web3 & Blockchain Salaries</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
              The blockchain industry is experiencing explosive growth with abundant opportunities. Learn in-demand skills that command <strong>premium salaries</strong> and open doors to high-paying roles globally.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
            {careers.map((career, i) => (
              <motion.div
                key={career.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl border border-border bg-card p-5 sm:p-7 hover:shadow-lg transition-shadow group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-cq" />
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg gradient-cq mb-3 sm:mb-4">
                  <career.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">{career.title}</h3>
                <p className="text-sm font-semibold text-accent mb-2 sm:mb-3">{career.salary}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{career.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="max-w-3xl mx-auto p-5 sm:p-8 rounded-xl bg-muted/50 border border-border text-center">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Why Choose a Web3 Career?</h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-accent mb-2">↗ 50%+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Higher salaries compared to traditional tech roles</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-accent mb-2">🌍</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Remote opportunities with companies worldwide</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-accent mb-2">⚡</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Work on cutting-edge technology transforming finance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Support</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">Frequently Asked Questions</h2>
          </motion.div>
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-4 sm:px-6 overflow-hidden">
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline text-sm sm:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Master Blockchain?</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto">Join our next cohort and gain industry-recognized certification in blockchain and Web3 technologies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/?scrollTo=send-inquiry"
              className="gradient-cq text-accent-foreground px-6 sm:px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity min-h-[48px] flex items-center justify-center"
            >
              Book Your Blockchain Training Now
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="border border-accent text-accent px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-accent/10 transition-colors min-h-[48px]"
            >
              Join the Web3 Revolution
            </button>
          </div>
        </div>
      </section>

      <CTAModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        whatsappUrl="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20am%20interested%20in%20the%20Blockchain%20%26%20Web3%20Training.%20Please%20share%20more%20details."
      />

      <Footer />
    </div>
  );
};

export default Blockchain;
