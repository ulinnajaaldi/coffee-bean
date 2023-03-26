import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const texts = ["Hi There", "Want a cup of coffee?", "Let's Go!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          onLoadingComplete();
          return 100;
        }
        return prevProgress + 1;
      });
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className={`flex items-center justify-center h-screen text-3xl bg-gradient-to-tr from-[#EAF0F1] to-[#EAE8E4] ${
          index == 2 && "text-orange-500 font-medium"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {texts[index]}
      </motion.div>
      <motion.div
        className="fixed bottom-0 left-0 w-full h-2 bg-orange-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.01 }}
      />
      <div className="fixed text-2xl bottom-4 right-4 text-black/50">
        {progress}%
      </div>
    </>
  );
};

export default LoadingScreen;
