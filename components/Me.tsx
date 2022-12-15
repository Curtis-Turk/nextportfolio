import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import myImage from "../images/Me.jpeg";

type Props = {};

export default function Me({}: Props) {
  const [text, count] = useTypewriter({
    words: ["I'm Curtis", "Developer", "Builder", "Solver"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 rounded-full mx-auto object-cover">
        <Image className="rounded-full " src={myImage} alt="me" fill></Image>
      </div>
      <h2 className="text-sm uppercase text-gray-500 tracking-widest">
        Software engineer
      </h2>
      <h1 className="text-5xl lg:text-6l p-4">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
