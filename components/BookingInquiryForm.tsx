"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormDrawer from "@/components/FormDrawer";

function BookingFormContent() {
  const [form, setForm] = useState({ name: "", email: "", eventType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-dm text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-2xl p-10 bg-gradient-brand text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-6"
            >
              <svg className="w-8 h-8 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">INQUIRY SENT</h3>
            <p className="font-dm text-cream/80 text-sm max-w-xs mx-auto">
              We&apos;ll be in touch shortly to discuss your event. You can also reach us directly at{" "}
              <a href="mailto:bookings@epcperform.com" className="text-gold underline">bookings@epcperform.com</a>.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="font-dm text-cream/40 text-xs tracking-widest uppercase block mb-2">Name / Organization *</label>
            <input type="text" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Your name or organization" className={inputClass} />
          </div>
          <div>
            <label className="font-dm text-cream/40 text-xs tracking-widest uppercase block mb-2">Email *</label>
            <input type="email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="your@email.com" className={inputClass} />
          </div>
          <div>
            <label className="font-dm text-cream/40 text-xs tracking-widest uppercase block mb-2">Event Type</label>
            <input type="text" value={form.eventType} onChange={(e) => setForm((p) => ({ ...p, eventType: e.target.value }))} placeholder="Corporate event, festival, private celebration..." className={inputClass} />
          </div>
          <div>
            <label className="font-dm text-cream/40 text-xs tracking-widest uppercase block mb-2">Tell Us About Your Event</label>
            <textarea rows={4} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} placeholder="Date, location, expected audience, and your vision..." className={inputClass + " resize-none"} />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Submit Inquiry"}
          </button>
          <p className="text-center font-dm text-cream/35 text-xs">
            Or email us directly at{" "}
            <a href="mailto:bookings@epcperform.com" className="text-gold/70 hover:text-gold transition-colors">bookings@epcperform.com</a>
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export default function BookingInquiryForm() {
  const [open, setOpen] = useState(false);

  return (
    <section id="inquiry" className="py-20 border-t border-white/10 text-center">
      <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">Get in Touch</p>
      <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest mb-4">
        BOOKING <span className="text-gradient">INQUIRY</span>
      </h2>
      <p className="font-dm text-cream/60 text-base max-w-md mx-auto mb-8">
        Event planners and organizations interested in working with EPC — tell us about your event and we&apos;ll be in touch.
      </p>
      <button
        onClick={() => setOpen(true)}
        className="inline-block px-10 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
      >
        Request Entertainment
      </button>

      <FormDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="BOOKING INQUIRY"
        subtitle="Tell us about your event and vision."
      >
        <BookingFormContent />
      </FormDrawer>
    </section>
  );
}
