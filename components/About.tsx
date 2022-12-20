import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div className="flex h-screen relative justify-evenly">
      <h3>About</h3>
    </motion.div>
  );
}
