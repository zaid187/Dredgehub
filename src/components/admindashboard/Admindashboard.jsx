import React, { useState, useEffect } from "react";
import "./admindashboard.css";

const Admindashboard = () => {
  const [showQuotes, setShowQuotes] = useState(false);
  const [showQueries, setShowQueries] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [queries, setQueries] = useState([]);

  // Fetch quotes from localStorage
  const fetchQuotes = () => {
    const storedQuotes = localStorage.getItem("quotes");
    if (storedQuotes) {
      setQuotes(JSON.parse(storedQuotes));
    }
  };

  // Fetch queries from localStorage
  const fetchQueries = () => {
    const storedQueries = localStorage.getItem("queries");
    if (storedQueries) {
      setQueries(JSON.parse(storedQueries));
    }
  };

  useEffect(() => {
    fetchQuotes(); // Load quotes initially
    fetchQueries(); // Load queries initially

    // Listen for localStorage changes
    window.addEventListener("storage", fetchQuotes);
    window.addEventListener("storage", fetchQueries);

    return () => {
      window.removeEventListener("storage", fetchQuotes);
      window.removeEventListener("storage", fetchQueries);
    };
  }, []);

  return (
    <div className="dashboard-container">
      <div className="search-bar">
        <div className="profile-icons">
          <i className="fa fa-bell"></i>
        </div>
      </div>

      <div className="sales-summary">
        <div className="card" onClick={() => setShowQuotes(!showQuotes)}>
          <i className="fa fa-shopping-cart"></i>
          <div>
            <h3>Quotes Raised</h3>
            <p>{quotes.length}</p>
            <span>+10% from yesterday</span>
          </div>
        </div>

        <div className="card" onClick={() => setShowQueries(!showQueries)}>
          <i className="fa fa-box"></i>
          <div>
            <h3>Query Filled</h3>
            <p>{queries.length}</p>
            <span>+8% from yesterday</span>
          </div>
        </div>
      </div>

      {/* Quotes List */}
      {showQuotes && (
        <div className="quotes-list">
          <h3>List of Quotes</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Destination</th>
                <th>Transport Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{quote.destination}</td>
                  <td>{quote.transportType}</td>
                  <td>{quote.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Query List */}
      {showQueries && (
        <div className="queries-list">
          <h3>List of Queries</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{query.name}</td>
                  <td>{query.email}</td>
                  <td>{query.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Preserving the rest of your dashboard layout */}
      <div className="analytics">
        <div className="level-chart">
          <h3>Level</h3>
          <div className="chart-placeholder">
            <div className="bar-chart">
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar" style={{ height: "80%" }}></div>
            </div>
          </div>
        </div>

        <div className="top-products">
          <h3>Top Products</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Most ordered</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Cargo Titan</td>
                <td>
                  <div className="popularity">
                    <div className="progress-bar" style={{ width: "78%" }}></div>
                    <span>78%</span>
                  </div>
                </td>
                <td>78%</td>
              </tr>
              <tr>
                <td>02</td>
                <td>Dredge Beta</td>
                <td>
                  <div className="popularity">
                    <div className="progress-bar" style={{ width: "62%" }}></div>
                    <span>62%</span>
                  </div>
                </td>
                <td>62%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
