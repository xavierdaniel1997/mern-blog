import {useState} from "react";

import "./Write.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-regular-svg-icons";

const Write = () => {
  const [imageSrc, setImageSrc] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="write-form-container-wrapper">
      <form className="write-form-container">
        <div className="title-write-input">
          <input type="text" placeholder="Title" className="write-title" />
        </div>

        <div className="upload-image-write-input-container">
          <label htmlFor="image-upload">
            <FontAwesomeIcon icon={faImage} className="upload-image-icon" />
          </label>
          <input
            type="file"
            id="image-upload"
            onChange={handleImageUpload}
            style={{display: "none"}}
          />
          <input
            type="text"
            placeholder="What is your Blog about ?"
            className="write-blog-about"
          />
        </div>

        <div className="uploaded-image-container">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Uploaded Image"
              className="uploaded-image"
            />
          ) : (
            <img src="" alt="" className="uploaded-image" />
          )}
        </div>

        <textarea
          name=""
          id=""
          cols="70"
          rows="5"
          className="blog-uploading-section"
          placeholder="Tell your story"
        />
        <div className="blog-publish-btn-container">
          <button className="blog-publish-btn">publish</button>
        </div>
      </form>
    </div>
  );
};

export default Write;

/*

import { useState } from "react";

function ImageUploadForm() {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
  };

  return (
    <div>
      <form>
        <label htmlFor="image-upload">Upload an Image</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </form>
      <div className="image-preview">
        {imageUrl && (
          <img src={imageUrl} alt="Uploaded Image" className="uploaded-image" />
        )}
      </div>
    </div>
  );
}

*/
