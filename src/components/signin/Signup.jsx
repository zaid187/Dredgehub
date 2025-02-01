import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import "./signup.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
<<<<<<< HEAD
  const [error, setError] = useState("");
=======
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
>>>>>>> 7b3659392253623218b5c8970e8540e14ea0d5cf

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/auth/signup", {
        username,
        email,
        password,
        confirmPassword,
      });

      if (response.status === 201) {
        alert("Account created successfully! Please log in.");
        window.location.href = "/signin"; // Redirect to the sign-in page
      }
    } catch (err) {
      console.error("Error during signup:", err);
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state
  };

  return (
    <div className="signin-container">
      {/* Left section for the image */}
      <div className="signin-image"></div>

      {/* Right section for the form */}
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
                type={showPassword ? "text" : "password"} // Toggle input type
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
          <div className="form-group">
            <label>Confirm Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
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
          <button type="button" className="btn1" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>

        {/* Footer for toggling between Sign Up and Log In */}
        <div className="signin-footer">
          <p>
            Already have an account?{" "}
            <button onClick={() => (window.location.href = "/signin")}>
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SignUp;
=======
export default SignUp;
>>>>>>> 7b3659392253623218b5c8970e8540e14ea0d5cf
