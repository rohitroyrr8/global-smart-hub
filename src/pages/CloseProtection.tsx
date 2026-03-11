import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Globe, Clock, Trophy, Target, Users, Briefcase, GraduationCap, Radio, Car, HeartPulse, Eye, Award, MapPin, Building, Star, Landmark, Film, Scale, Banknote, Hotel } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUpNumber from "@/components/CountUpNumber";
import cpoHero from "@/assets/cpo-hero.jpg";
import cpoTeam from "@/assets/cpo-team.jpg";


const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const curriculum = [
  { days: "Day 1–2", title: "Foundation & Threat Intelligence", items: ["Understanding the CPO role, mindset and code of conduct", "Threat assessment, risk profiling and intelligence gathering", "Legal framework for private protection in India and internationally"] },
  { days: "Day 3–4", title: "Protective Formations & Foot Drills", items: ["Close protection foot movement formations", "Operating in public, crowded and high-risk environments", "Overt and covert close protection operations", "VIP escort procedures and positioning"] },
  { days: "Day 5–6", title: "Vehicle Security & Tactical Driving", items: ["Secure transportation and convoy procedures", "Principal protection within vehicles", "Embarkation and disembarkation drills", "Actions during vehicle-related incidents and ambushes"] },
  { days: "Day 7", title: "Conflict Management & Communication", items: ["De-escalation and conflict resolution techniques", "Empathetic communication under pressure", "Radio protocols and team communication", "Handling media and crowd scenarios"] },
  { days: "Day 8", title: "Emergency Medical Response", items: ["First aid in operational environments", "Trauma response and emergency procedures", "Medical handover protocols", "CPO fitness and physical conditioning"] },
  { days: "Day 9", title: "Surveillance & Counter-Surveillance", items: ["Surveillance detection techniques", "Counter-surveillance operations", "Digital threat awareness and OSINT basics", "Venue and residential security protocols"] },
  { days: "Day 10", title: "Live Simulation & Certification", items: ["Full-scenario live simulation exercise", "Individual assessment and evaluation", "Certificate award ceremony", "Career guidance and global placement support"] },
];

const audience = [
  { emoji: "🪖", title: "Retired & Serving Military Personnel", desc: "Translate your military discipline and combat experience into a high-paying international CPO career. Your background is your biggest asset — we build on it." },
  { emoji: "👮", title: "Police & Paramilitary Officers", desc: "PSO, CRPF, CISF, BSF, state police officers — upgrade your skills and credentials to qualify for elite private VIP protection roles globally." },
  { emoji: "🏢", title: "Corporate Security Professionals", desc: "Security managers and executives in corporates seeking international certification to protect C-suite executives, board members and HNIs." },
  { emoji: "🏛️", title: "Government Security Personnel", desc: "Officers assigned to Z, Y, X category protection details seeking world-class training to elevate their skills and career prospects." },
  { emoji: "🎓", title: "Ambitious Individuals (18+ with Fitness)", desc: "No prior experience required. If you have the discipline, fitness and drive — we train you from zero to certified CPO in 10 days." },
  { emoji: "🌐", title: "International Students & Security Professionals", desc: "Professionals from UAE, Southeast Asia, Africa and beyond seeking SEA-certified CPO credentials delivered in India at fraction of Western training costs." },
];

const employers = [
  { icon: Landmark, label: "Government & Diplomatic Missions" },
  { icon: Building, label: "Fortune 500 Corporate Security Teams" },
  { icon: Star, label: "Royal Families & HNI Clients — UAE & Middle East" },
  { icon: Film, label: "Bollywood & Entertainment Celebrities" },
  { icon: Scale, label: "Judiciary & High Court Judges" },
  { icon: Banknote, label: "Banking & Financial Sector VIPs" },
  { icon: Globe, label: "International NGOs & UN Missions" },
  { icon: Hotel, label: "5-Star Hotels & Luxury Resorts Security" },
];

