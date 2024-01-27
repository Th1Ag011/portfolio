import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Curriculo from "../../../pics/resume.pdf"

const RedeSocias = () => {


  return (
         <div className="hidden xl:flex lg-flex-row fixed flex-col top-[30%] left-2">
            <ul>
              <li className="w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-88px] md:hover:ml-[-18px] transition-all duration-300 bg-[#131314] dark:bg-blue-900">
                <a
                  href="https://www.linkedin.com/in/thiago-villani-marinho/"
                  target="blank"
                  className="flex justify-between px-5 items-center w-full text-white"
                >
                  Linkedin <FaLinkedin size={25} />{" "}
                </a>
              </li>
              <li className="w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-18px] duration-300 bg-[#131314] dark:bg-blue-900">
                <a
                  href="https://github.com/Th1Ag011"
                  target="blank"
                  className="flex justify-between px-5 items-center w-full text-white"
                >
                  Github <FaGithub size={25} />{" "}
                </a>
              </li>
              <li className="w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-18px] duration-300 bg-[#131314] dark:bg-blue-900">
                <a
                  href="mailto:thiagovm016@gmail.com "
                  target="blank"
                  className="flex justify-between px-5 items-center w-full text-white"
                >
                  Email <HiOutlineMail size={25} />{" "}
                </a>
              </li>
              <li className="w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-18px] duration-300 bg-[#131314] dark:bg-blue-900">
                <a
                  href={Curriculo}
                  download="Curriculo"
                  target="blank"
                  className="flex justify-between px-5 items-center w-full text-white"
                >
                  Curriculo <BsFillPersonLinesFill size={25} />{" "}
                </a>
              </li>
            </ul>
             
          </div>
  )
}

export default RedeSocias