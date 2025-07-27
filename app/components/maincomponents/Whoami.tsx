"use client";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
// import Ziad from "../Images/1707246690922.jpeg";
import Imageone from "../../Images/20063706.png";
import Imagetwo from "../../Images/20088502.png";
import Imagethree from "../../Images/10212045.png";

export default function Whoami() {
  //   const [text] = useTypewriter({
  //     words: ['Front-end Development'],
  //     loop: true,
  //     delaySpeed: 2000,
  //   });

  return (
    <div className="flex flex-col md:flex-row bg-transparent items-center justify-center h-[700px] space-y-4 md:space-y-0 md:space-x-4 p-5">
      <div className="flex-1 md:flex-[0.4] text-white p-8 items-center justify-start rounded-lg ">
        <h1 className="text-3xl font-bold">Software Engineer</h1>
        <br />
        <h1 className="text-5xl font-bold">
          Hi, I&apos;m <span className="text-red-600">Zeyad</span>{" "}
        </h1>
        <h1 className="text-5xl py-2 font-bold">From Egypt</h1>
      </div>
      <div className="flex-1 text-white p-8 h-[500px] rounded-lg text-center flex flex-col justify-between">
        <div className="flex justify-between">
          <Image src={Imagetwo} alt="HEY" className="" />
          <Image src={Imagethree} alt="HEY" className="" />
        </div>
        <h1 className="text-center text-2xl font-semibold">
          Specializing in Full Stack Development
        </h1>
        <div className="flex justify-center">
          <Image src={Imageone} className="w-auto h-auto mb-5" alt="HEY"/>
        </div>
      </div>
    </div>
  );
}
