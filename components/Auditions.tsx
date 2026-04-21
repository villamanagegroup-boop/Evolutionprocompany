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

export default function Auditions() {
  return (
    <section id="auditions" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
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

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple/40 to-transparent mb-12" />

        {/* Three tracks — clean teaser */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {AUDITION_TIERS.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.12}>
              <div
                className="pl-5 border-l-2 py-2"
                style={{ borderColor: tier.color }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase mb-3"
                  style={{
                    backgroundColor: tier.color + "22",
                    color: tier.color,
                  }}
                >
                  {tier.ages}
                </div>
                <h3 className="font-bebas text-3xl text-cream tracking-widest mb-2">
                  {tier.name}
                </h3>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA Banner */}
        <FadeUp delay={0.4}>
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r from-purple via-magenta to-red text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <p className="font-cormorant italic text-cream/80 text-xl mb-3">
                Auditions Coming to the Washington DC Area
              </p>
              <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
                REGISTER YOUR INTEREST TODAY
              </h3>
              <p className="font-dm text-cream/80 text-base mb-8 max-w-md mx-auto">
                Be the first to know when audition dates drop. Complete the
                interest form and we&apos;ll reach out directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/auditions#register"
                  className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200"
                >
                  Register Interest
                </Link>
                <Link
                  href="/auditions"
                  className="inline-block px-8 py-4 border border-cream/30 text-cream font-dm font-semibold text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200"
                >
                  Full Details →
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
