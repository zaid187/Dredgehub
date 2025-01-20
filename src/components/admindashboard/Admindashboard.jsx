import React from "react";
import "/Users/shubz8/Documents/Dredgehub/src/components/admindashboard/admindashboard.css";

const AdminDashboard = () => {
  // Mock data
  const contactUsInfos = [
    { id: 1, name: "John Doe", email: "john@example.com", message: "Need assistance with pricing." },
    { id: 2, name: "Jane Smith", email: "jane@example.com", message: "Interested in a partnership." },
  ];

  const quotesRaised = [
    { id: 1, destination: "New York", transport: "By Air", duration: "5 days" },
    { id: 2, destination: "Los Angeles", transport: "By Road", duration: "10 days" },
  ];

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <section className="contact-us-section">
        <h2>Contact Us Infos</h2>
        <ul>
          {contactUsInfos.map((info) => (
            <li key={info.id}>
              <p><strong>Name:</strong> {info.name}</p>
              <p><strong>Email:</strong> {info.email}</p>
              <p><strong>Message:</strong> {info.message}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="quotes-raised-section">
        <h2>Quotes Raised</h2>
        <ul>
          {quotesRaised.map((quote) => (
            <li key={quote.id}>
              <p><strong>Destination:</strong> {quote.destination}</p>
              <p><strong>Transport Type:</strong> {quote.transport}</p>
              <p><strong>Duration:</strong> {quote.duration}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
