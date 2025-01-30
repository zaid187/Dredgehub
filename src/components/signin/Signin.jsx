import React, { useState } from "react";
import "./signin.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const openDashboard = () => {
    if (username === "asmarinesadmin" && password === "arshad03") {
      window.open("/admindashboard", "_blank");
    } else {
      alert("Invalid username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"} 
              </button>
            </div>
          </div>
          <button
            type="button"
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
