import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Shows from "@/components/Shows";
import Auditions from "@/components/Auditions";
import WhyJoin from "@/components/WhyJoin";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Image from "next/image";

function QuoteDivider() {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      <div className="relative z-10 text-center px-4">
        <p className="font-cormorant italic text-cream text-2xl md:text-3xl lg:text-4xl max-w-3xl mx-auto leading-relaxed">
          &ldquo;Train with purpose. Perform with passion. Evolve without limits.&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />
      <Hero />
      <About />
      <QuoteDivider />
      <Shows />
      <Auditions />

      {/* Auditions flyer */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Image
            src="/auditions-flyer.png"
            alt="EPC Founding Company Auditions Flyer"
            width={600}
            height={800}
            className="w-full rounded-2xl shadow-[0_0_60px_rgba(123,47,190,0.25)]"
          />
        </div>
      </section>

      <WhyJoin />
      <Partners />
      <ContactForm />
      <Footer />
    </main>
  );
}
