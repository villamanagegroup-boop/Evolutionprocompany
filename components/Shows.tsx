"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SHOWS } from "@/lib/constants";

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

const SHOW_IMAGES = [
  "/spring-show.png",
  "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&q=80",
  "/illuminate-show.jpg",
];

export default function Shows() {
  return (
    <section id="shows" className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.12)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              The Season
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              THREE PRODUCTIONS.{" "}
              <span className="text-gradient">ONE YEAR.</span>
            </h2>
            <p className="mt-4 font-dm text-cream/60 text-base max-w-xl mx-auto">
              Every show is the result of a full 3-month training cycle.
              Audition, train, perform. Then do it again.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-10">
          {SHOWS.map((show, i) => (
            <FadeUp key={show.season} delay={i * 0.15}>
              <div className="group flex flex-col hover:-translate-y-2 transition-all duration-300">
                {/* Show image */}
                <div className="relative h-56 rounded-xl overflow-hidden mb-5">
                  <Image
                    src={SHOW_IMAGES[i]}
                    alt={`${show.theme} — ${show.season} production`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  {/* Season badge overlaid on image */}
                  <div
                    className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase backdrop-blur-sm"
                    style={{
                      backgroundColor: show.color + "33",
                      color: show.color,
                      border: `1px solid ${show.color}55`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: show.color }}
                    />
                    {show.season} Production
                  </div>
                </div>

                {/* Gradient accent line */}
                <div
                  className="h-px w-full rounded-full mb-5"
                  style={{
                    background: `linear-gradient(90deg, ${show.color}, ${show.color}00)`,
                  }}
                />

                <h3 className="font-bebas text-4xl text-cream tracking-widest mb-1">
                  {show.theme}
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest mb-4"
                  style={{
                    backgroundColor: show.color + "22",
                    color: show.color,
                    border: `1px solid ${show.color}44`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                  </svg>
                  {show.performanceMonth}
                </div>
                <p className="font-dm text-cream/70 text-sm leading-relaxed mb-6 flex-1">
                  {show.description}
                </p>

                {/* Training cycle */}
                <div className="pt-4 border-t border-white/8">
                  <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-2">
                    Training Cycle
                  </p>
                  <div
                    className="h-1 w-full rounded-full mb-2"
                    style={{
                      background: `linear-gradient(90deg, ${show.color}55, ${show.color})`,
                    }}
                  />
                  <p className="font-dm text-sm font-medium text-cream/80">
                    {show.trainingMonths}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
