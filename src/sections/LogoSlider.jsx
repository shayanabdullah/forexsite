import React from "react";
import { motion } from "motion/react";
const LogoSlider = () => {
  const logos = [
    "/log1.png",
    "/log2.png",
    "/log3.png",
    "/log4.png",
    "/log5.png",
  ];

  const extendedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden cursor-pointer bg-[#050505] backdrop-blur-sm py-12 mt-20 relative">
        {/* overlay */}
         <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[5%] h-1/2 bg-[#050505]/70 backdrop-blur-lg z-20 rounded-md border-r border-white/20 "/>
         <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[5%] h-1/2 bg-[#050505]/70 backdrop-blur-lg z-20 rounded-md border-l border-white/20 "/>
        {/* logos */}
      <motion.div
        className="flex space-x-16"
        style={{ width: "fit-content", display: "flex", gap: "4rem" }}
        initial={{ opacity: 0, x: "0%" }}
        animate={{ opacity: 1, x: "-50%" }}
        transition={{
          opacity: { duration: 0.5 },
          x: { duration: 15, repeat: Infinity, ease: "linear", delay: 0.5 },
        }}
      >
        {extendedLogos.map((logo, index) => (
          <motion.img
            src={logo}
            alt="logo"
            className="h-8 object-contain "
            key={index}
            initial={{
                opacity: 0.5
            }}
            whileHover={{
                opacity: 1,
                scale: 1.05,
                transition:{duration: 0.2}
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
