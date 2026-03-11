import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SendInquirySection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", whatsapp: "", email: "", org: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
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
      setForm({ name: "", whatsapp: "", email: "", org: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="send-inquiry" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-accent">
            Get Started
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-bold mt-3 text-foreground">
            Send Us an Inquiry
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Tell us about your training needs and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-5 sm:p-8 space-y-4 sm:space-y-5"
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
    </section>
  );
};

export default SendInquirySection;
