"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  intensity?: "gentle" | "moderate" | "strong";
}

const FloatingCard = ({ 
  children, 
  className = "", 
  delay = 0,
  intensity = "gentle" 
}: FloatingCardProps) => {
  const intensityValues = {
    gentle: { y: 10, rotate: 1 },
    moderate: { y: 15, rotate: 2 },
    strong: { y: 20, rotate: 3 }
  };

  const { y, rotate } = intensityValues[intensity];

  return (
    <motion.div
      className={className}
      animate={{
        y: [-y/2, y/2, -y/2],
        rotate: [-rotate/2, rotate/2, -rotate/2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;
