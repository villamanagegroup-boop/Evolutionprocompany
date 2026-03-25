"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "Figure Skating Instructor",
  "Dance Instructor — Contemporary / Modern",
  "Dance Instructor — Ballet",
  "Dance Instructor — Urban / Hip-Hop",
  "Ice Choreographer",
  "NIL Agent / Talent Representative",
  "Former Professional Artist / Performer",
  "Choreographer (Creative Team)",
  "Costume & Wardrobe Designer",
  "Production Stage Manager",
  "Marketing & Social Media",
  "Sponsorship & Partnership Development",
  "Videographer / Content Creator",
  "Administrative Operations",
  "Other",
];

export default function ApplicationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    background: "",
    portfolio: "",
    why: "",
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
      const res = await fetch("/api/apply", {
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
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream font-dm text-sm placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-200";

  return (
    <section id="apply" className="py-20 border-t border-white/10 bg-dark/90">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-3">
            Formal Application
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
            SUBMIT YOUR <span className="text-gradient">APPLICATION</span>
          </h2>
          <p className="mt-3 font-dm text-cream/55 text-sm max-w-sm mx-auto">
            Ready to go all in? This is the full application — background,
            portfolio, and your vision for what you&apos;d build at EPC.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-2xl p-12 bg-gradient-brand text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />
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
                  APPLICATION RECEIVED
                </h3>
                <p className="font-dm text-cream/80 text-base max-w-sm mx-auto">
                  We review every application carefully. Candidates whose
                  background aligns with our direction will hear from us
                  directly.
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

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(optional)" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Role Applying For *</label>
                <select name="role" required value={form.role} onChange={handleChange} className={inputClass + " cursor-pointer"}>
                  <option value="" disabled>Select a role</option>
                  {ROLES.map((r) => (
                    <option key={r} value={r} className="bg-dark text-cream">{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">
                  Professional Background *
                </label>
                <textarea
                  name="background"
                  required
                  value={form.background}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Walk us through your professional background — credentials, training, notable experience, and career highlights..."
                  className={inputClass + " resize-none"}
                />
              </div>

              <div>
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">
                  Portfolio / Links
                </label>
                <input
                  type="text"
                  name="portfolio"
                  value={form.portfolio}
                  onChange={handleChange}
                  placeholder="Website, Instagram, LinkedIn, reel link, etc."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">
                  Why EPC? What Would You Build Here?
                </label>
                <textarea
                  name="why"
                  value={form.why}
                  onChange={handleChange}
                  rows={4}
                  placeholder="This is your pitch. Tell us what draws you to EPC specifically and what you'd do with the opportunity..."
                  className={inputClass + " resize-none"}
                />
              </div>

              {status === "error" && <p className="text-red text-sm font-dm">{errorMsg}</p>}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Full Application"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
