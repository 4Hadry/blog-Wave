// import React from 'react'

import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

function PostItem({ Postid, thumbnail, category, title, desc, authorID }) {
  const shortDesc = desc.length > 145 ? desc.substr(0, 145) + "..." : desc;
  const postTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;
  return (
    <article className="post">
      <div className="post-thumnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post_content">
        <Link to={`/posts/${Postid}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDesc}</p>
        <div className="post_ftr">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
