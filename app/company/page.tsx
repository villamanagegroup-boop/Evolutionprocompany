import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Company | Evolution Production Company",
  description:
    "Explore EPC's Flex Track, Junior Company, and Senior Company tracks, training schedule, curriculum breakdown, and payout structure.",
};

const curriculum = [
  {
    name: "Choreography",
    description:
      "Original choreography designed by EPC's creative team. Members learn ensemble and solo work tied to each production's artistic concept.",
  },
  {
    name: "Conditioning",
    description:
      "Strength, endurance, and functional fitness specific to ice and dance performance demands. Every member trains like an athlete.",
  },
  {
    name: "Acting & Stage Presence",
    description:
      "Performance coaching that goes beyond steps. Members develop character, emotional range, and the ability to hold an audience.",
  },
  {
    name: "Flexibility & Mobility",
    description:
      "Structured flexibility programming to prevent injury, increase range of motion, and support the demands of high-level performance.",
  },
  {
    name: "Technical Mastery",
    description:
      "Discipline-specific technique work. Skaters refine edges, jumps, and spins. Dancers deepen their foundational training.",
  },
];

const trainingSchedule = [
  {
    day: "Session 1",
    focus: "Ice Training",
    details: "On-ice choreography, technical elements, ensemble work",
  },
  {
    day: "Session 2",
    focus: "Off-Ice Training",
    details: "Conditioning, acting, flexibility, cross-training",
  },
];

const productionCycle = [
  { months: "Jan – Mar", show: "Spring Production", perform: "April" },
  { months: "May – Jul", show: "Summer Production", perform: "August" },
  { months: "Sep – Nov", show: "Holiday Production", perform: "December" },
];

