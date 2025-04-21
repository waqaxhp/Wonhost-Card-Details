import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Huboweb", "Coming Soon"];

const ComingSoon = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default ComingSoon;
