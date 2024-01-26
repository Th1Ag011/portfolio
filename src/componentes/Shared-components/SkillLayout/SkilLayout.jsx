import React from 'react';
import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion"

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2 
    }
  }
};


const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2 
    }
  }
};


export const ListSkill = ({ skills }) => {
  
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
      className="container flex flex-wrap gap-4 "
      variants={containerVariants}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      initial="hidden"
      animate={mainControls}
    >
      {skills.map((text, index) => (
        <motion.span 
          key={index}
          className="text-emerald-400 dark:text-blue-100 bg-emerald-900/80 dark:bg-blue-900 shadow-md dark:shadow-gray-800 text-sm py-1 px-3 rounded-lg"
          variants={itemVariants}
        >
          <h1 className='flex justify-center'>{text}</h1>
        </motion.span>
      ))}
    </motion.div>
    </div>
  );
};
