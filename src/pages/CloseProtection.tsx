import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Radio, MapPin, Swords, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  { icon: Shield, title: "Threat Assessment & Risk Analysis", desc: "Learn advanced threat identification, vulnerability assessment, and risk mitigation strategies for high-profile principals." },
  { icon: Eye, title: "Surveillance & Counter-Surveillance", desc: "Master detection techniques, route analysis, and counter-surveillance methodologies in urban and rural environments." },
  { icon: Radio, title: "Tactical Communications", desc: "Operate secure communication systems, coordinate team movements, and manage crisis communications effectively." },
  { icon: MapPin, title: "Advance Operations & Route Planning", desc: "Plan and execute advance security operations, venue assessments, and secure transportation protocols." },
  { icon: Swords, title: "Defensive Tactics & Use of Force", desc: "Train in close-quarters protection, defensive driving, evacuation procedures, and proportional use of force." },
  { icon: HeartPulse, title: "Medical Response & Crisis Management", desc: "Provide tactical first aid, manage medical emergencies, and coordinate with emergency services under pressure." },
];

const outcomes = [
  "Conduct comprehensive threat and risk assessments",
  "Execute close protection operations for VIPs",
  "Plan and manage secure transportation routes",
  "Apply defensive tactics in high-pressure scenarios",
  "Provide tactical medical response in emergencies",
  "Lead and coordinate protection detail teams",
];

const CloseProtection = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-ocean opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--sun-orange)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 sm:mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs tracking-widest uppercase font-bold text-accent">Tactical · 10-Day Program</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3 text-primary-foreground leading-tight">
              Close Protection<br />
              <span className="text-gradient-cq">Officer Training</span>
            </h1>
            <p className="text-primary-foreground/70 mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
              Elite 10-day intensive program designed to prepare professionals for close protection operations, VIP security, and tactical response in high-risk environments.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              {["10-Day Intensive", "Hands-on Training", "Certification", "Tactical Focus"].map((t) => (
                <span key={t} className="px-3 sm:px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs sm:text-sm font-medium border border-primary-foreground/20">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Curriculum</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">Program Modules</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modules.map((m, i) => (
              <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-xl border border-border bg-card p-5 sm:p-7 hover:shadow-lg transition-shadow group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-cq" />
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg gradient-cq mb-4 sm:mb-5">
                  <m.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
              <span className="text-xs tracking-widest uppercase font-semibold text-accent">Results</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">Learning Outcomes</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {outcomes.map((o, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-card border border-border">
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

      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Begin Your Training?</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto">Join our elite Close Protection Officer program and gain the skills to protect high-profile individuals worldwide.</p>
          <Link to="/#contact" className="inline-block gradient-cq text-accent-foreground px-6 sm:px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity min-h-[48px]">Enroll Now</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloseProtection;
