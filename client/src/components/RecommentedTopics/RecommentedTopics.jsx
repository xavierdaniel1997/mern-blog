import { useState } from "react";

import "./RecommentedTopics.css";

const RecommentedTopics = () => {

  const [showMore, setShowMore] = useState(false);

  const onClickShowMore = () => {
    setShowMore(!showMore)
  }


    const topics = [
      "Technology",
      "Science",
      "Artificial Intelligence",
      "Productivity",
      "Health",
      "Psychology",
      "Sustainability",
      "Entrepreneurship",
      "Design",
      "Programming",
      "Writing",
      "Travel",
      "Food",
      "Culture",
      "Politics",
    ];

  return (
    <div className="topics-container">
        <p className="topics-title">Recommented Topics</p>
        <ul className="recommended-topics-list">
          {topics.slice(0, showMore ? topics.length: 8). map((topic, index) => (
            <li key={index} className="recommended-topics-item">
              <a href="#" className="recommended-topics-link">{topic}</a>
            </li>
          ))}
        </ul>
        {topics.length > 8 && (
          <button className="see-show-more-btn" onClick={onClickShowMore}>
            {showMore ? "See less topics" : "See more topics"}
          </button>
        )}
    </div>
  )
}

export default RecommentedTopics