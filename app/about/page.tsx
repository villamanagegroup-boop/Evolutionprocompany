import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GROWTH_PHASES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Evolution Production Company",
  description:
    "Learn about EPC's founder vision, mission, and the three-phase national growth plan taking this ice-dance company from DMV to the national stage.",
};

export default function AboutPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-dark to-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="font-bebas text-6xl md:text-8xl text-cream tracking-widest leading-none mb-6">
            BUILT TO <span className="text-gradient">EVOLVE</span>
          </h1>
          <p className="font-dm text-cream/60 text-base md:text-lg max-w-2xl mx-auto">
            Evolution Production Company is not a dance studio, not a
            recreational program, and not a hobbyist club. We are a production
            company — operating with professional standards from day one.
          </p>
        </div>
      </section>

      {/* Founder vision */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                Founder Vision
              </p>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-6">
                THE WHY BEHIND EPC
              </h2>
              <div className="space-y-4 font-dm text-cream/70 text-sm leading-relaxed">
                <p>
                  Evolution Production Company was created to answer a question
                  that had no good answer: where does a serious ice skater or
                  dancer go when they outgrow local studios but aren&apos;t
                  ready for Broadway or the Ice Capades?
                </p>
                <p>
                  EPC fills that gap. A home for performers who are serious,
                  committed, and hungry — regardless of where they are in their
                  journey. A place where the training is real, the productions
                  are professional, and the path forward is clear.
                </p>
                <p>
                  We built EPC for the artists who have always known they were
                  meant to perform. We built it so they have somewhere worthy to
                  land.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="font-bebas text-2xl text-gold tracking-widest mb-3">
                  OUR MISSION
                </h3>
                <p className="font-dm text-cream/70 text-sm leading-relaxed">
                  To provide a professional-grade performance company for ice
                  and dance artists in the DMV area and beyond — offering real
                  training, real productions, and real career pathways for
                  serious performers at every stage.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="font-bebas text-2xl text-gold tracking-widest mb-3">
                  OUR VALUES
                </h3>
                <ul className="space-y-2 font-dm text-cream/70 text-sm">
                  {[
                    "Excellence over comfort",
                    "Accountability to the craft",
                    "Every member performs — no bench",
                    "Growth is mandatory, ego is optional",
                    "The stage is earned, not given",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">→</span> {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth phases */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              The Roadmap
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest">
              THREE PHASES.{" "}
              <span className="text-gradient">ONE VISION.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-magenta to-red md:-translate-x-px" />

            <div className="space-y-12">
              {GROWTH_PHASES.map((phase, i) => (
                <div
                  key={phase.phase}
                  className={`relative flex gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-brand border-2 border-dark -translate-x-1.5 md:-translate-x-2 mt-6" />

                  {/* Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}
                  >
                    <div
                      className={`p-6 rounded-2xl border bg-white/5 ${
                        phase.status === "active"
                          ? "border-gold/40 shadow-[0_0_30px_rgba(245,200,66,0.1)]"
                          : "border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-bebas text-gold tracking-widest text-lg">
                          {phase.phase}
                        </span>
                        {phase.status === "active" && (
                          <span className="px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-dm font-semibold tracking-widest uppercase">
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">
                        {phase.title}
                      </h3>
                      <p className="font-dm text-cream/60 text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* As EPC Grows */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Looking Ahead
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
            AS EPC <span className="text-gradient">GROWS</span>
          </h2>
          <p className="font-dm text-cream/65 text-base leading-relaxed mb-8">
            As Evolution Production Company continues to grow, members may also gain access to expanded
            experiences such as special trips, industry events, company retreats, exclusive workshops,
            and unique performance opportunities. Our goal is to build a company experience that is
            inspiring, professional, and rewarding at every level.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Special Trips", "Industry Events", "Company Retreats", "Exclusive Workshops", "Unique Performance Opportunities"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full border border-white/15 bg-white/5 font-dm text-cream/60 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
