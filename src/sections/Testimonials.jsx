import React, { useRef } from "react";
import { testimonials } from "../assets/data";
import { motion} from 'motion/react'
const Testimonials = () => {
  const marqueeRef = useRef();
  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty("--marquee-play-state", "paused");
    }
  };
  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty("--marquee-play-state", "running");
    }
  };

  const extentedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  return (
    <section className="py-20 overflow-hidden bg-black" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2,}} className="text-5xl font-normal mb-4 clash-display">
            Trusted by <span className="grad1 clash-display">Traders</span>
          </motion.h2>
          <motion.p initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3,}} className="text-zinc-400/90 text-lg">
            Join thousands of satisfied traders on ForexTrade
          </motion.p>
        </div>

        {/* Marquee */}
        <div className="relative flex flex-col antialiased ">
          {/* Container */}
          <div className="relative overflow-hidden flex py-4" ref={marqueeRef}>
            <div
              className="min-w-full shrink-0 flex items-stretch gap-8 animate-marquee"
              style={{ animationPlayState: "var(--marquee-play-state)" }}
            >
              {extentedTestimonials.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 border-2 hover:border-white/10 transition-all duration-300 p-8 rounded-xl"
                >
                  <div className="centered-row gap-4 mb-6">
                    {/* Image & Name */}
                    <div className="h-12 w-12 overflow-clip rounded-full text-xl center-item text-center bg-pink-500">
                      {/* img */}
                      <img src={item?.image} />
                      {!item.image && item.name[0]}
                    </div>

                    {/* name and role */}
                    <div className="">
                      <motion.h4 initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1}} className="font-medium text-lg clash-display text-white/90">
                        {item.name}
                      </motion.h4>
                      <motion.p initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.18,}} className="text-sm text-white/60">{item.role}</motion.p>
                    </div>
                  </div>

                  {/* Content */}
                  <motion.p initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2,}} className="text-white/70 leading-relaxed text-sm">
                    {item.content}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          {/* Decor : Smooth Edges */}
          <div className="absolute w-20 md:w-40 bg-gradient-to-r from-black to-transparent  h-full  -left-1" />
          <div className="absolute w-20 md:w-40 bg-gradient-to-l from-black to-transparent  h-full  -right-1" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
