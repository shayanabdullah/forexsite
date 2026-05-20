import { ArrowRight, Command } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "motion/react";
const HeroSection = () => {

const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {

    let ctx = gsap.context(() => {
      gsap.set(imgRef.current, {
        rotateX: 35,
        rotateY: 0,
        scale: 0.8,
        y: 250,
        transformPerspective: 2000,
        transformOrigin: "top center",
      });
      gsap.to(imgRef.current, {
        rotateX: 0,
        scale: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1.5,
        },
      });

    }, containerRef);

    return () => ctx.revert(); 
  }, []);


  return (
    <section className="relative container mx-auto px-4 pt-40 pb-20" id="hero" ref={containerRef}>
      {/* Decorative: sub-title*/}
      <motion.div initial={{x:-50, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration: 0.5, delay: 0.2}} className="flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass ">
        <span className="text-sm font-medium  text-zinc-300">
          <Command className="w-4 h-4 inline-block mr-2" />
          Next-gen forex trading platform
        </span>
      </motion.div>
      {/* Hero text */}
      <div className="max-w-4xl relative z-10">
        {/* Heading */}
        <motion.h1 initial={{y:50, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.5, delay: 0.3}} className="text-5xl md:text-7xl mb-4 tracking-tight text-left ">
          <span className="clash-display grad1 ">Trade forex with</span>
          <br />
          <span className="text-zinc-50 font-medium clash-display">confidence & security</span>
        </motion.h1>

        {/* Para */}
        <motion.p initial={{y:60, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.5, delay: 0.4}} className=" text-lg text-zinc-300/80 mb-8 max-w-2xl text-left">
          Experience seamless forex trading with advanced features, real-time
          analytics, and institutional-grade security.{" "}
          <span className="text-zinc-200 ">Start trading in minutes.</span>
        </motion.p>

        {/* Buttons */}
        <div className="col sm:flex-row gap-4 items-start">
          <motion.button initial={{y:60, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.5, delay: 0.5}} className="clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-3 hover:bg-indigo-500/20! rounded-full cursor-pointer hover:-translate-y-0.5 clash-display transition2 duration-200 ease-out ">
            Start Trading Now
          </motion.button>
          <motion.button initial={{y:70, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.5, delay: 0.6}} className="text-zinc-50 text-base clash-display glass px-4 centered-row gap-2 py-3 rounded-full cursor-pointer hover:bg-indigo-500/20  hover:-translate-y-0.5  transition2 duration-200 ease-out">
            View Markets <ArrowRight className="" />
          </motion.button>
        </div>
      </div>

      {/* Hero img */}
    <div
        className="max-w-5xl mx-auto mt-24"
        style={{
          perspective: "2000px",
        }}
      >
        <div
          ref={imgRef}
          id="heroImg"
          className="rounded-3xl overflow-hidden border border-indigo-500/20 shadow-2xl will-change-transform"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src="/chart2.png"
            alt=""
            className="w-full block"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
