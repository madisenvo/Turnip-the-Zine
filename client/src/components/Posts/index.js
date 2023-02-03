// import React, { useEffect, useState } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
// import { REMOVE_POST, UPDATE_POST, ADD_POST } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";
// import "./posts.css";

// const Posts = ({ _id, username, postBody, createdAt }) => {
//   const [state, dispatch] = useStoreContext();
//   const [newUsername, setNewUsername] = useState("");
//   const [newPost, setNewPost] = useState("");

//   useEffect(() => {
//     if (state.posts.length) {
//       idbPromise("posts", "get", state.posts);
//     }
//   }, [state.posts]);

//   const addPost = () => {
//     dispatch({
//       type: ADD_POST,
//       payload: {
//         username: newUsername,
//         createdAt: new Date(),
//         postBody: newPost,
//       },
//     });
//     idbPromise("posts", "put", {
//       username: newUsername,
//       createdAt: new Date(),
//       postBody: newPost,
//     });
//     setNewUsername("");
//     setNewPost("");
//   };

//   const updatePost = (_id) => {
//     const postIndex = state.posts.findIndex((post) => post._id === _id);
//     if (postIndex !== -1) {
//       const updatedPost = {
//         ...state.posts[postIndex],
//         username: newUsername,
//         postBody: newPost,
//       };
//       const updatedPosts = [
//         ...state.posts.slice(0, postIndex),
//         updatedPost,
//         ...state.posts.slice(postIndex + 1),
//       ];
//       dispatch({
//         type: UPDATE_POST,
//         posts: updatedPosts,
//       });
//       idbPromise("posts", "put", updatedPosts);
//     }
//   };

//   const removePost = (_id) => {
//     const postIndex = state.posts.findIndex((post) => post._id === _id);
//     if (postIndex !== -1) {
//       const updatedPosts = [
//         ...state.posts.slice(0, postIndex),
//         ...state.posts.slice(postIndex + 1),
//       ];
//       dispatch({
//         type: REMOVE_POST,
//         posts: updatedPosts,
//       });
//       idbPromise("posts", "put", updatedPosts);
//     }
//   };

//   return (
//     <div>
//       <div className="card px-1 py-1">
//         <p className="m-0">
//           {username} posted on {createdAt}
//         </p>
//         <p>{postBody}</p>
//         <button onClick={() => updatePost(_id)}>Update this post</button>
//         <button onClick={() => removePost(_id)}>Remove this post</button>
//       </div>
//       <hr />
//       <div className="add-post">
//         <input
//           type="text"
//           placeholder="New post"
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//         />
//         <button onClick={addPost}>Add Post</button>
//       </div>
//     </div>
//   );
// };

// export default Posts;

// import React, { useState, useEffect } from "react";
// import { useLazyQuery, useMutation } from "@apollo/client";
// import { QUERY_POSTS, ADD_POST } from "../../utils/queries";
// import { useStoreContext } from "../../utils/GlobalState";

// const Posts = () => {
//   const [state, dispatch] = useStoreContext();
//   const [getPosts, { data }] = useLazyQuery(QUERY_POSTS);
//   const [addPost, { data: postData }] = useMutation(ADD_POST);
//   const [postText, setPostText] = useState("");
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     getPosts();
//   }, []);

//   useEffect(() => {
//     if (data) {
//       dispatch({
//         type: "SET_POSTS",
//         posts: data.posts,
//       });
//     }
//   }, [data]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addPost({
//       variables: { postText, username },
//       update: (store, { data: { addPost } }) => {
//         const data = store.readQuery({ query: QUERY_POSTS });
//         store.writeQuery({
//           query: QUERY_POSTS,
//           data: { posts: [...data.posts, addPost] },
//         });
//       },
//     });
//     setPostText("");
//     setUsername("");
//   };

//   return (
//     <div>
//       {state.posts.map((post) => (
//         <div key={post._id} className="card px-1 py-1">
//           <p className="m-0">
//             {post.username} posted on {post.createdAt}
//           </p>
//           <p>{post.postBody}</p>
//         </div>
//       ))}
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="New post"
//           value={postText}
//           onChange={(e) => setPostText(e.target.value)}
//         />
//         <button type="submit">Add Post</button>
//       </form>
//     </div>
//   );
// };

// export default Posts;
