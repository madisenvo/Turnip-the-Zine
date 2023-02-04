import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { ADD_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./thoughts.css";
import { useState } from "react";

export default function Posts() {
  const [textData, setTextData] = useState();
  const { loading, data } = useQuery(QUERY_USER);

  const [addPost] = useMutation(ADD_POST);

  const userData = data?.user || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if(!textData){
    //   return false
    // }

    if (!token) {
      return false;
    }

    try {
      const postObj = {
        postBody: textData,
        username: userData.username,
      };
      const postData = await addPost({
        variables: postObj,
      });

      console.log(postData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="commentContainer">
      <div className="commentDiv">
        <div>
          <div>
            <span>
              <h4>{userData.username}</h4>
            </span>
            {/* <span className="commentTime">10/10/10</span> */}

            <p className="commentText">hi</p>
          </div>
        </div>

        <div>
          <form className="form-block" onSubmit={handleSubmit}>
            <div className="col-xs-12">
              <div className="form-group">
                <textarea
                  className="form-input"
                  required=""
                  placeholder="Your text"
                  onChange={(e) => setTextData(e.target.value)}
                  value={textData}
                ></textarea>
              </div>
            </div>
            <button className="btn pull-right" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
