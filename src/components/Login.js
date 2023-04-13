import { useNavigate } from "react";
import SignUp from "./SignUp";
import "./style.css";
import "animate.css";
const Login = () => {

 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 form login-form">
          <form autocomplete="">
            <h2 className="text-center">Login Form</h2>
            <p className="text-center">Login with your email and password.</p>

            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            {/* <div className="link forget-pass text-left"><a href="forgot-password.php">Forgot password?</a></div> */}
            <div className="form-group">
              <input
                className="form-control button"
                type="submit"
                name="login"
                value="Login"
              />
            </div>
            <div className="link login-link text-center">
              <p>
                Don't have an account?<a href="">Register</a>
              </p>
            </div>
          
              
         
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
