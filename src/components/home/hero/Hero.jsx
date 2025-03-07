import React from "react";
import Heading from "../../common/Heading";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  const handleRedirect = () => {
    window.location.href = "/pricing"; // Redirect to Pricing page
  };

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
          <Heading title="Take Dredge to your Destination" subtitle="Order your required Dredge!" />
        </motion.div>

        {/* Call-to-Action Button with Redirect */}
       
         
      </div>
    </section>
  );
};

export default Hero;