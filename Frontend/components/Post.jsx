// import React from 'react'
import { useEffect, useState } from "react";

import PostItem from "./PostItem";
import Loader from "./Loader";
import axios from "axios";
// import { DUMMY_POSTS } from "../src/data";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/api/posts");
        setPosts(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="posts">
        {posts.length > 0 ? (
          <div className="container posts_container">
            {posts.map(
              ({
                _id: id,
                thumbnail,
                category,
                title,
                description,
                creator,
                createdAt,
              }) => (
                <PostItem
                  key={id}
                  Postid={id}
                  thumbnail={thumbnail}
                  category={category}
                  title={title}
                  desc={description}
                  authorID={creator}
                  createdAt={createdAt}
                />
              )
            )}
          </div>
        ) : (
          <h2 className="center">No Posts found</h2>
        )}
      </section>
    </>
  );
};

export default Post;
