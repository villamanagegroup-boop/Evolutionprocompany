import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { AUDITION_TIERS, FAQ } from "@/lib/constants";
import FaqAccordion from "@/components/FaqAccordion";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Auditions | Evolution Production Company",
  description:
    "Auditions for Evolution Production Company are coming to the DMV. Learn what to prepare, eligibility requirements, and register your interest today.",
};

export default function AuditionsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/20 via-dark to-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Your Next Step
          </p>
          <h1 className="font-bebas text-6xl md:text-8xl text-cream tracking-widest leading-none mb-6">
            AUDITIONS
            <br />
            <span className="text-gradient">COMING TO WASHINGTON DC</span>
          </h1>
          <p className="font-dm text-cream/60 text-base md:text-lg max-w-2xl mx-auto">
            Evolution Production Company is actively building its founding
            roster. Auditions are by invitation after interest registration.
            This is not a tryout — it&apos;s the start of a career.
          </p>
        </div>
      </section>

      {/* Auditions flyer */}
      <section className="py-4 pb-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Image
            src="/auditions-flyer.png"
            alt="EPC Founding Company Auditions Flyer"
            width={600}
            height={800}
            className="w-full rounded-2xl shadow-[0_0_60px_rgba(123,47,190,0.25)]"
          />
        </div>
      </section>

      {/* Who EPC Is For */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                Is EPC Right for You?
              </p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
                WHO EPC <span className="text-gradient">IS FOR</span>
              </h2>
              <p className="font-dm text-cream/65 text-base leading-relaxed">
                EPC is for performers who are excited about creativity, collaboration, and live performance.
                Our company is a great fit for skaters, dancers, and artists who want to be part of original
                productions while continuing to grow in their primary training environments. We welcome
                performers who are passionate, team-oriented, open to learning, and excited to contribute
                to a positive company culture.
              </p>
            </div>
            <div className="space-y-3 font-dm text-cream/65 text-base leading-relaxed">
              {[
                "Skaters and dancers at any experience level",
                "Performers who want more stage time and original productions",
                "Artists who value community, collaboration, and growth",
                "Anyone ready to commit to something new",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2">
                  <span className="text-gold flex-shrink-0 mt-0.5">→</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              ELIGIBILITY & <span className="text-gradient">REQUIREMENTS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {AUDITION_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-gold/30 transition-all duration-300"
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase mb-5"
                  style={{
                    backgroundColor: tier.color + "33",
                    color: tier.color,
                  }}
                >
                  {tier.ages}
                </div>
                <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">
                  {tier.name}
                </h3>
                <p className="font-dm text-cream/60 text-sm mb-5">
                  {tier.description}
                </p>
                <ul className="space-y-2">
                  {tier.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-sm font-dm text-cream/70"
                    >
                      <span className="text-gold mt-0.5">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-4xl text-cream tracking-widest mb-10">
            WHAT TO <span className="text-gradient">EXPECT</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h4 className="font-bebas text-xl text-cream tracking-widest mb-1">Come Prepared</h4>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  Bring your skates or dance attire and your music on a phone or device. A solo (60–90 sec) is only required if you&apos;re seeking a principal role — all other performers just bring their current skill level and readiness.
                </p>
              </div>
              <div>
                <h4 className="font-bebas text-xl text-cream tracking-widest mb-1">Mindset Matters Most</h4>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  We&apos;re looking for coachability, stage presence, and commitment — not perfection. Come ready to take direction and work as part of a company.
                </p>
              </div>
              <div>
                <h4 className="font-bebas text-xl text-cream tracking-widest mb-1">Can&apos;t Make It In Person?</h4>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  Video auditions are accepted on a rolling basis. Film in a well-lit space with clear audio and contact us for submission details.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bebas text-xl text-cream tracking-widest mb-4">What We Look For</h4>
              <div className="space-y-2 font-dm text-cream/65 text-sm leading-relaxed">
                <p>→ Technical foundation in your primary discipline</p>
                <p>→ Stage presence and ability to hold an audience</p>
                <p>→ Coachability — takes and applies direction quickly</p>
                <p>→ Full-season commitment and team mentality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
            </h2>
          </div>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
