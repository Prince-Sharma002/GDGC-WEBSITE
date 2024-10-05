import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",

  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const PreviousEvents = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="h-full w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 100,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="w-4/5 mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mt-6 text-gray-900">
          Previous Events
        </h2>
        <div className="h-screen relative flex justify-center items-center m-0 p-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              className="absolute max-w-full"
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
          <div
            className="absolute w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-50 rounded bg-black right-2.5"
            onClick={() => paginate(1)}
          >
            {"‣"}
          </div>
          <div
            className="absolute w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-50 rounded bg-black left-10 -scale-100"
            onClick={() => paginate(-1)}
          >
            {"‣"}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PreviousEvents;