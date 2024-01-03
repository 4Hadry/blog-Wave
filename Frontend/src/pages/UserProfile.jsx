// import React from 'react'

import { Link } from "react-router-dom";
import Avatar from "../../mern-blog/avatar15.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmPass] = useState("");
  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/qwerr`} className="btn">
          My Posts
        </Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={avatar} alt="" />
            </div>
            {/* form to update Avatar  */}
            <form className="avatar_form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                accept="png,jpg,jpeg"
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
            <button className="profile_avatar-btn">
              <FaCheck />
            </button>
          </div>
          <h1>John Doe</h1>

          {/* form to update user details  */}
          <form className="form profile_form">
            <p className="form_err-msg">This is an error message</p>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Current Password"
              value={currentPass}
              onChange={(e) => setCurrentPass(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm new Password"
              value={confirmNewPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <button type="submit" className="btn primary">
              Update details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
