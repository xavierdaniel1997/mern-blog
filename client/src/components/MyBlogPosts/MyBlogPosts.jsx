import "./MyBlogPosts.css";

const MyBlogPosts = () => {
  return (
    <div className="myblog-post-wrapper">
        <div className="myblog-post-title-desc-container">
            <h2 className="myblog-post-title">
              Lorem ipsum dolor sollicitudin
            </h2>
            <p className="myblog-post-desc">
            Lorem ipsum dolor sit amet consectetur. Pretium nec ac eget viverra vel tristique eu condimentum. Fermentum ut sed at condimentum amet proin non. Fermentum suspendisse integer scelerisque ut.Fermentum ut sed at fermentum suspendisse integer non...
            </p>
        </div>
        <div className="myblog-post-image-container">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="myblog-post-image" />
        </div>
    </div>
  )
}

export default MyBlogPosts