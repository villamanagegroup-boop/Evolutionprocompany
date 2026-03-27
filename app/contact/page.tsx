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
                  <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">Email</p>
                  <a href="mailto:info@epcperform.com" className="font-dm text-gold text-sm hover:underline">
                    info@epcperform.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-1">Headquartered</p>
                  <p className="font-dm text-cream/80 text-sm">Washington DC &amp; Surrounding Areas, USA</p>
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

              <div>
                <p className="text-xs font-dm text-cream/40 tracking-widest uppercase mb-2">Follow Us</p>
                <a
                  href="https://www.instagram.com/evolutionperformco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-dm text-sm">@evolutionperformco</span>
                </a>
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
