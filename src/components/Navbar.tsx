import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact Us", href: "#contact" },
  ];

  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-brown-deep/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Left Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="text-cream font-medium hover:text-peach transition-colors duration-300 drop-shadow-md relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-peach transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Logo - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <a
              href="/"
              className="logo-text text-peach drop-shadow-lg hover:scale-110 transition-transform duration-300 inline-block"
            >
              TailsMate
            </a>
          </motion.div>

          {/* Right Auth Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex items-center gap-4 ml-auto"
          >
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-cream">Hi, {user.email?.split("@")[0]}</span>
                <Button
                  onClick={async () => {
                    await signOut();
                    navigate("/");
                  }}
                  className="rounded-full px-6 py-2 bg-peach text-white hover:bg-peach-dark shadow-soft font-medium hover:scale-105 transition-all duration-300"
                >
                  LOGOUT
                </Button>
              </div>
            ) : (
              <>
                <Link to="/signin">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-2 bg-peach/90 border-peach text-white hover:bg-peach hover:text-white shadow-soft font-medium hover:scale-105 transition-all duration-300"
                  >
                    LOGIN
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="rounded-full px-6 py-2 bg-peach text-white hover:bg-peach-dark shadow-soft font-medium hover:scale-105 transition-all duration-300">
                    SIGN UP
                  </Button>
                </Link>
              </>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-cream ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brown-deep/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-cream font-medium py-2 hover:text-peach transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-cream/20">
                {user ? (
                  <>
                    <div className="text-cream">Hi, {user.email?.split("@")[0]}</div>
                    <Button
                      onClick={async () => {
                        await signOut();
                        navigate("/");
                        setIsOpen(false);
                      }}
                      className="rounded-full bg-peach text-white hover:bg-peach-dark w-full"
                    >
                      LOGOUT
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="outline"
                        className="rounded-full bg-peach/90 border-peach text-white hover:bg-peach w-full"
                      >
                        LOGIN
                      </Button>
                    </Link>

                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="rounded-full bg-peach text-white hover:bg-peach-dark w-full">
                        SIGN UP
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
