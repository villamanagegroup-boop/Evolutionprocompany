import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Us | Evolution Production Company",
  description:
    "Join the team behind EPC. We're looking for skating and dance instructors, NIL agents, former professional artists, choreographers, and more.",
};

const roles = [
  {
    category: "On Ice & On Stage",
    color: "#7B2FBE",
    positions: [
      {
        title: "Figure Skating Instructor",
        type: "Contract / Seasonal",
        description:
          "You've spent years on the ice. Now help shape the next generation of performers who will bring skating to audiences who've never seen it done like this. We need coaches who understand technique AND artistry — because at EPC, one without the other doesn't exist.",
        ideal: [
          "USFS or equivalent coaching certification preferred",
          "Experience with performance and choreography, not just competition",
          "Ability to adapt technical instruction to a production environment",
          "Comfortable coaching ages 6 through adult",
        ],
      },
      {
        title: "Dance Instructor",
        type: "Contract / Seasonal",
        description:
          "Contemporary. Ballet. Hip-hop. Jazz. If you've trained seriously and you know how to transfer that to a room full of people with different backgrounds and bodies — we want you in the studio. EPC members come from all disciplines. Your job is to meet them where they are and elevate them.",
        ideal: [
          "Professional training and/or performance background",
          "Ability to teach across multiple styles or specialize deeply in one",
          "Experience with youth and adult students",
          "Strong stage presence and ability to demonstrate under pressure",
        ],
      },
      {
        title: "Ice Choreographer",
        type: "Project-Based",
        description:
          "Three productions a year. Three opportunities to put original ice work in front of live audiences. If you've been waiting to create something that doesn't fit inside a competition rulebook — this is your stage. We don't choreograph to scores. We choreograph to stories.",
        ideal: [
          "Background in competitive or professional ice performance",
          "Portfolio of original choreographic work",
          "Ability to work within a full production framework (music, costumes, lighting)",
          "Strong communication with mixed-level casts",
        ],
      },
    ],
  },
  {
    category: "Industry & Career",
    color: "#C2185B",
    positions: [
      {
        title: "NIL Agent / Talent Representative",
        type: "Partnership",
        description:
          "The performers coming through EPC are building real careers. They're not hobbyists. They're training twice a week, performing three times a year, and developing skills that translate directly to brand value. We're looking for agents and reps who see what we see — and want early access to serious young talent before the rest of the industry catches up.",
        ideal: [
          "Active representation portfolio in entertainment, sports, or performing arts",
          "Understanding of NIL landscape for youth and young adult performers",
          "Commitment to performer development, not just placement",
          "Interest in long-term talent relationship over transactional deals",
        ],
      },
      {
        title: "Former Professional Artist",
        type: "Mentorship / Residency",
        description:
          "You did it. You performed at the level most people only dream about — the tours, the companies, the stages. Now imagine what you could have done with the mentorship you didn't have. Come back to the floor, not as a coach, but as a presence. A living example. EPC members need to see what's possible — and that's exactly what you are.",
        ideal: [
          "Career history in professional skating, dance, theater, or touring performance",
          "Willingness to share real industry knowledge, not just technique",
          "Authentic connection to the next generation of performers",
          "Availability for workshops, residencies, or ongoing mentorship",
        ],
      },
    ],
  },
  {
    category: "Creative & Production",
    color: "#E8334A",
    positions: [
      {
        title: "Choreographer — Creative Team",
        type: "Project-Based",
        description:
          "EPC creates original productions — not recitals, not showcases, productions. We need choreographers who think in acts, not in routines. If you've got a vision for what ice and dance can look like when they share the same stage, we want to hear it.",
        ideal: [
          "Demonstrated choreographic portfolio (video welcome)",
          "Experience with ensemble and featured artist staging",
          "Ability to collaborate with directors, designers, and instructors",
          "Open to artistic direction while advocating for your creative vision",
        ],
      },
      {
        title: "Costume & Wardrobe Designer",
        type: "Project-Based / Seasonal",
        description:
          "Three productions means three complete looks. Every costume needs to perform under stage lighting, survive ice and off-ice movement, and make the audience feel the world we're building. If you design for function AND impact, there's a creative home for you here.",
        ideal: [
          "Background in performance or theatrical costume design",
          "Experience with ice-specific costume requirements a plus",
          "Ability to source, construct, or manage garment production",
          "Eye for brand consistency across a full company look",
        ],
      },
      {
        title: "Production Stage Manager",
        type: "Seasonal",
        description:
          "The show runs because you run it. EPC productions need a detail-obsessed, calm-under-pressure stage manager who can coordinate between instructors, choreographers, tech, and 20+ performers without dropping a single cue. If you've called a show before, you know exactly what we mean.",
        ideal: [
          "Professional stage management experience",
          "Strong rehearsal documentation and scheduling skills",
          "Ability to manage young performers with clear, firm communication",
          "Available for all three production cycles annually",
        ],
      },
    ],
  },
  {
    category: "Business & Brand",
    color: "#F5C842",
    positions: [
      {
        title: "Videographer / Content Creator",
        type: "Contract / Ongoing",
        description:
          "EPC is building something worth watching — and the world should see it. We need a visual storyteller who can capture rehearsals, production nights, and behind-the-scenes moments with the same cinematic energy that lives in our performances. This is not event photography. This is brand-building through a lens.",
        ideal: [
          "Portfolio of performance, dance, or sports videography",
          "Proficiency in shooting and editing short-form and long-form content",
          "Understanding of social media content strategy",
          "Ability to work in low-light and dynamic performance environments",
        ],
      },
      {
        title: "Sponsorship & Partnerships",
        type: "Commission / Contract",
        description:
          "EPC is signing rink partners and corporate sponsors. We need someone who can walk into a room, tell our story, and close. If you've worked in sports sponsorship, entertainment marketing, or B2B sales and you believe in what we're building — your rolodex and our brand are a natural fit.",
        ideal: [
          "Background in sponsorship, brand partnerships, or entertainment sales",
          "Existing relationships with regional or national brands a plus",
          "Strong presentation and proposal writing skills",
          "Entrepreneurial mindset — you build, not just manage",
        ],
      },
      {
        title: "Marketing & Social Media",
        type: "Contract / Part-Time",
        description:
          "EPC's aesthetic is premium, bold, and unapologetically performance-first. We need a marketer who gets that — and can grow an audience that matches it. From production announcements to audition campaigns to behind-the-scenes content, there's a full content ecosystem here waiting to be built.",
        ideal: [
          "Experience managing social channels for a brand, venue, or talent",
          "Strong design eye and familiarity with Canva, Adobe, or equivalent",
          "Track record of audience growth, not just content output",
          "Understanding of the performing arts or entertainment space",
        ],
      },
    ],
  },
];

