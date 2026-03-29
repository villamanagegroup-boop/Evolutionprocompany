"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MEMBERSHIP_TIERS } from "@/lib/constants";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Membership() {
  return (
    <section id="membership" className="py-24 md:py-32 bg-dark/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Investment
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              MEMBERSHIP <span className="text-gradient">OPTIONS</span>
            </h2>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-xl mx-auto">
              Choose the membership path that best fits your goals, experience, and level of involvement within the company.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {MEMBERSHIP_TIERS.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.15}>
              <div
                className={`group relative h-full rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-all duration-300 ${
                  tier.featured
                    ? "bg-gradient-brand text-cream shadow-[0_8px_60px_rgba(123,47,190,0.4)]"
                    : "border border-white/10 bg-white/5 hover:border-gold/40 hover:shadow-[0_8px_40px_rgba(245,200,66,0.1)]"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-dark text-xs font-dm font-bold rounded-full tracking-widest uppercase">
                    Optional Upgrade
                  </div>
                )}

                <h3 className="font-bebas text-3xl text-cream tracking-widest mb-1">
                  {tier.name}
                </h3>
                <p
                  className={`font-dm text-sm mb-4 ${tier.featured ? "text-cream/80" : "text-cream/60"}`}
                >
                  {tier.description}
                </p>
                <p
                  className={`font-dm text-xs italic mb-6 ${tier.featured ? "text-gold/80" : "text-cream/40"}`}
                >
                  Members will receive full transparent payment information during the audition process.
                </p>

                <ul className="space-y-3 mb-6 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm font-dm ${tier.featured ? "text-cream/90" : "text-cream/70"}`}
                    >
                      <span className="text-gold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {"castingNote" in tier && tier.castingNote && (
                  <p className="font-dm text-xs text-cream/50 italic mb-6 leading-relaxed border-t border-white/15 pt-4">
                    {tier.castingNote as string}
                  </p>
                )}

                <Link
                  href="/auditions#register"
                  className={`block text-center px-6 py-3 rounded-lg font-dm font-semibold text-sm transition-all duration-200 ${
                    tier.featured
                      ? "bg-gold text-dark hover:bg-gold/90 hover:shadow-[0_0_20px_rgba(245,200,66,0.4)]"
                      : "border border-cream/20 text-cream hover:border-cream/50 hover:bg-white/5"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-purple/30 via-magenta/30 to-red/30 border border-white/15 text-center">
            <p className="font-dm text-cream text-sm leading-relaxed">
              <span className="font-semibold text-gold">Memberships range between $175–$250 per month</span>{" "}
              depending on the division and participation level. Full details are shared during the audition process.
            </p>
          </div>
          <p className="mt-4 text-center font-dm text-cream/40 text-xs tracking-wide">
            All casting decisions are strictly audition-based. Membership tier does not
            affect role assignment. Principal and corporate spots are earned on the floor.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
