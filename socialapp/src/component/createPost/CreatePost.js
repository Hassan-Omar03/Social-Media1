import React, { useEffect, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../config/firebase';
import * as yup from 'yup';
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../store/slices/feedSlice';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(store => store.authSlice.user);

  const createPostHandler = async () => {
    let postData = {
      uid: user.uid,
      title,
      description,
      imageURL,
    };

    if (!title || !description) {
      setError("Please fill all fields");
      return;
    }

    try {
      const schema = yup.object().shape({
        title: yup.string().min(4).max(18).required(),
        description: yup.string().min(5).required(),
      });
      await schema.validate(postData);
      setError('');
      dispatch(createPost({ ...postData, file, setLoading }));
    } catch (validationError) {
      setError(validationError.message);
    }
  };

  return (
    <div className="create-post">
      <h2>Create Post</h2>
      {error && <p className="error">{error}</p>}
      <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="input" />
      <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="textarea" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="file-input" />
      <Button title="Post" onClickHandler={createPostHandler} />
    </div>
  );
}