const CloseProtection = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={cpoHero} alt="Close Protection Officers in tactical formation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,8%,0.85)] via-[hsl(220,30%,8%,0.75)] to-[hsl(220,30%,8%,0.95)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24 sm:py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-bold tracking-wide mb-6">
              🛡️ Elite Security Training · SEA Certified · 50+ Nations
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Become a World-Class<br />
              <span className="text-gradient-cq">Close Protection Officer</span>
            </h1>
            <p className="text-primary-foreground/80 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl">
              Train under a Retired Military Commander with 50+ Nations of Experience — Right Here in India. No Travel. No Compromise. Just Elite Certification.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 sm:mt-8">
            <div className="inline-block bg-accent/90 text-accent-foreground px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold">
              ⚠️ LIMITED SEATS — Confirmation Required 1–2 Months in Advance · Next Batch Filling Fast
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20reserve%20my%20seat%20for%20the%20CPO%20training.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="gradient-cq text-accent-foreground px-8 py-3.5 rounded-lg font-bold text-base hover:opacity-90 transition-opacity min-h-[48px] text-center">
              Reserve Your Seat Now
            </a>
            <Link to="/#send-inquiry" className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-bold text-base hover:bg-primary-foreground/10 transition-colors min-h-[48px] text-center">
              Send Inquiry
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
            {[
              { icon: "🌍", label: "50+ Nations Trained" },
              { icon: "🎖️", label: "SEA Certified Program" },
              { icon: "⏱️", label: "10-Day Intensive" },
              { icon: "🏆", label: "Globally Recognized Certificate" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-lg px-3 py-3 text-center">
                <span className="text-xl block mb-1">{s.icon}</span>
                <span className="text-primary-foreground/90 text-xs font-semibold">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — GLOBAL MARKET OPPORTUNITY */}
      <section className="py-16 sm:py-24 bg-[hsl(var(--ocean-deep))]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
              The World Needs More Elite CPOs —<br className="hidden sm:block" /> <span className="text-gradient-cq">And India Is Ready</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: 24.1, suffix: "B", prefix: "$", label: "Global VIP Protection Market Size 2024", decimals: 1 },
              { value: 43.2, suffix: "B", prefix: "$", label: "Projected Market Size by 2033", decimals: 1 },
              { value: 8.1, suffix: "%", prefix: "", label: "Asia Pacific Growth Rate (Fastest in World)", decimals: 1 },
              { value: 150, suffix: "K+", prefix: "$75K–$", label: "Annual Salary of Certified CPO Globally", decimals: 0, static: true },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  {s.static ? "$75K–$150K+" : <CountUpNumber end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />}
                </div>
                <p className="text-primary-foreground/70 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-primary-foreground/70 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center mt-10">
            India's security market is projected to reach $14.2 Billion by 2034, growing at 11.7% CAGR. The demand for internationally certified Close Protection Officers across India, UAE, and Southeast Asia has never been higher — yet qualified CPOs remain scarce. <strong className="text-accent">This is your opportunity.</strong>
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 — WHY DIFFERENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Why OceanGTA CPO Training Is <span className="text-gradient-cq">Different</span></h2>
            <p className="text-muted-foreground mt-3">World-class training. Indian soil. No passport required.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { emoji: "🎖️", title: "Retired Military Commander as Trainer", desc: "Your trainer is a decorated retired military officer with active operational experience across 50+ nations. This is not classroom theory — this is real-world battlefield-tested expertise delivered directly to you." },
              { emoji: "🌍", title: "International Certification — SEA Recognized", desc: "Receive a globally recognized Close Protection Officer Certificate certified by Southeast Asian authorities — valid for employment in UAE, India, UK, Southeast Asia and 50+ countries worldwide." },
              { emoji: "🇮🇳", title: "Train in India — Save Lakhs", desc: "Indians previously had to travel to UK, USA or Europe spending ₹5–10 Lakhs just for travel and accommodation. Now the world comes to you — same international standard, right here in India." },
              { emoji: "⚠️", title: "Limited Seats — Exclusive Batches", desc: "Each batch is deliberately kept small for maximum individual attention and real simulation training. Confirmation required 1–2 months in advance. Once full — doors close." },
              { emoji: "🏋️", title: "100% Practical & Simulation Based", desc: "Hands-on drills, real formations, live scenarios, vehicle security exercises, tactical communication and emergency response — not just theory. You graduate ready to deploy." },
              { emoji: "🤝", title: "Global Network & Career Placement Support", desc: "Upon certification, you join OceanGTA's global alumni network with connections across UAE, India, Singapore, UK and 50+ nations — opening doors to international CPO career opportunities." },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl border border-border bg-card p-6 hover:shadow-xl transition-shadow group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-cq" />
                <span className="text-3xl block mb-4">{f.emoji}</span>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHO IS THIS FOR */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">This Training Is <span className="text-gradient-cq">Built For You</span></h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {audience.map((a, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                  <span className="text-2xl flex-shrink-0 mt-1">{a.emoji}</span>
                  <div>
                    <h3 className="font-bold text-foreground text-sm sm:text-base">{a.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hidden lg:block">
              <img src={cpoTeam} alt="Professional security team" className="rounded-2xl shadow-2xl w-full object-cover aspect-square" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — 10-DAY CURRICULUM */}
      <section className="py-16 sm:py-24 bg-[hsl(var(--ocean-deep))]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">10-Day Elite <span className="text-gradient-cq">CPO Training Program</span></h2>
            <p className="text-primary-foreground/60 mt-3 text-sm sm:text-base">Every day is designed to transform you from trainee to deployment-ready professional</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {curriculum.map((day, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card rounded-xl p-5 sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-cq" />
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-3">{day.days}</span>
                <h3 className="font-bold text-primary-foreground text-sm sm:text-base mb-3">{day.title}</h3>
                <ul className="space-y-2">
                  {day.items.map((item, j) => (
                    <li key={j} className="text-primary-foreground/70 text-xs sm:text-sm flex gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 7 — INDIA OPPORTUNITY STRIP */}
      <section className="py-16 sm:py-24 gradient-cq">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-foreground">🇮🇳 A Historic Opportunity for Indians</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Before OceanGTA CPO Training", items: ["Travel to UK/USA/Europe required", "₹5–10 Lakhs in travel costs alone", "Language and cultural barriers", "Months of waiting for visa and admission"], color: "bg-[hsl(220,30%,12%)]" },
              { title: "With OceanGTA CPO Training", items: ["Train in India — zero travel cost", "Same international SEA certification", "Trained by a military commander in your region", "Enroll 1–2 months in advance — limited seats"], color: "bg-[hsl(220,30%,8%)]" },
              { title: "Career After Certification", items: ["Work in UAE, India, Singapore, UK", "Earn $75,000–$150,000+ annually", "Protect diplomats, corporates, celebrities, HNIs", "Join a global network of certified CPOs"], color: "bg-[hsl(220,30%,12%)]" },
            ].map((col, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`${col.color} rounded-xl p-6`}>
                <h3 className="font-bold text-white text-base sm:text-lg mb-4">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-white/90 text-sm flex gap-2">

                      <span className="flex-shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — WHO HIRES CPOs */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Who Hires Certified CPOs <span className="text-gradient-cq">in India & Globally</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {employers.map((e, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-xl border border-border bg-card p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-cq mb-3 group-hover:scale-110 transition-transform">
                  <e.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-foreground">{e.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — GLOBAL STATS STRIP */}
      <section className="py-14 sm:py-20 bg-[hsl(var(--ocean-deep))]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground">The Numbers <span className="text-gradient-cq">Don't Lie</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { value: "$24.1B", label: "Global VIP Protection Market (2024)" },
              { value: "11.7%", label: "India Security Market CAGR" },
              { value: "8.1%", label: "Asia Pacific Growth — Fastest in World" },
              { value: "50+", label: "Nations Where Our Trainer Has Operated" },
              { value: "$150K+", label: "Top CPO Annual Salary Globally" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-xl p-4 sm:p-5 text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1">{s.value}</div>
                <p className="text-primary-foreground/60 text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — ENROLLMENT & URGENCY */}
      <section className="py-16 sm:py-24 bg-[hsl(var(--ocean-dark))] border-t-4 border-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--sun-orange)/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Your Seat Is Waiting —<br /> <span className="text-gradient-cq">But Not For Long</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm sm:text-base leading-relaxed mb-8">
              Each CPO batch has limited seats and confirmation is required 1–2 months in advance. International participants are already registering. Secure your place today before this batch closes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              {[
                { emoji: "🔴", text: "Next Batch: Filling Fast" },
                { emoji: "⏰", text: "Confirmation Deadline: 1–2 Months Before Start Date" },
                { emoji: "🌍", text: "Participants Joining from India, UAE & Southeast Asia" },
              ].map((u) => (
                <span key={u.text} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-primary-foreground/90 text-xs font-medium">
                  {u.emoji} {u.text}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20reserve%20my%20seat%20for%20the%20CPO%20training.%20Please%20share%20batch%20dates%20and%20details." target="_blank" rel="noopener noreferrer" className="gradient-cq text-accent-foreground px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:opacity-90 transition-opacity min-h-[48px] text-center">
                Reserve Your Seat on WhatsApp
              </a>
              <Link to="/?scrollTo=contact" className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-bold text-base hover:bg-primary-foreground/10 transition-colors min-h-[48px] text-center">
                Send Detailed Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloseProtection;
