"use client";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const CountUp = ({ 
  end, 
  suffix = "", 
  prefix = "", 
  duration = 2,
  className = "" 
}: CountUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0
  });

  const displayValue = useTransform(springValue, (latest) => 
    Math.round(latest)
  );

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(end);
      setHasAnimated(true);
    }
  }, [isInView, end, hasAnimated, springValue]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setCurrentValue(latest);
    });
    return unsubscribe;
  }, [displayValue]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}{currentValue}{suffix}
    </motion.span>
  );
};

export default CountUp;
