import React, { useEffect, useRef, useState } from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  const cardRefs = useRef([]);
  const [popup, setPopup] = useState({ show: false, message: "", redirect: false });

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
    setPopup({ show: true, message: `${name} has been added to Pricing!`, redirect: true });
  };

  const handleClosePopup = () => {
    setPopup({ show: false, message: "", redirect: false });
    window.location.href = "./pricing";
  };

  return (
    <div>
      {popup.show && (
        <div style={{
          position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          background: "white", padding: "40px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          borderRadius: "12px", zIndex: 1000, textAlign: "center", width: "300px"
        }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>{popup.message}</p>
          <button onClick={handleClosePopup} style={{ padding: "10px 20px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>OK</button>
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {list.map((val, index) => {
          const { cover, category, location, name, type } = val;
          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                background: "#fff", borderRadius: "12px", padding: "20px",
                transition: "transform 0.5s ease, opacity 0.5s ease",
                opacity: 0, transform: "translateY(50px)", cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div>
                <img src={cover} alt='' style={{ width: "100%", borderRadius: "12px" }} />
              </div>
              <div style={{ marginTop: "15px" }}>
                <span style={{ background: category === "For Rent" ? "#25b5791a" : "#ff98001a", padding: "5px 10px", borderRadius: "8px" }}>{category}</span>
                <h4>{name}</h4>
                <p>{location}</p>
              </div>
              <button onClick={() => handleAddToPricing(name)} style={{
                background: "#7AB2D3", color: "#fff", border: "none",
                borderRadius: "50%", width: "35px", height: "35px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontSize: "16px"
              }}>+</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentCard;
