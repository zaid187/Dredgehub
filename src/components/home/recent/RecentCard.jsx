import React, { useEffect, useRef } from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  const cardRefs = useRef([]); // Store references to each card

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)";
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "translateY(50px)";
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleAddToPricing = (name) => {
    localStorage.setItem("selectedDredge", name);
    alert(`${name} has been added to Pricing!`);
    window.location.href = "./pricing";
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val;
        return (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)} // Attach reference
            style={{
              background: "#fff",
              borderRadius: "12px",
              border: "2px solid transparent", // Default transparent border
              padding: "20px",
              transition: "transform 0.5s ease, opacity 0.5s ease, border-color 0.3s",
              opacity: 0, // Initially hidden
              transform: "translateY(50px)", // Move down initially
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 123, 255, 0.2)";
              e.currentTarget.style.borderColor = "#007bff"; // Blue border on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.borderColor = "transparent"; // Reset border
            }}
          >
            <div>
              <img src={cover} alt='' style={{ width: "100%", borderRadius: "12px" }} />
            </div>
            <div style={{ marginTop: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    background: category === "For Rent" ? "#25b5791a" : "#ff98001a",
                    color: category === "For Rent" ? "#25b579" : "#ff9800",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                >
                  {category}
                </span>
                <span style={{ color: "#333", fontSize: "14px", fontWeight: "500" }}>{type}</span>
              </div>
              <h4>{name}</h4>
              <p>
                <i className='fa fa-location-dot'></i> {location}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  style={{
                    background: "#7AB2D3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                  onClick={() => handleAddToPricing(name)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
