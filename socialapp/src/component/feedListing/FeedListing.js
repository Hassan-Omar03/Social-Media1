import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePost, updateDocId } from '../../store/slices/feedSlice';

export default function FeedListing() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.authSlice.user);
  const feed = useSelector(store => store.feedSlice.feed);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="feed-listing">
      {feed.map(post => (
        <div key={post.id} className="post">
          <img src={post.imageURL} alt="Post" className="post-image" />
          <div className="post-content">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
          </div>
          {post.uid === user.uid && (
            <div className="post-actions">
              <button onClick={() => dispatch(updateDocId(post.id))} className="edit-btn">Edit</button>
              <button onClick={() => dispatch(deletePost(post.id))} className="delete-btn">Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
