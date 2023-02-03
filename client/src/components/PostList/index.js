import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Posts from "../Posts";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POSTS } from "../../utils/actions";

const PostList = () => {
    const [state, dispatch] = useStoreContext();
    const [getPosts, { data, loading }] = useLazyQuery(QUERY_POSTS);

    useEffect(() => {
    if (data && !loading) {
        dispatch({
        type: ADD_POSTS,
        posts: data.posts,
        });
        data.posts.forEach((post) => {
        idbPromise("posts", "put", post);
        });
    } else if (!loading) {
        idbPromise("posts", "get").then((posts) => {
        dispatch({
            type: ADD_POSTS,
            posts: posts,
        });
        });
    }
    }, [data, loading, dispatch]);

    useEffect(() => {
    getPosts();
    }, []);

    return (
    <div className="my-2">
        <h2>Posts</h2>
        {state.posts.length ? (
        <div className="flex-row">
            {state.posts.map((post) => (
            <Posts
                key={post._id}
                _id={post._id}
                username={post.username}
                createdAt={post.createdAt}
                postText={post.postText}
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
