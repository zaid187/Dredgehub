import React, { useState } from "react";
import "./signin.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openDashboard = () => {
    if (username === "asmarinesadmin" && password === "arshad03") {
      window.open("/admindashboard", "_blank");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="signin-container">
      {/* Left section for the image */}
      <div className="signin-image"></div>

      {/* Right section for the form */}
      <div className="signin-form-container">
        <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Log In</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="button" // Change type to "button" to prevent form submission
            className="btn1"
            onClick={openDashboard}
          >
            Log In
          </button>
        </form>

        {/* Footer for toggling between Log In and Sign Up */}
        <div className="signin-footer">
  <p>
    Don't have an account?{" "}
    <button onClick={() => (window.location.href = "/signup")}>
      Sign Up
    </button>
  </p>
</div>

      </div>
    </div>
  );
};

export default SignIn;
