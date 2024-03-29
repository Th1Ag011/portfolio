import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Curriculo from "../../../pics/resume.pdf"

const Social = () => {
  return (
    <div className="xl:hidden flex py-4 px-2 ">
      <a
        href="https://www.linkedin.com/in/thiago-villani-marinho/"
        target="blank"
        className=" text-neutral-500 px-2 hover:text-neutral-400 dark:text-gray-700 transition-all duration-200"
      >
        <FaLinkedin />{" "}
      </a>

      <a
        href="https://github.com/Th1Ag011"
        target="blank"
        className="text-neutral-500 px-2 hover:text-neutral-400 dark:text-gray-700  transition-all duration-200"
      >
        <FaGithub />{" "}
      </a>

      <a
        href="mailto:thiagovm016@gmail.com "
        target="blank"
        className="text-neutral-500 px-2 hover:text-neutral-400 dark:text-gray-700  transition-all duration-200"
      >
        <HiOutlineMail />{" "}
      </a>

      <a
        href={Curriculo}
        download="Curriculo"
        target="blank"
        className="text-neutral-500 px-2 hover:text-neutral-400 dark:text-gray-700  transition-all duration-200"
      >
        <BsFillPersonLinesFill />{" "}
      </a>
    </div>
  );
};

export default Social;
