// Maddy is confused SOS
import './posts.css';
import React, { useState, useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { 
    ADD_POST,
    UPDATE_POST,
    DELETE_POST
} from "../../utils/mutations";


import { useStoreContext } from "../../utils/GlobalState";

const Posts = () => {
    const [state, dispatch] = useStoreContext();
    const [getPosts, { data }] = useLazyQuery(QUERY_POSTS);
    const [addPost, { data: postData }] = useMutation(ADD_POST);
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
    }, [data]);

    // making sure inputs work
    useEffect(() => {console.log(postBody)}, [postBody]);
    useEffect(() => {console.log(username)}, [username]);

    const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
        variables: { postBody, username },
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

        // console.log to make sure the submit button works
    console.log("submit handler")
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
            {state.posts.map((post) => (
                <div key={post._id}>
                    <p> 
                        {post.username}
                        <b/> 
                        {post.postBody}
                    </p>
                    <button onClick={(e) => handleUpdate(e, post._id)}>Update</button>
                    <button onClick={(e) => handleDelete(e, post._id)}>Delete</button>
                </div>
            ))}
        </div>
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
    </div>
    );
};

export default Posts;
