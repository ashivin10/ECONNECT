import React, { useState, useCallback } from "react";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="login-section-2">
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""}>LOGIN</li>
        <li className={activeTab === "tab2" ? "active" : ""}>SIGNUP</li>
      </ul>

      <div className="login-box">
        <h3 className="login-detail-head">Login</h3>
        <p className="login-detail-subhead">Welcome to E-Connect</p>
        <p className="login-detail-subhead">
          Enter your details to continue your journey
        </p>
      </div>
      <div className="login-detail-box">
        <input
          type="text"
          placeholder="UserName"
          className="login-username"
          required
        />
        <input
          type="password"
          placeholder="Enter the password"
          className="login-password"
          required
        />
      </div>
      <div className="login-forget-password">
        <a className="text">Forget Password?</a>
      </div>
      <div className="login-button-section">
        <button className="login-button">Log in</button>

        <button className="login-button">Register</button>
      </div>
      <div className="login-text-footer">
        <p>
          Didn't have account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
