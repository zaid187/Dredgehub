import React, { useState, useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [username, setUsername] = useState(null);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleButtonClick = () => {
    if (username) {
      localStorage.removeItem("username");
      setUsername(null);
      setPopup(true);
    } else {
      window.location.href = "/signin";
    }
  };

  const handleClosePopup = () => {
    setPopup(false);
    window.location.href = "/";
  };

  return (
    <>
      {popup && (
        <div style={{
          position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          background: "white", padding: "40px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          borderRadius: "12px", zIndex: 1000, textAlign: "center", width: "300px"
        }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>Logged out successfully</p>
          <button onClick={handleClosePopup} style={{ padding: "10px 20px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>OK</button>
        </div>
      )}
      <header>
        <div className="container flex">
          <div className="logo">
            <Link to="/">
              <img
                src="./images/logo.png"
                alt="Logo"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <button className="btn1" onClick={handleButtonClick}>
              {window.location.pathname === "/admindashboard"
                ? "Admin"
                : username || (
                    <>
                      <i className="fa fa-sign-out"></i> Login/Signup
                    </>
                  )}
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
