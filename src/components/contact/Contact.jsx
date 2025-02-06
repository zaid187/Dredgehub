import React, { useState } from "react";
import img from '../../assets/images/pricing.jpg';
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Saves to localStorage & Sends to Backend)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store in localStorage for immediate UI update
      const storedQueries = JSON.parse(localStorage.getItem("queries")) || [];
      const updatedQueries = [...storedQueries, formData];
      localStorage.setItem("queries", JSON.stringify(updatedQueries));
      window.dispatchEvent(new Event("storage")); // Notify other components

      // Send data to backend
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        setResponseMessage(data.message || "Submission failed.");
      }

      // Clear the form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Help & Friendly Support" cover={img} />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit}>
            <h4>Fill Up The Form</h4> <br />
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit Request</button>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;