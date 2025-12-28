import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const steps = [{
  number: "01",
  icon: "🐕",
  title: "Easy Setup",
  description: "Simply attach the lightweight TailsMate collar to your pet. It fits comfortably on both cats and dogs of all sizes."
}, {
  number: "02",
  icon: "📊",
  title: "Continuous Monitoring",
  description: "Advanced sensors collect health data 24/7, tracking vitals, activity levels, sleep patterns, and stress indicators."
}, {
  number: "03",
  icon: "🤖",
  title: "AI Analysis",
  description: "Our intelligent algorithms analyze patterns, compare with breed-specific baselines, and identify potential health concerns early."
}, {
  number: "04",
  icon: "📱",
  title: "Real-Time Insights",
  description: "View your pet's health dashboard on our mobile app and receive instant alerts when something needs attention."
}];
const HowItWorks = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="how-it-works" className="py-24 bg-background overflow-hidden">
      <div className="section-container">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-peach font-medium uppercase tracking-wider text-sm">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From collar to insights in minutes. TailsMate makes pet health
            monitoring effortless and accessible.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <motion.div key={step.number} variants={itemVariants} className="relative">
              <motion.div whileHover={{
            y: -10,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }} className="card-premium h-full text-center group transition-all duration-300">
                {/* Step Number */}
                

                {/* Icon */}
                <motion.div whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, 0]
            }} transition={{
              duration: 0.4
            }} className="text-5xl mb-6">
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && <motion.div initial={{
            opacity: 0,
            x: -10
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5 + index * 0.1
          }} className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <motion.div animate={{
              x: [0, 5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity
            }}>
                    <ArrowRight className="text-peach w-8 h-8" />
                  </motion.div>
                </motion.div>}
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default HowItWorks;