import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react"; // Using a placeholder icon for the logo

const FloatingNavbar = () => {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Case Studies", link: "#casestudies" },
    { name: "Process", link: "#process" },
  ];

  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2  // <-- These classes handle the centering
        z-50                                 
        flex items-center justify-center gap-6  
        rounded-full                          
        px-4 py-2                             
        bg-black/30                           
        backdrop-blur-md                      
        border border-white/10                
        shadow-lg shadow-black/20             
      "
    >
      {/* Logo Placeholder */}
      <a href="#" className="text-white">
        <Code className="h-6 w-6" />
      </a>

      {/* Navigation Links */}
      <div className="hidden sm:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 text-white font-semibold px-4 py-1.5 rounded-full text-sm"
      >
        Start a Project
      </motion.button>
    </motion.nav>
  );
};

export default FloatingNavbar;
