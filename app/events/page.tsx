import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Bookings | Evolution Production Company",
  description:
    "Book Evolution Production Company for your next event. Corporate events, festivals, private celebrations, venue productions, and more.",
};

const eventTypes = [
  { title: "Corporate Events", description: "Company celebrations, conferences, and brand activations.", color: "#7B2FBE" },
  { title: "Holiday Events", description: "Seasonal shows and themed performances.", color: "#C2185B" },
  { title: "Festivals & Community Events", description: "Public showcases and live entertainment.", color: "#E8334A" },
  { title: "Private Celebrations", description: "Unique entertainment for special occasions.", color: "#7B2FBE" },
  { title: "Venue Productions", description: "Collaborations with theaters, arenas, and ice rinks.", color: "#C2185B" },
  { title: "Community Partnerships", description: "Events supporting arts, sports, and local initiatives.", color: "#E8334A" },
];

const performanceFormats = [
  { title: "Featured Performance Acts", description: "High-energy performances designed as a highlight moment during an event." },
  { title: "Ensemble Production Numbers", description: "Choreographed group performances with multiple performers." },
  { title: "Theatrical Skating Performances", description: "Specialty performances on ice when rink access is available." },
  { title: "Dance & Stage Performances", description: "Dynamic dance entertainment adaptable to stage or event spaces." },
  { title: "Custom Entertainment Concepts", description: "Entertainment tailored to match the theme or vision of an event." },
];

const venuePartners = [
  "Ice rinks",
  "Theaters and performing arts venues",
  "Sports organizations",
  "Community event organizers",
  "Arts organizations",
  "Corporate sponsors",
];

const whyEPC = [
  { label: "Professional Performers", body: "Trained skaters and dancers performing at a professional standard." },
  { label: "Unique Blend of Skating & Dance", body: "A performance experience audiences rarely see — athletic and artistic at once." },
  { label: "Flexible Performance Formats", body: "Featured acts, ensemble numbers, theatrical productions — we scale to your event." },
  { label: "Experienced Choreography & Production", body: "Every performance is purpose-built with original choreography and staging." },
  { label: "Engaging Entertainment for All Audiences", body: "From corporate crowds to community events — EPC commands the room." },
];

