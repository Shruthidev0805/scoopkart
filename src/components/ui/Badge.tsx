import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "cyan" | "gold" | "pink";
}

const variantClasses = {
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  gold: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  pink: "bg-pink-500/20 text-pink-300 border-pink-500/30",
};

export default function Badge({ children, variant = "purple" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
