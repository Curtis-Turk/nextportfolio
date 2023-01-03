import React from "react";

import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3];
  return (
    <div className="h-screen relative items-center flex justify-evenly overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x z-20 snap-mandatory">
        {projects.map((project) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 flex snap-center"
          >
            <motion.img
              src="https://theartsdevelopmentcompany.org.uk/wp-content/uploads/2019/02/Website-Building-Landscape-1280x640.jpg"
              alt="site"
            ></motion.img>

            <div>
              <h3>project</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
