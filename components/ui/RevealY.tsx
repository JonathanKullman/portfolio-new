import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealYProps {
  once?: boolean; // Optional property with default value
  duration: number;
  startPos: number;
  delay: number;
  children: React.ReactNode; // Represent any React child element
  width?: string; // Optional property with default value
}

export const RevealY: React.FC<RevealYProps> = ({
  once = true, // Set default value for `once`
  duration,
  startPos,
  delay,
  children,
  width = "fit-content" || "100%",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : `translateY(${startPos}px)`,
        opacity: isInView ? 1 : 0,
        transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      <motion.div>{children}</motion.div>
    </div>
  );
};
