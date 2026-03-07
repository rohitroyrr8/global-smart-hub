import { motion } from "framer-motion";
import { ArrowLeft, Heart, Leaf, Sun, Activity, Apple, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    icon: Leaf,
    title: "Ayurvedic Foundations",
    desc: "Understand the core principles of Ayurveda — Doshas, Prakriti analysis, and holistic body-mind assessment.",
  },
  {
    icon: Heart,
    title: "Preventive Healthcare",
    desc: "Learn evidence-based preventive care strategies combining traditional wisdom with modern medical science.",
  },
  {
    icon: Activity,
    title: "Lifestyle Disorder Management",
    desc: "Address chronic conditions like diabetes, hypertension, and stress through integrated wellness protocols.",
  },
  {
    icon: Sun,
    title: "Yoga & Mind-Body Practices",
    desc: "Therapeutic yoga, pranayama, and meditation techniques for physical resilience and mental clarity.",
  },
  {
    icon: Apple,
    title: "Nutrition & Diet Planning",
    desc: "Personalized nutrition strategies based on Ayurvedic body types and modern dietetics for optimal health.",
  },
  {
    icon: Sparkles,
    title: "Corporate Wellness Programs",
    desc: "Design and implement workplace wellness initiatives to boost productivity and reduce burnout.",
  },
];

const outcomes = [
  "Assess individual health profiles using Ayurvedic methodology",
  "Design personalized wellness plans for chronic conditions",
  "Implement corporate wellness programs at scale",
  "Integrate yoga & meditation into daily health routines",
  "Apply preventive healthcare strategies for long-term well-being",
  "Guide clients through holistic lifestyle transformations",
];

const HealthWellness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-ocean opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--warm-gold)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs tracking-widest uppercase font-bold text-accent">Wellness · Holistic Program</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 text-primary-foreground leading-tight">
              Health &<br />
              <span className="text-gradient-cq">Wellness</span>
            </h1>
            <p className="text-primary-foreground/70 mt-6 max-w-xl text-lg leading-relaxed">
              A comprehensive program blending Ayurveda, modern preventive care, yoga, and nutrition for holistic health transformation.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["Ayurveda", "Yoga & Meditation", "Nutrition", "Corporate Wellness"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium border border-primary-foreground/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Program Modules</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl border border-border bg-card p-7 hover:shadow-lg transition-shadow group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-ocean" />
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg gradient-ocean mb-5">
                  <m.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs tracking-widest uppercase font-semibold text-accent">Results</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Learning Outcomes</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-6 h-6 rounded-full gradient-ocean flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-foreground text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-sm text-foreground">{o}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Start Your Wellness Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Transform your health with our expert-guided holistic wellness programs.</p>
          <Link to="/#contact" className="inline-block gradient-ocean text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthWellness;
