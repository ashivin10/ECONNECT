import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import SignUp from "./SignUp";
import axios from "axios";
import "./style.css";
import "animate.css";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
    console.log(data)
	}

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
      localStorage.setItem("user", res.user);

			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	}
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
                onChange={handleChange}
							  value={data.email}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
							  value={data.password}
                placeholder="Password"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                className="form-control button"
                type="submit"
                name="login"
                value="Login"
                onClick={handleSubmit}
              />
            </div>
            <div className="link login-link text-center">
              <p>Don't have an account?
                <a href="/signup">Register</a>
                </p>
            </div>
            {error && <div className='error_msg'>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
