import { motion } from "framer-motion";
import {
  ArrowLeft, Leaf, Brain, Moon, Sun, Apple, Flower2,
  Hand, CalendarCheck, CheckCircle2, Sparkles, Heart, Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const modules = [
  {
    num: "01",
    icon: Leaf,
    title: "Introduction to Ayurveda & Mental Health",
    topics: [
      "Basic principles of Ayurveda",
      "Understanding Vata, Pitta, Kapha",
      "Mind in Ayurveda: Sattva, Rajas, Tamas",
      "Relationship between mind and body",
    ],
    outcome: "Understand how dosha imbalance affects mental wellbeing.",
  },
  {
    num: "02",
    icon: Brain,
    title: "Understanding Stress in Ayurveda",
    topics: [
      "What causes stress according to Ayurveda",
      "Role of Vata aggravation in anxiety & overthinking",
      "Impact of modern lifestyle on the nervous system",
      "Signs of mental imbalance",
    ],
    outcome: "Identify early signs of stress and burnout.",
  },
  {
    num: "03",
    icon: Moon,
    title: "Ayurvedic Sleep Science",
    topics: [
      "Concept of Nidra (sleep)",
      "Causes of insomnia",
      "Evening routine for better sleep",
      "Foods that promote restful sleep",
    ],
    outcome: "Learn a natural sleep restoration routine.",
  },
  {
    num: "04",
    icon: Sun,
    title: "Daily Routine for Mental Balance",
    topics: [
      "Dinacharya for mental health",
      "Morning practices for calmness",
      "Breathing and relaxation techniques",
      "Digital detox practices",
    ],
    outcome: "Build a daily routine that supports emotional stability.",
  },
  {
    num: "05",
    icon: Apple,
    title: "Ayurvedic Diet for Stress & Sleep",
    topics: [
      "Foods that calm the nervous system",
      "Vata-pacifying diet",
      "Herbal teas and spices for relaxation",
      "Foods to avoid for anxiety and insomnia",
    ],
    outcome: "Create your personal calming diet plan.",
  },
  {
    num: "06",
    icon: Flower2,
    title: "Ayurvedic Herbs for Mind & Sleep",
    topics: [
      "Brahmi – cognitive clarity",
      "Ashwagandha – stress resilience",
      "Jatamansi – deep calm",
      "Shankhapushpi – mental focus",
      "Tagar – natural sleep support",
    ],
    outcome: "Understand safe herbal support for stress relief and sleep.",
  },
  {
    num: "07",
    icon: Hand,
    title: "Simple Self-Healing Practices",
    topics: [
      "Self-massage (Abhyanga) for relaxation",
      "Warm oil therapies",
      "Meditation and breath awareness",
      "Mindfulness through Ayurvedic principles",
    ],
    outcome: "Learn daily self-care tools for mental balance.",
  },
  {
    num: "08",
    icon: CalendarCheck,
    title: "21-Day Mind Balance Plan",
    topics: [
      "Structured morning routine",
      "Personalized diet guidelines",
      "Evening relaxation ritual",
      "Sleep hygiene practices",
    ],
    outcome: "Real lifestyle transformation through guided action.",
  },
];

const whoIsThisFor = [
  { icon: Heart, text: "Anyone struggling with stress, anxiety, or poor sleep" },
  { icon: Shield, text: "Professionals experiencing burnout and mental fatigue" },
  { icon: Sparkles, text: "Wellness enthusiasts looking for Ayurvedic self-care tools" },
  { icon: Brain, text: "Individuals seeking natural alternatives to manage mental health" },
];

const HealthWellness = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-ocean opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--warm-gold)/0.18),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
              Online Wellness Training Program
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1]">
              Ayurveda for
              <br />
              <span className="text-gradient-cq">Stress, Sleep &</span>
              <br />
              Mind Balance
            </h1>
            <p className="text-primary-foreground/75 mt-8 max-w-2xl text-lg md:text-xl leading-relaxed">
              A transformative program to help you understand how Ayurveda explains
              stress, anxiety, and sleep disturbances — with{" "}
              <strong className="text-primary-foreground">practical lifestyle, diet, and herbal tools</strong>{" "}
              to restore mental balance and improve sleep quality.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {["8 Expert Modules", "21-Day Action Plan", "Self-Healing Practices", "Herbal Guidance"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-5 py-2.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium border border-primary-foreground/20 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Course Objective ─── */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">
              Course Objective
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              Restore Balance. Reclaim Your Peace.
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
              This program equips you with{" "}
              <strong className="text-foreground">ancient Ayurvedic wisdom</strong> combined with
              modern understanding to manage stress, overcome sleep disorders, and cultivate
              lasting mental clarity — all through natural, time-tested methods.
            </p>
          </motion.div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { val: "8", label: "Expert Modules" },
              { val: "21", label: "Day Action Plan" },
              { val: "5+", label: "Healing Herbs" },
              { val: "100%", label: "Natural Methods" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-border bg-card"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">{s.val}</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Curriculum Modules ─── */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">
              Curriculum Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              8 Modules of Transformation
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Each module is carefully designed to build upon the last, guiding you from foundational
              understanding to practical daily application.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.num}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] gradient-ocean opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-5">
                    {/* Module number & icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl gradient-ocean flex items-center justify-center shadow-lg">
                        <m.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-bold">
                          Module
                        </span>
                        <div className="text-lg font-bold text-foreground">{m.num}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {m.title}
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-2 mb-5">
                        {m.topics.map((topic) => (
                          <div key={topic} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{topic}</span>
                          </div>
                        ))}
                      </div>

                      {/* Outcome badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-foreground">
                          Outcome: {m.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who Is This For ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">
              Ideal Participants
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              Who Is This Program For?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whoIsThisFor.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full gradient-ocean flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-sm text-foreground font-medium leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-accent">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Do I need any prior knowledge of Ayurveda?",
                  a: "Not at all. This program is designed for complete beginners as well as wellness enthusiasts. We start from foundational principles and build up.",
                },
                {
                  q: "Is this program entirely online?",
                  a: "Yes, this is a fully online wellness training program. You can learn at your own pace from anywhere in the world.",
                },
                {
                  q: "What is the 21-Day Mind Balance Plan?",
                  a: "It's a structured lifestyle plan in Module 8 that includes morning routines, diet guidelines, evening relaxation rituals, and sleep hygiene practices for real transformation.",
                },
                {
                  q: "Are the herbal recommendations safe?",
                  a: "We focus on widely-used, well-researched Ayurvedic herbs like Ashwagandha and Brahmi. However, we always recommend consulting your healthcare provider before starting any new supplement.",
                },
                {
                  q: "Will I receive a certificate?",
                  a: "Yes, upon successful completion of all 8 modules and the 21-Day Plan, participants receive a certificate of completion from OceanGTA Academy.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-ocean opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--warm-gold)/0.2),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Begin Your Journey to
              <br />
              <span className="text-gradient-cq">Inner Balance</span>
            </h2>
            <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
              Transform your relationship with stress and sleep. Discover the ancient wisdom of
              Ayurveda and build a life of lasting wellness.
            </p>
            <a
              href="mailto:business@oceangta.com"
              className="inline-block gradient-ocean text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg border border-primary-foreground/20 hover:opacity-90 transition-opacity shadow-xl"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthWellness;
