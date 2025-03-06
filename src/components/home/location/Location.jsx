import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading title="Explore By Location" subtitle="Take our dredge to multiple states of India" />

          <div className="content grid3 mtop">
            {location.map((item, index) => (
              <motion.div
                className="box"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              >
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
