import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Work With Us | Evolution Production Company",
  description:
    "Join the EPC ecosystem — as an affiliate, freelancer, volunteer, or brand partner. Help us grow a national ice and dance production company from the ground up.",
};

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
              Grow With Us
            </p>
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[100px] text-cream tracking-widest leading-none mb-6">
              JOIN THE
              <br />
              <span className="text-gradient">EPC ECOSYSTEM</span>
            </h1>
            <p className="font-dm text-cream/70 text-lg leading-relaxed max-w-2xl mb-6">
              We are not just building a company — we are building a network. EPC is looking for affiliates, freelancers, volunteers, and partners who want to be part of something that is going national.
            </p>
            <p className="font-cormorant italic text-cream/55 text-xl">
              The ground floor is where the real opportunity lives.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliates — Primary Push */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-cormorant italic text-gold text-lg tracking-widest mb-4">
                Our Biggest Ask
              </p>
              <h2 className="font-bebas text-5xl text-cream tracking-widest leading-none mb-6">
                BECOME AN <span className="text-gradient">AFFILIATE</span>
              </h2>
              <div className="space-y-4 font-dm text-cream/70 text-sm leading-relaxed">
                <p>
                  An EPC affiliate is someone who believes in what we are building and helps spread the word. You do not need to be a performer. You do not need to work in dance or skating. You just need to know people — and be willing to connect them to us.
                </p>
                <p>
                  Affiliates share EPC with their networks: on social media, in their studios, at their gyms, in their communities. When someone you refer joins or partners with EPC, you earn a commission. Simple, flexible, and built to reward real relationships.
                </p>
                <p>
                  We are in early growth mode, which means affiliates who get in now will have the most to gain as we scale. This is not a passive link-share — this is a real opportunity to grow with a company that is going somewhere.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "Who It Is For",
                  text: "Studio owners, coaches, content creators, community leaders, parents in the performing arts world — anyone with a network that overlaps with ours.",
                },
                {
                  label: "What You Do",
                  text: "Share EPC with your audience. Refer performers, families, partners, or sponsors. We handle everything else.",
                },
                {
                  label: "What You Earn",
                  text: "Commission on every successful referral. Details shared when you apply. No cap, no gimmicks.",
                },
                {
                  label: "Why Now",
                  text: "EPC is building its affiliate network before we go wide. Getting in early means building a relationship while we still know everyone by name.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-gold font-bebas text-lg leading-none mt-0.5 flex-shrink-0">→</span>
                  <div>
                    <p className="font-bebas text-base text-cream tracking-widest mb-1">{item.label}</p>
                    <p className="font-dm text-cream/60 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Connect */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-cormorant italic text-gold text-lg tracking-widest mb-3">Other Ways In</p>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest">
              MORE WAYS TO <span className="text-gradient">CONTRIBUTE</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                title: "Instructors & Choreographers",
                color: "#7B2FBE",
                body: "We are building a coaching roster of skating and dance instructors, ice choreographers, and movement directors who work at a professional level. If you teach or create at a high standard, we want to meet you.",
              },
              {
                title: "Operations & Admin",
                color: "#E8334A",
                body: "Behind every production is a team that makes it run — scheduling, communications, logistics, and member support. We are looking for detail-oriented people who can help us grow a real organization with real systems.",
              },
              {
                title: "Outreach & Growth",
                color: "#C2185B",
                body: "Community outreach, social media, event promotion, affiliate coordination — if you understand how to grow an audience and build relationships, there is a role for you here. EPC is expanding and we need people who know how to open doors.",
              },
              {
                title: "Volunteers & Freelancers",
                color: "#F5C842",
                body: "Passionate about performing arts and want to be part of something real? Whether you volunteer at productions or take on freelance creative work — videography, photography, design — we build lasting relationships with people we trust.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-dark p-8">
                <div
                  className="h-0.5 w-8 rounded-full mb-5"
                  style={{ background: item.color }}
                />
                <h3 className="font-bebas text-2xl text-cream tracking-widest mb-3">{item.title}</h3>
                <p className="font-dm text-cream/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-brand" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <p className="font-cormorant italic text-cream/80 text-xl mb-3">
                Ready to be part of it?
              </p>
              <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-widest mb-4">
                TELL US HOW YOU FIT
              </h3>
              <p className="font-dm text-cream/70 text-base max-w-xl mx-auto">
                Whether you want to affiliate, freelance, volunteer, or partner — fill out the form below and tell us who you are and what you bring. We read every submission.
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
