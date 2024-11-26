import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../config/firebase';

export default function Signup() {
  const navigate = useNavigate();
  const user = useSelector(store => store.authSlice.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const handleSignup = () => {
    const newUser = { email, password, name, phone, address, gender, profilePic };
    dispatch(signup(newUser));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const metadata = { contentType: file.type };
    const fileRef = ref(storage, "profilePic/" + file.name);
    await uploadBytes(fileRef, file, metadata);
    const url = await getDownloadURL(fileRef);
    setProfilePic(url);
  };

  return (
    <div className="container signup-container">
      <h1>Signup</h1>
      <input type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Enter username" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Enter phone number" onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} />
      <input type="file" placeholder="Add Profile pic" onChange={uploadImage} />
      <div>
        <label>Male</label>
        <input type="radio" name="gender" value="male" onChange={() => setGender("male")} />
        <label>Female</label>
        <input type="radio" name="gender" value="female" onChange={() => setGender("female")} />
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
