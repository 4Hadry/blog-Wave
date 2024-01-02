// import React from 'react'

import { Link } from "react-router-dom";
import Avatar from "../mern-blog/avatar1.jpg";
const PostAuthor = () => {
  return (
    <Link to={`posts/users/ssrrff`} className="post_author">
      <div className="post_author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post_author-details">
        <h5>By: John Doe</h5>
        <small>just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
