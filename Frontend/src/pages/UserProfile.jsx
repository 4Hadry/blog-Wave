// import React from 'react'

import { Link, useNavigate } from "react-router-dom";
// import Avatar from "../../mern-blog/avatar15.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmPass] = useState("");
  const [isAvatarToched, setIsAvatarToched] = useState(false);

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.authToken;
  const navigate = useNavigate();

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const updateUserDetail = async (e) => {
    e.preventDefault();
    try {
      const userData = new FormData();
      userData.set("name", name);
      userData.set("email", email);
      userData.set("currentPassword", currentPass);
      userData.set("newPassword", newPass);
      userData.set("newConfirmPassword", confirmNewPass);
      const response = await axios.patch(
        `http://localhost:4000/api/users/edit-user`,
        userData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status == 200) {
        navigate("/logout");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/users/${currentUser.data.user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const { name, email, avatar } = response.data;
      setName(name);
      setEmail(email);
      setAvatar(avatar);
    };
    getUser();
  }, []);

  const changeAvatar = async () => {
    setIsAvatarToched(false);
    try {
      const postData = new FormData();
      postData.set("avatar", avatar);
      const response = await axios.post(
        `http://localhost:4000/api/users/change-avatar`,
        postData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAvatar(response?.data.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/${currentUser.data.user.id}`} className="btn">
          My Posts
        </Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={`http://localhost:4000/uploads/${avatar}`} alt="" />
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
              <label htmlFor="avatar" onClick={() => setIsAvatarToched(true)}>
                <FaEdit />
              </label>
            </form>
            {isAvatarToched && (
              <button className="profile_avatar-btn" onClick={changeAvatar}>
                <FaCheck />
              </button>
            )}
          </div>
          <h1>{currentUser.data.user.name}</h1>

          {/* form to update user details  */}
          <form className="form profile_form" onSubmit={updateUserDetail}>
            {error && <p className="form_err-msg">{error}</p>}
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
