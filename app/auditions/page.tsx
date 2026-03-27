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
            <span className="text-gradient">COMING TO DMV</span>
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

      {/* What to prepare */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-8">
                WHAT TO <span className="text-gradient">PREPARE</span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Solo Performance",
                    body: "Prepare a solo in your primary discipline. Juniors: 60 seconds. Seniors: 90 seconds. Bring your best — not your safest.",
                  },
                  {
                    step: "02",
                    title: "Training Attire",
                    body: "Skaters: bring your own skates and appropriate training attire. Dancers: dress for movement. No costumes required.",
                  },
                  {
                    step: "03",
                    title: "Music",
                    body: "Bring your music on a phone or device with an audio jack or Bluetooth capability. MP3 preferred.",
                  },
                  {
                    step: "04",
                    title: "Mindset",
                    body: "We are looking for coachability, stage presence, and commitment — not perfection. Come ready to take direction.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="font-bebas text-3xl text-gradient leading-none pt-1 min-w-[2rem]">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bebas text-xl text-cream tracking-widest mb-1">
                        {item.title}
                      </h4>
                      <p className="font-dm text-cream/60 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-8">
                WHAT WE <span className="text-gradient">LOOK FOR</span>
              </h2>
              <div className="space-y-3">
                {[
                  "Technical foundation in your primary discipline",
                  "Stage presence and performance quality",
                  "Ability to take and apply direction quickly",
                  "Physical conditioning and stamina",
                  "Professionalism and attitude",
                  "Commitment to the full season",
                  "Team mentality — EPC is a company, not a solo act",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-white/3 font-dm text-cream/70 text-sm"
                  >
                    <span className="text-gold">→</span>
                    {item}
                  </div>
                ))}
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
