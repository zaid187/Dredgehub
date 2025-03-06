import React from "react";
import Heading from "../../common/Heading";
import { motion } from "framer-motion"; // Import animation library
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div> {/* Dark overlay */}
      <div className="container">
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading title="Take Dredge to your Destination" subtitle="Quote your required Dredge!" />
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get a Quote
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
