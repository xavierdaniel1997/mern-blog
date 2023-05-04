import {Fragment, useState} from "react";
import {Link, Outlet} from "react-router-dom";

import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSmallScrMenu, setIsSmallScrIsMenu] = useState(false);
  const handleToggle = () => {
    setIsSmallScrIsMenu(!isSmallScrMenu)
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Journeys
        </Link>
        <div
          className={
            isSmallScrMenu
              ? "nav-links-container-small-scr"
              : "nav-links-container"
          }
          onClick={() => setIsSmallScrIsMenu(false)}
        >
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="write">
            Write
          </Link>
          <Link className="nav-link" to="profile">
            Profile
          </Link>
          <Link className="nav-link" to="login">
            Sign In
          </Link>
          <div className="nav-link-profile-container">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="nav-profile-image"
            />
          </div>
        </div>
        <button
          className="small-screen-menu-btn"
          onClick={handleToggle}
        >
          {isSmallScrMenu ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

