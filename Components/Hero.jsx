import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineInstagram,} from "react-icons/ai";

export const Hero = () => {
  return (
    <div className="w-full sm:h-screen text-center">
      <div className="max-w-[1230px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm pt-24 sm:pt-4 tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Abbas</span>{" "}
          </h1>
          <h1 className="py-2 text-gray-700"> A Front-end Web Developer </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building (and
            occasionaly designing) digital experiences. Currently, I'm focused
            on building responsive front-end web applications while learning
            back-end technologies.
          </p>
          <div className="max-w-[330px] flex justify-between m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-100">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-100">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-100">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-100">
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
