"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DISCIPLINES } from "@/lib/constants";
import FormDrawer from "@/components/FormDrawer";

function ContactFormContent() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    cityState: "",
    discipline: "",
    bio: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/register-interest", {
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-2xl p-10 bg-gradient-brand text-center"
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
            <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">YOU&apos;RE ON THE LIST</h3>
            <p className="font-dm text-cream/80 text-sm">
              We&apos;ve received your interest. We&apos;ll be in touch when audition dates are announced.
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
            <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Email Address *</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Age *</label>
              <input type="number" name="age" required min="6" max="99" value={form.age} onChange={handleChange} placeholder="Your age" className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">City, State *</label>
              <input type="text" name="cityState" required value={form.cityState} onChange={handleChange} placeholder="e.g. Washington, DC" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Primary Discipline *</label>
            <select name="discipline" required value={form.discipline} onChange={handleChange} className={inputClass + " cursor-pointer"}>
              <option value="" disabled>Select your discipline</option>
              {DISCIPLINES.map((d) => (
                <option key={d} value={d} className="bg-dark text-cream">{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-dm text-cream/50 tracking-widest uppercase mb-2">Performance Background</label>
            <textarea name="bio" value={form.bio} onChange={handleChange} rows={4} placeholder="Tell us about your training history and what you&apos;re looking for..." className={inputClass + " resize-none"} />
          </div>

          {status === "error" && (
            <p className="text-red text-sm font-dm">
              {errorMsg}{" "}
              <a href="mailto:info@epcperform.com" className="underline underline-offset-2">info@epcperform.com</a>
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </span>
            ) : "Submit Interest"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export default function ContactForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#register") setOpen(true);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <section id="register" className="relative py-20 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.1)_0%,_transparent_60%)] pointer-events-none" />
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-purple via-magenta to-red rounded-full mb-10" />
        <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">Take the First Step</p>
        <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest mb-4">
          REGISTER <span className="text-gradient">YOUR INTEREST</span>
        </h2>
        <p className="font-dm text-cream/60 text-base max-w-sm mx-auto mb-8">
          Auditions are coming to the Washington DC area. Be the first to know when dates are announced.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="inline-block px-10 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
        >
          Register Your Interest
        </button>
      </div>

      <FormDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="REGISTER INTEREST"
        subtitle="Be first to know when audition dates drop."
      >
        <ContactFormContent />
      </FormDrawer>
    </section>
  );
}
