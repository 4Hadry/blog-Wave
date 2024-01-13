import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        userData
      );
      const user = await response.data;
      setCurrentUser(user);
      navigate("/");
      console.log(user);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form reg_form" onSubmit={loginUser}>
          {error && <p className="form_err-msg">{error}</p>}

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
