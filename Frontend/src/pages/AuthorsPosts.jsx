// import React from 'react'

import { useEffect, useState } from "react";
// import { DUMMY_POSTS } from "../data";
import PostItem from "../../components/PostItem";
import axios from "axios";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";

const AuthorsPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/api/posts/users/${id}`
        );
        setPosts(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [id]);

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

export default AuthorsPosts;
