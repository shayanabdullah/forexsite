import { Command } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { footerLinks } from "../assets/data";
import { motion } from 'motion/react'
const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#0A0A0A]/80 border border-white/10 rounded-xl p-8 ">
          {/* footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {/* Left : logo and icons text*/}
            <motion.div initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1,}} className="space-y-4">
              {/* Text */}
              <div className="centered-row gap-2 cursor-pointer hover:-translate-y-1 transition2">
                <Command className="w-6 h-6 text-indigo-400" />
                <h3 className="clash-display text-lg text-zinc-100">
                  Forextrade
                </h3>
              </div>
              <motion.p initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2,}} className="text-sm text-zinc-400/90">
                Empowering traders with advanced forex trading solutions.
              </motion.p>
              {/* icons */}
              <div className="flex space-x-4 items-center">
                <motion.a initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3,}} href="https://github.com/shayanabdullah">
                  <FaGithub className="w-6 h-6 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
                <motion.a initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4,}} href="https://www.facebook.com/profile.php?id=61580061792886">
                  <FiFacebook className="w-6 h-6 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
                <motion.a initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5,}} href="https://www.linkedin.com/in/shayan-abdullah/">
                  <FaLinkedinIn className="w-6 h-6 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
              </div>
            </motion.div>
            {/* Footer Links */}

            {footerLinks.map((link) => (
              <div className="space-y-4" key={link._id}>
                <motion.h3 initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: link._id * 0.1,}} className="clash-display text-base text-zinc-200">
                  {link.title}
                </motion.h3>
                <ul className="space-y-2">
                  {link?.links?.map((item, index) => (
                    <motion.li initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: link._id * 0.15,}} key={index}>

                      <a
                        href="#hero"
                        className="text-sm text-zinc-400 hover:text-indigo-300  hover:ml-3 transition2"
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* CopyRight */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <motion.p tinitial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay:0.4,}} className="text-sm text-zinc-400/80 text-center clash-display capitalize mb-2">
              {" "}
              © 2026 ForexTrade. All rights reserved.
            </motion.p>
            <motion.p initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5,}} className="text-xs text-zinc-400/80 text-center clash-display capitalize">
              {" "}
              develop by Shayan Abdullah
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
