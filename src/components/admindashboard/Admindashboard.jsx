import React, { useState } from "react";
import "./admindashboard.css"; // Assuming admindashboard.css is in the same folder

const Admindashboard = () => {
  // State to manage the visibility of the Quotes and Queries list
  const [showQuotes, setShowQuotes] = useState(false);
  const [showQueries, setShowQueries] = useState(false);

  // Sample data for quotes and queries (to simulate real data)
  const quotes = [
    { id: 1, name: "Quote #1", status: "Pending" },
    { id: 2, name: "Quote #2", status: "Completed" },
    { id: 3, name: "Quote #3", status: "In Progress" },
  ];

  const queries = [
    { id: 1, name: "Query #1", status: "Resolved" },
    { id: 2, name: "Query #2", status: "Unresolved" },
    { id: 3, name: "Query #3", status: "In Progress" },
  ];

  // State to manage selected items for quotes and queries
  const [selectedQuotes, setSelectedQuotes] = useState([]);
  const [selectedQueries, setSelectedQueries] = useState([]);

  // Handle checkbox toggle for Quotes
  const handleQuoteChange = (id) => {
    setSelectedQuotes((prevState) =>
      prevState.includes(id)
        ? prevState.filter((quoteId) => quoteId !== id)
        : [...prevState, id]
    );
  };

  // Handle checkbox toggle for Queries
  const handleQueryChange = (id) => {
    setSelectedQueries((prevState) =>
      prevState.includes(id)
        ? prevState.filter((queryId) => queryId !== id)
        : [...prevState, id]
    );
  };

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
            <h3>Quotes raised</h3>
            <p></p>
            <span>+10% from yesterday</span>
          </div>
        </div>

        <div className="card" onClick={() => setShowQueries(!showQueries)}>
          <i className="fa fa-box"></i>
          <div>
            <h3>Query filled</h3>
            <p></p>
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
                <th>Check</th>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedQuotes.includes(quote.id)}
                      onChange={() => handleQuoteChange(quote.id)}
                    />
                  </td>
                  <td>{quote.id}</td>
                  <td>{quote.name}</td>
                  <td>{quote.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Queries List */}
      {showQueries && (
        <div className="queries-list">
          <h3>List of Queries</h3>
          <table>
            <thead>
              <tr>
                <th>Check</th>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query) => (
                <tr key={query.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedQueries.includes(query.id)}
                      onChange={() => handleQueryChange(query.id)}
                    />
                  </td>
                  <td>{query.id}</td>
                  <td>{query.name}</td>
                  <td>{query.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="analytics">
        <div className="level-chart">
          <h3>Level</h3>
          <div className="chart-placeholder">
            {/* Bar Chart Placeholder */}
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
              <tr>
                <td>03</td>
                <td>Vessel Explorer</td>
                <td>
                  <div className="popularity">
                    <div className="progress-bar" style={{ width: "51%" }}></div>
                    <span>51%</span>
                  </div>
                </td>
                <td>51%</td>
              </tr>
              <tr>
                <td>04</td>
                <td>Vessel Voyager</td>
                <td>
                  <div className="popularity">
                    <div className="progress-bar" style={{ width: "29%" }}></div>
                    <span>29%</span>
                  </div>
                </td>
                <td>29%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;