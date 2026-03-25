"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { WHY_JOIN } from "@/lib/constants";

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

const COLORS = ["#7B2FBE", "#C2185B", "#E8334A"];

const ICONS = [
  // Dollar / Paid Opportunities
  <svg
    key="paid"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </svg>,
  // Trophy / Professional Development
  <svg
    key="dev"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
    />
  </svg>,
  // Star / Talent Management
  <svg
    key="talent"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>,
];

export default function WhyJoin() {
  return (
    <section id="why-join" className="relative py-16 md:py-20 bg-dark overflow-hidden">
      {/* Gradient bg glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(123,47,190,0.1)_0%,_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_rgba(194,24,91,0.07)_0%,_transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: items */}
          <div>
            <FadeUp>
              <div className="mb-12">
                <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                  The Difference
                </p>
                <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
                  WHY CHOOSE <span className="text-gradient">EPC</span>
                </h2>
              </div>
            </FadeUp>

            <div className="space-y-10">
              {WHY_JOIN.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.12}>
                  <div className="flex gap-5 items-start">
                    {/* Big visible number */}
                    <div className="flex-shrink-0 font-bebas text-7xl leading-none text-gradient select-none w-14 text-right">
                      0{i + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      {/* Icon in gradient container */}
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                        style={{
                          backgroundColor: COLORS[i] + "22",
                          color: COLORS[i],
                        }}
                      >
                        {ICONS[i]}
                      </div>
                      <h3 className="font-bebas text-3xl md:text-4xl text-cream tracking-widest mb-2">
                        {item.title}
                      </h3>
                      <p className="font-dm text-cream/60 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <FadeUp delay={0.2}>
            <div className="relative h-[520px] md:h-[620px] rounded-2xl overflow-hidden md:sticky md:top-24">
              <Image
                src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&q=80"
                alt="EPC performers on stage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/20 to-transparent" />
              {/* Gradient border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(123,47,190,0.35)" }}
              />
              {/* Bottom label */}
              <div className="absolute bottom-6 left-6">
                <p className="font-cormorant italic text-cream/60 text-lg">
                  &ldquo;Train with purpose. Evolve without limits.&rdquo;
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
