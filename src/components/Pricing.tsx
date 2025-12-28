import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 149,
    description: "Essential health tracking for every pet",
    features: [
      "TailsMate Basic Collar",
      "Heart rate monitoring",
      "Activity tracking",
      "Sleep analysis",
      "Mobile app access",
      "30-day data history",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 249,
    description: "Advanced monitoring with AI insights",
    features: [
      "TailsMate Pro Collar",
      "All Basic features",
      "Temperature monitoring",
      "Respiratory rate tracking",
      "Stress indicators",
      "AI health predictions",
      "Unlimited data history",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Pro + AI",
    price: 299,
    priceNote: "+ $9.99/mo",
    description: "Complete peace of mind package",
    features: [
      "TailsMate Pro Collar",
      "All Pro features",
      "Real-time AI monitoring",
      "Vet consultation integration",
      "Health reports for vet visits",
      "Family sharing (up to 5)",
      "Early access to new features",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="pricing" className="py-24 bg-background overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-peach font-medium uppercase tracking-wider text-sm">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start with the collar that fits your needs. All plans include free
            shipping and a 30-day money-back guarantee.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: plan.popular ? 1.02 : 1.05,
              }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-brown-deep text-cream shadow-medium z-10"
                  : "bg-card border border-border hover:shadow-medium"
              }`}
              style={{ scale: plan.popular ? 1.02 : 1 }}
            >
              {plan.popular && (
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-peach text-white px-6 py-1 rounded-full text-sm font-medium"
                >
                  Most Popular
                </motion.span>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`font-display text-2xl mb-2 ${
                    plan.popular ? "text-cream" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? "text-cream/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <motion.span
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`text-5xl font-display ${
                      plan.popular ? "text-peach-light" : "text-peach"
                    }`}
                  >
                    ${plan.price}
                  </motion.span>
                  {plan.priceNote && (
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-cream/70" : "text-muted-foreground"
                      }`}
                    >
                      {plan.priceNote}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * featureIndex }}
                    className="flex items-start gap-3"
                  >
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-peach-light" : "text-peach"
                      }`}
                    />
                    <span
                      className={
                        plan.popular ? "text-cream/90" : "text-muted-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className={`w-full rounded-full py-6 font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-peach text-white hover:bg-peach-light"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
