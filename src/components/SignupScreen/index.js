import React from "react";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  return (
    <div>
      <h1>Create your PopX account</h1>
      <fieldset>
        <legend>Full Name</legend>
        Marry Doe
      </fieldset>
      <fieldset>
        <legend>Phone Number</legend>
        Marry Doe
      </fieldset>
      <fieldset>
        <legend>Email Adress</legend>
        Marry Doe
      </fieldset>

      <fieldset>
        <legend>Password</legend>
        Marry Doe
      </fieldset>
      <fieldset>
        <legend>Company Name</legend>
        Marry Doe
      </fieldset>
      <p>Are you an Agency?</p>
      <input type="checkbox" />
      <label>Yes</label>
      <input type="checkbox" />
      <label>No</label>
      <Link to="/profile">
        {" "}
        <button>Create Account</button>
      </Link>
    </div>
  );
};

export default SignupScreen;
