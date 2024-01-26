import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Motion = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { scale: 0.95, opacity: 0, x: -50 },
          visible: {
            scale: 1,
            opacity: 1,
            x: 0,
            transition: { 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          },
        }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};
