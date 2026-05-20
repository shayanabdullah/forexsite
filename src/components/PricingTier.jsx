import { Check } from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";
import { motion } from 'motion/react'
const PricingTier = ({ name, price, description, features, isPopular, delay }) => {
  return (
    <CardSpotlight
      className={`h-full border-2 cursor-pointer ${
        isPopular ? "border-indigo-500" : "border-white/10"
      }`}
    >
      <motion.div 
 className="relative h-full p-6 flex flex-col">
        {isPopular && (
          <span className="text-xs font-medium bg-indigo-400/30 text-indigo-100 rounded-full px-3 py-1 w-fit mb-4">
            Most Popular
          </span>
        )}

        {/* Name */}
        <motion.h3 initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay,
          }} className={`clash-display text-xl ${isPopular && 'grad-text from-emerald-200  to-emerald-800 text-xl  clash-display mb-2'}`}>{name}</motion.h3>

        {/* Price */}
        <motion.div initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: delay,}}  className="mb-4 mt-2">
          <span className="text-4xl font-bold clash-display text-indigo-300">
            {price !== "Custom" && '$'}{price}
          </span>
          {price !== "Custom" && <span className="text-gray-400">/month</span>}
        </motion.div>

        {/* Description */}
        <motion.p initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: delay,}}  className="text-gray-400 text-base mb-6">{description}</motion.p>

        {/* Options */}
        <ul className="space-y-3 mb-6 flex-grow ">
          {features.map((feature, index) => (
            <motion.li initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2,}}key={index} className="centered-row gap-2">
              <Check className="w-5 h-5 text-indigo-300" />
              <span className="text-sm text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Button */}

        <motion.button initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: delay,}} className="bg-indigo-500 py-4 w-full text-zinc-50 rounded-full text-lg clash-display cursor-pointer hover:bg-indigo-400/10 hover:text-indigo-300 transition2 ">
          Start Trading
        </motion.button>
      </motion.div>
    </CardSpotlight>
  );
};

export default PricingTier;
