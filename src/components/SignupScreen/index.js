import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SignupScreen = () => {
  return (
    <div className="signup-screen">
      <div className="signup-form">
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
            <input id="yes" type="radio" checked />
            <label htmlFor="yes">Yes</label>
            <input id="no" type="radio" disabled />
            <label htmlFor="no">No</label>
          </div>
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
