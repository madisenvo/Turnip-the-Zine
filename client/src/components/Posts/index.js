import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POST, ADD_POST } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "./posts.css";

const Posts = ({ _id, username, postBody, createdAt }) => {
  const [state, dispatch] = useStoreContext();
  const [newUsername, setNewUsername] = useState("");
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    if (state.posts.length) {
      idbPromise("posts", "get", state.posts);
    }
  }, [state.posts]);

  const addPost = () => {
    dispatch({
      type: ADD_POST,
      payload: {
        username: newUsername,
        createdAt: new Date(),
        postBody: newPost,
      },
    });
    idbPromise("posts", "put", {
      username: newUsername,
      createdAt: new Date(),
      postBody: newPost,
    });
    setNewUsername("");
    setNewPost("");
  };

  const updatePost = (_id) => {
    const postIndex = state.posts.findIndex((post) => post._id === _id);
    if (postIndex !== -1) {
      const updatedPost = {
        ...state.posts[postIndex],
        username: newUsername,
        postBody: newPost,
      };
      const updatedPosts = [
        ...state.posts.slice(0, postIndex),
        updatedPost,
        ...state.posts.slice(postIndex + 1),
      ];
      dispatch({
        type: UPDATE_POST,
        posts: updatedPosts,
      });
      idbPromise("posts", "put", updatedPosts);
    }
  };
  

  const removePost = (_id) => {
    const postIndex = state.posts.findIndex((post) => post._id === _id);
    if (postIndex !== -1) {
      const updatedPosts = [
        ...state.posts.slice(0, postIndex),
        ...state.posts.slice(postIndex + 1),
      ];
      dispatch({
        type: REMOVE_POST,
        posts: updatedPosts,
      });
      idbPromise("posts", "put", updatedPosts);
    }
  };
  

  return (
    <div>
      <div className="card px-1 py-1">
        <p className="m-0">
          {username} posted on {createdAt}
        </p>
        <p>{postBody}</p>
        <button onClick={() => updatePost(_id)}>Update this post</button>
        <button onClick={() => removePost(_id)}>Remove this post</button>
      </div>
      <hr />
      <div className="add-post">
        <input
          type="text"
          placeholder="New post"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={addPost}>Add Post</button>
      </div>
    </div>
  );
};

export default Posts;





