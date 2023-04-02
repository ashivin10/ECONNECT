import React, { useState} from "react";

const Login = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="login">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          LOGIN
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          REGISTER
        </button>
      </div>
      <div className="login-container">
        <div className="login-text">
          <h1 className="login-text-pic">
            Join now to have some real learning.{" "}
          </h1>
          <p className="login-text-pic">
            Explore your interest,Expand the network.
          </p>
        </div>

        <img
          src="https://i.pinimg.com/564x/b1/8e/75/b18e754efa81155521ef65e752373de1.jpg"
          alt="side_pic"
        />
      </div>

      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <div className="login-section-2">
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
          </div>
        </div>
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <div className="login-section-2">
          <div className="login-box">
            <h3 className="login-detail-head">
              Register now to become a member
            </h3>
            <p className="login-detail-subhead">Welcome to E-Connect!!</p>
            <p className="login-detail-subhead">
              Enter your details to start your journey
            </p>
          </div>
          <div className="login-detail-box">
            <input
              type="text"
              placeholder="FirstName"
              className="login-username"
              required
            />
            <input
              type="text"
              placeholder="LastName"
              className="login-username"
              required
            />
            <input
              type="email"
              placeholder="email"
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

          <div className="login-button-section">
            <button className="login-button">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
