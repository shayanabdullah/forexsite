import React from "react";
import { pricingPlans } from "../assets/data";
import PricingTier from "../components/PricingTier";
import { motion } from "motion/react";
const PricingSection = () => {
  return (
    <section className="container mx-auto px-4 py-24" id="prices">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="text-5xl md:text-6xl mb-6 clash-display capitalize"
        >
          Choose your <span className="grad1 clash-display">Trading Plan</span>
        </motion.h2>
        <motion.p initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
 className="text-zinc-300/80 text-lg">
          Select the perfect trading plan with advanced features and competitive
          fees
        </motion.p>
      </div>
      {/* Subscription cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Pricing tier */}
        {pricingPlans.map((item) => (
          <PricingTier
            key={item.id}
            isPopular={item.popular}
            name={item.title}
            price={item.price}
            features={item.features}
            description={item.description}
            delay={item.id * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
