// import React from 'react'

import { useState } from "react";
import { DUMMY_POSTS } from "../data";
import PostItem from "../../components/PostItem";

const AuthorsPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="authors_posts">
      {posts.length > 0 ? (
        <div className="container posts_container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              Postid={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No Posts found</h2>
      )}
    </section>
  );
};

export default AuthorsPosts;
