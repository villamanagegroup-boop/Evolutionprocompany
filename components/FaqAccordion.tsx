"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-200 overflow-hidden ${
            openIndex === i
              ? "border-gold/40 bg-white/8"
              : "border-white/10 bg-white/5 hover:border-white/20"
          }`}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-dm font-medium text-cream text-sm leading-snug">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-gold text-xl font-light flex-shrink-0"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="px-6 pb-4 font-dm text-cream/60 text-sm leading-relaxed border-t border-white/10 pt-3">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
