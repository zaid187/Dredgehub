import React, { useState } from "react";
import "./signup.css"; // Reuse the same CSS for styling

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Placeholder for sign-up logic
    alert(`Account created for ${username}`);
    window.location.href = "/Signin"; // Redirect to the sign-in page after successful sign-up
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
          <button
            type="button"
            className="btn1"
            onClick={handleSignUp}
          >
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

export default SignUp;