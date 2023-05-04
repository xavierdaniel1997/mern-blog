import {useNavigate} from "react-router-dom";

import "./BlogSinglePost.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faThumbsUp} from "@fortawesome/free-regular-svg-icons";

const BlogSinglePost = () => {

  const navigateFullBlog = useNavigate();
  const goToFullBlog = () => navigateFullBlog("/blogpage")

  return (
    <div className="blog-card-container-wrapper">

      <div className="avtar-bp-avtar-name-blog-date-container">
        <div className="avtar-image-container">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" className="avtar-dp" />
        </div>
        <div className="avtar-name-blog-date-container">
          <span className="avtar-name">John Deo</span>
          <span className="date-time">Nov 29, 2022</span>
        </div>
      </div>

      <div className="blog-title-desc-feedback-image-wrapper">
        <div className="blog-title-desc-container">
          <h2 className="blog-title-heading">
            When we take our first steps into the wonderful
          </h2>
          <p className="blog-desc-para">
            When we take our first steps into the wonderful world of
            programming, we get to see for ourselves what it does for millions
            of people. It’s thanks to programming that the our first steps into
            the wonderful world of programming, we get to see for ourselves what
            it does for millions of people. lives of so many are made <span onClick={goToFullBlog}>....</span>
          </p>
          <div className="blog-feedback-container">
            <div className="blog-topic-container">
             <span className="blog-topic">Technology</span>
            </div>
            <div className="blog-save-like-container">
            <span className="feedback-logo">
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              <span className="feedback-logo"> 
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </div>
          </div>
        </div>
        <div className="blog-image-container">
          <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className="blog-image" />
        </div>
      </div>
      
    </div>
  )
}

export default BlogSinglePost