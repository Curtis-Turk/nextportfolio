import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <div className="flex flex-row items-center">
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
      </div>
      <div className="flex flex-row items-center">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <p className="hidden md:inline-flex text-sm text-gray-400">
          Contact me
        </p>
      </div>
    </header>
  );
}
