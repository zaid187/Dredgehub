import React, { useState } from "react";
import { motion } from "framer-motion";
import { featured } from "../../data/Data";
import Itemlist from "../../itemlist/Itemlist"; // Correct relative path

const FeaturedCard = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to track selected item

  const handleCardClick = (name) => {
    setSelectedItem(name); // Set the selected item name
  };

  if (selectedItem) {
    return (
      <div>
        <button
          onClick={() => setSelectedItem(null)}
          style={{
            marginBottom: "10px",
            padding: "10px 15px",
            borderRadius: "5px",
            background: "#7AB2D3",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#5f9ec5")}
          onMouseOut={(e) => (e.target.style.background = "#7AB2D3")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          ← Back
        </button>
        <Itemlist selectedItem={selectedItem} />
      </div>
    );
  }

  return (
    <div className="content grid5 mtop">
      {featured.map((items, index) => (
        <motion.div
          className="box"
          key={index}
          onClick={() => handleCardClick(items.name)}
          initial={{ opacity: 0, y: 50 }} // Starts hidden
          whileInView={{ opacity: 1, y: 0 }} // Fades in when scrolled into view
          transition={{ duration: 0.5, delay: index * 0.1 }} // Delays each card slightly
          viewport={{ once: true }} // Animation triggers only once
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }} // Hover effect
        >
          <img src={items.cover} alt={items.name} />
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedCard;