export default function EventsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(232,51,74,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Live Entertainment
            </p>
            <h1 className="font-bebas text-7xl md:text-[100px] text-cream tracking-widest leading-none mb-6">
              BRING EPC TO
              <br />
              <span className="text-gradient">YOUR EVENT</span>
            </h1>
            <p className="font-dm text-cream/70 text-lg leading-relaxed max-w-2xl mb-8">
              Dynamic live entertainment featuring skating, dance, and theatrical
              performance. Evolution Production Company creates visually exciting
              performances designed to elevate corporate events, festivals, private
              celebrations, and venue productions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#inquiry"
                className="px-8 py-4 bg-gold text-dark font-dm font-bold text-sm rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
              >
                Request Entertainment
              </Link>
              <Link
                href="/partnerships"
                className="px-8 py-4 border border-cream/20 text-cream font-dm font-semibold text-sm rounded-lg hover:border-cream/50 hover:bg-white/5 transition-all duration-200"
              >
                Partner With EPC
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Editorial numbered list */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              What We Do
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              ENTERTAINMENT THAT{" "}
              <span className="text-gradient">MOVES AN AUDIENCE</span>
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { num: "01", title: "Athletic Artistry", body: "Figure skaters and dancers performing at a professional level — technique and presentation in every movement." },
              { num: "02", title: "Original Choreography", body: "Every performance is purpose-built. No generic routines — EPC crafts experiences designed for your event and your audience." },
              { num: "03", title: "Scalable Productions", body: "From featured acts to full ensemble productions, EPC works with event organizers and venues to deliver memorable performance experiences for audiences of all sizes." },
            ].map((item, i, arr) => (
              <div key={item.num}>
                <div className="grid md:grid-cols-[120px_1fr] gap-8 py-10 items-start">
                  <div className="font-bebas text-7xl md:text-8xl text-gradient leading-none select-none">
                    {item.num}
                  </div>
                  <div className="pt-2 md:pt-4">
                    <h3 className="font-bebas text-2xl md:text-3xl text-cream tracking-widest mb-3">
                      {item.title}
                    </h3>
                    <p className="font-dm text-cream/60 text-base leading-relaxed max-w-2xl">
                      {item.body}
                    </p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-purple/40 via-magenta/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Cards */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Where We Perform
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-4">
              TYPES OF EVENTS{" "}
              <span className="text-gradient">WE WORK WITH</span>
            </h2>
            <p className="font-dm text-cream/55 text-base max-w-xl">
              EPC performers can be featured at a variety of events and productions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eventTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 rounded-2xl bg-[#13101c] hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="h-0.5 w-8 rounded-full mb-4"
                  style={{ background: `linear-gradient(90deg, ${type.color}, ${type.color}00)` }}
                />
                <h3 className="font-bebas text-xl text-cream tracking-widest mb-2">
                  {type.title}
                </h3>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Playbill 2-column staggered list */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              What We Offer
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              PERFORMANCE <span className="text-gradient">FORMATS</span>
            </h2>
            <p className="font-dm text-cream/55 text-base max-w-xl mt-4">
              Depending on the venue and event structure, EPC can provide several types of entertainment experiences.
            </p>
          </div>

          <div className="space-y-0">
            {performanceFormats.map((fmt, i, arr) => (
              <div key={fmt.title}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-16 py-8 items-start">
                  <div className="flex items-start gap-4">
                    <span className="font-bebas text-4xl text-gradient leading-none flex-shrink-0 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bebas text-xl md:text-2xl text-cream tracking-widest pt-1">
                      {fmt.title}
                    </h3>
                  </div>
                  <p className="font-dm text-cream/60 text-sm leading-relaxed md:pt-1">
                    {fmt.description}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Two-tone split panel */}
      <section className="overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[480px]">
          {/* Left — warmer dark */}
          <div className="bg-[#11091A] px-8 md:px-16 py-16 flex flex-col justify-center">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Collaboration
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-6">
              VENUE &amp; PRODUCTION{" "}
              <span className="text-gradient">PARTNERSHIPS</span>
            </h2>
            <p className="font-dm text-cream/65 text-base leading-relaxed mb-5">
              EPC collaborates with organizations interested in presenting live
              productions and performance programming.
            </p>
            <p className="font-dm text-cream/65 text-base leading-relaxed mb-8">
              These collaborations allow EPC to bring unique productions to new
              audiences while supporting performance opportunities for our company members.
            </p>
            <Link
              href="/partnerships"
              className="self-start px-7 py-3 border border-purple/50 text-purple font-dm font-semibold text-sm rounded-lg hover:bg-purple/10 hover:border-purple/70 transition-all duration-200"
            >
              View Partnership Options →
            </Link>
          </div>

          {/* Right — standard dark */}
          <div className="bg-dark border-l border-white/10 px-8 md:px-16 py-16 flex flex-col justify-center">
            <p className="font-dm text-cream/35 text-xs tracking-widest uppercase mb-8">
              Potential partners include
            </p>
            <div className="space-y-4">
              {venuePartners.map((partner, i) => (
                <div key={partner} className="flex items-center gap-5 group">
                  <span className="font-bebas text-2xl text-gradient leading-none w-8 flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 flex items-center gap-4">
                    <span className="font-dm text-cream/70 text-base group-hover:text-cream transition-colors duration-200">
                      {partner}
                    </span>
                    <div className="flex-1 h-px bg-white/5 group-hover:bg-white/15 transition-colors duration-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Full-width glowing bars */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            The Difference
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-12">
            WHY WORK <span className="text-gradient">WITH EPC</span>
          </h2>
        </div>

        <div>
          {whyEPC.map((item, i) => (
            <div
              key={item.label}
              className="group border-b border-white/10 hover:bg-gradient-to-r hover:from-purple/10 hover:via-magenta/5 hover:to-transparent transition-all duration-300 cursor-default"
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-7 grid md:grid-cols-[60px_280px_1fr] gap-4 md:gap-10 items-center">
                <span className="font-bebas text-4xl text-gradient leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bebas text-xl md:text-2xl text-cream tracking-widest group-hover:text-gradient transition-all duration-300">
                  {item.label}
                </h3>
                <p className="font-dm text-cream/40 text-sm leading-relaxed group-hover:text-cream/65 transition-colors duration-300">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 — Cinematic booking panel */}
      <section id="inquiry" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-[#0f0818] to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(123,47,190,0.25)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(232,51,74,0.15)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Get in Touch
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-cream tracking-widest mb-4">
              BOOKING <span className="text-gradient">INQUIRY</span>
            </h2>
            <p className="font-dm text-cream/60 text-base leading-relaxed mb-3">
              Event planners and organizations interested in working with EPC are
              invited to contact us to discuss their event.
            </p>
            <a
              href="mailto:bookings@epcperform.com"
              className="font-dm text-gold text-sm hover:text-gold/80 transition-colors duration-200"
            >
              bookings@epcperform.com
            </a>
          </div>

          {/* Floating form card */}
          <div className="bg-dark/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_0_80px_rgba(123,47,190,0.15)]">
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-dm text-cream/40 text-xs tracking-widest uppercase block mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name or organization"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-dm text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="font-dm text-cream/40 text-xs tracking-widest uppercase block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-dm text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="font-dm text-cream/40 text-xs tracking-widest uppercase block mb-2">Event Type</label>
                <input
                  type="text"
                  placeholder="Corporate event, festival, private celebration..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-dm text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="font-dm text-cream/40 text-xs tracking-widest uppercase block mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your event, date, location, and vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-dm text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200 resize-none"
                />
              </div>
              <Link
                href="/contact"
                className="block text-center w-full px-6 py-4 bg-gold text-dark font-dm font-bold text-sm rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] transition-all duration-200"
              >
                Submit Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
