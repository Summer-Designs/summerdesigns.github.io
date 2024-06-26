import React from 'react';
import BackgroundVideo from '../assets/videos/background.mp4';
import TitleReveal from './animation/TitleReveal';
import { motion } from 'framer-motion';
import The from '../assets/imgs/The.svg';

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="z-10 w-fit mx-auto h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          <img alt="The Svg" src={The} className="w-[12vw] md:w-[10vw] lg:w-[8vw] mb-4 md:mb-8" />
        </motion.div>
        <TitleReveal once delay={1} display="grid" text="SUMMER" className="h1" />
        <TitleReveal once delay={1.5} display="grid" text="DESIGNS." className="h1 text-transparent font-outline-2" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 0.5, delay: 1 }}
        className="bg-black/70 absolute top-0 left-0 w-screen h-screen"
      ></motion.div>
      <video
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute -z-10 w-auto min-w-full min-h-full max-w-none"
      ></video>
    </div>
  );
};

export default Banner;
