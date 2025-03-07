import React, { useState } from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleNavigation = () => {
    window.location.href = "/contact"; // Redirects to contact page
  };

  const handleSubscribe = () => {
    setShowPopup(true);
  };

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5' onClick={handleNavigation}>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates sent straight to your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button onClick={handleSubscribe}>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className='box' key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2025 AS Marines.</span>
      </div>

      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <p>Our team will reach out to you soon. Thanks for subscribing!</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;