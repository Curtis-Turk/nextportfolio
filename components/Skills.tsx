import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center justify-evenly items-center md:text-left md:flex-row max-w-7xl px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-5">
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
      </div>
    </motion.div>
  );
}
