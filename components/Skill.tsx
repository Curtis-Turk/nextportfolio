import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Skill({}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="rounded-full object-cover w-24 h-24"
        src="https://img.icons8.com/fluency/512/javascript.png"
      ></motion.img>
    </div>
  );
}
