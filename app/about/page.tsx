import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GROWTH_PHASES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Evolution Production Company",
  description:
    "Learn about EPC's founder vision, mission, and the three-phase national growth plan taking this ice-dance company from the Washington DC area to the national stage.",
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
                  dancer go when they want more — more performance opportunities,
                  more creative challenges, more community — while continuing to
                  grow in the training environments that got them here?
                </p>
                <p>
                  EPC is that place. A home for performers who are serious,
                  committed, and hungry — regardless of where they are in their
                  journey. A place where the training is real, the productions
                  are professional, and the path forward is clear.
                </p>
                <p>
                  We built EPC for the artists who have always known they were
                  meant to perform. We built it so they have somewhere worthy to
                  grow.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-bebas text-xl text-gold tracking-widest mb-3">OUR MISSION</h3>
                <p className="font-dm text-cream/65 text-sm leading-relaxed">
                  To provide a professional-grade performance company for ice and dance artists in the Washington DC area and beyond — offering real training, real productions, and real career pathways for serious performers at every stage.
                </p>
              </div>
              <div className="h-px bg-white/8" />
              <div>
                <h3 className="font-bebas text-xl text-gold tracking-widest mb-4">OUR VALUES</h3>
                <div className="space-y-2.5">
                  {[
                    "Excellence over comfort",
                    "Accountability to the craft",
                    "All members perform — roles are earned",
                    "Growth is mandatory, ego is optional",
                    "The stage is earned, not given",
                  ].map((v) => (
                    <p key={v} className="font-dm text-cream/65 text-sm flex items-start gap-2">
                      <span className="text-gold mt-0.5 flex-shrink-0">→</span> {v}
                    </p>
                  ))}
                </div>
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

          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {GROWTH_PHASES.map((phase, i) => (
              <div key={phase.phase} className="bg-dark p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bebas text-gold tracking-widest text-base">{phase.phase}</span>
                  {phase.status === "active" && (
                    <span className="px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-dm font-semibold tracking-widest uppercase">
                      Active
                    </span>
                  )}
                </div>
                <div
                  className="h-px w-8 rounded-full mb-4"
                  style={{ background: ["#7B2FBE", "#C2185B", "#E8334A"][i] }}
                />
                <h3 className="font-bebas text-2xl text-cream tracking-widest mb-3">
                  {phase.title}
                </h3>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As EPC Grows */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-brand opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <p className="font-cormorant italic text-cream/80 text-xl mb-3">Looking Ahead</p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-5">
                THE VISION IS NATIONAL
              </h2>
              <p className="font-dm text-cream/80 text-base leading-relaxed max-w-2xl mx-auto">
                Phase 1 is Washington DC. Phase 3 is everywhere. As EPC grows, members gain access to expanded touring, industry events, company retreats, and performance opportunities that don&apos;t exist anywhere else. The ground floor is where the story starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
