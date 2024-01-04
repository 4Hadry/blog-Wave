// import React from 'react'

import { Link, useParams } from "react-router-dom";
import PostAuthor from "../../components/PostAuthor";
// import Thumbnail from "../../mern-blog/blog23.jpg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import DeletePost from "./DeletePost";
import Loader from "../../components/Loader";
import axios from "axios";
const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  // const [cratorID, setCreatorID] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/api/posts/${id}`
        );
        setPost(response.data);
        // setCreatorID(response.data.creator);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="post-detail">
      {error && <p className="form_err-msg">{error}</p>}
      {post && (
        <div className="container post-detail_container">
          <div className="post-detail_header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.data.user.id == post?.creator && (
              <div className="post-detail_btns">
                <Link
                  to={`/posts/${post?._id}/edit`}
                  className="btn sm primary"
                >
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post-detail_thumbnail">
            <img
              src={`http://localhost:4000/uploads/${post.thumbnail}`}
              alt=""
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
};

export default PostDetails;
