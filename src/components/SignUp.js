import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
const SignUp = () => {
  const [ldata, setlData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {

		setlData({ ...ldata, [input.name]: input.value });
    console.log(ldata)
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://crowded-sun-hat-toad.cyclic.app/api/users";
			const { data: res } = await axios.post(url, ldata);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 form">
          <form autocomplete="">
            <h2 className="text-center">Register Form</h2>
            <p className="text-center">It's quick and easy.</p>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
							  value={ldata.firstName}
                required
               
              />
              </div>
              <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
							  value={ldata.lastName}
                required
               
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
							  value={ldata.email}
                required
             
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
							  value={ldata.password}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                className="form-control button"
                type="submit"
                name="signup"
                value="Signup"
                onClick={handleSubmit}
              />
              {error && <div className='error_msg'>{error}</div>}

            </div>
            <div className="link login-link text-center">
              <p>Already a member?<a href="/login">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
