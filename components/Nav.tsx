"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shows", href: "/#shows" },
  { label: "Auditions", href: "/auditions" },
  { label: "Company", href: "/company" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-dark/80 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Evolution Production Company"
              width={120}
              height={120}
              className="h-12 w-auto object-contain"
              priority
            />
            <div className="hidden sm:block">
              <div className="font-bebas text-xl text-cream tracking-widest leading-none">
                Evolution
              </div>
              <div className="text-[10px] tracking-[0.25em] text-cream/60 uppercase">
                Production Company
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-dm text-cream/70 hover:text-cream transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auditions#register"
              className="px-5 py-2.5 bg-gold text-dark font-dm font-semibold text-sm rounded-lg hover:bg-gold/90 hover:shadow-[0_0_20px_rgba(245,200,66,0.4)] transition-all duration-200"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-cream"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-cream transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-cream transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-cream transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden backdrop-blur-md bg-dark/95 border-b border-white/10 px-4 pb-6 pt-2"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/80 hover:text-cream font-dm text-base py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/auditions#register"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-3 bg-gold text-dark font-dm font-semibold text-sm rounded-lg text-center"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
