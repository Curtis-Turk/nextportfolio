import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import hoftLogo from "../images/HoFT-Logo.jpg";
import mlLogo from "../images/minalima-logo-gold.png";
import cycleryLogo from "../images/cyclery-logo.png";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center justify-evenly items-center md:text-left md:flex-row max-w-7xl px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory">
        <ExperienceCard
          company="The Cyclery Lewisham"
          jobTitle="Bike Mechanic"
          dates={"Sept 18 - Jul 22"}
          responsibilities={[
            "Repairing, servicing and rebuilding all kinds of bicycles using keen attention to detail and expert knowledge",
            "Working seamlessly on work orders, inventory and customer inquiries balancing a busy workload to a high standard",
          ]}
          // logo={""}
          logo={cycleryLogo}
          link="https://www.thecyclerylewisham.com/"
        ></ExperienceCard>
        <ExperienceCard
          company="The Art Printorium (MinaLima)"
          jobTitle="Asst. Commercial Manager"
          dates={"May 16 - Sep 18"}
          responsibilities={[
            "Managing a team of 7 to operate a public space with up to 500 vistors a day",
            "Building stock systems from scratch for the 3 locations of limited edition prints and stationery",
          ]}
          logo={mlLogo}
          link="https://minalima.com/"
        ></ExperienceCard>
        <ExperienceCard
          company="House of Fairy Tales"
          jobTitle="Production Coordinator"
          dates={"Jan 12 - May 16"}
          responsibilities={[
            "Building sets and props to be used in several live interactive exhibitions",
            "Communicating and interacting with young people who took part in the events",
          ]}
          logo={hoftLogo}
          link="http://houseoffairytales.org/"
        ></ExperienceCard>
      </div>
    </motion.div>
  );
}
