import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SignupScreen = () => {
  return (
    <div className="signup-screen">
      <h1>
        Create your
        <br />
        PopX account
      </h1>
      <fieldset>
        <legend>
          Full Name<span className="required">*</span>
        </legend>
        <input type="text" placeholder="Marry Doe" />
      </fieldset>
      <fieldset>
        <legend>
          Phone number<span className="required">*</span>
        </legend>
        <input type="text" placeholder="Marry Doe" />
      </fieldset>
      <fieldset>
        <legend>
          Email address<span className="required">*</span>
        </legend>
        <input type="text" placeholder="Marry Doe" />
      </fieldset>

      <fieldset>
        <legend>
          Password<span className="required">*</span>
        </legend>
        <input type="text" placeholder="Marry Doe" />
      </fieldset>
      <fieldset>
        <legend>Company name</legend>
        <input type="text" placeholder="Marry Doe" />
      </fieldset>
      <div className="checkbox-container">
        <p>
          Are you an Agency?<span className="required">*</span>
        </p>
        <div>
          <input type="checkbox" checked />
          <label>Yes</label>
          <input type="checkbox" />
          <label>No</label>
        </div>
      </div>

      <Link to="/profile">
        {" "}
        <button className="cre-acc-btn">Create Account</button>
      </Link>
    </div>
  );
};

export default SignupScreen;
