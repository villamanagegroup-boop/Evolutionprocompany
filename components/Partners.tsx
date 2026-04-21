"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const types = [
  { label: "Rink Partners", color: "#7B2FBE" },
  { label: "Corporate Sponsors", color: "#C2185B" },
  { label: "Media Partners", color: "#E8334A" },
  { label: "School & Youth Programs", color: "#7B2FBE" },
  { label: "Community Organizations", color: "#C2185B" },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(194,24,91,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                Partnership Opportunities
              </p>
              <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest mb-6">
                GROW WITH <span className="text-gradient">EPC</span>
              </h2>
              <p className="font-dm text-cream/65 text-base leading-relaxed mb-8">
                We are building something the Washington DC area has never seen. The organizations and brands that partner with EPC now become part of the founding story — before the national stage, before the crowds, before the spotlight finds us.
              </p>
              <Link
                href="/partnerships"
                className="inline-block px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
              >
                View Partnership Options
              </Link>
            </div>

            <div className="space-y-3">
              <p className="font-dm text-cream/30 text-xs tracking-widest uppercase mb-5">We work with</p>
              {types.map((t, i) => (
                <FadeUp key={t.label} delay={i * 0.08}>
                  <div className="flex items-center gap-4 py-3 border-b border-white/8 group">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                      style={{ backgroundColor: t.color }}
                    />
                    <span className="font-dm text-cream/60 text-base group-hover:text-cream transition-colors duration-200">
                      {t.label}
                    </span>
                    <span className="ml-auto font-dm text-cream/20 text-xs group-hover:text-gold/60 transition-colors duration-200">→</span>
                  </div>
                </FadeUp>
              ))}
              <div className="pt-2">
                <Link href="/partnerships" className="font-dm text-cream/35 text-xs hover:text-gold transition-colors duration-200">
                  + and more — see all partnership types
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
