import React from 'react';
import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
};


const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

export const Competencias = ({ competencias }) => {

  const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
        slideControls.start("visible");
      }
    }, [isInView]);

  return (
    <div ref={ref}>
    <motion.div
      className="flex flex-wrap justify-start items-center gap-5"
      variants={containerVariants}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      initial="hidden"
      animate={mainControls}
    >
      {competencias.map(({ text, icon: Icon }, index) => (
        <motion.span
          key={index}
          className="flex flex-col items-start p-4 bg-[#312e2e] dark:bg-[#cecdcd] rounded shadow-sm shadow-emerald-500 dark:shadow-blue-500 w-[300px]"
          variants={itemVariants}
        >
          <div className="text-neutral-300 dark:text-gray-700 flex flex-wrap justify-between w-full font-mono text-md p-2">
            <div>{text}</div>
            <div className=""> {Icon && <Icon />} </div>
          </div>
          <span className="text-neutral-500 text-sm px-3 py-1 rounded-full"></span>
        </motion.span>
      ))}
    </motion.div>
    </div>
  );
};
