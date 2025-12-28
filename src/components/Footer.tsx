import { motion } from "framer-motion";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    Product: ["Features", "Pricing", "How It Works", "FAQ"],
    Company: ["About Us", "Careers", "Press", "Blog"],
    Support: ["Help Center", "Contact Us", "Warranty", "Returns"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <footer id="contact" className="bg-brown-deep text-cream py-16 overflow-hidden">
      <div className="section-container">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.a whileHover={{
            scale: 1.05
          }} href="/" className="logo-text text-peach-light text-2xl mb-4 block">
               Tailsmate
            </motion.a>
            <p className="text-cream/70 mb-6 max-w-sm">
              AI-powered pet health tracking that gives you peace of mind and
              helps your furry family members live longer, healthier lives.
            </p>
            <div className="flex gap-4">
              {["📘", "📸", "🐦"].map((icon, index) => <motion.a key={icon} whileHover={{
              scale: 1.2,
              rotate: 5
            }} whileTap={{
              scale: 0.9
            }} href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-peach transition-colors">
                  <span className="text-lg">{icon}</span>
                </motion.a>)}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => <motion.div key={category} variants={itemVariants}>
              <h4 className="font-display text-lg text-cream mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => <li key={link}>
                    <motion.a whileHover={{
                x: 5,
                color: "hsl(var(--peach-light))"
              }} href="#" className="text-cream/60 hover:text-peach-light transition-colors inline-block">
                      {link}
                    </motion.a>
                  </li>)}
              </ul>
            </motion.div>)}
        </motion.div>

        {/* Newsletter */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3
      }} className="py-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-xl text-cream mb-2">Stay Updated</h4>
              <p className="text-cream/60">Get pet health tips and product updates.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <motion.input whileFocus={{
              scale: 1.02,
              borderColor: "hsl(var(--peach))"
            }} type="email" placeholder="Enter your email" className="flex-1 md:w-64 px-6 py-3 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-peach transition-all" />
              <motion.button whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }} whileTap={{
              scale: 0.95
            }} type="submit" className="px-8 py-3 rounded-full bg-peach text-white font-medium hover:bg-peach-light transition-colors">
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.5
      }} className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/50 text-sm">
          <p>© {currentYear} TailsMate. All rights reserved.</p>
          <motion.p animate={{
          scale: [1, 1.05, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>Made with ❤️ for Pets</motion.p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;