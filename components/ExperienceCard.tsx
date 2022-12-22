import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929]">
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="w-50 h-32 object-cover object-center"
        src="https://images.squarespace-cdn.com/content/v1/5d3b60da0b28730001931939/1564442099866-LPRFMD8TLJFG6H1T7WWM/shop-modified-font.png?format=2500w"
        alt="Cylery Logo"
      ></motion.img>
      <div>
        <h4 className="text-4xl font-light">Bike mechanic</h4>
        <h4>The Cylery Lewisham</h4>
        <p>Sept 18 - Jul 22</p>
        <ul className="space-y-4">
          <li>
            Repairing, servicing and rebuilding all kinds of bicycles using keen
            attention to detail and expert knowledge
          </li>
          <li>
            Working seamlessly on work orders, inventory and customer inquiries
            balancing a busy workload to a high standard
          </li>
        </ul>
      </div>
    </article>
  );
}
