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

const EXPERIENCE_CATEGORIES = [
  {
    title: "Company Bonding Experiences",
    color: "#7B2FBE",
    items: [
      "Company Kickoff Event – Start the season together with a welcome gathering for performers and creative team members.",
      "Cast Celebrations – Post-show gatherings to celebrate performances and build community.",
      "End-of-Season Celebration – A special event recognizing the accomplishments of the company.",
    ],
  },
  {
    title: "Creative Retreats",
    color: "#C2185B",
    items: [
      "Choreography Lab Days – Collaborative sessions where skaters and dancers create new pieces and experiment with ideas.",
      "Creative Development Workshops – Dedicated time to develop new show concepts and performance material.",
      "Production Creation Weekends – Intensive weekends focused on building future EPC productions.",
    ],
  },
  {
    title: "Performance Inspiration Trips",
    color: "#E8334A",
    items: [
      "Broadway & Theatre Trips – Group outings to experience professional productions and stage performances.",
      "Dance & Performance Show Visits – Attend professional dance and performance events for inspiration.",
      "Cirque-Style Production Experiences – Watch large-scale entertainment productions and study staging and artistry.",
    ],
  },
  {
    title: "Skating & Dance Event Trips",
    color: "#7B2FBE",
    items: [
      "Figure Skating Competitions – Attend major competitions to watch elite athletes perform.",
      "Theatre on Ice & Synchronized Skating Events – Experience innovative team skating productions.",
      "Professional Ice Show Performances – Attend touring ice shows to learn from professional performers.",
    ],
  },
  {
    title: "Training & Workshop Opportunities",
    color: "#C2185B",
    items: [
      "Guest Artist Workshops – Training sessions with visiting choreographers and performers.",
      "Performance & Acting Classes – Workshops focused on expression, storytelling, and stage presence.",
      "Partnering & Lift Training – Skill development sessions for collaborative performance work.",
    ],
  },
  {
    title: "Content Creation Opportunities",
    color: "#E8334A",
    items: [
      "Company Photoshoots – Professional photography sessions featuring EPC performers.",
      "Performance Video Projects – Filmed choreography and performance pieces for portfolios and promotion.",
      "Behind-the-Scenes Content Days – Creative filming sessions highlighting the company and its artists.",
    ],
  },
  {
    title: "Team Adventures",
    color: "#7B2FBE",
    items: [
      "Group Activity Nights – Fun outings such as bowling, mini golf, or team games.",
      "Adventure Experiences – Activities like rock climbing or ziplining that build trust and teamwork.",
      "Seasonal Group Outings – Summer park days, beach trips, or other seasonal adventures.",
    ],
  },
  {
    title: "Career Development",
    color: "#C2185B",
    items: [
      "Audition Preparation Workshops – Learn how to prepare for auditions and professional opportunities.",
      "Portfolio & Resume Guidance – Support in developing performance resumes and professional materials.",
      "Industry Insight Sessions – Conversations with professionals from the performing arts world.",
    ],
  },
  {
    title: "Special Getaways",
    color: "#E8334A",
    items: [
      "Weekend Creative Retreats – Short retreats focused on artistic collaboration and team building.",
      "Theme Park Performance Trips – Group outings to parks known for entertainment productions.",
      "NYC or Major City Day Trips – Travel together to experience world-class performances.",
    ],
  },
];

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

const skaterSchedule = [
  {
    session: "Session 1",
    focus: "Ice Training",
    details: "On-ice choreography, technical elements, ensemble work, and crossover staging with dancers",
  },
  {
    session: "Session 2",
    focus: "Off-Ice Training",
    details: "Conditioning, acting, flexibility, and movement quality development",
  },
];

