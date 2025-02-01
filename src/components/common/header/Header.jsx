import React, { useState, useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
 //import  Mylist  from "./Mylist"; Adjust path as needed

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [username, setUsername] = useState(null);

  // Check if the user is logged in on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set the username if it exists
    }
  }, []);

  // Handle button click based on whether the user is logged in
  const handleButtonClick = () => {
    if (username) {
      // If logged in, log out
      localStorage.removeItem("username"); // Remove username from localStorage
      setUsername(null); // Clear username in state
      alert("Logged out successfully");
      window.location.href = "/"; // Redirect to sign-in page after logout
    } else {
      // If not logged in, redirect to sign-in page
      window.location.href = "/signin"; 
    }
  };

  
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            {/* Wrap the logo in a Link to navigate to the home page */}
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
<<<<<<< HEAD
            <h4>
              <span></span> My List
            </h4>
            <button className="btn1" onClick={handleButtonClick}>
              {username ? (
                username // Display username if logged in
              ) : (
                <>
                  <i className="fa fa-sign-out"></i> Login/Signup
                </>
              )}
=======
            {/* Navigate to My List manually */}
            <button className="btn1" onClick={handleSignInClick}>
              <i className="fa fa-sign-out"></i> Sign Up/Log In
>>>>>>> 7b3659392253623218b5c8970e8540e14ea0d5cf
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