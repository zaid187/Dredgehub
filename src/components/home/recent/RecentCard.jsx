import React from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  const handleAddToPricing = (name) => {
    localStorage.setItem("selectedDredge", name);
    alert(`${name} has been added to Pricing!`);

    // Redirecting to the Pricing page manually
    window.location.href = "./pricing";
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val;
        return (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
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
                <span
                  style={{
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {type}
                </span>
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
