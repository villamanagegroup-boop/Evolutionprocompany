"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { AUDITION_TIERS } from "@/lib/constants";

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

const primaryTiers = AUDITION_TIERS.slice(0, 2);
const flexTier = AUDITION_TIERS[2];

export default function Auditions() {
  return (
    <section id="auditions" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(123,47,190,0.09)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Join the Company
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              THREE TRACKS.{" "}
              <span className="text-gradient">ONE STANDARD.</span>
            </h2>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-xl mx-auto">
              Every EPC member earns their place through audition. Every member
              performs. Talent is welcome at every age.
            </p>
          </div>
        </FadeUp>

        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple/40 to-transparent mb-12" />

        {/* Junior + Senior — side by side */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {primaryTiers.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.15}>
              <div
                className="flex flex-col h-full pl-6 border-l-2"
                style={{ borderColor: tier.color }}
              >
                {/* Gradient line at top */}
                <div
                  className="h-px w-full mb-6"
                  style={{
                    background: `linear-gradient(90deg, ${tier.color}, ${tier.color}00)`,
                  }}
                />
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase mb-5 self-start"
                  style={{
                    backgroundColor: tier.color + "22",
                    color: tier.color,
                  }}
                >
                  {tier.ages}
                </div>
                <h3 className="font-bebas text-4xl text-cream tracking-widest mb-3">
                  {tier.name}
                </h3>
                <p className="font-dm text-cream/70 text-sm leading-relaxed mb-5">
                  {tier.description}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-sm font-dm text-cream/70"
                    >
                      <span className="mt-0.5 text-gold shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Flex Track — full width */}
        <FadeUp delay={0.3}>
          <div
            className="mb-14 pl-6 border-l-2"
            style={{ borderColor: flexTier.color }}
          >
            {/* Gradient top line */}
            <div
              className="h-px w-full mb-6"
              style={{
                background: `linear-gradient(90deg, ${flexTier.color}, ${flexTier.color}00)`,
              }}
            />
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-64 flex-shrink-0">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase mb-4"
                  style={{
                    backgroundColor: flexTier.color + "22",
                    color: flexTier.color,
                  }}
                >
                  {flexTier.ages}
                </div>
                <h3 className="font-bebas text-4xl text-cream tracking-widest mb-2">
                  {flexTier.name}
                </h3>
                <p className="font-dm text-cream/60 text-xs leading-relaxed">
                  {flexTier.description}
                </p>
              </div>
              <div className="flex-1 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {flexTier.requirements.map((req) => (
                  <div
                    key={req}
                    className="flex items-start gap-2 text-sm font-dm text-cream/70"
                  >
                    <span className="mt-0.5 text-gold shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {req}
                  </div>
                ))}
              </div>
              <div className="md:w-56 flex-shrink-0 pt-1">
                <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">
                  Track Type
                </p>
                <p className="font-dm text-sm font-medium text-cream/80">
                  {flexTier.payout}
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* CTA Banner */}
        <FadeUp delay={0.4}>
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r from-purple via-magenta to-red text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <p className="font-cormorant italic text-cream/80 text-xl mb-3">
                Auditions Coming to DMV
              </p>
              <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
                REGISTER YOUR INTEREST TODAY
              </h3>
              <p className="font-dm text-cream/80 text-base mb-8 max-w-md mx-auto">
                Be the first to know when audition dates drop. Complete the
                interest form and we&apos;ll reach out directly.
              </p>
              <Link
                href="/auditions#register"
                className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
              >
                Register Interest
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
