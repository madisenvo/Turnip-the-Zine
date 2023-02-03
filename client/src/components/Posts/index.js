import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POSTS, UPDATE_POSTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "./posts.css";

const Posts = ({ _id, username, createdAt }) => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (state.posts.length) {
      idbPromise("posts", "put", state.posts);
    }
  }, [state.posts]);

  const removePost = (_id) => {
    dispatch({
      type: REMOVE_POSTS,
      _id,
    });
    idbPromise("posts", "delete", { _id });
  };

  return (
    <div className="card px-1 py-1">
      <p className="m-0">
        {username} posted on {createdAt}
      </p>
      <button onClick={() => removePost(_id)}>Remove this post</button>
    </div>
  );
};

export default Posts;
