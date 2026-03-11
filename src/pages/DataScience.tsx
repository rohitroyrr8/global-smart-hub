import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, X as XIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUpNumber from "@/components/CountUpNumber";

const WHATSAPP_GENERAL = "https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20know%20more%20about%20the%20Data%20Science%20%26%20Big%20Data%20program.%20Please%20share%20details.";
const WHATSAPP_BASIC = "https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20enroll%20in%20the%203-Month%20Data%20Science%20Basic%20Program.%20Please%20share%20details.";
const WHATSAPP_ADVANCED = "https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20enroll%20in%20the%206-Month%20Advanced%20Data%20Science%20Program.%20Please%20share%20details.";
const WHATSAPP_ENROLL = "https://wa.me/919319165254?text=Hi%20OceanGTA!%20I%20want%20to%20enroll%20in%20the%20Data%20Science%20program.%20Please%20share%20batch%20details%20and%20fee%20structure.";

const tickerText = "$862 Billion — Global Big Data Market by 2030 📊 · 2.5 Quintillion bytes of data created EVERY DAY ⚡ · India to create 11 Million Data Jobs by 2026 · Only 30% of collected data is ever analyzed — creating massive opportunity 🔥 · Data Scientist = #1 Most In-Demand Job Globally · ₹1 Crore+ annual salary at senior leadership levels · 20.4% CAGR — Data Science is the fastest growing market on earth · 95% of businesses use data to make decisions but lack skilled analysts";

