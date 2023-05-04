import React from "react";

import "./BannerSection.css";
import BannerImage from "../../assets/bgimage.jpg";

const BannerSection = () => {
  return (
    <div className="banner-container">
      <div className="banner-image-container">
        <img src={BannerImage} alt="" className="banner-image" />
      </div>
      <div className="banner-title-container">
        <h1 className="title-heading">Lorem ipsum consectetur.</h1>
        <p className="title-subtitle">
          A Journey of Learning, Growth, and Discovery.
        </p>
        <div className="title-btn-container">
        <button className="title-btn">Start Reading</button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
