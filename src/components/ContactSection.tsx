import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry Sent", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", org: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold mt-3 text-foreground">
              Ready to Rewire Your Organization?
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Whether you're a government agency, PSU, or corporate enterprise, our programs are tailored to transform your teams. Join an elite network of sovereign agencies and global enterprises. Our master consultants are ready to architect a customized transformation for your leadership, security, or technical teams.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:business@oceangta.com"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">business@oceangta.com</span>
              </a>
              <a
                href="https://www.oceangta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm">www.oceangta.com</span>
              </a>
              <a
                href="https://www.instagram.com/oceangta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@oceangta</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-8 space-y-5"
          >
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Organization</label>
              <input
                type="text"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Company or government agency"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none resize-none"
                placeholder="Tell us about your training needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-cq text-accent-foreground py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
