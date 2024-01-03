// import React from 'react'

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [isNavShowing, setIsNAvShowing] = useState(
    window.innerWidth > 800 ? true : false
  );
  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNAvShowing(false);
    } else {
      setIsNAvShowing(true);
    }
  };
  return (
    <>
      <nav>
        <div className="container nav_container">
          <Link to="/" className="nav_logo" onClick={closeNavHandler}>
            <h2>
              BLOG <span>WAVE</span>
            </h2>
          </Link>
          {isNavShowing && (
            <ul className="nav_menu">
              <li>
                <Link to="/profile/asss" onClick={closeNavHandler}>
                  Ammar
                </Link>
              </li>
              <li>
                <Link to="/create" onClick={closeNavHandler}>
                  Create Post
                </Link>
              </li>
              <li>
                <Link to="/authors" onClick={closeNavHandler}>
                  Authors
                </Link>
              </li>
              <li>
                <Link to="/logout" onClick={closeNavHandler}>
                  Logout
                </Link>
              </li>
            </ul>
          )}
          <button
            className="nav_toggle-btn"
            onClick={() => setIsNAvShowing(!isNavShowing)}
          >
            {isNavShowing ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
