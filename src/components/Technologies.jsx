import React from "react";

import { animate, motion } from "framer-motion";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";

const iconeVarient = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className=" pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        className=" flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconeVarient(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-500 hover:text-cyan-600 transition-transform duration-300 hover:scale-125 " />
        </motion.div>
        <motion.div
          className=" p-4"
          initial="initial"
          animate="animate"
          variants={iconeVarient(3)}
        >
          <SiNextdotjs className="text-7xl text-gray-400 hover:text-gray-500 transition-transform duration-300 hover:scale-125 " />
        </motion.div>
        <motion.div
          className=" p-4"
          initial="initial"
          animate="animate"
          variants={iconeVarient(5)}
        >
          <TbBrandRedux className="text-7xl text-purple-500 hover:text-purple-600 transition-transform duration-300 hover:scale-125 " />
        </motion.div>
        <motion.div
          className=" p-4"
          initial="initial"
          animate="animate"
          variants={iconeVarient(3.5)}
        >
          <CgFigma className="text-7xl text-red-400 hover:text-red-500 transition-transform duration-300 hover:scale-125 " />
        </motion.div>
        <motion.div
          className=" p-4"
          initial="initial"
          animate="animate"
          variants={iconeVarient(2)}
        >
          <FaGitAlt className="text-7xl text-red-500 hover:text-red-700 transition-transform duration-300 hover:scale-125 " />
        </motion.div>
        <motion.div
          className=" p-4 "
          initial="initial"
          animate="animate"
          variants={iconeVarient(4.5)}
        >
          <TbBrandFramerMotion className="text-7xl text-pink-600 hover:text-pink-700 transition-transform duration-300 hover:scale-125" />
        </motion.div>
        <motion.div
          className=" p-4"
          initial="initial"
          animate="animate"
          variants={iconeVarient(6)}
        >
          <RiTailwindCssFill className="text-7xl text-blue-300 hover:text-blue-400 transition-transform duration-300 hover:scale-125 " />
        </motion.div>
        <motion.div
          className=" p-4"
          initial="initial"
          animate="animate"
          variants={iconeVarient(2.5)}
        >
          <SiJest className="text-7xl text-red-600 hover:text-red-700 transition-transform duration-300 hover:scale-125  " />
        </motion.div>

        <motion.div
          className=" p-4"
          initial="initial"
          animate="animate"
          variants={iconeVarient(2.5)}
        >
          <FaNodeJs className="text-7xl text-green-500 hover:text-green-600 transition-transform duration-300 hover:scale-125 " />
        </motion.div>
        <motion.div
          className=" p-4"
          initial="initial"
          animate="animate"
          variants={iconeVarient(2.5)}
        >
          <BiLogoMongodb className="text-7xl text-green-600 hover:text-green-700 transition-transform duration-300 hover:scale-125 " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
