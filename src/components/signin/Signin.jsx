import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signin.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin credentials
    if (username === "Admin321" && password === "arshad03") {
      history.push("/admin-dashboard"); // Redirect to admin dashboard
    } 
    // Customer credentials check (mock validation for now)
    else if (username.startsWith("customer") && password.length >= 6) {
      alert("Welcome, Customer! Redirecting to your dashboard...");
      history.push("/customer-dashboard"); // Redirect to customer dashboard (replace as needed)
    } 
    // Invalid credentials
    else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
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
        <button type="submit" className="btn1">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
