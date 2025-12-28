import { motion } from "framer-motion";

const features = [
  {
    icon: "🏥",
    title: "Vet-Grade Accuracy",
    description: "Medical-grade sensors trusted by veterinary professionals worldwide.",
  },
  {
    icon: "🪶",
    title: "Lightweight Design",
    description: "So comfortable your pet won't even notice they're wearing it.",
  },
  {
    icon: "💧",
    title: "Waterproof",
    description: "IP68 rated for swimming, rain, and bath time adventures.",
  },
  {
    icon: "🔋",
    title: "30-Day Battery",
    description: "Long-lasting battery with convenient wireless charging.",
  },
  {
    icon: "🐱🐕",
    title: "Universal Fit",
    description: "Adjustable design perfect for cats and dogs of all sizes.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description: "Your pet's data is encrypted and never shared without consent.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 gradient-warm overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brown-medium font-medium uppercase tracking-wider text-sm">
            Why TailsMate
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-4">
            Built With Love
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every detail designed with your pet's comfort and your peace of mind
            in focus.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
              }}
              className="bg-card rounded-2xl p-8 border border-border/50 cursor-pointer transition-colors duration-300 hover:border-peach/30"
            >
              <motion.span
                whileHover={{ scale: 1.3, rotate: [0, -15, 15, 0] }}
                transition={{ duration: 0.4 }}
                className="text-4xl block mb-4"
              >
                {feature.icon}
              </motion.span>
              <h3 className="font-display text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
