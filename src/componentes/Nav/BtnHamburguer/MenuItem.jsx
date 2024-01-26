import React from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ content, Icon = FaCircle, showIcon = true }) => {
  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      className={`flex items-center gap-3 justify-start text-md w-40 text-white font-mono px-2 ${
        showIcon ? "border rounded-md border-white" : ""
      }`}
    >
      {showIcon && <Icon size={5} />}
      <span>{content}</span>
    </motion.li>
  );
};
