"use client";

import { motion } from "framer-motion";
import { Package, Sparkles, Gift, Star, Zap } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const floatingIcons = [
  { Icon: Package, className: "top-[15%] left-[8%] text-purple-400/60", delay: 0, size: 40 },
  { Icon: Gift, className: "top-[20%] right-[10%] text-cyan-400/60", delay: 1, size: 36 },
  { Icon: Star, className: "bottom-[25%] left-[12%] text-amber-400/60", delay: 0.5, size: 32 },
  { Icon: Sparkles, className: "bottom-[30%] right-[8%] text-pink-400/60", delay: 1.5, size: 38 },
  { Icon: Zap, className: "top-[45%] left-[5%] text-cyan-400/40", delay: 2, size: 28 },
  { Icon: Package, className: "top-[10%] right-[25%] text-amber-400/40", delay: 0.8, size: 24 },
  { Icon: Gift, className: "bottom-[15%] right-[20%] text-purple-400/40", delay: 1.2, size: 30 },
];

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-600/8 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[20%] left-[15%] h-[350px] w-[350px] rounded-full bg-amber-600/6 blur-[100px]" />

      {floatingIcons.map(({ Icon, className, delay, size }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute ${className}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={14} />
            India&apos;s Most Exciting Mystery Boxes
          </motion.div>
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-gradient">What&apos;s in your</span>
          <br />
          <span className="text-white">Lucky Scoop?</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg text-gray-400 sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Curated mystery boxes bursting with premium goodies. Every box is a surprise — every unboxing, a vibe.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <GlowButton
            href="#pricing"
            variant="purple"
            size="lg"
            id="hero-cta"
            className="animate-pulse-glow"
          >
            <Gift size={20} />
            Order Your Scoop
          </GlowButton>
          <GlowButton href="#randomizer" variant="cyan" size="lg" id="hero-preview">
            <Sparkles size={20} />
            See What&apos;s Inside
          </GlowButton>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="flex items-center gap-1.5">
            <Zap size={14} className="text-amber-400" /> 500+ scoops delivered
          </span>
          <span className="h-4 w-px bg-gray-700" />
          <span className="flex items-center gap-1.5">
            <Star size={14} className="text-amber-400" /> 4.9/5 rating
          </span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-8 w-5 rounded-full border-2 border-gray-600 p-1">
          <div className="h-2 w-1.5 rounded-full bg-purple-400 mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
