import { useEffect, useRef, useState } from "react";
import { features } from "../assets/data";
import { motion, AnimatePresence } from "motion/react";
import { p } from "framer-motion/client";

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 4000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleHover = (index) => {
    setIsPaused(true);
    setActiveIndex(index);
  };
  const handleHoverLeave = (index) => {
    setIsPaused(false);
  };

  return (
    <section className="container mx-auto px-4 py-24" id="features">
      {/* Title */}
      <div className=" max-w-2xl mb-20">
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-5xl md:text-6xl  tracking-tight clash-display mb-6 text-left"
        >
          Advanced Trading
          <br />
          <span className="font-medium clash-display grad1">
            Features & Tools
          </span>
        </motion.h2>
        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-zinc-300 "
        >
          Experience professional-grade trading tools and features designed for
          both novice and experienced crypto traders.
        </motion.p>
      </div>
      {/* Feature content */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left : Tabs */}
          <div className="md:col-span-5 space-y-3">
            <div className="col w-full h-auto p-0 space-y-3 ">
              {features.map((item, index) => (
                <>
                  {/* Item */}
                  <motion.div
                    key={index}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleHoverLeave}
                    onClick={() => setActiveIndex(index)}
                    className={`centered-row gap-4 cursor-pointer hover:bg-indigo-500/10 p-2 transition-all duration-300 ease-out border rounded-xl ${activeIndex === index ? "border-indigo-400/40 bg-indigo-500/10" : "border-transparent "} `}
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                  >
                    {/* Icon */}
                    <div className="">{item.icon}</div>

                    {/* Content */}
                    <div className="col gap-1">
                      <h3 className="text-base clash-display text-indigo-200">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-300/80">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </>
              ))}
            </div>
          </div>

          {/* Right : Tab Imgs */}
          <div className="md:col-span-7 min-h-[320px] centered-row">
            <AnimatePresence mode="wait">
              <motion.div
                className="glass rounded-xl overflow-hidden w-full relative"
                key={features[activeIndex].title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                <div className=" inset-0 bg-gradient-to-b from-indigo-500 to-transparent">
                  <img
                    src={features[activeIndex].image}
                    alt="feature-img"
                    className="w-full h-full object-contain relative z-20"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
