import React from "react";

import "./BlogPost.css";
import BlogSinglePost from "../BlogSinglePost/BlogSinglePost";

const BlogPost = () => {
  return (
    <div className="blog-posts-container">
      <BlogSinglePost/>
      <BlogSinglePost/>
      <BlogSinglePost/>
      <BlogSinglePost/>
    </div>
  );
};

export default BlogPost;
