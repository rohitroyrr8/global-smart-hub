import { motion } from "framer-motion";
import { ArrowLeft, Brain, Users, Target, Lightbulb, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  { icon: Brain, title: "CQ Foundations", desc: "Understand the science behind Collaborative Intelligence and how it transforms team performance across cultures." },
  { icon: Users, title: "Team Synergy Dynamics", desc: "Master frameworks for building high-performing cross-functional teams in complex organizational environments." },
  { icon: Target, title: "Strategic Decision Making", desc: "Apply CQ principles to enhance group decision-making, reduce bias, and drive innovation." },
  { icon: Lightbulb, title: "Creative Problem Solving", desc: "Leverage diverse perspectives and collective intelligence to solve complex business challenges." },
  { icon: Handshake, title: "Cross-Cultural Collaboration", desc: "Navigate cultural nuances and build trust in multinational teams and stakeholder ecosystems." },
  { icon: TrendingUp, title: "Performance Measurement", desc: "Implement CQ metrics and KPIs to track collaborative effectiveness and organizational impact." },
];

const outcomes = [
  "Lead high-performing collaborative teams across cultures",
  "Apply CQ frameworks to complex organizational challenges",
  "Measure and optimize collaborative intelligence metrics",
  "Build trust and psychological safety in diverse teams",
  "Drive innovation through structured collective thinking",
  "Develop organizational CQ strategies for sustainable growth",
];

const CollaborativeIntelligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-ocean opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--sun-orange)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs tracking-widest uppercase font-bold text-accent">Flagship · 2-Day Program</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 text-primary-foreground leading-tight">
              Collaborative<br />
              <span className="text-gradient-cq">Intelligence (CQ)</span>
            </h1>
            <p className="text-primary-foreground/70 mt-6 max-w-xl text-lg leading-relaxed">
              Our flagship program that transforms how leaders and teams collaborate, innovate, and perform across cultural and organizational boundaries.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["2-Day Intensive", "Leadership Focus", "Certification", "Global Framework"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium border border-primary-foreground/20">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Program Modules</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-xl border border-border bg-card p-7 hover:shadow-lg transition-shadow group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-cq" />
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg gradient-cq mb-5">
                  <m.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs tracking-widest uppercase font-semibold text-accent">Results</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Learning Outcomes</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((o, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <div className="w-6 h-6 rounded-full gradient-cq flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-foreground text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-sm text-foreground">{o}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Elevate Your CQ?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Join our flagship Collaborative Intelligence program and transform how your teams collaborate and perform.</p>
          <Link to="/#contact" className="inline-block gradient-cq text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">Enroll Now</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollaborativeIntelligence;
