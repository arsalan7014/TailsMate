import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "TailsMate detected a subtle change in Luna's heart rate that led to an early diagnosis. Our vet said it likely saved her life.",
    author: "Sarah M.",
    role: "Cat Parent",
    avatar: "🐱",
  },
  {
    quote:
      "As a veterinarian, I recommend TailsMate to all my clients. The data accuracy rivals clinical equipment.",
    author: "Dr. James Wilson",
    role: "Veterinary Surgeon",
    avatar: "👨‍⚕️",
  },
  {
    quote:
      "Max loves his collar and I love the peace of mind. The app shows me everything I need to know about his health.",
    author: "Michael T.",
    role: "Dog Parent",
    avatar: "🐕",
  },
];

const Testimonials = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 gradient-cream overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brown-medium font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-4">
            Loved by Pet Parents
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of families who trust TailsMate to watch over their
            beloved companions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
              }}
              className="bg-card rounded-3xl p-8 shadow-soft cursor-pointer transition-colors duration-300"
            >
              {/* Quote */}
              <div className="relative mb-6">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-peach text-8xl font-display absolute -top-4 -left-2"
                >
                  "
                </motion.span>
                <p className="text-foreground text-lg relative z-10 italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <motion.span
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  className="text-4xl"
                >
                  {testimonial.avatar}
                </motion.span>
                <div>
                  <p className="font-display text-lg text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Trusted by leading pet organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: "🏆", text: "Pet Health Awards 2024" },
              { icon: "🩺", text: "Vet Approved" },
              { icon: "⭐", text: "4.9/5 Rating" },
            ].map((badge, index) => (
              <motion.span
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="text-2xl font-display text-foreground cursor-pointer transition-all"
              >
                {badge.icon} {badge.text}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
