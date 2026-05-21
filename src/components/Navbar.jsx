import { Command } from "lucide-react";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(()=> {
   const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
   }

   window.addEventListener('scroll', handleScroll)
   return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const [isMenuOpen, setIsMenuOpen] =  useState(false)

  return (
   <>
    <header className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${isScrolled ? 'h-14 bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl' : 'h-14 bg-[#1b1b1b] w-[95%] max-w-3xl'} `}>
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 hover:-translate-y-1 duration-200 transition-all ease-out">
            <Command className="w-5 h-5 text-indigo-400" />
            <a href="#hero" className="font-bold text-base clash-display">
              Forex Trade
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 ">
            {/* Desktop navber */}
            {["features", "prices", "testimonials"].map((item, index) => (
              <a
                key={index}
                 href={'#' + item}
                className="text-sm text-zinc-300/90 hover:text-indigo-300 hover:-translate-y-1 duration-300 ease-out transition-all capitalize"
              >
                {item}
              </a>
            ))}
            {/*Button */}
            <button className="clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-900 transition-all duration-200 ease-out ">
              Start Trading
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden glass p-1 rounded-md relative" onClick={()=> setIsMenuOpen(!isMenuOpen)}>
            <img src="./menu.svg" alt="menu" className="w-8" />
          </div>
          
           
        </nav>
        
      </div>
      
    </header>
   <AnimatePresence>
    {
      isMenuOpen && (
          <motion.div
          initial={{opacity:0, x:-70}} animate={{opacity: 1, x:0}} exit={{opacity:0, x:-60}} transition={{duration: 0.2}}
          className={`fixed ${isScrolled ? 'w-[83%] left-[8.5%]' :'w-[90%] left-[5%]'}  py-5 px-4 bg-[#1b1b1b]/40 backdrop-blur-xl top-[68.2px] md:hidden  rounded-lg z-70 duration-300 ease-out transition-all`}>
      <div className="flex flex-col items-center relative">
              <div className="flex flex-col items-center gap-y-3">
               {["features", "prices", "testimonials"].map((item, index) => (
        
               <a
                href={'#' + item}
                key={index}
                onClick={()=> setIsMenuOpen(false)}
                className="text-sm text-zinc-300/90 hover:text-indigo-300 hover:-translate-y-1 duration-300 ease-out transition-all block capitalize"
              >
                {item}
              </a>
           
            ))}
            </div>
            {/*Button */}
            <button className="clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-900 transition-all duration-200 ease-out mt-10">
              Start Trading
            </button>
            <i className="absolute top-0 right-2 cursor-pointer" onClick={()=> setIsMenuOpen(false)}><CgClose/> </i>
      </div>
            </motion.div>
      )
    }
   </AnimatePresence>
   </>
  );
};

export default Navbar;
4;
