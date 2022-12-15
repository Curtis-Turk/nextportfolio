import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 100, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/Curtis-Turk"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://www.linkedin.com/in/curtis-turk-bb650b253/"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://www.codewars.com/users/Citrussitruc"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 100, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <button className="headerBtn">About</button>
        <button className="headerBtn">Experience</button>
        <button className="headerBtn">Projects</button>
        <button className="headerBtn">Skills</button>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 100, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <p className="hidden md:inline-flex text-sm text-gray-400">
          Contact me
        </p>
      </motion.div>
    </header>
  );
}
