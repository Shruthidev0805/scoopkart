"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, Package, Truck, Camera, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const reviews = [
  { name: "Ananya R.", text: "Got AirPods in a ₹499 box!! Absolutely insane value 🤯", rating: 5 },
  { name: "Karthik S.", text: "Best gift idea ever. My friend was SO surprised!", rating: 5 },
  { name: "Priya M.", text: "The packaging alone is worth it. So aesthetic ✨", rating: 5 },
  { name: "Rohit D.", text: "Ordered 3 times already. Never disappointed!", rating: 5 },
  { name: "Meera J.", text: "The elite box had a smartwatch inside! Can't believe it 🔥", rating: 5 },
  { name: "Arjun K.", text: "Fastest delivery I've ever seen. 2 days flat!", rating: 5 },
  { name: "Sneha P.", text: "Perfect unboxing content for my reels 🎬", rating: 5 },
  { name: "Varun T.", text: "Way better than other mystery boxes in India", rating: 5 },
];

const trackingSteps = [
  { label: "Ordered", icon: CheckCircle2, active: true },
  { label: "Packed", icon: Package, active: true },
  { label: "Shipped", icon: Truck, active: false },
];

export default function SocialProof() {
  return (
    <SectionWrapper id="social-proof">
      <div className="mb-16 text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Loved by <span className="text-gradient">Scoopers</span> ❤️
        </motion.h2>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Real people, real reactions, real surprises
        </motion.p>
      </div>

      <div className="mb-16 overflow-hidden" id="reviews-marquee">
        <div className="flex animate-marquee gap-6">
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="glass flex w-[320px] flex-shrink-0 flex-col gap-3 rounded-2xl p-5"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="relative">
                <Quote size={14} className="absolute -left-1 -top-1 text-purple-500/30" />
                <p className="pl-4 text-sm text-gray-300">{review.text}</p>
              </div>
              <div className="mt-auto flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 text-xs font-bold text-white">
                  {review.name[0]}
                </div>
                <span className="text-sm font-medium text-gray-400">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <motion.h3
          className="mb-8 text-center text-xl font-semibold text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Camera size={20} className="mr-2 inline text-purple-400" />
          Packing Sneak Peeks
        </motion.h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              className="glass group relative aspect-square overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              id={`packing-photo-${i}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                i === 0 ? "from-purple-600/30 to-pink-600/20" :
                i === 1 ? "from-cyan-600/30 to-blue-600/20" :
                i === 2 ? "from-amber-600/30 to-orange-600/20" :
                "from-green-600/30 to-emerald-600/20"
              }`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/60">
                <Package size={32} />
                <span className="text-xs font-medium">Scoop #{i + 1}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">View Unboxing</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mx-auto max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="order-tracking"
      >
        <h3 className="mb-8 text-center text-xl font-semibold text-gray-300">
          <Truck size={20} className="mr-2 inline text-cyan-400" />
          Order Tracking
        </h3>
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between">
            {trackingSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={step.label} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        step.active
                          ? "bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                          : "border border-gray-700 bg-gray-800/50 text-gray-500"
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
                    >
                      <StepIcon size={20} />
                    </motion.div>
                    <span className={`text-xs font-medium ${step.active ? "text-white" : "text-gray-500"}`}>
                      {step.label}
                    </span>
                  </div>
                  {i < trackingSteps.length - 1 && (
                    <div className="mx-2 h-0.5 flex-1 rounded-full bg-gray-800 sm:mx-4">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                        initial={{ width: "0%" }}
                        whileInView={{ width: step.active ? "100%" : "0%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
