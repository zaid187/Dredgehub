import React, { useState, useEffect } from "react";

const Team = () => {
  const [view, setView] = useState("dredges");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [days, setDays] = useState(0);
  const [destination, setDestination] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(null);

  const dredges = ["Dredge Alpha", "Dredge Titan", "Dredge Beta", "Cargo Hercules", "Dredge Gamma"];
  const vessels = ["Vessel Pioneer", "Vessel Explorer", "Vessel Voyager"];
  const destinations = ["Gujarat", "Visakhapatnam", "Chennai", "Kolkata"];

  const pricing = {
    dredges: { "dredge alpha": 5000, "dredge titan": 7000, "dredge beta": 6500, "cargo hercules": 8000, "dredge gamma": 5500 },
    vessels: { "vessel pioneer": 9000, "vessel explorer": 7500, "vessel voyager": 8500 },
  };

  useEffect(() => {
    const storedDredge = localStorage.getItem("selectedDredge");
    if (storedDredge) {
      setSelectedItem(storedDredge.toLowerCase());
    }
  }, []);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const newRange = { ...dateRange, [name]: value };
    setDateRange(newRange);

    if (newRange.start && newRange.end) {
      const startDate = new Date(newRange.start);
      const endDate = new Date(newRange.end);
      const timeDiff = Math.abs(endDate - startDate);
      const calculatedDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDays(calculatedDays);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!destination || !selectedItem || !dateRange.start || !dateRange.end) {
      alert("Please fill out all fields before estimating.");
      return;
    }

    const itemCategory = view === "dredges" ? "dredges" : "vessels";
    const costPerDay = pricing[itemCategory][selectedItem] || 0;
    const totalCost = costPerDay * days;
    
    setEstimatedCost(totalCost);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "##DFF2EB", fontFamily: "'Roboto', sans-serif" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Cost Estimation</h2>

        <div>
          <label>Destination</label>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "16px", outline: "none" }}>
            <option value="" disabled>Select Destination</option>
            {destinations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Transport Type</label>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <button style={{ flex: 1, padding: "10px", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", background: "#007bff", color: "white" }} onClick={(e) => { e.preventDefault(); setView("dredges"); setSelectedItem(""); }}>Dredges</button>
            <button style={{ flex: 1, padding: "10px", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", background: "#007bff", color: "white" }} onClick={(e) => { e.preventDefault(); setView("vessels"); setSelectedItem(""); }}>Vessels</button>
          </div>
          <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "16px", outline: "none" }}>
            <option value="" disabled>{view === "dredges" ? "Select a Dredge" : "Select a Vessel"}</option>
            {(view === "dredges" ? dredges : vessels).map((item, index) => (
              <option key={index} value={item.toLowerCase()}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Time Duration 📅</label>
          <div>
            <input type="date" name="start" value={dateRange.start} onChange={handleDateChange} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "16px", marginRight: "10px" }} />
            <input type="date" name="end" value={dateRange.end} onChange={handleDateChange} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "16px" }} />
          </div>
          {days > 0 && <p>Total Days: {days}</p>}
        </div>

        <button type="submit" style={{ padding: "10px", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", background: "#28a745", color: "white" }}>Get Cost Estimation</button>

        {estimatedCost !== null && (
          <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", color: "#333", fontSize: "18px" }}>
            <h3 style={{ margin: 0, color: "#007bff" }}>Estimated Cost: ₹{estimatedCost.toLocaleString()}</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default Team;