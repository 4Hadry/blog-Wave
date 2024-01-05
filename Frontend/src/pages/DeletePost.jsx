// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import Loader from "../../components/Loader";

function DeletePost({ postId: id }) {
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const token = currentUser?.authToken;
  const navigate = useNavigate();
  const location = useLocation();

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const removePost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/posts/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status == 200) {
        if (location.pathname == `/myposts/${currentUser.data.user.id}`) {
          navigate(0);
        } else {
          navigate("/");
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Couldn't delete post");
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Link className="btn sm danger" onClick={() => removePost(id)}>
      Delete
    </Link>
  );
}

export default DeletePost;
