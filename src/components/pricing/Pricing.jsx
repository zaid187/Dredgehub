import React, { useState, useEffect } from "react";

export const Pricing = () => {
  const [view, setView] = useState("dredges");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [days, setDays] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const dredges = ["Dredge Alpha", "Dredge Titan", "Dredge Beta", "Cargo Hercules", "Dredge Gamma"];
  const vessels = ["Vessel Pioneer", "Vessel Explorer", "Vessel Voyager"];
  const destinations = ["Gujarat", "Visakhapatnam", "Chennai", "Kolkata"];

  useEffect(() => {
    const storedDredge = localStorage.getItem("selectedDredge");
    if (storedDredge) {
      setSelectedItem(storedDredge);
      setView(dredges.includes(storedDredge) ? "dredges" : "vessels");
    }
  }, []);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const newRange = { ...dateRange, [name]: value };
    setDateRange(newRange);

    if (newRange.start && newRange.end) {
      const startDate = new Date(newRange.start);
      const endDate = new Date(newRange.end);
      const calculatedDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      setDays(calculatedDays);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = localStorage.getItem("username");
    if (!username) {
      alert("Please log in to submit a quote.");
      window.location.href = "/signin";
      return;
    }

    if (!destination || !selectedItem || !dateRange.start || !dateRange.end) {
      alert("Please fill out all the required fields before submitting.");
      return;
    }

    const requestData = {
      destination,
      transportType: selectedItem,
      duration: `${dateRange.start} to ${dateRange.end}`,
    };

    const existingQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    existingQuotes.push(requestData);
    localStorage.setItem("quotes", JSON.stringify(existingQuotes));
    window.dispatchEvent(new Event("storage"));

    try {
      const response = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert("Your request has been recorded. Our team will contact you soon.");
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit request. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Transport Request Form</h2>

        <div style={styles.field}>
          <label>Destination</label>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} style={styles.input}>
            <option value="" disabled>Select Destination</option>
            {destinations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div style={styles.field}>
          <label>Transport Type</label>
          <div style={styles.buttonGroup}>
            <button type="button" style={view === "dredges" ? styles.activeButton : styles.button} onClick={() => { setView("dredges"); setSelectedItem(""); }}>Dredges</button>
            <button type="button" style={view === "vessels" ? styles.activeButton : styles.button} onClick={() => { setView("vessels"); setSelectedItem(""); }}>Vessels</button>
          </div>
          <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} style={styles.input}>
            <option value="" disabled>Select {view === "dredges" ? "a Dredge" : "a Vessel"}</option>
            {(view === "dredges" ? dredges : vessels).map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div style={styles.field}>
          <label>Time Duration</label>
          <div style={styles.dateContainer}>
            <input type="date" name="start" value={dateRange.start} onChange={handleDateChange} style={styles.dateInput} />
            <input type="date" name="end" value={dateRange.end} onChange={handleDateChange} style={styles.dateInput} />
          </div>
          {days && <p style={styles.daysText}>Total Days: {days}</p>}
        </div>

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

// ✅ Improved CSS Styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "450px",
    width: "100%",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "22px",
    fontWeight: "bold",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  button: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#E0E0E0",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    margin: "0 5px",
  },
  activeButton: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#6993F5",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    margin: "0 5px",
  },
  dateContainer: {
    display: "flex",
    gap: "10px",
  },
  dateInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  daysText: {
    fontSize: "14px",
    color: "#333",
    marginTop: "5px",
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};