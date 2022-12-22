import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center justify-evenly items-center md:text-left md:flex-row max-w-7xl px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/PF6g8F6/Adventure.jpg"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      ></motion.img>
      <div className="p-10">
        <h4 className="text-4xl font-semibold">Hi there 👋</h4>
        <br></br>
        <p className="text-base">
          I&apos;m a creative and dynamic full stack developer who believes in
          building projects that solve real world problems. I&apos;ve just
          completed the Makers academy intensive bootcamp learning the value of
          test-driven, agile development with object oriented design. I&apos;m
          looking to expand my experience in a full stack developer role.
          Checkout my
          <a
            className=" text- hover:border-[#ec3232] hover:text-[#d67540] p-2"
            href="https://github.com/Curtis-Turk/CV"
          >
            -CV-
          </a>
        </p>
      </div>
    </motion.div>
  );
}
