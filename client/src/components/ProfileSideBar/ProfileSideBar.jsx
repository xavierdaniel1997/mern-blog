import {useState} from "react";

import "./ProfileSideBar.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";

const ProfileSideBar = () => {
  const [profileImageSrc, setProfileImageSrc] = useState("");

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImageSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-sidebar-wrapper">
      <div className="profile-image-inputs-btn-wrapper">
        <div className="profile-image-upload-container">
          <input
            type="file"
            id="profile-image-upload"
            onChange={handleProfileImageUpload}
            style={{display: "none"}}
          />
          <div className="upload-display-profile-image">
            {profileImageSrc ? (
              <img src={profileImageSrc} alt="" className="profile-image" />
            ) : (
              <label htmlFor="profile-image-upload">
                <FontAwesomeIcon
                  icon={faUser}
                  className="upload-profile-image-icon"
                />
              </label>
            )}
          </div>
          <span className="edit-profile">Edit Profile</span>
          <div className="input-profile-detials">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Name" />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Your Email" />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="change password" />
          </div>
          <div className="profile-saving-btn">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
