import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle.jsx";
import { Navigation } from "./Navigation.jsx";

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const IndexBtn = () => {

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

  
    return (
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          <motion.div className="absolute top-0 left-0 w-[200px] h-[200vh] bg-emerald-700 dark:bg-blue-700/95 z-50" variants={sidebar}>
            <div className="flex flex-col items-end ">
              <div className="">
                <MenuToggle toggle={() => toggleOpen()} />
              </div>
              <div className="my-auto h-full py-4">
                <Navigation toggleMenu={toggleOpen} />
              </div>
            </div>
          </motion.div>
        </motion.nav>
      );      
}

export default IndexBtn



