import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | Evolution Production Company",
  description: "Terms of Use for Evolution Production Company.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using the Evolution Production Company website (epcperform.com), you agree to be bound by these Terms of Use. If you do not agree, please do not use this site. We reserve the right to update these terms at any time, and continued use of the site constitutes acceptance of any changes.`,
  },
  {
    title: "Use of This Website",
    body: `This website is provided for informational purposes — to learn about EPC, register audition interest, submit applications, and explore partnership opportunities. You agree to use this site only for lawful purposes and in a manner that does not infringe the rights of others or restrict anyone else's use of the site.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website — including text, images, graphics, logos, and design — is the property of Evolution Production Company or its licensors and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content on this site without express written permission from EPC.`,
  },
  {
    title: "Form Submissions & Applications",
    body: `Submitting a form, registering audition interest, or completing an application does not guarantee membership, employment, or any formal relationship with EPC. All submissions are reviewed at EPC's sole discretion. We are under no obligation to respond to every submission or provide a reason for any decision.`,
  },
  {
    title: "Accuracy of Information",
    body: `We make reasonable efforts to ensure that information on this site is accurate and current. However, EPC makes no warranties, expressed or implied, regarding the completeness, accuracy, or reliability of any content. Details including audition dates, show schedules, pricing, and program structure are subject to change without notice.`,
  },
  {
    title: "Third-Party Links",
    body: `This website may contain links to third-party websites. These links are provided for convenience only. EPC does not endorse or take responsibility for the content, privacy practices, or terms of any linked sites. Accessing third-party sites is at your own risk.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, Evolution Production Company shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or any content on it. Your sole remedy for dissatisfaction with this site is to stop using it.`,
  },
  {
    title: "No Guarantee of Results",
    body: `Nothing on this website constitutes a guarantee of audition results, professional outcomes, income, or career advancement. Testimonials, descriptions of opportunities, or examples of what members may experience are illustrative and not a promise of specific results for any individual.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Use are governed by the laws of the Commonwealth of Virginia, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of the Commonwealth of Virginia.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms of Use may be directed to info@epcperform.com.`,
  },
];

export default function TermsPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/15 via-dark to-dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">Legal</p>
          <h1 className="font-bebas text-6xl md:text-7xl text-cream tracking-widest leading-none mb-4">
            TERMS <span className="text-gradient">OF USE</span>
          </h1>
          <p className="font-dm text-cream/50 text-sm">Effective Date: April 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-dm text-cream/65 text-base leading-relaxed mb-12 border-l-2 border-magenta/50 pl-5">
            Please read these Terms of Use carefully before using this website. These terms govern your access to and use of the Evolution Production Company website and all content, features, and services available through it.
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
