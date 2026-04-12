"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SUBJECTS = [
  "General Inquiry",
  "Audition Information",
  "Partnership & Sponsorship",
  "Rink Partnership",
  "Media & Press",
  "Membership Questions",
  "Work With Us",
  "Other",
];

export default function ContactPageForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
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
      const res = await fetch("/api/contact", {
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
              MESSAGE RECEIVED
            </h3>
            <p className="font-dm text-cream/80 text-base max-w-xs mx-auto">
              We&apos;ll get back to you as soon as possible. Thank you for
              reaching out to Evolution Production Company.
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
            <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Email *</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
          </div>

          <div>
            <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Subject *</label>
            <select name="subject" required value={form.subject} onChange={handleChange} className={inputClass + " cursor-pointer"}>
              <option value="" disabled>What&apos;s this about?</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s} className="bg-dark text-cream">{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Message *</label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="How can we help?"
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
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
