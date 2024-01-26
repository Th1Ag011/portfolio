import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import DarkMode from "../DarkMode/DarkMode";
import { Link } from "react-scroll";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ toggleMenu }) => (
  <motion.ul variants={variants} className="flex flex-col gap-4 text-emerald-400 mx-3 justify-center items-start w-[180px] h-[500px]">
    <Link to="inicio" smooth={true} duration={500} onClick={toggleMenu}> <MenuItem content="Inicio" /> </Link>
    <Link to="conhecimento" smooth={true} duration={500} onClick={toggleMenu}> <MenuItem content="Conhecimento" /> </Link>
    <Link to="experiênciaProf" smooth={true} duration={500} onClick={toggleMenu}> <MenuItem content="Experiencia" /> </Link>
    <Link to="contato" smooth={true} duration={500} onClick={toggleMenu}> <MenuItem content="Contatos" /> </Link>
    <MenuItem content={<DarkMode />} showIcon={false} />
  </motion.ul>
);

