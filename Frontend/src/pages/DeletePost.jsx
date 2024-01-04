// import React from 'react'

import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function DeletePost() {
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.authToken;
  const navigate = useNavigate();

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return <Link className="btn sm danger">Delete</Link>;
}

export default DeletePost;