const whyWork = [
  {
    title: "Ground Floor of Something National",
    body: "EPC is in Phase 1 — DMV launch. Phase 3 is national. The people who join now are the ones who shape what this becomes. Early contributors don't just have jobs. They have ownership of the story.",
  },
  {
    title: "Your Work Reaches Real Audiences",
    body: "Three live productions per year. Real stages. Real crowds. Whether you're coaching technique or calling cues, the result is a performance that people will remember. This is not rehearsal for something bigger. This is the thing.",
  },
  {
    title: "A Company That Invests in Its People",
    body: "EPC is built on the belief that performers deserve better. That extends to the team around them. We compensate fairly, communicate clearly, and build relationships that outlast contracts.",
  },
];

export default function WorkWithUsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/25 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(194,24,91,0.15)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Join the Team
            </p>
            <h1 className="font-bebas text-7xl md:text-[100px] text-cream tracking-widest leading-none mb-6">
              WORK WITH
              <br />
              <span className="text-gradient">EPC</span>
            </h1>
            <p className="font-dm text-cream/70 text-lg leading-relaxed max-w-2xl mb-8">
              We are building a professional ice and dance production company
              from the ground up. That takes more than performers. It takes
              coaches, creatives, industry veterans, and business minds who
              believe in what live performance can become.
            </p>
            <p className="font-cormorant italic text-cream/60 text-xl">
              This is not a side gig. This is the ground floor of something national.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With EPC */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {whyWork.map((item, i) => (
              <div key={i} className="bg-dark p-8">
                <div
                  className="inline-block h-1 w-10 rounded-full mb-5"
                  style={{ background: ["#7B2FBE", "#C2185B", "#E8334A"][i] }}
                />
                <h3 className="font-bebas text-2xl text-cream tracking-widest mb-3">
                  {item.title}
                </h3>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role listings */}
      {roles.map((category) => (
        <section key={category.category} className="py-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-10">
              <div
                className="w-1.5 h-8 rounded-full flex-shrink-0"
                style={{ background: category.color }}
              />
              <h2 className="font-bebas text-3xl text-cream tracking-widest">
                {category.category}
              </h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-6">
              {category.positions.map((position) => (
                <div
                  key={position.title}
                  className="group p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bebas text-2xl text-cream tracking-widest">
                        {position.title}
                      </h3>
                      <span
                        className="inline-block mt-1 text-xs font-dm font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: category.color + "25",
                          color: category.color,
                        }}
                      >
                        {position.type}
                      </span>
                    </div>
                    <Link
                      href="#apply"
                      className="flex-shrink-0 self-start sm:self-center px-4 py-2 border border-gold/30 text-gold text-xs font-dm font-semibold rounded-lg hover:bg-gold/10 hover:border-gold/60 transition-all duration-200 tracking-wide"
                    >
                      Apply →
                    </Link>
                  </div>

                  <p className="font-dm text-cream/65 text-sm leading-relaxed mb-5">
                    {position.description}
                  </p>

                  <div>
                    <p className="text-xs font-dm text-cream/35 tracking-widest uppercase mb-2">
                      What We&apos;re Looking For
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {position.ideal.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs font-dm text-cream/55"
                        >
                          <span className="mt-0.5 flex-shrink-0" style={{ color: category.color }}>
                            →
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA banner before form */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-brand" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <p className="font-cormorant italic text-cream/80 text-xl mb-3">
                Don&apos;t see your role listed?
              </p>
              <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-4">
                IF YOU BELIEVE IN WHAT WE&apos;RE BUILDING,
                <br />
                TELL US HOW YOU FIT
              </h3>
              <p className="font-dm text-cream/70 text-base max-w-xl mx-auto">
                We&apos;re open to unconventional pitches from people with
                genuine vision. Use the form below and tell us exactly what
                you&apos;d bring to EPC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ApplicationForm />
      <Footer />
    </main>
  );
}
