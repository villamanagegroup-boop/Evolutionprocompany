"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { STATS } from "@/lib/constants";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(123,47,190,0.08)_0%,_transparent_55%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
          {/* Left: text */}
          <div>
            <FadeUp>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                Our Story
              </p>
              <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest leading-tight mb-6">
                BUILT FOR{" "}
                <span className="text-gradient">PERFORMERS</span>
                <br />
                WHO MEAN BUSINESS
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-dm text-cream/70 text-base leading-relaxed mb-4">
                Evolution Production Company was founded to fill a void in the
                performing arts: a professional-grade company that treats ice
                and dance as equals. We are not a studio. We are not a
                recreation program. We are a production company — and every
                member is a professional in training.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="font-dm text-cream/70 text-base leading-relaxed mb-8">
                Based in the Washington DC area, EPC runs three full productions per year
                with structured training cycles, original choreography, and real
                career pathways. Our Flex Track develops the next generation
                from the ground up. Our Junior Company (ages 6–11) and Senior
                Company (ages 12+) perform, grow, and earn their place on the
                national stage.
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <p className="font-cormorant italic text-cream/80 text-xl">
                &ldquo;We don&apos;t just train performers — we develop
                artists.&rdquo;
              </p>
            </FadeUp>
          </div>

          {/* Right: photo */}
          <FadeUp delay={0.2}>
            <div className="relative h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/our-story.png"
                alt="Figure skater performing on stage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              {/* Stat overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-dark/60 backdrop-blur-md rounded-xl p-4"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(123,47,190,0.35)" }}
                  >
                    <div className="font-bebas text-4xl text-gradient leading-none mb-0.5">
                      {stat.value}
                    </div>
                    <div className="font-dm text-cream/70 text-xs tracking-wide uppercase leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Photo strip */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              {
                src: "/spring-show.png",
                alt: "Figure skater performing on ice",
              },
              {
                src: "/our-story-2.png",
                alt: "Dancer performing on stage",
              },
              {
                src: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80",
                alt: "Ice skating performance",
              },
            ].map((photo) => (
              <div
                key={photo.src}
                className="relative h-40 md:h-56 rounded-xl overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
