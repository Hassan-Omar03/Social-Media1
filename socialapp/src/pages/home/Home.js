import React from 'react';
import CreatePost from '../../component/createPost/CreatePost';
import FeedListing from '../../component/feedListing/FeedListing';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.authSlice.user);
  
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return (
    <div className="home-container">
      <div className="header">
        <h1>Social App</h1>
        <button onClick={handleLogout} className="logout-btn">Log Out</button>
      </div>
      
      <div className="content">
        <div className="profile-section">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
          <span className="username">{user ? user.name : "Username"}</span>
        </div>
        <CreatePost />
        <FeedListing />
      </div>
    </div>
  );
}
