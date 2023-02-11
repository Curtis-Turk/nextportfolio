import React from "react";

import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const travelLite = {
    name: "TraveLite",
    description: "A webapp to help you make sustainable travel decisions",
    url: "https://i.ibb.co/b7PFN4X/Screenshot-2023-02-09-at-16-41-04.png",
  };
  const ntsu = {
    name: "NTSu",
    description:
      "A track finder for the NTS episodes. To easily find links to listen or buy from various platforms and create a library of favourites",
    url: "https://ibb.co/wgt4633",
  };
  const gameOfCards = {
    name: "GameOfCards",
    description: "a card game made purely in vanilla JS",
    url: "https://theartsdevelopmentcompany.org.uk/wp-content/uploads/2019/02/Website-Building-Landscape-1280x640.jpg",
  };

  const projects = [travelLite, ntsu, gameOfCards];

  const projectElements = projects?.map((project) => (
    <div
      key={project.name}
      className="w-screen flex-shrink-0 flex snap-center flex-col space-y-5 items-center justify-center md-p-44 h-screen"
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={project.url}
        alt="site"
        className="h-2/4"
      ></motion.img>

      <div className="space-y-10 px-10 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">{project.name}</h4>
        <p className="text-lg text-center md:text-left">
          {project.description}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="h-screen relative items-center flex justify-evenly overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto z-0">
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory pt-20">
        {projectElements}
      </div>
    </div>
  );
}
