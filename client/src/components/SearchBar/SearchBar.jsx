import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="search-form">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
