"use client";
import { motion } from "framer-motion";

interface GlowOrbProps {
  className?: string;
  color?: "gold" | "navy" | "blue";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const GlowOrb = ({ 
  className = "", 
  color = "gold", 
  size = "md",
  animate = true 
}: GlowOrbProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]"
  };

  const colorClasses = {
    gold: "bg-gradient-radial from-gold/30 via-gold/10 to-transparent",
    navy: "bg-gradient-radial from-navy-light/40 via-navy/20 to-transparent",
    blue: "bg-gradient-radial from-blue-500/20 via-blue-400/10 to-transparent"
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      } : {}}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default GlowOrb;
