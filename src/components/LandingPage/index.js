import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to="/signup">
        <button>Create Account</button>
      </Link>
      <Link to="/login">
        <button>Already Registered? Login</button>
      </Link>
    </div>
  );
};

export default LandingPage;
