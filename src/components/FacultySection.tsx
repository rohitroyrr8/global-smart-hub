import { motion } from "framer-motion";
import trainerVasu from "@/assets/trainer-vasu.jpg";
import trainerVijay from "@/assets/trainer-vijay.jpg";
import trainerTaco from "@/assets/trainer-taco.jpg";
import trainerRohit from "@/assets/trainer-rohit.jpg";
import trainerData from "@/assets/trainer-data.jpg";
import trainerArvind from "@/assets/trainer-arvind.png";

const trainers = [
  {
    name: "G. Vasu Thevan",
    role: "CQ Founder & Master Coach",
    exp: "30+ Years",
    desc: "Visionary founder of the CQ framework. Fortune 500 & Government coach specializing in cross-cultural dynamics and organizational transformation.",
    image: trainerVasu,
    accent: "gradient-cq",
  },
  {
    name: "E. Vijay",
    role: "Fleet Safety & Defensive Driving Expert",
    exp: "27 Years",
    desc: "Veteran instructor with international certifications in heavy vehicle operations, tactical driving, and national road safety curriculum development.",
    image: trainerVijay,
    accent: "gradient-teal",
  },
  {
    name: "Taco Heidinga",
    role: "Strategic Growth & Innovation Lead",
    exp: "20 Years",
    desc: "Global transformation expert driving organizational development across 29 countries. Specialist in sales mastery and revenue acceleration.",
    image: trainerTaco,
    accent: "gradient-cq",
  },
  {
    name: "Dr. Arvind O. Singh",
    role: "Ayurveda Consultant & Wellness Coach",
    exp: "17+ Years",
    desc: "M.D. Medicine (Ayurveda) specialist in chronic and lifestyle disorder management. Integrates authentic Ayurveda with personalized wellness guidance across India and internationally.",
    image: trainerArvind,
    accent: "gradient-teal",
  },
  {
    name: "Rohit Roy",
    role: "Co-founder & CTO | Web3 & Fintech",
    exp: "10+ Years",
    desc: "Visionary technologist building at the intersection of Web3, AI, and financial technology. Background with NPCI, IBM, and IIT Hyderabad.",
    image: trainerRohit,
    accent: "gradient-ocean",
  },
  {
    name: "Saurabh Gupta",
    role: "Senior Data Engineer | Finance & Logistics",
    exp: "8+ Years",
    desc: "Expert in building robust data pipelines and scalable analytics solutions across the modern data stack for finance and logistics sectors.",
    image: trainerData,
    accent: "gradient-ocean",
  },
];

const FacultySection = () => {
  return (
    <section id="faculty" className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-accent">
            International Faculty
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-bold mt-3 text-foreground">
            Meet Our Elite Trainers
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            All trainers are international experts with 10–30+ years of experience from outside India, bringing world-class methodologies to every program.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${t.accent}`} />
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                <span className="text-xs font-bold text-accent tracking-wider">{t.exp}</span>
                <h3 className="font-sans font-bold text-base sm:text-lg mt-1 text-foreground">{t.name}</h3>
                <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
                <p className="text-sm text-muted-foreground mt-2 sm:mt-3 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
