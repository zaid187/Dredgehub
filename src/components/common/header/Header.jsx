import React, { useState, useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [username, setUsername] = useState(null);

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
      alert("Logged out successfully");
      window.location.href = "/";
    } else {
      window.location.href = "/signin";
    }
  };

  return (
    <>
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
            {/* Check if the current page is Admin Dashboard */}
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

export default Header;