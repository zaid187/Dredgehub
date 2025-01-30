import React, { useState, useEffect } from "react";

export const Pricing = () => {
  const [view, setView] = useState("dredges"); // State to toggle between dredges and vessels
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [days, setDays] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const dredges = ["Dredge Alpha", "Dredge Titan", "Dredge Beta", "Cargo Hercules","Dredge Gamma"];
  const vessels = ["Vessel Pioneer", "Vessel Explorer", "Vessel Vessel Voyager"];
  const destinations = ["Gujarat", "Visakhapatnam", "Chennai", "Kolkata"];

  const [selectedDredge, setSelectedDredge] = useState("");

  // Retrieve selected dredge from localStorage on component mount
  useEffect(() => {
    const storedDredge = localStorage.getItem("selectedDredge");
    if (storedDredge) {
      setSelectedDredge(storedDredge);
      setSelectedItem(storedDredge.toLowerCase());
    }
  }, []);

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "50px auto",
    fontFamily: "'Roboto', sans-serif",
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "10px 0",
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
  };

  const toggleButtonStyle = (active) => ({
    padding: "10px 20px",
    backgroundColor: active ? "#6993F5" : "#E0E0E0",
    color: active ? "#fff" : "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  });

  const dropdownStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

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

    // Validation logic
    if (!destination || !selectedItem || !dateRange.start || !dateRange.end) {
      alert("Please fill out all the required fields before submitting.");
      return;
    }

    alert("Your Request Has Been Recorded! Our team will reach out to you soon.");
  };

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Transport Request Form
        </h2>
        <div style={boxStyle}>
          <label>Destination</label>
          <select
            style={dropdownStyle}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="" disabled>
              Select Destination
            </option>
            {destinations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div style={boxStyle}>
          <label>Transport Type</label>
          <div style={buttonStyle}>
            <button
              style={toggleButtonStyle(view === "dredges")}
              onClick={(e) => {
                e.preventDefault();
                setView("dredges");
                setSelectedItem(""); // Clear the selected item when toggling
              }}
            >
              Dredges
            </button>
            <button
              style={toggleButtonStyle(view === "vessels")}
              onClick={(e) => {
                e.preventDefault();
                setView("vessels");
                setSelectedItem(""); // Clear the selected item when toggling
              }}
            >
              Vessels
            </button>
          </div>
          <select
            style={dropdownStyle}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          >
            <option value="" disabled>
              {view === "dredges" ? "Select a Dredge" : "Select a Vessel"}
            </option>
            {(view === "dredges" ? dredges : vessels).map((item, index) => (
              <option key={index} value={item.toLowerCase()}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div style={boxStyle}>
          <label>
            Time Duration
            <span style={{ marginLeft: "10px", cursor: "pointer" }}>📅</span>
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="date"
              name="start"
              value={dateRange.start}
              onChange={handleDateChange}
              placeholder="Start Date"
              style={{ flex: 1 }}
            />
            <input
              type="date"
              name="end"
              value={dateRange.end}
              onChange={handleDateChange}
              placeholder="End Date"
              style={{ flex: 1 }}
            />
          </div>
          {days && (
            <p style={{ fontSize: "14px", color: "#333", marginTop: "10px" }}>
              Total Days: {days}
            </p>
          )}
        </div>
        <button
          type="submit"
          style={{
            ...toggleButtonStyle(true),
            alignSelf: "center",
            padding: "12px 30px",
            fontSize: "16px",
          }}
        >
          <i className="fa fa-paper-plane" style={{ marginRight: "5px" }}></i>{" "}
          Submit
        </button>
      </form>
    </div>
  );
};
