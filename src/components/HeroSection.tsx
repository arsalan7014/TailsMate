import { motion } from "framer-motion";
import heroImage from "@/assets/hero-pets.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div initial={{
      scale: 1.1
    }} animate={{
      scale: 1
    }} transition={{
      duration: 1.5,
      ease: "easeOut"
    }} className="absolute inset-0">
        <img src={heroImage} alt="Cat and dog sleeping peacefully together, representing the bond TailsMate protects" className="w-full h-full object-cover" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/60 via-transparent to-brown-deep/20" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 drop-shadow-lg">
            ​Every Tail     <br />
            <motion.span initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="italic text-peach text-[sidebar-primary-foreground]">
              ​Deserves Attention     
            </motion.span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
            Health tracking that gives you peace of mind and helps your furry family members live longer, healthier lives.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }} whileTap={{
            scale: 0.98
          }} href="#products" className="inline-block bg-peach text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg">
              Discover TailsMate
            </motion.a>
            <motion.a whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.2)"
          }} whileTap={{
            scale: 0.98
          }} href="#how-it-works" className="inline-block border-2 border-cream/80 text-cream px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Learn How It Works
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;