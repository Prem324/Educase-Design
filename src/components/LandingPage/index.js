import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to PopX</h1>
      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>
      <Link to="/signup">
        <button className="cre-acc-btn">Create Account</button>
      </Link>
      <Link to="/login">
        <button className="ale-reg-btn">Already Registered? Login</button>
      </Link>
    </div>
  );
};

export default LandingPage;
