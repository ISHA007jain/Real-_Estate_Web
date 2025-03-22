import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Frontpage = () => {
  const [scrollY, setScrollY] = useState(0);
  const backgroundImages = [
    "url('https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?ga=GA1.1.191839826.1727710088&semt=ais_keywords_boost')",
    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3')",
    "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3')"
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Background image carousel
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(bgInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images with crossfade transition */}
      {backgroundImages.map((bgImage, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: bgImage }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentBgIndex === index ? 1 : 0,
            scale: currentBgIndex === index ? 1 : 1.1
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 z-10"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-20"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
            animate={{ 
              y: [0, 30, 0], 
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3 + Math.random() * 5,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      {/* Logo with animation */}
      <motion.div 
        className="absolute top-6 left-6 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center">
          
          <h3 className="text-white font-bold text-lg tracking-wide">
            FREYA MOORE <span className="font-light">REALTY Co.</span>
          </h3>
        </div>
      </motion.div>
      
      {/* Main content with staggered animations */}
      <div className="relative z-20 text-white text-left max-w-2xl px-8 ml-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl font-extrabold leading-tight mb-8"
            style={{ textShadow: "0 2px 15px rgba(0,0,0,0.3)" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Find your perfect
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              place to call home.
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl mb-10 max-w-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Discover exceptional properties curated by experts who understand what makes a house feel like home.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button
              className="group relative overflow-hidden bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">BUY A HOME</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <motion.span 
                className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                BUY A HOME
              </motion.span>
            </motion.button>
            
            <motion.button
              className="border-2 border-white bg-transparent backdrop-blur-sm text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              LIST YOUR HOME
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Frontpage;