import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Instagram, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", org: "", message: "" });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Open WhatsApp FIRST (must be synchronous from user gesture to avoid popup blocker)
      const whatsappMessage = encodeURIComponent(
        `New Inquiry from OceanGTA Website:\n\nName: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nOrganization: ${form.org}\nMessage: ${form.message}`
      );
      const link = document.createElement("a");
      link.href = `https://wa.me/919319165254?text=${whatsappMessage}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();

      // 2. Post to Formspree
      await fetch("https://formspree.io/f/mreyplrv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          whatsapp: form.whatsapp,
          organization: form.org,
          message: form.message,
        }),
      });

      toast({ title: "Inquiry Sent", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", whatsapp: "", org: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="send-inquiry" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-widest uppercase font-semibold text-accent">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-bold mt-3 text-foreground">
              Ready to Rewire Your Organization?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
              Whether you're a government agency, PSU, or corporate enterprise, our programs are tailored to transform your teams. Join an elite network of sovereign agencies and global enterprises. Our master consultants are ready to architect a customized transformation for your leadership, security, or technical teams.
            </p>

            {/* Location Cards */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dubai HQ */}
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-2xl mb-2">🌍</p>
                <h3 className="text-base font-bold text-accent">Global Headquarters</h3>
                <p className="text-xs text-muted-foreground mb-3">Dubai, UAE</p>
                <p className="text-sm text-foreground leading-relaxed">
                  #336, Seasons Community, JVC, Dubai, United Arab Emirates
                </p>
                <a href="mailto:business@oceangta.com" className="flex items-center gap-2 mt-3 text-sm text-foreground hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 shrink-0" /> business@oceangta.com
                </a>
                <p className="text-xs text-muted-foreground mt-3">Available Mon–Fri, 9AM–6PM GST</p>
              </div>

              {/* India Office */}
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-2xl mb-2">🇮🇳</p>
                <h3 className="text-base font-bold text-accent">India Office</h3>
                <p className="text-xs text-muted-foreground mb-3">Gurugram, India</p>
                <p className="text-sm text-foreground leading-relaxed">
                  4th Floor, The Galaxy Hotel, Behind 32nd Milestone, off NH 8, Sector 15, Gurugram, Haryana — 122001
                </p>
                <p className="text-xs text-muted-foreground mt-3">Available Mon–Fri, 10AM–6PM IST</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a href="https://www.oceangta.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors min-h-[44px]">
                <Globe className="w-5 h-5 shrink-0" />
                <span className="text-sm">www.oceangta.com</span>
              </a>
              <a href="https://www.instagram.com/oceangta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors min-h-[44px]">
                <Instagram className="w-5 h-5 shrink-0" />
                <span className="text-sm">@oceangta</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-5 sm:p-8 space-y-4 sm:space-y-5"
          >
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-base focus:ring-2 focus:ring-accent focus:outline-none min-h-[48px]"
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
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-base focus:ring-2 focus:ring-accent focus:outline-none min-h-[48px]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">WhatsApp Number</label>
              <input
                type="tel"
                required
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-base focus:ring-2 focus:ring-accent focus:outline-none min-h-[48px]"
                placeholder="Your WhatsApp number with country code"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Organization</label>
              <input
                type="text"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-base focus:ring-2 focus:ring-accent focus:outline-none min-h-[48px]"
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
                className="w-full mt-1 px-4 py-3 rounded-md bg-muted border border-border text-foreground text-base focus:ring-2 focus:ring-accent focus:outline-none resize-none"
                placeholder="Tell us about your training needs..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full gradient-cq text-accent-foreground py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity min-h-[48px] disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {submitting ? "Sending..." : "Send Inquiry"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
