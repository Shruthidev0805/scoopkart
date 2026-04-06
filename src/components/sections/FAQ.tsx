"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Globe, MessageCircle, Heart } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Most orders are shipped within 24-48 hours! Delivery typically takes 3-5 business days depending on your location. Metro cities usually receive deliveries within 2-3 days.",
  },
  {
    question: "What's the return policy?",
    answer: "Since mystery boxes are all about the surprise, we don't accept returns for preference reasons. However, if you receive a damaged or defective item, we'll replace it within 7 days — no questions asked!",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all UPI apps (Google Pay, PhonePe, Paytm), net banking, and cards via Razorpay. COD (Cash on Delivery) will be available soon for select pin codes!",
  },
  {
    question: "Can I choose what's in my box?",
    answer: "That's the fun part — you can't! Every Lucky Scoop is curated with a mix of trending products that exceed the box value. Trust the scoop! 🍀",
  },
  {
    question: "Is this available across India?",
    answer: "Yes! We ship pan-India. Whether you're in Mumbai, Delhi, Bangalore, or even smaller towns — Lucky Scoop delivers to your doorstep.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="pb-8">
      <div className="mb-12 text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HelpCircle size={32} className="mr-3 inline text-purple-400" />
          Got <span className="text-gradient">Questions?</span>
        </motion.h2>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Everything you need to know before scooping
        </motion.p>
      </div>

      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="glass overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            id={`faq-item-${i}`}
          >
            <button
              className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.03]"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              id={`faq-toggle-${i}`}
            >
              <span className="pr-4 font-semibold text-white">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} className="text-gray-500" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="border-t border-white/5 px-6 pb-5 pt-4 text-sm leading-relaxed text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <footer className="mt-24 border-t border-white/5 pt-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white">Lucky Scoop</h3>
            <p className="mt-2 text-sm text-gray-500">Mystery boxes that hit different 🎁</p>
          </motion.div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Globe, href: "#", label: "Instagram" },
              { Icon: MessageCircle, href: "https://wa.me/919999999999", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-colors hover:text-white"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-600">
            Made with <Heart size={12} className="text-pink-500" /> in India
          </div>

          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Lucky Scoop. All rights reserved.
          </p>
        </div>
      </footer>
    </SectionWrapper>
  );
}
