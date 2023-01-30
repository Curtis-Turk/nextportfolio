import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {
  company: string;
  jobTitle: string;
  dates: string;
  responsibilities: Array<string>;
  logo: string;
  link: string;
};

export default function ExperienceCard({
  company,
  jobTitle,
  dates,
  responsibilities,
  logo,
  link,
}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-12">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="w-50 h-32 object-cover object-center"
      >
        <Link href={link}>
          <Image src={logo} alt="" fill></Image>
        </Link>
      </motion.div>
      <div className="">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <h4>{company}</h4>
        <p className="font-light">{dates}</p>
        <ul className="space-y-4">
          <li>{responsibilities[0]}</li>
          <li>{responsibilities[1]}</li>
        </ul>
      </div>
    </article>
  );
}
