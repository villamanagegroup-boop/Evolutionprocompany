import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Evolution Production Company",
  description: "Privacy Policy for Evolution Production Company.",
};

const sections = [
  {
    title: "Information We Collect",
    body: `When you interact with EPC — through our website forms, interest registration, applications, or partnership inquiries — we may collect your name, email address, phone number, age, location, and any information you voluntarily provide in form fields. We do not collect payment information through this website.`,
  },
  {
    title: "How We Use Your Information",
    body: `Information you submit is used solely to respond to your inquiry, process your interest registration or application, and communicate relevant EPC updates. We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "Email Communication",
    body: `By submitting a form on this site, you consent to receiving email communication from Evolution Production Company related to your inquiry, auditions, or partnership opportunities. You may opt out of non-essential communications at any time by replying to any email or contacting us directly.`,
  },
  {
    title: "Data Storage & Security",
    body: `Form submissions are processed securely and stored using industry-standard practices. While we take reasonable precautions to protect your information, no data transmission over the internet is completely secure. We encourage you to submit only information necessary for your inquiry.`,
  },
  {
    title: "Third-Party Services",
    body: `Our website may use third-party services including email delivery providers and analytics tools. These services operate under their own privacy policies. We do not authorize these services to use your information for any purpose beyond what is necessary to operate our site.`,
  },
  {
    title: "Cookies",
    body: `This website may use cookies and similar technologies to improve user experience and gather basic analytics. You may disable cookies through your browser settings, though some features of the site may not function as intended.`,
  },
  {
    title: "Children's Privacy",
    body: `EPC welcomes performers of all ages, including minors. However, we request that individuals under 18 have a parent or guardian review and consent to the submission of their personal information through any form on this site.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to request access to, correction of, or deletion of personal information we hold about you. To make such a request, contact us at info@epcperform.com. We will respond within a reasonable timeframe.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated effective date. Continued use of this website after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    body: `For questions about this Privacy Policy or how your information is handled, contact us at info@epcperform.com.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/15 via-dark to-dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">Legal</p>
          <h1 className="font-bebas text-6xl md:text-7xl text-cream tracking-widest leading-none mb-4">
            PRIVACY <span className="text-gradient">POLICY</span>
          </h1>
          <p className="font-dm text-cream/50 text-sm">Effective Date: April 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-dm text-cream/65 text-base leading-relaxed mb-12 border-l-2 border-purple/50 pl-5">
            Evolution Production Company (&ldquo;EPC,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains how we collect, use, and protect the information you share with us through this website.
          </p>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.title} className="border-t border-white/8 pt-10 first:border-0 first:pt-0">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-bebas text-2xl text-gradient leading-none flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-bebas text-2xl text-cream tracking-widest">{s.title}</h2>
                </div>
                <p className="font-dm text-cream/60 text-sm leading-relaxed ml-10">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
