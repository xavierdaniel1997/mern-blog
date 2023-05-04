import {useState} from "react";

import "./NavtabProfile.css";
import SavedPost from "../SavedPost/SavedPost";
import MyBlogSinglePost from "../MyBlogSinglePost/MyBlogSinglePost";

const NavtabProfile = () => {
  const [activeTab, setActiveTab] = useState("Blog");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navtab-wrapper">
      <h1 className="profile-name">John Deo</h1>
      <div className="profile-tabs-container">
        <div
          className={`tab ${activeTab === "Blog" ? "active" : ""}`}
          onClick={() => handleTabClick("Blog")}
        >
          Blog
        </div>
        <div
          className={`tab ${activeTab === "Saved" ? "active" : ""}`}
          onClick={() => handleTabClick("Saved")}
        >
          Saved
        </div>
        <div
          className={`tab ${activeTab === "Settings" ? "active" : ""}`}
          onClick={() => handleTabClick("Settings")}
        >
          Settings
        </div>
      </div>
      <div className="blog-saved-content-container">
        {/* {activeTab === "Blog" ? <MyBlogPosts/> : <SavedPost/>} */}
        {activeTab === "Blog" ? <MyBlogSinglePost/> : activeTab === "Saved" ? <SavedPost/> : <h1>Settings</h1>}
      </div>
    </div>
  );
};

export default NavtabProfile;
