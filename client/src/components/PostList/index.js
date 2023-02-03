import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Posts from "../Posts";
import { useStoreContext } from "../../utils/GlobalState";

const PostList = () => {
    const [state] = useStoreContext();
    const [getPosts] = useLazyQuery(QUERY_POSTS);

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
                postBody={post.postText}
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
