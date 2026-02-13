import { motion } from "framer-motion";
import { Award, Globe, Building2, MapPin } from "lucide-react";

const partnerships = [
  {
    icon: Building2,
    title: "India's MITRA Program",
    desc: "Official training partner for government sector transformation and national skill development.",
  },
  {
    icon: Award,
    title: "SEA HRD Certification",
    desc: "South East Asian HRD-certified standards recognized across ASEAN nations.",
  },
  {
    icon: MapPin,
    title: "Asia-Pacific Hub",
    desc: "Covering Southeast Asia, India, Australia, New Zealand, and emerging markets.",
  },
  {
    icon: Globe,
    title: "South Africa Operations",
    desc: "Strategic base for regional operations serving government and corporate sectors.",
  },
];

const PartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-24 gradient-ocean">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-accent">
            Trust & Partnerships
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 text-primary-foreground">
            Global Reach & Government Partnerships
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerships.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg gradient-teal mx-auto mb-4 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-lg text-primary-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-primary-foreground/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
