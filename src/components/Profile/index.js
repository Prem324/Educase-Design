import React from "react";
import ProfileImg from "../../assets/Ellipse 114.png";
import "./index.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <nav>
        <h3>Account Settings</h3>
      </nav>
      <div className="profile-details">
        <div className="profile">
          <img src={ProfileImg} alt="profile" />
          <div>
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.com</p>
          </div>
        </div>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
