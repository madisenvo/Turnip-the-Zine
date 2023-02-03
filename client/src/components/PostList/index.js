import React, { useState, useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { ADD_POST } from "../../utils/actions";
import Posts from "../Posts";
import { useStoreContext } from "../../utils/GlobalState";

const PostList = () => {
    const [state, dispatch] = useStoreContext();
    const [getPosts] = useLazyQuery(QUERY_POSTS);
    const [addPost] = useMutation(ADD_POST);
    const [newPost, setNewPost] = useState({
    postBody: ""
    });

    const handleChange = e => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
    e.preventDefault();
    try {
        const response = await addPost({ variables: { ...newPost } });
        dispatch({
        type: "ADD_POST",
        post: response.data.addPost
        });
    } catch (error) {
        console.error(error);
    }
    };

    useEffect(() => {
    getPosts();
    }, []);

    return (
    <div className="my-2">
        <h2>Posts</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="postBody"
            value={newPost.postBody}
            onChange={handleChange}
        />
        <button type="submit">Add Post</button>
        </form>
        {state.posts.length ? (
        <div className="flex-row">
            {state.posts.map((post) => (
            <Posts
                key={post._id}
                _id={post._id}
                username={post.username}
                createdAt={post.createdAt}
                postBody={post.postBody}
            />
            ))}
        </div>
        ) : (
        <h3>You haven't added any posts yet!</h3>
        )}
    </div>
    );
};

export default PostList;