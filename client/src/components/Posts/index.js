import "./posts.css";
import React, { useState, useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { ADD_POST, UPDATE_POST, DELETE_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";


const Posts = () => {
  const [state, dispatch] = useStoreContext();
  const [getPosts, { data }] = useLazyQuery(QUERY_POSTS);
  // const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  const [addPost] = useMutation(ADD_POST);
  const [updatePost, { data: updatedPostData }] = useMutation(UPDATE_POST);
  const [deletePost, { data: deletedPostData }] = useMutation(DELETE_POST);
  const [postBody, setPostBody] = useState("");
  const [username, setUsername] = useState(Auth.getProfile().data.username);
  const [editing, setEditing] = useState(null);
  const [updatePostBody, setUpdatePostBody] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({
        type: "ADD_POST",
        posts: data.posts,
      });
    }
    // console.log(data);
  }, [data]);

  const handleSubmit = async (e) => {
    console.log( Auth.getProfile().data.username);;
    e.preventDefault();
    try {
      const postObj = {
        postBody: postBody,
        username: Auth.getProfile().data.username
      };
console.log(postObj);
      const { data } = await addPost({
        variables: postObj,
        update: (store, { data: { addPost } }) => {
          const data = store.readQuery({ query: QUERY_POSTS });
          store.writeQuery({
            query: QUERY_POSTS,
            data: { posts: [...data.posts, addPost] },
          });
        },
      });
      

      setPostBody("");
      setUsername("");
      // doesnt catch error here
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = (e, postId, postBody) => {
    e.preventDefault();
    setEditing({ postId, postBody });
    setUpdatePostBody(postBody);
  };

  const handleUpdateSubmit = (e, postId) => {
    e.preventDefault();
    console.log("POST ID" + " " + postId);
    updatePost({
      variables: { id: postId, postBody: updatePostBody },
      update: (store, { data: { updatePost } }) => {
        const data = store.readQuery({ query: QUERY_POSTS });
        const updatedPost = { ...updatePost, username: data.posts.find(post => post._id === postId).username };
        store.writeQuery({
          query: QUERY_POSTS,
          data: {
            posts: data.posts.map((post) =>
              post._id === postId ? updatedPost : post
            ),
          },
        });
      },
    });
    setUpdatePostBody("");
    setEditing(null);
  };

  const handleDelete = (e, postId) => {
    e.preventDefault();
    console.log("POST ID" + " " + postId);
    deletePost({
      variables: { id: postId },
      update: (store, { data: { deletePost } }) => {
        const data = store.readQuery({ query: QUERY_POSTS });
        store.writeQuery({
          query: QUERY_POSTS,
          data: {
            posts: data.posts.filter((post) => post._id !== postId),
          },
        });
      },
    });
  };

  return (
    <div className="posts">
    <div className="postContainer">
      {posts.map((post) => {
        const showButtons = Auth.getProfile().data.username === post.username;
        return (
          <div className="postDiv" key={post._id}>
            <div className="commentText">
              <h5>{post.username}</h5>
              {editing && editing.postId === post._id ? (
                <form onSubmit={(e) => handleUpdateSubmit(e, post._id)}>
                  <input
                    type="text"
                    value={updatePostBody}
                    onChange={(e) => setUpdatePostBody(e.target.value)}
                  />
                  <button type="submit">Save</button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setEditing(null);
                    }}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                post.postBody
              )}
            </div>
            {showButtons && (
              <>
                <button onClick={(e) => handleUpdate(e, post._id, post.postBody, post.username)}>
                  Update
                </button>
                <button onClick={(e) => handleDelete(e, post._id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
    {Auth.loggedIn() ? (
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          value={Auth.getProfile().username}
        />
        <input
          type="text"
          placeholder="Post"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    ) : (
      <p>You need to be logged in to post</p>
    )}
  </div>
  );
};

export default Posts;
