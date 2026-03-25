import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Shows", href: "/#shows" },
  { label: "Auditions", href: "/auditions" },
  { label: "Company", href: "/company" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Evolution Production Company"
              width={120}
              height={120}
              className="h-14 w-auto object-contain"
            />
            <div>
              <div className="font-bebas text-xl text-cream tracking-widest leading-none">
                Evolution
              </div>
              <div className="text-[10px] tracking-[0.25em] text-cream/50 uppercase">
                Production Company
              </div>
            </div>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-dm text-cream/50 hover:text-cream transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/auditions#register"
            className="px-5 py-2.5 bg-gold text-dark font-dm font-semibold text-sm rounded-lg hover:bg-gold/90 transition-all duration-200"
          >
            Apply Now
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="font-dm text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} Evolution Production Company. All rights reserved.
          </p>
          <p className="font-cormorant italic text-cream/30 text-sm">
            Where Ice Meets Dance. Where Art Becomes Legend.
          </p>
        </div>
      </div>
    </footer>
  );
}
