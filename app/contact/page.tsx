import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactPageForm from "@/components/ContactPageForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Evolution Production Company",
  description:
    "Get in touch with Evolution Production Company — audition questions, partnerships, media inquiries, and more.",
};

const quickLinks = [
  {
    label: "Audition Interest",
    description: "Register for upcoming DMV auditions",
    href: "/auditions#register",
    color: "#7B2FBE",
  },
  {
    label: "Work With Us",
    description: "Instructors, agents, creatives & more",
    href: "/work-with-us",
    color: "#C2185B",
  },
  {
    label: "Partnerships",
    description: "Rink partners, corporate sponsors & more",
    href: "/partnerships",
    color: "#E8334A",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-dark to-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
            Reach Out
          </p>
          <h1 className="font-bebas text-6xl md:text-8xl text-cream tracking-widest leading-none mb-6">
            CONTACT <span className="text-gradient">EPC</span>
          </h1>
          <p className="font-dm text-cream/60 text-base md:text-lg max-w-xl mx-auto">
            General inquiries, media requests, partnership questions — or
            anything else. We read everything and respond to messages that
            matter.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-dm text-cream/40 text-xs tracking-widest uppercase text-center mb-6">
            Looking for something specific?
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div
                  className="w-2 h-8 rounded-full flex-shrink-0"
                  style={{ background: link.color }}
                />
                <div>
                  <p className="font-bebas text-lg text-cream tracking-widest leading-none">
                    {link.label}
                  </p>
                  <p className="font-dm text-cream/50 text-xs mt-0.5">
                    {link.description}
                  </p>
                </div>
                <span className="ml-auto text-cream/30 group-hover:text-cream/60 transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Left: info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-bebas text-3xl text-cream tracking-widest mb-4">
                  GET IN <span className="text-gradient">TOUCH</span>
                </h2>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">
                  We are a lean, focused team. We don&apos;t have a call center
                  — but we do read every message and respond to serious
                  inquiries promptly.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">Based In</p>
                  <p className="font-dm text-cream/80 text-sm">DMV Area (DC / MD / VA)</p>
                </div>
                <div>
                  <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">Response Time</p>
                  <p className="font-dm text-cream/80 text-sm">Within 48 hours for serious inquiries</p>
                </div>
                <div>
                  <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">Auditions</p>
                  <p className="font-dm text-cream/80 text-sm">
                    Register interest at{" "}
                    <Link href="/auditions#register" className="text-gold hover:underline">
                      the auditions page
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">Careers</p>
                  <p className="font-dm text-cream/80 text-sm">
                    View open roles at{" "}
                    <Link href="/work-with-us" className="text-gold hover:underline">
                      Work With Us
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">Partnerships</p>
                  <p className="font-dm text-cream/80 text-sm">
                    Rinks, sponsors & more at{" "}
                    <Link href="/partnerships" className="text-gold hover:underline">
                      partnerships page
                    </Link>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="font-cormorant italic text-cream/40 text-base leading-relaxed">
                  &ldquo;Where Ice Meets Dance. Where Art Becomes Legend.&rdquo;
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="md:col-span-3">
              <ContactPageForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
