import React, { useState, useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
    QUERY_POSTS,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
} from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";

const Posts = () => {
    const [state, dispatch] = useStoreContext();
    const [getPosts, { data }] = useLazyQuery(QUERY_POSTS);
    const [addPost, { data: postData }] = useMutation(ADD_POST);
    const [updatePost, { data: updatedPostData }] = useMutation(UPDATE_POST);
    const [deletePost, { data: deletedPostData }] = useMutation(DELETE_POST);
    const [postText, setPostText] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
    getPosts();
    }, []);

    useEffect(() => {
    if (data) {
        dispatch({
        type: "ADD_POST",
        posts: data.posts,
        });
    }
    }, [data]);

    useEffect(() => {console.log(postText)}, [postText]);

    useEffect(() => {console.log(username)}, [username]);

    const handleSubmit = (e) => {
    console.log("submit handled")
    e.preventDefault();
    addPost({
        variables: { postText, username },
        update: (store, { data: { addPost } }) => {
        const data = store.readQuery({ query: QUERY_POSTS });
        store.writeQuery({
            query: QUERY_POSTS,
            data: { posts: [...data.posts, addPost] },
        });
        },
    });
    setPostText("");
    setUsername("");
    };

    const handleUpdate = (e, postId) => {
    e.preventDefault();
    updatePost({
        variables: { postId, postText, username },
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
    setPostText("");
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
    <div>
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
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
        />
        <button type="submit">Post</button>
        </form>
        {state.posts.map((post) => (
        <div key={post._id}>
            <p>
            <b>{post.username}</b> {post.postText}
            </p>
            <button onClick={(e) => handleUpdate(e, post._id)}>Update</button>
            <button onClick={(e) => handleDelete(e, post._id)}>Delete</button>
        </div>
        ))}
    </div>
    );
};

export default Posts;
