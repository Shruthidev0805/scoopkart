"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}

export default function GlassCard({ children, className = "", hover = true, id }: GlassCardProps) {
  return (
    <motion.div
      id={id}
      className={`glass rounded-3xl p-6 sm:p-8 ${hover ? "neon-border transition-all duration-300 hover:bg-white/[0.07]" : ""} ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
