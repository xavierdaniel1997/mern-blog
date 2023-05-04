import React from 'react'

import "./SideBar.css";
import SearchBar from '../SearchBar/SearchBar';
import RecommentedTopics from '../RecommentedTopics/RecommentedTopics';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <SearchBar/>
      <RecommentedTopics/>
      <div className="subscriber-container">
        <p className="subscriber-text-title">
          Subscribe to get our monthly newsletter for developers!
        </p>
        <input type="text" placeholder="Email" className="email-subscriber" />
        <button className="subscriber-btn">SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default SideBar