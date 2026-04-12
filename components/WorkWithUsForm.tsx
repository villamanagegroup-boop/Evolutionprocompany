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

export default function WorkWithUsForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
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
      const res = await fetch("/api/work-with-us", {
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
    <section id="connect" className="py-20 border-t border-white/10 bg-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-3">
            Quick Intro
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
            LET&apos;S <span className="text-gradient">CONNECT</span>
          </h2>
          <p className="mt-3 font-dm text-cream/55 text-sm max-w-sm mx-auto">
            Not ready for a full application? Drop us a quick intro — name,
            role of interest, and a line or two about yourself.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-2xl p-10 bg-gradient-brand text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-5"
                >
                  <svg className="w-7 h-7 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="font-bebas text-3xl text-cream tracking-widest mb-2">
                  GOT IT — WE&apos;LL BE IN TOUCH
                </h3>
                <p className="font-dm text-cream/80 text-sm">
                  We received your intro. Ready to go further?{" "}
                  <a href="#apply" className="underline underline-offset-2">
                    Submit a full application below.
                  </a>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 p-7 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
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
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Role of Interest *</label>
                <select name="role" required value={form.role} onChange={handleChange} className={inputClass + " cursor-pointer"}>
                  <option value="" disabled>Select a role</option>
                  {ROLES.map((r) => (
                    <option key={r} value={r} className="bg-dark text-cream">{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Brief Intro</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="A line or two about who you are and what you bring..."
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
                className="w-full py-3.5 bg-gold text-dark font-dm font-bold text-sm rounded-lg hover:bg-gold/90 hover:shadow-[0_0_24px_rgba(245,200,66,0.35)] transition-all duration-200 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Intro"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
