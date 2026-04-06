"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "purple" | "cyan" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
}

const variants = {
  purple: {
    bg: "bg-gradient-to-r from-purple-600 to-purple-500",
    shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]",
    ring: "focus:ring-purple-500/50",
  },
  cyan: {
    bg: "bg-gradient-to-r from-cyan-600 to-cyan-500",
    shadow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]",
    ring: "focus:ring-cyan-500/50",
  },
  gold: {
    bg: "bg-gradient-to-r from-amber-600 to-amber-500",
    shadow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]",
    ring: "focus:ring-amber-500/50",
  },
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-10 py-4.5 text-lg",
};

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "purple",
  size = "md",
  className = "",
  id,
}: GlowButtonProps) {
  const v = variants[variant];
  const s = sizes[size];

  const baseClasses = `${v.bg} ${v.shadow} ${v.ring} ${s} relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight ${className}`;

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
