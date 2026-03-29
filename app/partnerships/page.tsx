import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PartnershipForm from "@/components/PartnershipForm";
import Link from "next/link";
import { RINK_PARTNER_BENEFITS, CORPORATE_PARTNER_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partnerships | Evolution Production Company",
  description:
    "Partner with Evolution Production Company. Rink partners, corporate sponsors, media, community, and more — grow with EPC from the ground floor.",
};

const additionalPartnerTypes = [
  {
    title: "Media Partners",
    description:
      "Local TV stations, digital media outlets, lifestyle brands, and content creators who want early access to EPC productions, rehearsals, and artist stories. In return: logo placement, press access, and co-branded content.",
    color: "#7B2FBE",
  },
  {
    title: "School & Youth Program Partners",
    description:
      "After-school programs, performing arts schools, and youth organizations that want to pipeline young talent into structured professional training. EPC can serve as the performance destination for your students.",
    color: "#C2185B",
  },
  {
    title: "Hospitality Partners",
    description:
      "Hotels, restaurants, and entertainment venues near EPC production locations. Package deals, cross-promotion, and audience capture for businesses that benefit when EPC fills a house.",
    color: "#E8334A",
  },
  {
    title: "Apparel & Merchandise Partners",
    description:
      "Brands interested in co-designing company apparel, production merchandise, or performance gear. Your product in front of live audiences — worn by the talent on and off the ice.",
    color: "#7B2FBE",
  },
  {
    title: "Technology & Platform Partners",
    description:
      "Ticketing platforms, streaming services, production tech companies, and digital tools that want to power EPC's growth. Early-stage technology partners grow their footprint as EPC scales nationally.",
    color: "#C2185B",
  },
  {
    title: "Community Organization Partners",
    description:
      "DMV arts nonprofits, cultural organizations, and community groups aligned with performing arts, youth development, or diversity in entertainment. Joint programming, shared audiences, and mission-aligned impact.",
    color: "#E8334A",
  },
];

export default function PartnershipsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(232,51,74,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
              Partnership Opportunities
            </p>
            <h1 className="font-bebas text-7xl md:text-[96px] text-cream tracking-widest leading-none mb-6">
              GROW WITH
              <br />
              <span className="text-gradient">EPC</span>
            </h1>
            <p className="font-dm text-cream/70 text-lg leading-relaxed max-w-2xl mb-6">
              Evolution Production Company is building something the DMV has
              never seen — a professional hybrid ice and dance production company
              with three live shows a year and a clear path to national reach.
            </p>
            <p className="font-cormorant italic text-cream/50 text-xl">
              The earliest partners don&apos;t just sponsor a company. They become part of its story.
            </p>
          </div>
        </div>
      </section>

      {/* Rink Partners */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-8 rounded-full bg-purple flex-shrink-0" />
            <h2 className="font-bebas text-4xl text-cream tracking-widest">RINK PARTNERS</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <p className="font-dm text-cream/60 text-sm leading-relaxed max-w-2xl mb-10 ml-6">
            EPC is actively seeking official partner rinks in the DMV area. If you
            operate an ice facility, a partnership means recurring revenue through
            rehearsal blocks, co-hosted productions, and direct alignment with a
            serious and growing performer community.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {RINK_PARTNER_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-purple/30 transition-all duration-200 h-full"
              >
                <h4 className="font-bebas text-lg text-cream tracking-widest mb-1">
                  {benefit.title}
                </h4>
                <p className="font-dm text-cream/60 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="ml-6">
            <Link href="#inquire" className="inline-block px-7 py-3 border border-purple/50 text-purple font-dm font-semibold text-sm rounded-lg hover:bg-purple/10 hover:border-purple/70 transition-all duration-200">
              Inquire About Rink Partnership →
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-8 rounded-full bg-magenta flex-shrink-0" />
            <h2 className="font-bebas text-4xl text-cream tracking-widest">CORPORATE SPONSORS</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <p className="font-dm text-cream/60 text-sm leading-relaxed max-w-2xl mb-10 ml-6">
            Sponsoring EPC puts your brand in front of live audiences at every
            production — and in the digital reach that surrounds them. Three shows
            a year. A growing company. A rising brand. Get in early.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {CORPORATE_PARTNER_TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className={`h-full p-7 rounded-2xl flex flex-col ${
                  i === 1
                    ? "border border-gold/40 bg-gold/5 shadow-[0_0_40px_rgba(245,200,66,0.08)]"
                    : "border border-white/10 bg-white/5"
                }`}
              >
                <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">
                  {tier.level} Level
                </p>
                <h4 className="font-bebas text-2xl text-cream tracking-widest mb-4">
                  {tier.name}
                </h4>
                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-dm text-cream/70">
                      <span className="text-gold mt-0.5">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#inquire"
                  className={`block text-center px-5 py-2.5 rounded-lg font-dm font-semibold text-sm transition-all duration-200 ${
                    i === 1
                      ? "bg-gold text-dark hover:bg-gold/90"
                      : "border border-white/15 text-cream/70 hover:border-white/30 hover:text-cream"
                  }`}
                >
                  Inquire
                </Link>
              </div>
            ))}
          </div>
          <p className="ml-6 font-dm text-cream/30 text-xs">
            All corporate sponsorships are custom-built. Pricing available upon inquiry.
          </p>
        </div>
      </section>

      {/* Additional partnership types */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-8 rounded-full bg-red flex-shrink-0" />
            <h2 className="font-bebas text-4xl text-cream tracking-widest">MORE WAYS TO PARTNER</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <p className="font-dm text-cream/60 text-sm leading-relaxed max-w-2xl mb-10 ml-6">
            We think broadly about partnership. If your organization touches
            performance, youth, media, or community — there&apos;s a way to align with EPC.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {additionalPartnerTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                <div
                  className="inline-block h-0.5 w-8 rounded-full mb-3"
                  style={{ background: type.color }}
                />
                <h4 className="font-bebas text-xl text-cream tracking-widest mb-2">
                  {type.title}
                </h4>
                <p className="font-dm text-cream/55 text-xs leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-brand" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <p className="font-cormorant italic text-cream/80 text-xl mb-3">
                Don&apos;t see exactly what you need?
              </p>
              <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-4">
                TELL US WHAT YOU HAVE IN MIND
              </h3>
              <p className="font-dm text-cream/70 text-base max-w-lg mx-auto">
                Every partnership we build is custom. Use the form below to
                tell us about your organization and vision — we&apos;ll take it
                from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PartnershipForm />
      <Footer />
    </main>
  );
}
