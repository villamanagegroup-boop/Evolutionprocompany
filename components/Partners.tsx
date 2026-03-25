"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

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

const highlights = [
  {
    label: "Rink Partners",
    body: "Ice facilities that host EPC rehearsals and co-hosted productions — priority scheduling, revenue share, and brand alignment with a rising performance company.",
    color: "#7B2FBE",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
  {
    label: "Corporate Sponsors",
    body: "Supporting, Presenting, and Title sponsorship tiers — logo placement, VIP access, co-branded content, and direct alignment with live performing arts in the DMV.",
    color: "#C2185B",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    label: "Community & More",
    body: "Media partners, school programs, hospitality brands, tech platforms, and more. If you believe in what we're building, there's a place for you.",
    color: "#E8334A",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(194,24,91,0.1)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Partnership Opportunities
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              GROW WITH <span className="text-gradient">EPC</span>
            </h2>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-xl mx-auto">
              We partner with rinks, brands, and organizations who believe in
              the future of live performance. This is the ground floor — and
              the earliest partners grow with us.
            </p>
          </div>
        </FadeUp>

        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple/40 to-transparent mb-14" />

        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {highlights.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.12}>
              <div className="flex flex-col">
                {/* Icon with gradient background */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: item.color + "1A",
                    color: item.color,
                    boxShadow: `0 0 0 1px ${item.color}33`,
                  }}
                >
                  {item.icon}
                </div>
                {/* Gradient accent line */}
                <div
                  className="h-0.5 w-10 rounded-full mb-5"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}00)`,
                  }}
                />
                <h3 className="font-bebas text-2xl text-cream tracking-widest mb-3">
                  {item.label}
                </h3>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple/40 to-transparent mb-14" />

        <FadeUp delay={0.35}>
          <div className="text-center">
            <Link
              href="/partnerships"
              className="inline-block px-10 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
            >
              View Partnership Opportunities
            </Link>
            <p className="mt-4 font-dm text-cream/35 text-xs">
              Rink partners, corporate sponsors, media, community & more
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
