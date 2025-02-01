import React, { useState } from "react";
import axios from "axios"; // To make HTTP requests

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Check if the username and password match the admin credentials
    if (username === "asmarinesadmin" && password === "arshad03") {
      
      window.location.href = "/admindashboard"; // Redirect to Admin Dashboard
      return; // Exit the function to prevent further checks
    }

    try {
      // Make an API request to the backend for general user login
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        username: username,
        password: password,
      });

      // If login is successful, store the username and redirect to the home page
      if (response.status === 200) {
        localStorage.setItem("username", username); // Store the username in localStorage
        
        window.location.href = "/"; // Redirect to the home page
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-image"></div>
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
          <button type="button" className="btn1" onClick={handleLogin}>
            Log In
          </button>
        </form>

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

export default SignIn;