"use client";

import { motion } from "framer-motion";
import { Check, Crown, Heart, Flame, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const tiers = [
  {
    name: "Starter Scoop",
    price: "₹299",
    badge: { text: "Most Popular 🔥", variant: "gold" as const },
    description: "Perfect first scoop to test your luck",
    items: ["1 Trending Accessory", "1 Sticker Pack", "1 Surprise Snack", "Lucky Charm Freebie"],
    color: "purple",
    gradient: "from-purple-600/20 to-purple-800/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    iconColor: "text-purple-400",
    whatsappMsg: "Hi! I'd like to order a Starter Scoop (₹299) 🎁",
  },
  {
    name: "Pro Scoop",
    price: "₹499",
    badge: { text: "Best for Gifting 💖", variant: "pink" as const },
    description: "The sweet spot — great value, great surprise",
    items: ["2 Premium Accessories", "1 Lifestyle Item", "1 Tech Gadget", "1 Bonus Mystery Gift", "Premium Packaging"],
    color: "cyan",
    gradient: "from-cyan-600/20 to-cyan-800/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    iconColor: "text-cyan-400",
    featured: true,
    whatsappMsg: "Hi! I'd like to order a Pro Scoop (₹499) 🎁",
  },
  {
    name: "Elite Scoop",
    price: "₹799",
    badge: { text: "Max Value 👑", variant: "gold" as const },
    description: "The ultimate unboxing experience",
    items: ["3 Premium Items", "1 High-Value Tech", "1 Exclusive Collectible", "2 Lifestyle Surprises", "VIP Packaging", "Priority Shipping"],
    color: "gold",
    gradient: "from-amber-600/20 to-amber-800/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    iconColor: "text-amber-400",
    whatsappMsg: "Hi! I'd like to order an Elite Scoop (₹799) 🎁",
  },
];

const badgeIcons = {
  gold: Flame,
  pink: Heart,
  purple: Crown,
  cyan: Crown,
};

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="relative">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="mb-16 text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pick Your <span className="text-gradient">Lucky Scoop</span>
        </motion.h2>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Every box is packed with love, mystery, and items worth way more than the price
        </motion.p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {tiers.map((tier, index) => {
          const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(tier.whatsappMsg)}`;
          return (
            <motion.div
              key={tier.name}
              className={`glass relative overflow-hidden rounded-3xl p-6 transition-all duration-500 sm:p-8 ${tier.borderGlow} ${tier.featured ? "ring-1 ring-cyan-500/30 md:-translate-y-2" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                rotateX: 2,
                rotateY: index === 0 ? 3 : index === 2 ? -3 : 0,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{ transformPerspective: 1000 }}
              id={`pricing-card-${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${tier.gradient} opacity-50`} />

              {tier.featured && (
                <div className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Popular
                </div>
              )}

              <div className="relative">
                <div className="mb-4">
                  <Badge variant={tier.badge.variant}>{tier.badge.text}</Badge>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">{tier.name}</h3>
                <p className="mb-4 text-sm text-gray-400">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="ml-2 text-sm text-gray-500">per box</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check size={16} className={tier.iconColor} />
                      {item}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${
                    tier.color === "purple"
                      ? "from-purple-600 to-purple-500"
                      : tier.color === "cyan"
                      ? "from-cyan-600 to-cyan-500"
                      : "from-amber-600 to-amber-500"
                  } px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:brightness-110`}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  id={`scoop-btn-${index}`}
                >
                  Scoop It Now
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
