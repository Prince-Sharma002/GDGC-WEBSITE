import React from "react";
import { motion, useScroll} from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = (scrollYProgress);

  return (
    <div className="sticky top-0 left-0 z-50 bg-white dark:bg-neutral-900">
      <motion.div
        className="h-1 bg-gradient-to-r from-red-500 via-emerald-400 to-yellow-500 will-change-transform z-50 max-w-full" style={{ scaleX }}/>
    </div>
  );
};

export default ProgressBar;
