import React from "react";
import ProfileImg from "../../assets/Ellipse 114.png";
import CameraIco from "../../assets/cameraico.png";

import "./index.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <nav>
        <h3>Account Settings</h3>
      </nav>
      <div className="profile-details">
        <div className="profile">
          <div className="profile-image">
            <img className="photo" src={ProfileImg} alt="profile" />
            <img className="camera" src={CameraIco} alt="camera" />
          </div>
          <div>
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.com</p>
          </div>
        </div>
        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
