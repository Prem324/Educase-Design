import React from "react";
import ProfileImg from "../../assets/Ellipse 114.png";

const Profile = () => {
  return (
    <nav>
      <h3>Account Settings</h3>
      <div>
        <div>
          <img src={ProfileImg} alt="profile" />
          <div>
            <p>Marry Doe</p>
            <p>Marry@Gmail.com</p>
          </div>
        </div>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </nav>
  );
};

export default Profile;
