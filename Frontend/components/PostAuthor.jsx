// import React from 'react'

import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
// import Avatar from "../mern-blog/avatar1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
const PostAuthor = ({ createdAt, authorID }) => {
  const [author, setAuthor] = useState({});
  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/${authorID}`
        );
        setAuthor(response.data);
        // console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAuthor();
  });
  return (
    <Link to={`posts/users/${authorID}`} className="post_author">
      <div className="post_author-avatar">
        <img src={`http://localhost:4000/uploads/${author?.avatar}`} alt="" />
      </div>
      <div className="post_author-details">
        <h5>By: {author?.name}</h5>
        <small>
          <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
        </small>
      </div>
    </Link>
  );
};

export default PostAuthor;
