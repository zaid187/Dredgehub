import React, { useState } from "react";
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
            background: "#7AB2D3", // Updated color
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#5f9ec5")} // Hover effect
          onMouseOut={(e) => (e.target.style.background = "#7AB2D3")} // Reset on mouse out
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")} // Click effect
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")} // Reset scale after click
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
        <div
          className="box"
          key={index}
          onClick={() => handleCardClick(items.name)} // Set the clicked item's name
        >
          <img src={items.cover} alt={items.name} />
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;