import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-4 inset-x-0 mx-auto max-w-[600px] w-[95%] flex items-center justify-between px-4 md:px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg z-50"
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <a
        href="#"
        className="text-lg md:text-xl font-bold text-white tracking-wide whitespace-nowrap"
      >
        Futuronova <span className="text-red-500">AI</span>
      </a>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-300 font-medium">
        <a href="#services" className="hover:text-white transition">
          Services
        </a>
        <a href="#process" className="hover:text-white transition">
          Process
        </a>
        <a href="#about" className="hover:text-white transition">
          About
        </a>
      </div>

      {/* CTA Button */}
      <motion.a
        href="#book"
        className="px-4 py-2 rounded-xl bg-red-600 text-white font-medium shadow-md hover:shadow-red-500/50 transition whitespace-nowrap"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Book a Call
      </motion.a>
    </motion.nav>
  );
}
