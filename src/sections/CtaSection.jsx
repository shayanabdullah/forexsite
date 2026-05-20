import { ArrowRight } from "lucide-react"
import { motion } from 'motion/react'
const CtaSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 relative bg-black">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'url("./crack.png")', backgroundPosition: 'center center', backgroundRepeat: "no-repeat"}}/>
        <div className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10">
                <div className="">
                    <motion.h2 initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2,}} className="text-3xl md:text-4xl clash-display mb-4">Ready to start trading?</motion.h2>
                    <motion.p initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3,}} className="text-lg mb-8 max-w-2xl mx-auto text-zinc-300/80">Join thousands of traders who have already discovered the power of our platform.</motion.p>

                    <motion.button initial={{ y: 70, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4,}} className="button-gradient flex items-center mx-auto text-sm md:text-lg bg-gradient-to-r from-indigo-400 to-indigo-500 clash-display hover:-translate-y-1 transition2 text-white py-3 rounded-full px-5 cursor-pointer">Create Account <ArrowRight className="w-4 h-4 ml-2" /></motion.button>
                </div>
        </div>
    </section>
  )
}

export default CtaSection