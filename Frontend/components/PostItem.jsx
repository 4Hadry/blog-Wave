// import React from 'react'

import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  Postid,
  thumbnail,
  category,
  title,
  desc,
  authorID,
  createdAt,
}) => {
  const shortDesc = desc.length > 145 ? desc.substr(0, 145) + "..." : desc;
  const postTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;
  return (
    <article className="post">
      <div className="post-thumnail">
        <img src={`http://localhost:4000/uploads/${thumbnail}`} alt={title} />
      </div>
      <div className="post_content">
        <Link to={`/posts/${Postid}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p dangerouslySetInnerHTML={{ __html: shortDesc }} />
        <div className="post_ftr">
          <PostAuthor authorID={authorID} createdAt={createdAt} />
          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
