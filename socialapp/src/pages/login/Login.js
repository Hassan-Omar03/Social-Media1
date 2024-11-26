import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { email, password };
    dispatch(login(user));
  };

  const handleRegister = () => {
    navigate('/signup');
  };

  return (
    <div className="container login-container">
      <h1>Login</h1>
      <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button className="link-button" onClick={handleRegister}>Register</button>
    </div>
  );
}
