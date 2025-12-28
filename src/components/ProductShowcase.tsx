import { useState } from "react";
import { motion } from "framer-motion";
import collarImage from "@/assets/collar-product.png";

const ProductShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      icon: "💓",
      title: "Real-Time Vitals",
      description:
        "Continuous monitoring of heart rate, respiratory rate, and body temperature with vet-grade accuracy.",
    },
    {
      icon: "🧠",
      title: "AI Health Insights",
      description:
        "Advanced algorithms detect subtle health changes before they become serious problems.",
    },
    {
      icon: "🔔",
      title: "Instant Alerts",
      description:
        "Get notified immediately if something needs your attention, with actionable recommendations.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="products" className="py-24 gradient-cream overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            The Smart Collar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vet-grade health monitoring in an elegantly designed, comfortable
            collar your pet will love wearing.
          </p>
        </motion.div>

        {/* Product Display */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative bg-gradient-to-b from-muted/50 to-background rounded-3xl p-8 md:p-16">
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                alt="TailsMate AI-powered pet health tracking collar"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl cursor-pointer"
                src="/lovable-uploads/bb8d6285-9b41-417d-9a6d-d539f34a5872.png"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-peach/10 blur-3xl rounded-full scale-75 animate-pulse pointer-events-none" />
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2].map((dot) => (
                <motion.button
                  key={dot}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveSlide(dot)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === dot ? "bg-peach w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 max-w-lg"
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="card-premium cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-3xl"
                    >
                      {feature.icon}
                    </motion.span>
                    <h3 className="font-display text-2xl text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
