import React, { useState } from "react";
import axios from "axios"; // To make HTTP requests

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (username === "asmarinesadmin" && password === "arshad03") {
      window.location.href = "/admindashboard"; // Redirect to Admin Dashboard
      return;
    }

    try {
      const response = await axios.post(
        "https://user-credentials-arfa.onrender.com/api/auth/login", // Updated URL
        { username, password }
      );

      if (response.status === 200) {
        localStorage.setItem("username", username);
        window.location.href = "/";
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", paddingRight: "40px" }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#7AB2D3",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
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

export default SignIn;
