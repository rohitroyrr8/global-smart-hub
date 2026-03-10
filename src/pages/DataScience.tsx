import { motion } from "framer-motion";
import { ArrowLeft, Database, BarChart3, Cpu, GitBranch, Server, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  { icon: Database, title: "Data Engineering Foundations", desc: "Build scalable data pipelines, ETL processes, and data warehousing solutions for enterprise-grade analytics." },
  { icon: BarChart3, title: "Advanced Analytics & Visualization", desc: "Transform raw data into actionable insights using modern visualization tools and statistical methods." },
  { icon: BrainCircuit, title: "Machine Learning & AI", desc: "Implement supervised and unsupervised models for predictive analytics, NLP, and computer vision." },
  { icon: Server, title: "Big Data Infrastructure", desc: "Design and manage distributed computing platforms with Hadoop, Spark, and cloud-native data services." },
  { icon: GitBranch, title: "MLOps & Model Deployment", desc: "Automate ML pipelines, model versioning, and production deployment with CI/CD best practices." },
  { icon: Cpu, title: "AI for Government & Policy", desc: "Apply data science to public policy, smart governance, fraud detection, and citizen services optimization." },
];

const outcomes = [
  "Design end-to-end data pipelines for large-scale systems",
  "Build and deploy machine learning models in production",
  "Create dashboards and data narratives for decision-makers",
  "Implement big data solutions with cloud platforms",
  "Apply AI/ML to government and public sector challenges",
  "Master data governance, privacy, and ethical AI practices",
];

const DataScience = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-ocean opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--ocean-teal)/0.2),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 sm:mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs tracking-widest uppercase font-bold text-accent">Innovation · 2-Day Program</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3 text-primary-foreground leading-tight">
              Data Science &<br />
              <span className="text-gradient-cq">Engineering</span>
            </h1>
            <p className="text-primary-foreground/70 mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
              Master data engineering, machine learning, and AI-powered analytics to drive digital transformation in government and enterprise.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              {["2-Day Intensive", "Hands-on Labs", "Certification", "AI & ML Focus"].map((t) => (
                <span key={t} className="px-3 sm:px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs sm:text-sm font-medium border border-primary-foreground/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">Curriculum</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">Program Modules</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl border border-border bg-card p-5 sm:p-7 hover:shadow-lg transition-shadow group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-teal" />
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg gradient-teal mb-4 sm:mb-5">
                  <m.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-14 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
              <span className="text-xs tracking-widest uppercase font-semibold text-accent">Results</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">Learning Outcomes</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {outcomes.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-6 h-6 rounded-full gradient-teal flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Transform with Data?</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto">Join our next cohort and become a certified data science and engineering professional.</p>
          <Link to="/#contact" className="inline-block gradient-teal text-accent-foreground px-6 sm:px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity min-h-[48px]">
            Enroll Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataScience;
