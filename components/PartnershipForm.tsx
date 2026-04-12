"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTNERSHIP_TYPES = [
  "Rink Partner",
  "Title Sponsor (Corporate)",
  "Presenting Sponsor (Corporate)",
  "Supporting Sponsor (Corporate)",
  "Media Partner",
  "Community Organization Partner",
  "School / Youth Program Partner",
  "Hospitality Partner",
  "Apparel / Merchandise Partner",
  "Technology / Platform Partner",
  "Other",
];

export default function PartnershipForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/partnerships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again or reach us at");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream font-dm text-sm placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-200";

  return (
    <section id="inquire" className="py-24 md:py-32 bg-dark/90 border-t border-white/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Start the Conversation
          </p>
          <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
            PARTNER <span className="text-gradient">INQUIRY</span>
          </h2>
          <p className="mt-4 font-dm text-cream/55 text-sm max-w-sm mx-auto">
            Tell us about your organization and what kind of partnership
            you have in mind. Every inquiry is reviewed directly by the EPC team.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-2xl p-12 bg-gradient-brand text-center"
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
                <h3 className="font-bebas text-4xl text-cream tracking-widest mb-3">
                  INQUIRY RECEIVED
                </h3>
                <p className="font-dm text-cream/80 text-base max-w-xs mx-auto">
                  We&apos;ll review your inquiry and follow up directly. We look
                  forward to exploring what we can build together.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5 p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">First Name *</label>
                  <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="First name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Last Name *</label>
                  <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Last name" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Organization / Company *</label>
                <input type="text" name="organization" required value={form.organization} onChange={handleChange} placeholder="Your organization name" className={inputClass} />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@organization.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(optional)" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Partnership Type *</label>
                <select name="partnershipType" required value={form.partnershipType} onChange={handleChange} className={inputClass + " cursor-pointer"}>
                  <option value="" disabled>Select a partnership type</option>
                  {PARTNERSHIP_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-dark text-cream">{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Tell Us More</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your organization and what kind of partnership you're envisioning..."
                  className={inputClass + " resize-none"}
                />
              </div>

              {status === "error" && (
                <p className="text-red text-sm font-dm">
                  {errorMsg}{" "}
                  <a href="mailto:info@epcperform.com" className="underline underline-offset-2">
                    info@epcperform.com
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Submit Inquiry"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
