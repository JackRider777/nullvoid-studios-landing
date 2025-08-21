import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Case Studies", href: "#casestudies" },
    { name: "Process", href: "#process" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[40%] max-w-2xl bg-black/50 backdrop-blur-lg border border-white/10 rounded-full z-50 px-6 py-3"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span className="text-white font-semibold text-lg hidden sm:inline">
              NullVoid
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300 text-sm font-medium"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden fixed top-20 left-0 w-full bg-black/80 backdrop-blur-lg z-40 pt-4 pb-8"
          >
            <div className="container mx-auto px-6 flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={linkVariants}
                  className="text-gray-200 hover:text-white text-lg transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div variants={linkVariants}>
                <a
                  href="#"
                  className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Project
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// You would typically export this component to use in your App.js
export default FloatingNavbar;
