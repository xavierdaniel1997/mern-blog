import {useState} from "react";

import "./FullBlog.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faPenToSquare,
  faThumbsUp,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

const FullBlog = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleDropDownClick = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };
  return (
    <div className="full-blog-container">
      <div className="full-blog-avtar-feedback-container">
        <div className="full-blog-avtar-container-date-name">
          <div className="full-blog-avtar-container">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="full-blog-avtar"
            />
          </div>
          <div className="full-blog-name-date-time">
            <span className="avtar-name">John Deo</span>
            <p className="date-time">Dec 4, 2022</p>
          </div>
        </div>
        <div className="feedback-container">
          <span className="feedback-logo">
            <FontAwesomeIcon icon={faThumbsUp} />
          </span>
          <span className="feedback-logo">
            <FontAwesomeIcon icon={faBookmark} />
          </span>
          <span className="feedback-logo" onClick={handleDropDownClick}>
            <FontAwesomeIcon icon={faEllipsis} />
          </span>
          {isDropDownVisible && (
            <div className="dropdown">
              <div className="dropdown-components">
                <div className="dropdown-edit-component">
                  <span>
                    <FontAwesomeIcon className="dropdown-icon" icon={faPenToSquare} />
                  </span>
                  <p className="dropdown-btn-name">Edit</p>
                </div>
                <div className="dropdown-delete-component">
                  <span>
                    <FontAwesomeIcon className="dropdown-icon" icon={faTrashAlt} />
                  </span>
                  <p className="dropdown-btn-name">Delete</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="blog-heading">
        <h2 className="heading">
          6 Python Best Practices that Distinguish Senior Developers from
          Juniors
        </h2>
        <div className="full-blog-image-container">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="full-blog-blog-image"
          />
        </div>
        <div className="blog-desc-container">
          <p>
            Lorem ipsum dolor sit amet consectetur. Magnis morbi suspendisse
            nibh lectus fames ac diam elit ac. Consectetur at convallis nisl
            urna. Quam ac semper placerat volutpat ac. Nisi at euismod laoreet
            pulvinar. Aliquam congue leo eget varius tempor malesuada. Sapien
            sit mauris eros quis. Nulla pellentesque tristique tellus odio.
            Ultricies accumsan tincidunt nulla ullamcorper donec amet
            adipiscing.
          </p>
          <p>
            Vel imperdiet malesuada euismod sit bibendum etiam. In pretium
            senectus tincidunt sodales sit at sollicitudin mattis. Tempor vitae
            quis turpis laoreet mauris massa nisi imperdiet. Mauris cras risus
            nulla turpis eu. Bibendum nisl faucibus lacus lorem facilisi lectus
            massa amet turpis. Sem elit mauris consectetur id dictum nunc
            faucibus.
          </p>
          <p>
            Consequat varius vulputate id elit vel. Turpis sit in volutpat at.
            Accumsan felis convallis sit pretium pharetra ac.mattis lectus quis.
            Consequat facilisis potenti pharetra purus nibh justo viverra magna.
            Risus amet amet ultrices dui adipiscing iaculis. Placerat tincidunt
            facilisi sed suspendisse erat rutrum mauris id integer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
