
import Login from "./Login";
import './style.css'
const SignUp = () => {
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
                name="name"
                placeholder="First Name"
                required
               
              />
              </div>
              <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Last Name"
                required
               
              />
            </div>
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
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="cpassword"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control button"
                type="submit"
                name="signup"
                value="Signup"
              />
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