const techGrid = [
  { row: "Programming", tools: ["Python", "R", "SQL", "Scala"] },
  { row: "Data & ML", tools: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow"] },
  { row: "Big Data", tools: ["Apache Spark", "Hadoop", "Hive", "Kafka"] },
  { row: "Visualization", tools: ["Power BI", "Tableau", "Matplotlib", "Seaborn"] },
  { row: "Cloud & Database", tools: ["AWS", "Azure", "Google Cloud", "MongoDB"] },
];

const roleTiles = [
  { emoji: "🎓", title: "Fresh Graduates", desc: "Any degree. Any background. Data science is open to all who commit to learning.", dark: true },
  { emoji: "💻", title: "Software Developers & Engineers", desc: "Add data science to your coding skills and multiply your market value instantly.", dark: false },
  { emoji: "📊", title: "Business Analysts & Finance Professionals", desc: "Upgrade from Excel and reports to real predictive analytics and ML models.", dark: true },
  { emoji: "🏥", title: "Healthcare & Pharma Professionals", desc: "Healthcare data science is the fastest growing sub-sector. Your domain expertise + data skills = priceless.", dark: false },
  { emoji: "🏢", title: "Corporate Managers & Decision Makers", desc: "Stop relying on your data team. Understand and drive data decisions yourself.", dark: false },
  { emoji: "🔄", title: "Career Switchers from Any Field", desc: "Thousands of teachers, lawyers, artists and more have successfully switched to data science. You can too.", dark: true },
];

const comparisonRows = [
  { feature: "Learning Style", typical: "Pre-recorded videos", ocean: "Live interactive sessions" },
  { feature: "Trainer", typical: "Unknown content creator", ocean: "International certified trainer" },
  { feature: "Interview Prep", typical: "None or basic", ocean: "Full mock interviews with feedback" },
  { feature: "Projects", typical: "Generic datasets", ocean: "Real industry datasets" },
  { feature: "Duration", typical: "Self-paced (often abandoned)", ocean: "Structured 3 or 6 months" },
  { feature: "Certification", typical: "Platform certificate only", ocean: "Internationally recognized" },
  { feature: "Career Support", typical: "None", ocean: "Placement support + global network" },
  { feature: "Mentorship", typical: "Forum Q&A", ocean: "Direct trainer access" },
];

const indianCompanies = ["TCS", "Infosys", "Wipro", "HCL", "Flipkart", "Paytm", "Zomato", "HDFC Bank", "Reliance", "Bajaj Finserv"];
const globalCompanies = ["Google", "Amazon", "Microsoft", "IBM", "Meta", "Netflix", "Uber", "Accenture", "Deloitte", "McKinsey"];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const DataScience = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ===== SECTION 1 — HERO ===== */}
      <section className="ds-grid-bg relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div {...fadeUp}>
            {/* Pill badge */}
            <span className="inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-wide text-[#0EA5E9] border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 ds-glow-teal mb-8">
              📊 Globally Certified · International Trainer · 3-Month & 6-Month Programs
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight ds-glow-text mb-6">
              Turn Data Into Your Greatest Career Weapon
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Master Data Science & Big Data from zero to interview-ready. Two structured programs — 3 months Basic and 6 months Advanced — designed to launch you into one of the world's highest-paying careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <a href={WHATSAPP_GENERAL} target="_blank" rel="noopener noreferrer"
                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-semibold px-8 py-4 rounded-lg text-base min-h-[48px] transition-all ds-glow-teal">
                Enroll Now — WhatsApp Us
              </a>
              <Link to="/?scrollTo=send-inquiry"
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-base min-h-[48px] transition-all">
                Send Detailed Inquiry
              </Link>
            </div>

            {/* 4 stat badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: "📈", value: 862, prefix: "$", suffix: "B", label: "Big Data Market by 2030" },
                { emoji: "💰", value: 48, prefix: "₹", suffix: "+ LPA", label: "Senior Data Scientist Salary India" },
                { emoji: "🌍", value: 20.4, suffix: "% CAGR", label: "Fastest Growing Tech Sector", decimals: 1 },
                { emoji: "🎯", value: 11, suffix: "M", label: "New Data Jobs by 2026 in India" },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-[#0EA5E9]/20 rounded-xl p-4 text-center backdrop-blur-sm">
                  <span className="text-lg">{s.emoji}</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0EA5E9] mt-1">
                    <CountUpNumber end={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} decimals={s.decimals || 0} />
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 2 — LIVE DATA TICKER ===== */}
      <div className="bg-[#0c1829] py-3 overflow-hidden border-y border-[#0EA5E9]/20">
        <div className="ds-ticker whitespace-nowrap">
          <span className="text-[#0EA5E9] text-sm font-mono tracking-wide">
            {tickerText} &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; {tickerText} &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* ===== SECTION 3 — THE DATA OPPORTUNITY ===== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              The World is Drowning in Data.<br />The People Who Can Read It Are Getting Rich.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-12 max-w-3xl">
              Every company on earth generates data. Less than 0.5% of it is ever analyzed. The gap between data created and data understood is the greatest career opportunity of our generation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { value: 862, prefix: "$", suffix: "B", label: "Global Big Data Market Size by 2030", source: "Grand View Research" },
              { value: 11, suffix: "M", label: "New Data Science jobs projected in India by 2026", source: "" },
              { value: 48, prefix: "₹", suffix: " LPA+", label: "Senior Data Scientist salary in India", source: "Ambitionbox 2025" },
              { value: 20.4, suffix: "%", label: "CAGR of Data Science Platform Market — fastest on earth", source: "Fortune Business Insights", decimals: 1 },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0EA5E9] mb-3">
                  <CountUpNumber end={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} decimals={s.decimals || 0} />
                </div>
                <p className="text-gray-700 text-sm font-medium mb-2">{s.label}</p>
                {s.source && <p className="text-gray-400 text-xs">{s.source}</p>}
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-[#0EA5E9] font-semibold italic text-lg max-w-3xl">
            "By the time most people realize data science is the future — the jobs will already be taken. Start now."
          </motion.p>
        </div>
      </section>

      {/* ===== SECTION 4 — TWO PROGRAMS ===== */}
      <section className="py-16 sm:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Two Programs. One Goal. Your Dream Career.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Whether you are starting from zero or ready to go deep — we have the perfect structured path for you.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <motion.div {...fadeUp} className="bg-[#111] rounded-2xl border border-gray-800 overflow-hidden relative">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#0EA5E9]" />
              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold mb-4">🟢 BEGINNER TO PROFESSIONAL</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Data Science Foundations</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mt-2 mb-2">3 Months</span>
                <p className="text-gray-400 italic mb-6">From Zero to Job-Ready in 90 Days</p>

                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">What You Will Learn</h4>
                <ul className="space-y-2 mb-6">
                  {["Python Programming for Data Science", "Statistics & Mathematics for Data Analysis", "SQL & Database Management", "Data Wrangling & Cleaning with Pandas", "Data Visualization (Matplotlib, Seaborn, Power BI)", "Machine Learning Fundamentals", "Exploratory Data Analysis (EDA)", "Real-World Projects & Case Studies", "Resume Building & LinkedIn Optimization", "Mock Interview Preparation — Basic Level"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-[#0EA5E9] mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <p><span className="text-white font-semibold">Who it's for:</span> Students, freshers, career switchers, professionals with no prior data experience</p>
                  <p><span className="text-white font-semibold">Outcome:</span> Job-ready as Data Analyst / Junior Data Scientist</p>
                  <p><span className="text-white font-semibold">Salary expectation:</span> <span className="text-[#0EA5E9] font-bold">₹5–10 LPA</span></p>
                </div>

                <a href={WHATSAPP_BASIC} target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-semibold py-4 rounded-lg min-h-[48px] transition-all">
                  Enroll in Basic Program
                </a>
              </div>
            </motion.div>

            {/* Advanced */}
            <motion.div {...fadeUp} className="bg-[#111] rounded-2xl border border-gray-800 overflow-hidden relative">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-400 to-orange-500" />
              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-4">🔥 PROFESSIONAL TO EXPERT</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Advanced Data Science & Big Data</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mt-2 mb-2">6 Months</span>
                <p className="text-gray-400 italic mb-6">Deep Expertise. Interview Ready. Career Guaranteed.</p>

                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">What You Will Learn</h4>
                <p className="text-xs text-amber-400 font-semibold mb-2">Everything in Basic Program PLUS:</p>
                <ul className="space-y-2 mb-6">
                  {["Advanced Machine Learning & Deep Learning", "Big Data Technologies (Hadoop, Spark, Hive)", "Cloud Platforms for Data (AWS, Azure, GCP)", "Natural Language Processing (NLP)", "AI & Generative AI Fundamentals", "Data Engineering & ETL Pipelines", "Advanced SQL & NoSQL Databases", "Business Intelligence & Advanced Power BI / Tableau", "Capstone Project — Real Industry Dataset", "Full Interview Preparation — Mock Interviews with Feedback", "Career Placement Support & Global Network Access"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <p><span className="text-white font-semibold">Who it's for:</span> Graduates, working professionals, engineers, anyone serious about a high-paying data career</p>
                  <p><span className="text-white font-semibold">Outcome:</span> Senior Data Scientist / Data Engineer / ML Engineer ready</p>
                  <p><span className="text-white font-semibold">Salary expectation:</span> <span className="text-amber-400 font-bold">₹10–48 LPA+</span></p>
                </div>

                <a href={WHATSAPP_ADVANCED} target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-400 to-orange-500 hover:opacity-90 text-gray-900 font-semibold py-4 rounded-lg min-h-[48px] transition-all">
                  Enroll in Advanced Program
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — SALARY PROGRESSION ===== */}
      <section className="py-16 sm:py-24 bg-[#0c1829]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">What Happens to Your Salary After This Program</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { stage: "Before Training", title: "Average Indian Graduate Salary", salary: "₹3–4 LPA", color: "bg-gray-600" },
              { stage: "After 3-Month Basic Program", title: "Junior Data Analyst / Data Scientist Fresher", salary: "₹5–10 LPA", color: "bg-[#0EA5E9]" },
              { stage: "After 6-Month Advanced Program", title: "Mid-Level Data Scientist", salary: "₹10–22 LPA", color: "bg-[#06b6d4]" },
              { stage: "With 3–5 Years Experience", title: "Senior Data Scientist", salary: "₹22–48 LPA", color: "bg-[#0891b2]" },
              { stage: "At Leadership Level", title: "Head of Data Science / Principal Scientist", salary: "₹1 Crore+ per annum", color: "bg-gradient-to-r from-amber-400 to-orange-500" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="flex items-stretch gap-4 sm:gap-6 mb-0">
                {/* Vertical line & dot */}
                <div className="flex flex-col items-center w-8 flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full ${step.color} border-2 border-[#0c1829] z-10 flex-shrink-0`} />
                  {i < 4 && <div className="w-0.5 flex-1 bg-gray-700" />}
                </div>
                <div className="pb-8">
                  <span className="text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">{step.stage}</span>
                  <h3 className="text-white font-bold text-lg sm:text-xl">{step.title}</h3>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0EA5E9]">{step.salary}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-6">Source: Glassdoor 2026 · Ambitionbox 2025 · Analytixlabs Research</p>
          <motion.p {...fadeUp} className="text-center text-[#0EA5E9] font-semibold italic text-lg mt-8 max-w-3xl mx-auto">
            "Data Science is the only career in India where a fresher can triple their expected salary within 12 months of proper training."
          </motion.p>
        </div>
      </section>

      {/* ===== SECTION 6 — TOOLS & TECHNOLOGIES ===== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Industry Tools You Will Master</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The same technologies used by Google, Amazon, Microsoft and top Indian tech companies</p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {techGrid.map((row, ri) => (
              <motion.div key={ri} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ri * 0.08 }}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {row.tools.map(tool => (
                    <div key={tool} className="ds-tech-tile">
                      <p className="font-bold text-gray-900 text-sm sm:text-base">{tool}</p>
                      <p className="text-gray-400 text-xs mt-1">{row.row}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — WHO IS THIS FOR ===== */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Your Background Doesn't Matter. Your Drive Does.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {roleTiles.map((tile, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`rounded-2xl p-6 sm:p-8 ${tile.dark ? "bg-[#0c1829] text-white" : "bg-white text-gray-900 border border-gray-200"}`}>
                <span className="text-4xl block mb-4">{tile.emoji}</span>
                <h3 className="text-lg font-bold mb-2">{tile.title}</h3>
                <p className={`text-sm leading-relaxed ${tile.dark ? "text-gray-400" : "text-gray-500"}`}>{tile.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — COMPANIES HIRING ===== */}
      <section className="py-16 sm:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">These Companies Are Looking for You Right Now</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6 mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              {indianCompanies.map(c => (
                <span key={c} className="px-5 py-3 rounded-lg bg-white/5 border border-gray-700 text-gray-300 text-sm font-medium hover:border-[#0EA5E9]/50 transition-colors">{c}</span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {globalCompanies.map(c => (
                <span key={c} className="px-5 py-3 rounded-lg bg-[#0EA5E9]/5 border border-[#0EA5E9]/20 text-[#0EA5E9] text-sm font-medium hover:border-[#0EA5E9]/50 transition-colors">{c}</span>
              ))}
            </div>
          </div>

          <motion.p {...fadeUp} className="text-center text-white font-semibold text-base sm:text-lg max-w-3xl mx-auto">
            Every single company above is actively hiring data scientists in India right now. The only question is whether you have the certification they require.
          </motion.p>
        </div>
      </section>

      {/* ===== SECTION 9 — COMPARISON TABLE ===== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Why OceanGTA Data Science Program Stands Apart</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0EA5E9] text-white">
                  <th className="px-4 py-3 text-left font-bold rounded-tl-xl">Feature</th>
                  <th className="px-4 py-3 text-left font-bold">Typical Online Course</th>
                  <th className="px-4 py-3 text-left font-bold rounded-tr-xl">OceanGTA Program</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-4 py-3 text-gray-500">
                      <span className="inline-flex items-center gap-1.5"><XIcon className="w-4 h-4 text-red-500" />{row.typical}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-medium">
                      <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" />{row.ocean}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10 — GLOBAL DATA STATS WALL ===== */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0EA5E9] to-[#0c1829]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">The Numbers Behind the World's Biggest Career Opportunity</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { value: 2.5, suffix: " Quintillion", label: "bytes of data created every single day worldwide", decimals: 1 },
              { value: 1.08, prefix: "$", suffix: " Trillion", label: "Big Data & Analytics market by 2032 · Industry Research", decimals: 2 },
              { value: 1, prefix: "₹", suffix: " Crore+", label: "Annual salary at Head of Data Science level in India" },
              { value: 95, suffix: "%", label: "of businesses rely on data for decisions — but lack skilled analysts" },
              { value: 11, suffix: " Million", label: "new data science jobs projected in India by 2026" },
              { value: 0.5, suffix: "%", label: "of all data collected is ever analyzed — the opportunity is massive", decimals: 1 },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  <CountUpNumber end={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} decimals={s.decimals || 0} />
                </div>
                <p className="text-white/70 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 11 — FINAL CTA (Split Design) ===== */}
      <section className="grid md:grid-cols-2 min-h-[400px]">
        {/* Left — Dark */}
        <div className="bg-[#0c1829] flex items-center justify-center p-8 sm:p-14">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">Your Data Career Starts Today.</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              3-month basic or 6-month advanced. Interview preparation included. International certification. Global trainer. Real projects. Real results.
            </p>
          </motion.div>
        </div>

        {/* Right — Teal */}
        <div className="bg-[#0EA5E9] flex items-center justify-center p-8 sm:p-14">
          <motion.div {...fadeUp} className="w-full max-w-sm space-y-4">
            <a href={WHATSAPP_ENROLL} target="_blank" rel="noopener noreferrer"
              className="block w-full text-center bg-white text-gray-900 font-bold px-8 py-4 rounded-lg text-base min-h-[48px] hover:bg-gray-100 transition-all">
              📱 WhatsApp to Enroll Now
            </a>
            <Link to="/?scrollTo=send-inquiry"
              className="block w-full text-center border-2 border-[#0c1829] text-[#0c1829] font-bold px-8 py-4 rounded-lg text-base min-h-[48px] hover:bg-[#0c1829]/10 transition-all">
              📋 Send Detailed Inquiry
            </Link>
            <p className="text-white/80 text-xs text-center mt-4">⚡ Limited seats per batch · Reply within 24 hours</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataScience;
