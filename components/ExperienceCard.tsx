import React from "react";
import { motion } from "framer-motion";

type Props = {
  company: string;
  jobTitle: string;
  dates: string;
  responsibilities: Array<string>;
  logo: string;
};

export default function ExperienceCard({
  company,
  jobTitle,
  dates,
  responsibilities,
  logo,
}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10">
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="w-50 h-32 object-cover object-center"
        src={logo}
        alt="Cylery Logo"
      ></motion.img>
      <div>
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <h4>{company}</h4>
        <p>{dates}</p>
        <ul className="space-y-4">
          <li>{responsibilities[0]}</li>
          <li>{responsibilities[1]}</li>
        </ul>
      </div>
    </article>
  );
}
