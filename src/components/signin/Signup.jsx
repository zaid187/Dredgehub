import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import "./signup.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://user-credentials-arfa.onrender.com/api/auth/signup", // ✅ Updated API URL
        { username, email, password }
      );

      if (response.status === 201) {
        alert("Account created successfully! Please log in.");
        window.location.href = "/signin"; // Redirect to sign-in page
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
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
          <h2>Sign Up</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}

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
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="form-group">
            <label>Confirm Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{ width: "100%", paddingRight: "40px" }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
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

          <button type="button" className="btn1" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>

        <div className="signin-footer">
          <p>
            Already have an account?{" "}
            <button onClick={() => (window.location.href = "/signin")}>Log In</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
