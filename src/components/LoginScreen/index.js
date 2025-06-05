import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <h1>
        Signin to your
        <br />
        PopX account
      </h1>
      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>
      <fieldset>
        <legend>Email Address</legend>
        <input type="text" placeholder="Enter email address" />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input type="password" placeholder="Enter password" />
      </fieldset>
      <Link to="/profile">
        <button className="login-btn">Login</button>
      </Link>
    </div>
  );
};

export default LoginScreen;
