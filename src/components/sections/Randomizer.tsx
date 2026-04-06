"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Headphones, Watch, Gamepad2, Shirt, BookOpen, Palette, Camera, Gift, Sparkles, Flame } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

const allItems = [
  { icon: Headphones, name: "Premium Earbuds", value: "₹899" },
  { icon: Watch, name: "Smart Watch", value: "₹1,499" },
  { icon: Gamepad2, name: "Gaming Controller", value: "₹1,299" },
  { icon: Shirt, name: "Streetwear Tee", value: "₹699" },
  { icon: BookOpen, name: "Bestseller Book", value: "₹499" },
  { icon: Palette, name: "Art Kit Pro", value: "₹799" },
  { icon: Camera, name: "Instant Camera", value: "₹1,999" },
  { icon: Gift, name: "Surprise Merch", value: "₹599" },
  { icon: Sparkles, name: "LED Light Strip", value: "₹449" },
];

const defaultItems = allItems.slice(0, 3);

function getRandomItems() {
  const shuffled = [...allItems].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

export default function Randomizer() {
  const [items, setItems] = useState(defaultItems);
  const [isShuffling, setIsShuffling] = useState(false);
  const [luckyMeter, setLuckyMeter] = useState(78);
  const [shuffleKey, setShuffleKey] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setItems(getRandomItems());
    setLuckyMeter(Math.floor(Math.random() * 20) + 78);
    setShuffleKey((k) => k + 1);
  }, []);

  const handleShuffle = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);

    let count = 0;
    intervalRef.current = setInterval(() => {
      setItems(getRandomItems());
      count++;
      if (count >= 12) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        const finalItems = getRandomItems();
        setItems(finalItems);
        setLuckyMeter(Math.floor(Math.random() * 20) + 78);
        setShuffleKey((k) => k + 1);
        setIsShuffling(false);
      }
    }, 100);
  }, [isShuffling]);

  return (
    <SectionWrapper id="randomizer">
      <div className="mb-12 text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          See what you <span className="text-gradient">MIGHT</span> get 👀
        </motion.h2>
        <p className="text-gray-400">Hit shuffle and discover your potential lucky scoop</p>
      </div>

      <div className="mx-auto max-w-2xl">
        <GlassCard className="glass-strong relative overflow-hidden" hover={false} id="randomizer-card">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-600/10 blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-600/10 blur-[60px]" />

          <div className="relative">
            <div className="mb-8 grid grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {items.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={`${item.name}-${shuffleKey}-${i}`}
                      className="glass flex flex-col items-center gap-3 rounded-2xl p-4 text-center"
                      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                      transition={{
                        duration: isShuffling ? 0.08 : 0.4,
                        delay: isShuffling ? 0 : i * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                        <ItemIcon size={24} className="text-purple-300" />
                      </div>
                      <span className="text-sm font-medium text-gray-200">{item.name}</span>
                      <span className="text-xs font-bold text-neon-gold">{item.value}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-gray-400">Lucky Meter</span>
                <span className="font-bold text-amber-400">{luckyMeter}% Value Match 🔥</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-amber-500"
                  key={shuffleKey}
                  initial={{ width: "0%" }}
                  animate={{ width: `${luckyMeter}%` }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <GlowButton
                onClick={handleShuffle}
                variant="cyan"
                size="md"
                id="shuffle-button"
                className={isShuffling ? "pointer-events-none opacity-70" : ""}
              >
                <Shuffle size={18} className={isShuffling ? "animate-spin" : ""} />
                {isShuffling ? "Shuffling..." : "Shuffle & Reveal"}
              </GlowButton>
            </div>
          </div>
        </GlassCard>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Flame size={14} className="text-amber-500" />
          <span>Actual products may exceed shown value</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
