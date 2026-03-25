"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] =
      Array.from({ length: 60 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      }));

    const draw = () => {
      t += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animated gradient background
      const grd = ctx.createLinearGradient(
        canvas.width * (0.5 + 0.5 * Math.sin(t)),
        0,
        canvas.width * (0.5 + 0.5 * Math.cos(t * 0.7)),
        canvas.height
      );
      grd.addColorStop(0, "#0D0A14");
      grd.addColorStop(0.3, "#3D1266");
      grd.addColorStop(0.65, "#7B2FBE");
      grd.addColorStop(0.85, "#C2185B");
      grd.addColorStop(1, "#0D0A14");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Glow orbs
      const orbColors = ["#7B2FBE", "#C2185B", "#E8334A"];
      orbColors.forEach((color, i) => {
        const x =
          canvas.width * (0.25 + 0.5 * Math.sin(t * 0.5 + (i * Math.PI * 2) / 3));
        const y =
          canvas.height * (0.3 + 0.4 * Math.cos(t * 0.4 + (i * Math.PI * 2) / 3));
        const orb = ctx.createRadialGradient(x, y, 0, x, y, canvas.width * 0.35);
        orb.addColorStop(0, color + "55");
        orb.addColorStop(1, "transparent");
        ctx.fillStyle = orb;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Particles (spotlight dust)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 200, 66, ${p.alpha})`;
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Overlay vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-cormorant italic text-gold text-lg md:text-xl tracking-widest mb-4 opacity-80">
            DMV&apos;s Premier Ice & Dance Performance Company
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-bebas text-6xl sm:text-8xl md:text-[110px] lg:text-[130px] leading-none text-cream tracking-widest mb-6"
        >
          EVOLUTION
          <br />
          <span className="text-gradient">PRODUCTION</span>
          <br />
          COMPANY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-cormorant italic text-cream/80 text-xl md:text-2xl lg:text-3xl mb-10 tracking-wide"
        >
          Where Ice Meets Dance. Where Art Becomes Legend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/auditions#register"
            className="px-8 py-4 bg-gold text-dark font-dm font-bold text-base rounded-lg hover:bg-gold/90 hover:shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-all duration-200 tracking-wide"
          >
            Audition Now
          </Link>
          <Link
            href="#about"
            className="px-8 py-4 border border-cream/30 text-cream font-dm font-medium text-base rounded-lg hover:border-cream/60 hover:bg-white/5 transition-all duration-200 tracking-wide"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs font-dm tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