export default function CompanyPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/20 via-dark to-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Inside EPC
          </p>
          <h1 className="font-bebas text-6xl md:text-8xl text-cream tracking-widest leading-none mb-6">
            THE <span className="text-gradient">COMPANY</span>
          </h1>
          <p className="font-dm text-cream/60 text-base md:text-lg max-w-2xl mx-auto">
            Three tracks. One standard. Whether you&apos;re just starting or
            ready to perform professionally — EPC has a path for you.
          </p>
        </div>
      </section>

      {/* Company tracks */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              THREE TRACKS. <span className="text-gradient">ONE COMPANY.</span>
            </h2>
            <p className="mt-3 font-dm text-cream/50 text-sm max-w-xl mx-auto">
              All casting is audition-based. Principal spots and corporate spots are earned
              on the floor — not by membership tier or age.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Flex Track */}
            <div className="p-7 rounded-2xl border border-purple/30 bg-purple/8">
              <div className="inline-block px-3 py-1 rounded-full bg-purple/30 text-purple text-xs font-dm font-semibold tracking-widest uppercase mb-5">
                All Ages
              </div>
              <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">
                FLEX TRACK
              </h3>
              <p className="font-dm text-cream/70 text-sm leading-relaxed mb-5">
                For performers who are new to skating or dance and building
                foundational skills. Flex members perform in all three annual
                productions in ensemble roles. Principal eligibility grows with
                your skills — there&apos;s no ceiling, only the work.
              </p>
              <ul className="space-y-2">
                {[
                  "Open to all ages and experience levels",
                  "Performs in ensemble roles in all 3 productions",
                  "Principal-eligible as skills and readiness develop",
                  "Foundational technique and conditioning",
                  "Mentored by Senior Company members",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-dm text-cream/70">
                    <span className="text-purple mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Junior */}
            <div className="p-7 rounded-2xl border border-magenta/30 bg-magenta/8">
              <div className="inline-block px-3 py-1 rounded-full bg-magenta/30 text-magenta text-xs font-dm font-semibold tracking-widest uppercase mb-5">
                Ages 6–11
              </div>
              <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">
                JUNIOR COMPANY
              </h3>
              <p className="font-dm text-cream/70 text-sm leading-relaxed mb-5">
                Full company membership for younger performers. Juniors train
                and perform alongside the Senior Company with age-appropriate
                roles and a dedicated development curriculum.
              </p>
              <ul className="space-y-2">
                {[
                  "Full participation in all 3 annual productions",
                  "Dedicated Junior choreography roles",
                  "Program credits toward Senior Company transition",
                  "Mentored by Senior Company members",
                  "Age-appropriate technique and conditioning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-dm text-cream/70">
                    <span className="text-magenta mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Senior */}
            <div className="p-7 rounded-2xl border border-red/30 bg-red/8">
              <div className="inline-block px-3 py-1 rounded-full bg-red/30 text-red text-xs font-dm font-semibold tracking-widest uppercase mb-5">
                Ages 12+
              </div>
              <h3 className="font-bebas text-3xl text-cream tracking-widest mb-3">
                SENIOR COMPANY
              </h3>
              <p className="font-dm text-cream/70 text-sm leading-relaxed mb-5">
                The professional arm of EPC. Senior members commit to the full
                season, perform in all productions, and earn real compensation.
                Principal and corporate spots are earned through audition.
              </p>
              <ul className="space-y-2">
                {[
                  "Full participation in all 3 annual productions",
                  "Principal & corporate spots earned by audition",
                  "Cash payout per show performed",
                  "25% year-end net profit share",
                  "Talent management pipeline access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-dm text-cream/70">
                    <span className="text-red mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fee philosophy note */}
          <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 max-w-3xl mx-auto text-center">
            <p className="font-dm text-cream/60 text-sm leading-relaxed">
              <span className="text-cream font-semibold">Full compensation and payout details are covered when you become a company member.</span>{" "}
              Membership fees go directly toward development, choreography, production costs, and costumes — so that EPC can compensate its instructors,
              staff, and performing artists at a professional standard. You&apos;re not paying to be in the company. You&apos;re investing in the infrastructure
              that makes professional performance possible.
            </p>
          </div>
        </div>
      </section>

      {/* Training schedule */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-8">
                TRAINING <span className="text-gradient">SCHEDULE</span>
              </h2>
              <p className="font-dm text-cream/60 text-sm mb-6 leading-relaxed">
                Every member trains twice per week throughout each 3-month
                production cycle. One ice session. One off-ice session. No
                exceptions.
              </p>
              <div className="space-y-4">
                {trainingSchedule.map((session) => (
                  <div
                    key={session.day}
                    className="p-5 rounded-xl border border-white/10 bg-white/5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bebas text-xl text-cream tracking-widest">
                        {session.day}
                      </span>
                      <span className="text-xs font-dm font-semibold text-gold tracking-widest uppercase">
                        {session.focus}
                      </span>
                    </div>
                    <p className="font-dm text-cream/60 text-sm">
                      {session.details}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-bebas text-2xl text-cream tracking-widest mb-4">
                  PRODUCTION CALENDAR
                </h3>
                <div className="space-y-3">
                  {productionCycle.map((cycle) => (
                    <div
                      key={cycle.show}
                      className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
                    >
                      <div className="w-1 h-12 rounded-full bg-gradient-brand flex-shrink-0" />
                      <div>
                        <p className="font-dm text-xs text-cream/40 tracking-widest uppercase">
                          {cycle.months} → Perform in {cycle.perform}
                        </p>
                        <p className="font-bebas text-xl text-cream tracking-widest">
                          {cycle.show}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-8">
                CURRICULUM <span className="text-gradient">BREAKDOWN</span>
              </h2>
              <div className="space-y-4">
                {curriculum.map((item, i) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-gold/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bebas text-gold text-lg leading-none">
                        0{i + 1}
                      </span>
                      <h4 className="font-bebas text-xl text-cream tracking-widest">
                        {item.name}
                      </h4>
                    </div>
                    <p className="font-dm text-cream/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Membership />

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl text-cream tracking-widest mb-4">
            READY TO <span className="text-gradient">EVOLVE?</span>
          </h2>
          <p className="font-dm text-cream/60 text-base mb-8">
            Auditions are coming. Register your interest now and be the first
            to know when dates are announced.
          </p>
          <Link
            href="/auditions#register"
            className="inline-block px-10 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
          >
            Register Interest
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
