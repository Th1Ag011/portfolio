import React, { useState } from "react";
import { Link } from "react-scroll";
import DarkMode from "../DarkMode/DarkMode.jsx";
import RedeSocias from "../SocialMidia/RedeSocias.jsx";
import { motion } from "framer-motion";
import IndexBtn from "../BtnHamburguer/IndexBtn.jsx";
import Headroom from "react-headroom";


const Nav = () => {
  const [pageMode, setPageMode] = useState(true);

  const toggleMode = () => {
    setPageMode(!pageMode);
  };

 //Logo FramerMotion
 
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span key={index} variants={letterVariants}>
        {char}
      </motion.span>
    ));
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  return (
    <>
      {/*Rede Sociais PcResponse*/}

      <RedeSocias />

      <Headroom>
        <motion.header
          className=" w-full bg-[#202024] dark:bg-white duration-500"
          name="nav"
          initial={{ top: -100 }}
          animate={{ top: 0 }}
          transation={{ duration: 0.5 }}
        >
          {/*Logo*/}

          <div className="justify-between items-center h-24 w-full z-20 px-4 flex ">
            <div className="sm:w-50 w-full flex sm:justify-start justify-end ">
              <motion.div
                className="text-center dark:border-blue-700 border-emerald-500 border-l-2 border-r-2 px-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="font-semibold text-xl tracking-wider text-emerald-500 dark:text-blue-700">
                  {splitText("Thiago Villani")}
                </h1>
                <p className="font-mono text-lg tracking-widest text-[#b9b9b9] dark:text-[#616161]">
                  {splitText("Developer")}
                </p>
              </motion.div>
            </div>

            {/*Link Navs */}

            <header className="hidden sm:flex space-x-4 text-emerald-400 dark:text-blue-700">
              <div className="my-auto">
                {" "}
                <DarkMode toggleMode={toggleMode} />{" "}
              </div>

              <Link
                to="inicio"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
                className="flex items-center gap-2 font-medium font-mono transition-all disabled:opacity-50 shadow-buttom"
              >
                {" "}
                <li className="p-4 list-none hover:border-b">Inicio</li>{" "}
              </Link>

              <Link
                to="conhecimento"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
                className="flex items-center gap-2 font-medium font-mono transition-all disabled:opacity-50 shadow-buttom"
              >
                {" "}
                <li className="p-4 list-none hover:border-b">
                  Conhecimento
                </li>{" "}
              </Link>

              <Link
                to="experiênciaProf"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
                className="flex items-center gap-2 font-medium font-mono transition-all disabled:opacity-50 shadow-buttom"
              >
                {" "}
                <li className="p-4 list-none hover:border-b">
                  Experiencia
                </li>{" "}
              </Link>

              <Link
                to="contato"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
                className="flex items-center gap-2 font-medium font-mono transition-all disabled:opacity-50 shadow-buttom"
              >
                {" "}
                <li className="p-4 list-none hover:border-b ">Contato</li>{" "}
              </Link>
            </header>

            {/*butao hamburger */}

            <div className="sm:hidden flex h-12">
              <IndexBtn />
            </div>
          </div>
        </motion.header>
      </Headroom>
    </>
  );
};

export default Nav;
