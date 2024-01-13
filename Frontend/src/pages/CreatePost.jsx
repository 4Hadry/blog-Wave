// import React from 'react'

import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCtegory] = useState("Uncategorized");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.authToken;
  const navigate = useNavigate();

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const createPost = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.set("title", title);
    postData.set("category", category);
    postData.set("description", desc);
    postData.set("thumbnail", thumbnail);

    try {
      const response = await axios.post(
        `http://localhost:4000/api/posts`,
        postData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status == 201) {
        return navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response);
    }
  };

  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Uncategorized",
    "Weather",
  ];
  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        {error && <p className="form_err-msg">{error}</p>}
        <form className="form create-post_form" onSubmit={createPost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            id=""
            value={category}
            onChange={(e) => setCtegory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={desc}
            onChange={setDesc}
          />
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="png,jpg,jpeg"
          />
          <button type="submit" className="btn primary">
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
