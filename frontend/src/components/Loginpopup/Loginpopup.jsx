import { useContext, useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../../context/Storecontext";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Loginpopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(Storecontext);

  const [currstate, setcurrstate] = useState("Login");
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currstate === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-Container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currstate === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currstate === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I,Agree terms of use & privacy policy.</p>
        </div>
        {currstate === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrstate("Login")}>Login Here</span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrstate("Sign Up")}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;