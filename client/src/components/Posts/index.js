// import { useMutation, useQuery } from "@apollo/client";
// import { QUERY_USER } from "../../utils/queries";
// import { ADD_POST } from "../../utils/mutations";
// import Auth from "../../utils/auth";
// import "./thoughts.css";
// import { useState } from "react";

// export default function Posts() {
//   const [textData, setTextData] = useState();
//   const { loading, data } = useQuery(QUERY_USER);

//   const [addPost] = useMutation(ADD_POST);

//   const userData = data?.user || {};

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     // if(!textData){
//     //   return false
//     // }

//     if (!token) {
//       return false;
//     }

//     try {
//       const postObj = {
//         postBody: textData,
//         username: userData.username,
//       };
//       const postData = await addPost({
//         variables: postObj,
//       });

//       console.log(postData);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="commentContainer">
//       <div className="commentDiv">
//         <div>
//           <div>
//             <span>
//               <h4>{userData.username}</h4>
//             </span>
//             {/* <span className="commentTime">10/10/10</span> */}

//             <p className="commentText">hi</p>
//           </div>
//         </div>

//         <div>
//           <form className="form-block" onSubmit={handleSubmit}>
//             <div className="col-xs-12">
//               <div className="form-group">
//                 <textarea
//                   className="form-input"
//                   required=""
//                   placeholder="Your text"
//                   onChange={(e) => setTextData(e.target.value)}
//                   value={textData}
//                 ></textarea>
//               </div>
//             </div>
//             <button className="btn pull-right" type="submit">
//               submit
//             </button>
//           </form>
//         </div>
//       </div>
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
  const [username, setUsername] = useState("");

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
    e.preventDefault();
    try {
      const postObj = {
        postBody: postBody,
        username: username,
      };


       const {data} = await addPost({
        variables: postObj,
        update: (store, { data: { addPost } }) => {
          const data = store.readQuery({ query: QUERY_POSTS });
          store.writeQuery({
            query: QUERY_POSTS,
            data: { posts: [...data.posts, addPost] },
          });
            },
          });
      console.log(data);

      setPostBody("");
      setUsername("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = (e, postId) => {
    e.preventDefault();
    updatePost({
      variables: { postBody, username },
      update: (store, { data: { updatePost } }) => {
        const data = store.readQuery({ query: QUERY_POSTS });
        store.writeQuery({
          query: QUERY_POSTS,
          data: {
            posts: data.posts.map((post) =>
              post._id === postId ? updatePost : post
            ),
          },
        });
      },
    });
    setPostBody("");
    setUsername("");
  };

  const handleDelete = (e, postId) => {
    e.preventDefault();
    deletePost({
      variables: { postId },
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
        {posts.map((post) => (
          <div className="postDiv" key={post._id}>
            <p className="commentText">
              {post.username}
              <b />
              {post.postBody}
            </p>
            <button onClick={(e) => handleUpdate(e, post._id)}>Update</button>
            <button onClick={(e) => handleDelete(e, post._id)}>Delete</button>
          </div>
        ))}
      </div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
