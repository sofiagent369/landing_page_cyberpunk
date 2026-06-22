import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.div className="relative w-full h-screen bg-black text-white flex items-center justify-center transition-opacity duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h1 className="text-6xl font-extrabold leading-tight">Welcome to the Ciberpunk Lagoon</h1>
    </motion.div>
  );
};

export default Banner;