const dancerSchedule = [
  {
    session: "Session 1",
    focus: "Dance Training",
    details: "Choreography, staging, and performance work — plus dedicated time at rink-side for crossover rehearsals with the skating cast",
  },
  {
    session: "Session 2",
    focus: "Off-Ice Training",
    details: "Conditioning, flexibility, acting, and technique — same intensity as skaters, different discipline focus",
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
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(123,47,190,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Inside EPC
            </p>
            <h1 className="font-bebas text-7xl md:text-[100px] text-cream tracking-widest leading-none mb-6">
              THE <span className="text-gradient">COMPANY</span>
            </h1>
            <p className="font-dm text-cream/70 text-lg leading-relaxed max-w-2xl mb-6">
              Evolution Production Company is more than a rehearsal program. It is a collaborative performance company
              built for artists who want to expand their experience, connect with other performers, and take part in
              original productions. Our members come from a variety of studios, skating clubs, teams, and training
              backgrounds. EPC is intended to complement the work performers are already doing by providing additional
              opportunities for performance, storytelling, creativity, and community. Whether you are looking to perform
              more often, challenge yourself artistically, or be part of a fresh and inspiring company environment,
              EPC offers a place to grow.
            </p>
            <p className="font-cormorant italic text-cream/60 text-xl">
              Three tracks. One standard. A path for every serious performer.
            </p>
          </div>
        </div>
      </section>

      {/* Built to work alongside */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                Our Philosophy
              </p>
              <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
                BUILT TO WORK ALONGSIDE{" "}
                <span className="text-gradient">YOUR TRAINING</span>
              </h2>
              <p className="font-dm text-cream/65 text-base leading-relaxed">
                We proudly support the coaches, studios, skating clubs, and programs that help performers develop
                their craft. EPC is not designed to replace a performer&apos;s home program. Instead, we provide an
                additional outlet for performance, artistry, and collaboration. We believe the strongest artists
                grow through diverse experiences, strong mentorship, and opportunities to work with others
                across disciplines.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { num: "01", label: "Studio & Club Friendly", body: "EPC works around your existing training schedule, not against it." },
                { num: "02", label: "Cross-Discipline Community", body: "Skaters, dancers, and performers from every background training together." },
                { num: "03", label: "Performance-First", body: "Original productions that give members real stage experience beyond competitions and recitals." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/5">
                  <span className="font-bebas text-2xl text-gradient leading-none pt-0.5 flex-shrink-0">{item.num}</span>
                  <div>
                    <p className="font-bebas text-lg text-cream tracking-widest mb-1">{item.label}</p>
                    <p className="font-dm text-cream/55 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  "Compensation per show performed",
                  "Year-end net profit share",
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
              <h2 className="font-bebas text-4xl text-cream tracking-widest mb-3">
                TRAINING <span className="text-gradient">SCHEDULE</span>
              </h2>
              <p className="font-dm text-cream/60 text-sm mb-8 leading-relaxed">
                Every member trains twice per week throughout each 3-month production cycle.
                Skaters and dancers each have their own session structure — with intentional
                overlap built in for the crossover performances that define every EPC show.
              </p>

              {/* Skaters */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-purple inline-block" />
                  <h3 className="font-bebas text-xl text-cream tracking-widest">SKATERS</h3>
                </div>
                <div className="space-y-3">
                  {skaterSchedule.map((s) => (
                    <div key={s.session} className="p-4 rounded-xl border border-purple/20 bg-purple/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bebas text-lg text-cream tracking-widest">{s.session}</span>
                        <span className="text-xs font-dm font-semibold text-purple tracking-widest uppercase">{s.focus}</span>
                      </div>
                      <p className="font-dm text-cream/60 text-sm">{s.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dancers */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-magenta inline-block" />
                  <h3 className="font-bebas text-xl text-cream tracking-widest">DANCERS</h3>
                </div>
                <div className="space-y-3">
                  {dancerSchedule.map((s) => (
                    <div key={s.session} className="p-4 rounded-xl border border-magenta/20 bg-magenta/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bebas text-lg text-cream tracking-widest">{s.session}</span>
                        <span className="text-xs font-dm font-semibold text-magenta tracking-widest uppercase">{s.focus}</span>
                      </div>
                      <p className="font-dm text-cream/60 text-sm">{s.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Crossover note */}
              <div className="p-4 rounded-xl border border-gold/20 bg-gold/5">
                <p className="font-dm text-cream/70 text-sm leading-relaxed">
                  <span className="font-semibold text-gold">Crossover Note:</span> EPC productions feature skaters and dancers performing together on and around the ice. Dancers will regularly join ice sessions for joint staging, timing work, and full-company run-throughs — so that every crossover moment lands exactly right on show night.
                </p>
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

      {/* Company Experiences & Member Perks */}
      <section className="py-20 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.1)_0%,_transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(194,24,91,0.07)_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              The Experience
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              COMPANY EXPERIENCES <span className="text-gradient">&amp; MEMBER PERKS</span>
            </h2>
          </div>

          <p className="font-dm text-cream/65 text-base leading-relaxed text-center max-w-3xl mx-auto mb-14">
            At Evolution Production Company, membership is about more than rehearsals. We are building a company
            experience that gives performers opportunities to grow, connect, create, and be inspired. From bonding
            events to professional development, our members are part of a performance community designed to feel
            exciting, supportive, and memorable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl p-6 bg-white/5 hover:-translate-y-1 transition-all duration-200"
                style={{ border: `1px solid ${cat.color}40` }}
              >
                <div
                  className="h-0.5 w-10 rounded-full mb-4"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}00)` }}
                />
                <h3
                  className="font-bebas text-xl tracking-widest mb-4"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-dm text-cream/65 text-xs leading-relaxed">
                      <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: cat.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
