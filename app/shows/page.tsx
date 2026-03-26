import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SHOWS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Shows | Evolution Production Company",
  description:
    "Three productions per year — Ignite, Ascend, and Illuminate. Explore EPC's full season of professional ice and dance performances in the DMV area.",
};

const SHOW_IMAGES = [
  "/spring-show.png",
  "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&q=80",
  "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80",
];

export default function ShowsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-dark to-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            The Season
          </p>
          <h1 className="font-bebas text-6xl md:text-8xl text-cream tracking-widest leading-none mb-6">
            THREE PRODUCTIONS.{" "}
            <span className="text-gradient">ONE COMPANY.</span>
          </h1>
          <p className="font-dm text-cream/60 text-base md:text-lg max-w-2xl mx-auto">
            Each production is a full theatrical event — original choreography,
            precision ice work, and live performance you can feel.
          </p>
        </div>
      </section>

      {/* Show cards */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SHOWS.map((show, i) => (
              <div
                key={show.season}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                {/* Image — alternates side */}
                <div
                  className={`relative h-72 md:h-96 rounded-2xl overflow-hidden ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={SHOW_IMAGES[i]}
                    alt={`${show.theme} — ${show.season} production`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-dm font-semibold tracking-widest uppercase text-cream"
                      style={{ backgroundColor: show.color + "cc" }}
                    >
                      ● {show.season} Production
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="font-cormorant italic text-gold text-lg tracking-widest mb-2">
                    {show.season}
                  </p>
                  <h2
                    className="font-bebas text-5xl md:text-6xl tracking-widest mb-4"
                    style={{ color: show.color }}
                  >
                    {show.theme}
                  </h2>
                  <p className="font-dm text-cream/70 text-sm leading-relaxed mb-6">
                    {show.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5">
                      <span className="text-cream/40 text-xs">Performance</span>
                      <span className="text-cream text-xs font-semibold">
                        {show.performanceMonth}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5">
                      <span className="text-cream/40 text-xs">Training</span>
                      <span className="text-cream text-xs font-semibold">
                        {show.trainingMonths}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/auditions"
                    className="inline-block px-6 py-3 rounded-lg font-dm font-semibold text-sm text-dark transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                    style={{ backgroundColor: show.color }}
                  >
                    Audition for this show →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
