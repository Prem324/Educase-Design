import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div>
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <fieldset>
        <legend>Email Adress</legend>
        <input type="text" />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input type="password" />
      </fieldset>
      <Link to="/profile">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default LoginScreen;
