import { QUERY_POSTS, QUERY_USER } from "../../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import "./posts.css";

export default function DisplayPosts(){
    const { loading, data } = useQuery(QUERY_POSTS);
    const postData = data?.posts || []
    return(
        <>
        {postData.map((post, i)=> {
            return (
                <div key={i}>
                <h1>{post.username}</h1>
                <p>{post.postBody}</p>
                </div>
            )
        })}
        </>
    )
}