import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{}}
      animate={{
        scale: [1, 2, 1],
        opacity: 0.5,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 6,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-orange-400 rounded-full h-[300px] w-[300px] mt-52 animate-pulse"></div>
      <div className="absolute border border-orange-400 rounded-full h-[500px] w-[500px] mt-52 animate-pulse"></div>
      <div className="absolute border border-orange-400 rounded-full h-[600px] w-[600px] mt-52 animate-pulse"></div>
    </motion.div>
  );
}
