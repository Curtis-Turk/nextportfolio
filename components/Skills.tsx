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
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-full object-cover w-24 h-24"
            src="https://img.icons8.com/fluency/512/javascript.png"
          ></motion.img>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-full object-cover w-24 h-24"
            src="https://img.icons8.com/officel/512/react.png"
          ></motion.img>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-full object-cover w-24 h-24"
            src="https://img.icons8.com/fluency/512/typescript.png"
          ></motion.img>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-full object-cover w-24 h-24"
            src="https://img.icons8.com/fluency/512/node-js.png"
          ></motion.img>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-full object-cover w-24 h-24"
            src="https://img.icons8.com/color/512/ruby-programming-language.png"
          ></motion.img>
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-full object-cover w-24 h-24"
            src=" https://img.icons8.com/color/512/java-coffee-cup-logo.png"
          ></motion.img>
        </div>
      </div>
    </motion.div>
  );
}
