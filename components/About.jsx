import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function About() {
  const item = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="children px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28 text-black">
      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show"
        variants={variants}
        className="flex flex-col lg:flex-row"
      >
        <motion.div variants={item} className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-3xl font-extrabold leading-none">
            GDSC ABESIT is inspired by <span className="text-blue-500">G</span>
           
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-emerald-500">l</span>
            <span className="text-red-500">e</span>
            &apos;s Developer Family.
          </h5>
          <p className="mb-6 text-gray-900">
            Our goal is to build an ecosystem of developers in and around the
            campus, and have fun while we&apos;re all at it!
          </p>
          <motion.div variants={item} className="flex items-center">
            <SocialIcon
              url={"https://github.com/gdsc-abesit"}
              target="_blank"
              style={{ height: 35, width: 35 }}
              bgColor="black"
              className="mx-1 hover:scale-90 transition"
            />
            <SocialIcon
              url={"https://x.com/gdscabesit"}
              target="_blank"
              style={{ height: 35, width: 35 }}
              bgColor="black"
              className="mx-1 hover:scale-90 transition"
            />
            <SocialIcon
              url={"https://www.instagram.com/gdscabesit/"}
              target="_blank"
              style={{ height: 35, width: 35 }}
              bgColor="black"
              className="mx-1 hover:scale-90 transition"
            />
            <SocialIcon
              url={"https://www.linkedin.com/company/dscabesit/"}
              target="_blank"
              style={{ height: 35, width: 35 }}
              bgColor="black"
              className="mx-1 hover:scale-90 transition"
            />
          </motion.div>
        </motion.div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <motion.div variants={item} className="max-w-md">
            <h6 className="mb-2 font-semibold leading-5 text-yellow-500 bg-yellow-100 w-fit p-1 rounded">
              Seminars
            </h6>
            <p className="text-sm text-gray-700">
              Stay updated with the latest news and announcements
            </p>
          </motion.div>
          <motion.div variants={item} className="max-w-md">
            <h6 className="mb-2 font-semibold leading-5 text-blue-500 bg-blue-100 w-fit p-1 rounded">
              Study Jams
            </h6>
            <p className="text-sm text-gray-700">
              Hands on experience with the community
            </p>
          </motion.div>
          <motion.div variants={item} className="max-w-md">
            <h6 className="mb-2 font-semibold leading-5 text-red-500 bg-red-100 w-fit p-1 rounded">
              Projects
            </h6>
            <p className="text-sm text-gray-700">
              Projects with a social impact that help a lot of people
            </p>
          </motion.div>
          <motion.div variants={item} className="max-w-md">
            <h6 className="mb-2 font-semibold leading-5 text-emerald-500 bg-green-100 w-fit p-1 rounded">
              Hackathons
            </h6>
            <p className="text-sm text-gray-700">
              Dream. Explore. Build it... together
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
