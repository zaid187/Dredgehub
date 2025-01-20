import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);

  const handleSignInClick = () => {
    window.location.href = "/signin"; // Redirect to the sign-in page
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
            <h4>
              <span></span> My List
            </h4>
            <button className="btn1" onClick={handleSignInClick}>
              <i className="fa fa-sign-out"></i> Sign Up/Log In
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
