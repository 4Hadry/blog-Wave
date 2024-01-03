import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form reg_form">
          <p className="form_err-msg">This is an error Massage</p>

          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Create an account? <Link to="/register">sign Up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
