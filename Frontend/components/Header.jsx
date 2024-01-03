// import React from 'react'

import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  return (
    <>
      <nav>
        <div className="container nav_container">
          <Link to="/" className="nav_logo">
            <h2>
              BLOG <span>WAVE</span>
            </h2>
          </Link>
          <ul className="nav_menu">
            <li>
              <Link to="/profile/asss">Ammar</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
          <button className="nav_toggle-btn">
            <AiOutlineClose />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
